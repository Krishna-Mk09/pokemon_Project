import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL = "https://pokeapi.co/api/v2/pokemon"

  constructor( private httpClient: HttpClient) {
  }

  // getPokemons()
  // {
  //   return this.httpClient.get(this.baseURL);
  // }

  getPokemons(limit:number,offset:number)
  {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  }

  getData(name: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }


}
