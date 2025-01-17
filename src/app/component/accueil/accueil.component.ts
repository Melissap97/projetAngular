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
  //  posts: any[] = [];
  // constructor(private apiClient: ApiClientsService) { }

  // ngOnInit(): void {
  //   this.apiClient.getAccueil().subscribe((data) => {
  //     this.posts = data;
  //   });
  // }

orders = new Array<any>();
customers = new Array<any>();
products = new Array<any>()
customerOrders = new Array<any>();
productsOrders = new Array<any>()
    
  constructor(private httpTestService:ApiClientsService, private navbar:NavbarService){}

ngOnInit(){
  
  let authBody= {"username":"admin","password":"pwd"}

   this.httpTestService.connexion(authBody).subscribe(value => {
     console.log(value)
    localStorage.setItem("token", value.token)

    forkJoin({
      orders: this.httpTestService.getOrders(),
      customers: this.httpTestService.getCustomers(),
      }).subscribe(value => {
      this.orders = value.orders;
      this.customers = value.customers;
  
      
      this.customerOrders = this.customers.map(customer => {
        const customersOrders = this.orders.filter(order => order.userId === customer.id);
        return {
          name: customer.name,
          totalOrdersId: customersOrders.length,
         
        };
      });
    });

    forkJoin({
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
  });
}

afficherNav() {
  this.navbar.afficherToggle()
}

  
private router = inject(Router);
  
pageConnexion () {
  this.router.navigate(["/connexion"]); 
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
