import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css'],
  imports: [CommonModule],
})
export class CommandesComponent {
  orders = new Array<any>();
  
    constructor(private httpService: HttpService) { }
  
    ngOnInit(){
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.table(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.getOrders().subscribe(value => {
          console.table(value);
          this.orders = value;
        })
    
      });
    }

  
  private router = inject(Router);
  
  
   pageProduits() {
    this.router.navigate(['/produits']);
  }
  
  pageCommandes() {
    this.router.navigate(['/commandes']);
  }
  
  pageUsers() {
    this.router.navigate(['/users']);
  }

}
