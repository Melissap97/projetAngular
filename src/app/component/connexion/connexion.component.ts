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
  
userList: User[] = []
passwordList: User[] = []
users: any[] = []
passwords: any[] = [];

constructor(private httpTestService:ApiClientsService){}

ngOnInit() {
  this.httpTestService.getUser()
  .subscribe(users =>{
    console.table(users)
      
    this.userList = users.map(user => user.username)
    this.passwordList = users.map(user => user.password)
    console.log("Liste des utilisateurs:", this.userList)
    console.log("Liste des mdp:", this.passwordList)
  })
}

login() {
  let authBody = {"username": this.userList, "password": this.passwordList}
  console.log("Liste des utilisateurs et mdp", authBody)
  this.httpTestService.connexion(authBody)
  .subscribe ( value => {
    console.log('Connexion réussie :', value);
    const valueToken = value.token;
    localStorage.setItem('token', valueToken);
    alert('Connexion réussie !');
  })
}

isNomInvalide(): boolean {
    return this.users.includes(this.userList);
}

isPasswordInvalide(): boolean{
    return this.passwords.includes(this.passwordList);
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