import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './Components/header/header.component';
import {PokemonDashboardComponent} from './Components/pokemon-dashboard/pokemon-dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {NgxPaginationModule} from "ngx-pagination";
import { HomeComponent } from './Components/home/home.component';
import { AddPokemonComponent } from './Components/add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonDashboardComponent,
    HomeComponent,
    AddPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
