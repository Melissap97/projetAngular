import { Routes } from '@angular/router';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { ListeUsersComponent } from './pages/liste-users/liste-users.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    path:'commandes',
    component: CommandesComponent
},{
    path:'users',
    component: ListeUsersComponent
},{
    path:'produits',
    component: ProduitsComponent
},{
    path:'**',
    component: NotFoundComponent
},

];
