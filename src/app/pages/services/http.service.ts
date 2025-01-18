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

  getUsers(){
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.get<any>("http://localhost:3000/api/users", {headers})
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

  addUsers(user: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/users",  user, { headers });
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

  modifyUsers(user: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/users/${user.id}`,  user, { headers });
  }

  modifyCustomers(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/customers/${customer.id}`,  customer, { headers });
  }

  modifyOrders(order: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.put(`http://localhost:3000/api/orders/${order.id}`,  order, { headers });
  }
  
  
  deleteCustomers(customer: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }

    const headers = { Authorization : token}
    return this.httpClient.delete(`http://localhost:3000/api/customers/${customer.id}`, { headers } );
  }

  deleteUsers(user: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }

    const headers = { Authorization : token}
    return this.httpClient.delete(`http://localhost:3000/api/users/${user.id}`, { headers } );
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
  

