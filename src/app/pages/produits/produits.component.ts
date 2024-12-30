import { HttpClient } from '@angular/common/http';
import { HttpService } from './../services/http.service';
import { Component, inject } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  imports: [CommonModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  private apiUrl = 'http://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);
  $post = this.getPosts();

  getPosts() {
    return this.http.get<any>(this.apiUrl);
  }




}
