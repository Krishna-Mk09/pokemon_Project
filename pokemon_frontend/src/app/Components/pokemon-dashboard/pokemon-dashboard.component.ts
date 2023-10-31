import {Component, OnInit} from '@angular/core';
import {PokemonServiceService} from "../../services/pokemon-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-dashboard',
  templateUrl: './pokemon-dashboard.component.html',
  styleUrls: ['./pokemon-dashboard.component.css']
})
export class PokemonDashboardComponent implements OnInit {
  pokemons: any[] = [];
  showDetails: boolean[] = [];
  searchQuery: string = '';
  p: number = 1;
  itemsPerPage: number = 10
  page = 1;
  totalPokemons: number | undefined

  constructor(private service: PokemonServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }


  search() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query === "") {
      this.ngOnInit();
    } else {
      this.pokemons = this.pokemons.filter(pokemon => {
        if (pokemon.name && typeof pokemon.name === 'string') {
          const pokemonName = pokemon.name.toLowerCase();
          return pokemonName.includes(query);
        }
        return false;
      });
    }
  }


  getPokemons() {
    this.service.getAllPokemons(this.itemsPerPage, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      if (Array.isArray(response.results)) {
        response.results.forEach((element: any) => {
          const pokemonName = element.name;
          this.service.getAllPokemonData(pokemonName).subscribe((res: any) => {
            this.pokemons.push(res);
            console.log(this.pokemons);
          });
        });
      } else {
        console.error('NOO RESPONSE', response);
      }
    });
  }


  retrieveDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }
}

