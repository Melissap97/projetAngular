import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

   constructor(private httpClient: HttpClient) {}
   
   login(body:any) {
    return this.httpClient.post<any>("http://localhost:3000/api/auth/login", body)
  }

  getProducts(){
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.get<any>("http://localhost:3000/api/products", {headers})
  }

  getOrders(){
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.get<any>("http://localhost:3000/api/orders", {headers})
  }

  getCustomers(){
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.get<any>("http://localhost:3000/api/customers", {headers})
  }

  addCustomers(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/customers",  customer, { headers });
  }

  addProducts(product: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/products",  product, { headers });
  }

  addOrders(order: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/orders",  order, { headers });
  }

  modifyProducts(product: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/products/${product.id}`,  product, { headers });
  }

  modifyCustomers(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/customers/${customer.id}`,  customer, { headers });
  }

  modifyOrders(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/customers/${customer.id}`,  customer, { headers });
  }
  
  
  deleteCustomers(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }

    const headers = { Authorization : token}
    return this.httpClient.delete(`http://localhost:3000/api/customers/${customer.id}`, { headers } );
  }

  deleteProducts(product: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }

    const headers = { Authorization : token}
    return this.httpClient.delete(`http://localhost:3000/api/products/${product.id}`, { headers } );
  }

  deleteOrders(order: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }

    const headers = { Authorization : token}
    return this.httpClient.delete(`http://localhost:3000/api/orders/${order.id}`, { headers } );
  }
}
  

