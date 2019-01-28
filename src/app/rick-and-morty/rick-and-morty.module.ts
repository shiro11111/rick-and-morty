import { NgModule } from '@angular/core';
import { RickAndMortyListComponent } from './rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyDetailsComponent } from './rick-and-morty-details/rick-and-morty-details.component';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../store/rick-and-morty-service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';


@NgModule({
  declarations: [
    RickAndMortyListComponent,
    RickAndMortyDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    RickAndMortyRoutingModule
  ],
  providers: [RickAndMortyService]
})

export class RickAndMortyModule {
}
