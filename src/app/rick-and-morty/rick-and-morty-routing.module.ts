import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyListComponent } from './rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyDetailsComponent } from './rick-and-morty-details/rick-and-morty-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: RickAndMortyListComponent},
  // { path: 'details/:id', component: RickAndMortyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RickAndMortyRoutingModule {}


