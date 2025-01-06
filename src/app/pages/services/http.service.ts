import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

   constructor(private http: HttpClient) {}

   getUsers():Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
   }

  

}