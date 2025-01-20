import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../services/navbar.service';
import { ApiClientsService } from '../../services/api-clients.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { forkJoin } from 'rxjs';




@Component({
  selector: 'app-accueil',
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

//Création des tableaux. Orders sera pour les commandes, customers pour les clients et products pour les produits. Tout est stocké dans des tableaux
orders = new Array<any>();
customers = new Array<any>();
products = new Array<any>()
customerOrders = new Array<any>();
productsOrders = new Array<any>()
    
//Reprise des services, pour l'api et la navbar
constructor(private httpTestService:ApiClientsService, private navbar:NavbarService){}

ngOnInit(){
  forkJoin({
    //ForkJoin sert à comparer et à combiner les résultats de deux api différentes.
    //Dans ce contexte, nous souhaitons combiner l'userId de order et l'id de customer.
    orders: this.httpTestService.getOrders(),
    customers: this.httpTestService.getCustomers(),
      }).subscribe(value => {
        //Placement des orders et customers de l'api vers les tableaux orders et customers
        this.orders = value.orders;
        this.customers = value.customers;
  
        //Comparaison de order.userid avec customer.id
        this.customerOrders = this.customers.map(customer => {
          const customersOrders = this.orders.filter(order => order.userId === customer.id);
          return {
            name: customer.name,
            totalOrdersId: customersOrders.length,
          };
        });
      });

  forkJoin({
    //Même principe pour le second tableau, mais comparaison entre productId de orders avec id de produits
    orders: this.httpTestService.getOrders(),
    products: this.httpTestService.getProduits(),
    }).subscribe(value => {
      this.orders = value.orders;
      this.products = value.products;

      this.productsOrders = this.products.map(product => {
        const productOrders = this.orders.filter(order => order.productId === product.id);
          return {
            name: product.name,
            totalOrdersId: productOrders.length,
          }; 
      });
    })
}

afficherNav() {
  //Utile pour un évènement au click de l'html
  this.navbar.afficherToggle()
}
//Sert à la navigation entre les routes et permettre leur sécurité. Lié avec html
private router = inject(Router);
pageConnexion () {
  this.router.navigate(["/connexion"]); 
  //Supprime les token de l'user au click sur connexion
   this.httpTestService.deleteToken()
}
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

}
