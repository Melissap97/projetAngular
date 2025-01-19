import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
   constructor(private httpService: HttpService,  private navbar:NavbarService) {}

   afficherNav() {
  this.navbar.afficherToggle()
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


