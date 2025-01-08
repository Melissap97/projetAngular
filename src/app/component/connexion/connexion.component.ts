import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiClientsService } from '../../services/api-clients.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  products = new Array<any>();
    
  constructor(private httpTestService:ApiClientsService){}

ngOnInit(){
  let authBody= {"username":"admin","password":"pwd"}

  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
    localStorage.setItem("token", value.token)

    this.httpTestService.getPosts().subscribe(value => {
      console.log(value)
      this.products = value;
    })
    
  });
  
}

  private router = inject(Router);

  pageAccueil() {
  this.router.navigate(["/accueil"]); 

  
} 


}
