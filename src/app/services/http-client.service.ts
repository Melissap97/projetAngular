import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  url = "http://localhost:51771/api/auth/login"
  constructor(private httpClient: HttpClient ) {
   }
   returnUrl() {
      return this.httpClient.get(this.url);
   }
}
