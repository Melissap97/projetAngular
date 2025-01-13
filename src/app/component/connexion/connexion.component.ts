import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiClientsService } from '../../services/api-clients.service';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Role } from '../../enums/Roles';

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

  nom: string = '';
  password: string = '';
  onSubmit(form: any) {
  console.log('Formulaire soumis !');
  console.log('Valeurs :', form.value);
}
productInfo: any = {
      username: '',
      password:''
    };

ngOnInit() {
  let authBody= {"username":"admin","password":"pwd"}
  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
    const valueToken = value.token
    localStorage.setItem("token", valueToken)

    this.httpTestService.getUser().subscribe(value => {
      console.table(value)
      this.users = value
       console.log("this.users assigné :", this.users);

       const username = this.users.map(user => user.username); 
    const password = this.users.map(user => user.password);

      this.usernames = username
      this.passwords = password
    })
  })
}

userAllRole = new Array<any>();
localStorageAdmin() {
  let authBody= {"username":"admin","password":"pwd"}
  this.httpTestService.connexion(authBody).subscribe(value => {
    console.log(value)
      this.httpTestService.getUser().subscribe(
        users => {
          this.users = users;
          const currentId = this.users.filter(user => user.username === user.role);
          localStorage.setItem("role", JSON.stringify(currentId));
        }
      )
  })
}
isNomInvalide(): boolean {
    return this.usernames.includes(this.nom);
}

isPasswordInvalide(): boolean{
    return this.passwords.includes(this.password);
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
  this.localStorageAdmin();
}


}
