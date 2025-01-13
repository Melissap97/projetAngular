import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';


export const routes: Routes = [{
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
