import {Component, OnInit} from '@angular/core';
import {PokemonServiceService} from "../../services/pokemon-service.service";

@Component({
  selector: 'app-pokemon-dashboard',
  templateUrl: './pokemon-dashboard.component.html',
  styleUrls: ['./pokemon-dashboard.component.css']
})
export class PokemonDashboardComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchQuery: string = '';
  p: number = 1;
  itemsPerPage: number = 10
  totalPokemon: any;
  page = 1;
  totalPokemons: number | undefined

  constructor(private service: PokemonServiceService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  search() {
    if (this.searchQuery == "") {
      this.ngOnInit();
    } else {
      this.pokemons = this.pokemons.filter(res => {
        return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
      })
    }
  }


  getPokemons() {
    this.service.getPokemons(this.itemsPerPage, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      if (Array.isArray(response.results)) {
        response.results.forEach((element: any) => {
          const pokemonName = element.name;
          this.service.getData(pokemonName).subscribe((res: any) => {
            this.pokemons.push(res);
            console.log(this.pokemons);
          });
        });
      } else {
        console.error('Response does not contain an array of results:', response);
      }
    });
  }


  showDetails: boolean[] = [];

  retrieveDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }
}

