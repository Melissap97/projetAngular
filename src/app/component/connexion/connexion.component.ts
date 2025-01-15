import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiClientsService } from '../../services/api-clients.service';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Role } from '../../enums/Roles';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  
  users = new Array<any>();
  products = new Array<any>();
  usernames: string[] = []; 
  passwords: string[] = [];
  usernameOrders = new Array<any>();
    
  constructor(private httpTestService:ApiClientsService){}

  user: any = ""
  mdp: any = ""
  


ngOnInit() {
  this.httpTestService.getUser().subscribe({
    next: (users) => {
      console.table(users);
       
      let usersList = users.map(user => user.username); 
      let passwordList = users.map(user => user.password)
      console.log("Liste des utilisateurs :", usersList);
      console.log("Liste des mots de passe:", passwordList)
    
      let authBody = { "username": usersList[0], "password": passwordList[0] };

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


isNomInvalide(): boolean {
  return !this.usernames.includes(this.user); // Vérifie si le nom n'existe pas
}

isPasswordInvalide(): boolean {
  return !this.passwords.includes(this.mdp); // Vérifie si le mot de passe n'existe pas
}

login() {
  let authBody = { username: this.user, password: this.mdp };

  this.httpTestService.connexion(authBody).subscribe({
    next: (response) => {
      console.log("Connexion réussie :", response);
      const valueToken = response.token;
      localStorage.setItem("token", valueToken);
      alert("Connexion réussie !");
    },
    error: (err) => {
      console.error("Erreur de connexion :", err);
      alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
  });
}

private router = inject(Router);

pageAccueil() {
  this.router.navigate(["/accueil"]); 
}

combine() {
  this.login();
  this.pageAccueil();
}
}

