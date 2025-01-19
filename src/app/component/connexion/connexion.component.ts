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
  //Création d'élément en string et en tableaux, où on pourra enregistrer les api
  username: string = '';
  password: string = '';
  role: string = ''
  rolesList: User[] = [];
  userList: User[] = [];

  constructor(private httpTestService: ApiClientsService, private router: Router) {}

  ngOnInit() {
    this.httpTestService.getUser().subscribe(users => {
      // Enregistrer chaque role dans roleList, et la userList dans users
      this.userList = users;
      this.rolesList = users.map(user => user.role);
    })
  }

  isNomInvalide() : boolean {
    //Concernant la validation du formulaire, si le nom est exacte et correspond à un nom de l'api.
    return this.userList.some(user => user.username === this.username);
  }

  isPasswordInvalide() : boolean {
    //Validation du formulaire si le nom est bien égal à son mot de passe depuis l'api, et si le mot de passe est valide.
    return this.userList.some(user => user.username === this.username && user.password === this.password);
  }
  

  login() {
    const authBody = { username: this.username, password: this.password };
    this.httpTestService.connexion(authBody).subscribe(user => {
    //On reprend les roles, globalement fait avec les deux boolean
    const loggedInUser = this.userList.find(user => user.username === this.username && user.password === this.password);

    if (loggedInUser) {
      this.role = loggedInUser.role; // Détermine le rôle
      //On place ces informations dans le local storage
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