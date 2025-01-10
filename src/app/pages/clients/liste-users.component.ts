import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ListeUsersComponent  {
  customers = new Array<any>();
  customerInfo = {
    id: '',
    name:'',
    email: '',
    phone: '',
    address: ''
   };

  
    constructor(private httpService: HttpService) { }
  
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
    
        this.httpService.modifyCustomers(this.customerInfo).subscribe(
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
    
        this.httpService.deleteCustomers(this.customerInfo).subscribe(
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
  
  pageUsers() {
    this.router.navigate(['/clients']);
  }
 

}
