import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

http = inject(HttpClient);
$posts  = this.getProducts();

getProducts() { 
  return this.http.get<any>(this.apiUrl);
}

getProduct(id: number) {
  return this.http.get(this.apiUrl + '/' + id);

}

createProduct(post: any) {
  return this.http.post(this.apiUrl, post);
}

updateProduct(post: any) {
  return this.http.put(this.apiUrl + '/' +post.id, post);
}

deleteProduct(id: number) {
  return this.http.delete(this.apiUrl + '/' + id);
}





}

