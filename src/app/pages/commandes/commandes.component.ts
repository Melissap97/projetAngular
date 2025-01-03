import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {

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
