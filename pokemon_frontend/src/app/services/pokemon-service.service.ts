import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {PokemonDetails} from "../model/pokemonDetails";
import {Observable} from "rxjs";
import * as https from "https";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL = "https://pokeapi.co/api/v2/pokemon"

  constructor( private httpClient: HttpClient) {
  }

  getPokemons()
  {
    return this.httpClient.get(this.baseURL);
  }

  getMoreData(name: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  getPokemonsById(id: number) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemon(pokemon: number | string):Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(this.baseURL + 'pokemon/' + pokemon)

  }
}
