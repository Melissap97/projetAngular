import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiClientsService } from '../../services/api-clients.service';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Role } from '../../enums/Roles';
import { Token } from '@angular/compiler';
import { User } from '../../module/User';
import { Password } from '../../module/Password';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  
  users = new Array<any>();
  products = new Array<any>();
  usernames: any[] = []; 
  passwords: any[] = [];
  usernameOrders = new Array<any>();

  usersList: User[] = [];
  passwordList: Password[] = [];
    
  constructor(private httpTestService:ApiClientsService){}

  user: any = ""
  mdp: any = ""
  


ngOnInit() {
  this.httpTestService.getUser().subscribe({
    next: (users) => {
      console.table(users);
       
      this.usersList = users.map(user => user.username); 
      this.passwordList = users.map(user => user.password)
      console.log("Liste des utilisateurs :", this.usersList);
      console.log("Liste des mots de passe:", this.passwordList)
    
      let authBody = { "username": this.usersList[0], "password": this.passwordList[0] };

      console.log("AuthBody utilisé :", authBody);

      this.httpTestService.connexion(authBody).subscribe({
        next: (response) => {
          console.log('Réponse connexion :', response);
          const valueToken = response.token;
          localStorage.setItem("token", valueToken);

          // Stockage ou logique supplémentaire ici si nécessaire
        },
        error: (err) => {
          console.error("Ahah t'es une merde:", err);
        }
      })
    }
  })
}



  //Boolean
  
login() {
    // Créer l'objet d'authentification
    let authBody = { username: this.user, password: this.mdp };

    // Appel à l'API pour la connexion
    this.httpTestService.connexion(authBody).subscribe({
      next: (response) => {
        console.log('Connexion réussie :', response);
        const valueToken = response.token;
        localStorage.setItem('token', valueToken);
        alert('Connexion réussie !');
      },
      error: (err) => {
        console.error('Erreur de connexion :', err);
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      },
    });
  }


isNomInvalide(): boolean {
    return this.usernames.includes(this.usersList);
}

isPasswordInvalide(): boolean{
    return this.passwords.includes(this.passwordList);
}

private router = inject(Router);

pageAccueil() {
  this.router.navigate(["/accueil"]); 
  let authBody= {"username":"admin","password":"pwd"}
  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
    const valueToken = value.token
    localStorage.setItem("token", valueToken)
  })
} 
combine() {
  this.pageAccueil();
  
}


}
