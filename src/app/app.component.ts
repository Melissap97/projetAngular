import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnexionComponent } from './component/connexion/connexion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetAngular';
}
