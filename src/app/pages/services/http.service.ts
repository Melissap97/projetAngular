import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/products';
  getPosts(): Observable<any[]> {
  return this.httpClient.get<any[]>(this.apiUrl);
  }


  

}