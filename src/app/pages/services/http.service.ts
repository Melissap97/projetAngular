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

  getUsers(){
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.get<any>("http://localhost:3000/api/customers", {headers})
  }

  addProduct(product: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/products",  product, { headers });
  }
  addStock(product: any): Observable<any> {
    const token = localStorage.getItem("token")
   
    if(!token){
      throw new Error ('No authentification token found');
    }
    
    const headers = { Authorization : token}
    return this.httpClient.post("http://localhost:3000/api/products",  product, { headers });
  }
}
  

