import { Component } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  constructor(private httpUser: HttpClientService) {}
  data!: any[]

  ngOnInit() {
    this.httpUser.returnUrl().subscribe(data => {
      console.log(data);
    })
  }
}
