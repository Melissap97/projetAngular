import { HttpService } from './../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 products = new Array<any>();
 productName = {
  name: '',
 };

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

  productSubmit() {
    
    let authBody= {"username":"admin","password":"pwd"}
  
    this.httpService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)
  
      this.httpService.addProduct(this.productName).subscribe(
        response => {
          console.log('Success:', response);
          this.productName = response;
        },
      );
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

