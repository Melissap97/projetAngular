import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
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
  role: string = ''
  rolesList: User[] = [];
  userList: User[] = [];

  constructor(private httpTestService: ApiClientsService, private router: Router) {}

  ngOnInit() {
    this.httpTestService.getUser().subscribe(users => {
      console.log('Données brutes récupérées :', users);

      // Vérifiez si les utilisateurs ont bien un rôle
      this.userList = users;
      this.rolesList = users.map(user => user.role);

      console.log('Liste des utilisateurs :', this.userList);
      console.log('Liste des rôles :', this.rolesList);
    })
  }

  isNomInvalide() : boolean {
    return this.userList.some(user => user.username === this.username);
  }

  isPasswordInvalide() : boolean {
    return this.userList.some(user => user.username === this.username && user.password === this.password);
  }
  

  login() {
    const authBody = { username: this.username, password: this.password };
    this.httpTestService.connexion(authBody).subscribe(user => {
    
    const loggedInUser = this.userList.find(user => user.username === this.username && user.password === this.password);

    if (loggedInUser) {
      this.role = loggedInUser.role; // Détermine le rôle
      localStorage.setItem('user', this.username);
      localStorage.setItem('mdp', this.password);
      localStorage.setItem('role', this.role);
      this.router.navigate(['/accueil']);
    } else {
      console.error("Utilisateur non trouvé ou informations incorrectes.");
    }
  })
  }
}