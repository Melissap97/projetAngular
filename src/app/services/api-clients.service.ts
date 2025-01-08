import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiClientsService {

 

  constructor(private http: HttpClient) {}

  // Méthode de connexion
  connexion(body: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/auth/login", body);
  }

  //Methode récupérer les utilisateurs
  getProducts(): Observable<any[]> {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Aucun token authentifié");
    }

     const headers = { Authorization : token}
    return this.http.get<any[]>("http://localhost:3000/api/products", { headers });
  }

  getUsers(): Observable<any[]> {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Aucun token authentifié");
    }

     const headers = { Authorization : token}
    return this.http.get<any[]>("http://localhost:3000/api/users", { headers });
  }

  // Méthode pour récupérer les posts
  getPosts(): Observable<any[]> {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Aucun token authentifié");
    }

     const headers = { Authorization : token}
    return this.http.post<any[]>("http://localhost:3000/api/auth/login", { headers });
  }

}
