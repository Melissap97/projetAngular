import { HttpClient } from '@angular/common/http';
import { HttpService } from './../services/http.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  constructor(private HttpClient: HttpClient) { }

  private getHeaders():Headers {
    let header = new Headers({
      'Content-Type': 'application/json'
    });
 
    return header;
 }

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
  
 private apiUrl = 'http://localhost:4200/api/products'; 
 // 'Content-Type': 'application/json';
 getPosts(): Observable<any[]> {
 return this.HttpClient.get<any[]>(this.apiUrl);
 }
 
  posts: any[] = [];

  ngOnInit(): void {
    this.getPosts().subscribe((data) => {
    this.posts = data;
    console.table(data);
    });
    

  }
}

