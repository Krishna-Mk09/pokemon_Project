import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { PokemonDetailsComponent } from './Components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { PokemonDashboardComponent } from './Components/pokemon-dashboard/pokemon-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
    HeaderComponent,
    PokemonDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
