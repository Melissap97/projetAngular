import { HttpService } from './../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 products = new Array<any>();
 productInfo = {
  name: '',
  stock:'',
  id: ''
 };
 modifyProductInfo = {
  name: '',
  stock:'',
  id: ''
 };


  constructor(private httpService: HttpService, private navbar: NavbarService) { }

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

  afficherNav() {
  this.navbar.afficherToggle()
}

  productSubmit() {
    
    let authBody= {"username":"admin","password":"pwd"}
  
    this.httpService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)
  
      this.httpService.addProducts(this.productInfo).subscribe(
        response => {
          this.productInfo = response; 
          window.location.reload();
        }
      );
      
    });

  }

  productModify() {
    
    let authBody= {"username":"admin","password":"pwd"}
  
    this.httpService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)
  
      this.httpService.modifyProducts(this.modifyProductInfo).subscribe(
        response => {
          this.productInfo = response; 
          window.location.reload();
        }
      );
      
    });

  }

  

  productDelete() {
    let authBody= {"username":"admin","password":"pwd"}
  
    this.httpService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)
  
      this.httpService.deleteProducts(this.productInfo).subscribe(
        response => {
          this.productInfo = response; 
          window.location.reload();
        }
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

pageClients() {
  this.router.navigate(['/clients']);
}

pageUsers() {
  this.router.navigate(['/users']);
}
pageConnexion() {
  this.router.navigate(['/connexion']);
  this.httpService.deleteToken()
}

pageAccueil() {
  this.router.navigate(['/accueil']);
}


}

