import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 products = new Array<any>();

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    let authBody= {"username":"admin","password":"pwd"}
  
    this.httpService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)
  
      this.httpService.getProducts().subscribe(value => {
        console.table(value);
        this.products = value;
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

