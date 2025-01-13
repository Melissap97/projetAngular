import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

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


