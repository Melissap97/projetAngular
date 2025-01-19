import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ClientsComponent  {
  customers = new Array<any>();
  customerInfo = {
    id: '',
    name:'',
    email: '',
    phone: '',
    address: ''
   };
   modifyCustomerInfo = {
    id: '',
    name:'',
    email: '',
    phone: '',
    address: ''
   };
   deleteCustomerInfo = {
    id: '',
    name:'',
    email: '',
    phone: '',
    address: ''
   };

  
    constructor(private httpService: HttpService, private navbar:NavbarService) { }
  
    ngOnInit(){
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.table(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.getCustomers().subscribe(value => {
          console.table(value);
          this.customers = value;
        })
    
      });
    }

  afficherNav() {
    this.navbar.afficherToggle()
  }

    customerSubmit() {
    
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.addCustomers(this.customerInfo).subscribe(
          response => {
            this.customerInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }
  
    customerModify() {
      
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.modifyCustomers(this.modifyCustomerInfo).subscribe(
          response => {
            this.customerInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }
  
    
  
    customerDelete() {
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.deleteCustomers(this.deleteCustomerInfo).subscribe(
          response => {
            this.customerInfo = response; 
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
