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
    localStorage.setItem("token", value.token)

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

isNomInvalide(): boolean {
    return this.usernames.includes(this.nom);
}

isPasswordInvalide(): boolean{
    return this.passwords.includes(this.password);
}
productSubmit() {
  
    let authBody= {"username":"admin","password":"pwd"}

    this.httpTestService.connexion(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)

      this.httpTestService.postPosts(this.productInfo).subscribe(
        response => {
          this.productInfo = response; 
          window.location.reload();
        }
      );
      
    });
   
}



  private router = inject(Router);

  pageAccueil() {
  this.router.navigate(["/accueil"]); 

  
} 


}
