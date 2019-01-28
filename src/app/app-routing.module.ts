import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickAndMortyRoutingModule } from './rick-and-morty/rick-and-morty-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full'},
  { path: 'characters', loadChildren: './rick-and-morty/rick-and-morty.module#RickAndMortyModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
