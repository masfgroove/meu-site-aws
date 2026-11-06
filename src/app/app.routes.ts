import { Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';

export const routes: Routes = [
  { path: 'painel', component: PainelComponent },
  { path: '', redirectTo: 'painel', pathMatch: 'full' } // Redireciona a página principal direto para o painel
];