import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortyListComponent } from './rick-and-morty/rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyDetailsComponent } from './rick-and-morty/rick-and-morty-details/rick-and-morty-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyListComponent,
    RickAndMortyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
