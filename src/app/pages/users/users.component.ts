import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

   users = new Array<any>();
   userInfo = {
    id: '',
    username:'',
    role: '',
    password: ''
   };
   role: any
  
    // ngOnInit(){
    //   let authBody= {"username":"admin","password":"pwd"}
    //   this.role = localStorage.getItem("role")
    constructor (private httpService: HttpService, private navbar: NavbarService) { }
  
    ngOnInit() {
      let authBody = { "username": "admin", "password": "pwd" };

    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value);
        localStorage.setItem("token", value.token);
    
        this.httpService.getUsers().subscribe(value => {
          if (authBody.username !== "admin") {
            console.log("Admins only");
          } else {
            console.table(value);
            this.users = value;
          }
        });
      });
    }

    afficherNav() {
      this.navbar.afficherToggle()
    }
  
    userSubmit() {
      
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.addUsers(this.userInfo).subscribe(
          response => {
            this.userInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }
  
    userModify() {
      
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.modifyUsers(this.userInfo).subscribe(
          response => {
            this.userInfo = response; 
            window.location.reload();
          }
        );
        
      });
  
    }
  
    
  
    userDelete() {
      let authBody= {"username":"admin","password":"pwd"}
    
      this.httpService.login(authBody).subscribe(value => {
        console.log(value)
        localStorage.setItem("token", value.token)
    
        this.httpService.deleteUsers(this.userInfo).subscribe(
          response => {
            this.userInfo = response; 
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
