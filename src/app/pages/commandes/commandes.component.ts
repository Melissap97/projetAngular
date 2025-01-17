import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css'],
  imports: [CommonModule, FormsModule],
})
export class CommandesComponent {
  orders = new Array<any>();
  orderInfo = {
    id: '',
    productId:'',
    quantity: '',
    userId: '',
    createdAt: ''
   };
  
    constructor(private httpService: HttpService, private navbar:NavbarService) { }
  
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

    afficherNav() {
      this.navbar.afficherToggle()
    }

    orderSubmit() {
    
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.addOrders(this.orderInfo).subscribe(
          response => {
            this.orderInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }

    orderModify() {
    
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.modifyOrders(this.orderInfo).subscribe(
          response => {
            this.orderInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }
    
    orderDelete() {
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.deleteOrders(this.orderInfo).subscribe(
          response => {
            this.orderInfo = response; 
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
  }

  pageAccueil() {
    this.router.navigate(['/accueil']);
  }
 

}
