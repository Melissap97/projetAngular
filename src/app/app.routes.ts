import { Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ConnexionComponent } from './component/connexion/connexion.component';

export const routes: Routes = [
    
    {
        path: "accueil",
        component: AccueilComponent
    },
    {
        path: "**",
        component: ConnexionComponent
    }
];
