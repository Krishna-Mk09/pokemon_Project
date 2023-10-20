import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {PokemonDetails} from "../model/pokemonDetails";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL = "https://pokeapi.co/api/v2"

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
  }


  getPokemonDetails(pokemon: number | string):Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(this.baseURL + 'pokemon/' + pokemon)

  }

}
