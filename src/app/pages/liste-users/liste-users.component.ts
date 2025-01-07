import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css'],
  imports: [CommonModule],
})
export class ListeUsersComponent  {
  users = new Array<any>();
  
    constructor(private httpService: HttpService) { }
  
    ngOnInit(){
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.table(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.getUsers().subscribe(value => {
          console.table(value);
          this.users = value;
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
