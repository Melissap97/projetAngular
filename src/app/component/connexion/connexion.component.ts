import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiClientsService } from '../../services/api-clients.service';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { User } from '../../module/User';


@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  userList: User[] = [];

  constructor(private httpTestService: ApiClientsService) {}

  ngOnInit() {
    this.httpTestService.getUser().subscribe(users => {
      this.userList = users;
      console.log("Liste des utilisateurs récupérée :", this.userList);
    });
  }

  isNomInvalide(): boolean {
    return this.userList.some(user => user.username === this.username);
  }

  isPasswordInvalide(): boolean {
    return this.userList.some(user => user.username === this.username && user.password === this.password);
  }

  login() {
    const authBody = { username: this.username, password: this.password };
    this.httpTestService.connexion(authBody).subscribe(value => {
      localStorage.setItem('user', this.username);
      localStorage.setItem('mdp', this.password )
      alert('Connexion réussie !');
      this.router.navigate(['/accueil']);
    })
  }


private router = inject(Router);

pageAccueil() {
  this.router.navigate(["/accueil"]); 
} 
combine() {
  this.pageAccueil();
  this.login()
}


}