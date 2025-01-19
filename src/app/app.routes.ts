import { Routes } from '@angular/router';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ConnexionComponent } from './component/connexion/connexion.component';


export const routes: Routes = [{

    path: '',
    redirectTo: "connexion",
    pathMatch: 'full'
},{
    path: "connexion",
    component: ConnexionComponent
       },
    {
 path: "accueil",
 component: AccueilComponent
    },{
    path: 'commandes',
    component: CommandesComponent
},{
    path: 'produits',
    component: ProduitsComponent
},
 {
    path: 'clients',
    component: ClientsComponent
}, {
    path: 'users',
    component: UsersComponent
}, 
{
    path: '**',
    component: NotFoundComponent
},

];