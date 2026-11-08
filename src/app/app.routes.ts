import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PainelComponent } from './painel/painel.component';

export const routes: Routes = [
  { path: '', component: Home },       // Página principal com o menu e footer
  { path: 'painel', component: PainelComponent } // Painel administrativo CRUD
];