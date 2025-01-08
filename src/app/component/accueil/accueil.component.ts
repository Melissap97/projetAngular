import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientsService } from '../../services/api-clients.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


@Component({
  selector: 'app-accueil',
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  //  posts: any[] = [];
  // constructor(private apiClient: ApiClientsService) { }

  // ngOnInit(): void {
  //   this.apiClient.getAccueil().subscribe((data) => {
  //     this.posts = data;
  //   });
  // }

products = new Array<any>();
users = new Array<any>();
    
  constructor(private httpTestService:ApiClientsService){}

ngOnInit(){
  let authBody= {"username":"admin","password":"pwd"}

  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
    localStorage.setItem("token", value.token)

    this.httpTestService.getProducts().subscribe(value => {
      console.table(value)
     this.products = value;
    })

  });
  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
    localStorage.setItem("token", value.token)

    this.httpTestService.getUsers().subscribe(value => {
      console.table(value)
     this.users = value;
    })
  })
}
  
    private router = inject(Router);
  
    pageConnexion () {
    this.router.navigate(["/connexion"]); 
  }

  
  
}
