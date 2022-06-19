import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FundadoraComponent } from './fundadora/fundadora.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'sobre', component: FundadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
