import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule,],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  constructor(private apiClient: HttpService) {}

  posts: any[]= [];
 
  ngOnInit(): void {
    this.apiClient.getPosts().subscribe((data) => {
    this.posts = data;
    console.table(data);
    });
    

  }

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
  

}

