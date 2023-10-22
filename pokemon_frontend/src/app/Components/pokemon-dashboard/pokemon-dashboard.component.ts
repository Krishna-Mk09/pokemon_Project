import {Component, OnInit} from '@angular/core';
import {PokemonServiceService} from "../../services/pokemon-service.service";

@Component({
  selector: 'app-pokemon-dashboard',
  templateUrl: './pokemon-dashboard.component.html',
  styleUrls: ['./pokemon-dashboard.component.css']
})
export class PokemonDashboardComponent implements OnInit {
  pokemons:any[]=[];
  filteredPokemons: any[] = [];
  searchQuery: string = '';
  p:number=1;
  itemsPerPage:number=8
  totalProduct:any;



  constructor(private service:PokemonServiceService){}
  ngOnInit(): void {
    this.service.getPokemons().subscribe((response: any) => {

      if (Array.isArray(response.results)) {
        response.results.forEach((element: any) => {
          const pokemonName = element.name; // Get the name from the response
          this.service.getMoreData(pokemonName).subscribe((res: any) => {
            this.pokemons.push(res);
            console.log(this.pokemons);
            this.totalProduct=response.result.length;
          });
        });
      } else {
        console.error('Response does not contain an array of results:', response);
      }
    });
  }


  search() {
    if(this.searchQuery == "")
    {
      this.ngOnInit();
    }
    else{
      this.pokemons=this.pokemons.filter(res=>{
        return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
      })
    }
  }
//   pokemons: any[] = [];
//   filteredPokemons: any[] = [];
//   searchQuery: string = '';
//
//   constructor(private service: PokemonServiceService) {
//   }
//
//
//   ngOnInit(): void {
//     this.service.getPokemons().subscribe((response: any) => {
//       if (Array.isArray(response.results)) {
//         response.results.forEach((element: any) => {
//           const pokemonName = element.name; // Get the name from the response
//           this.service.getMoreData(pokemonName).subscribe((res: any) => {
//             this.pokemons.push(res);
//             console.log(this.pokemons);
//           });
//         });
//       } else {
//         console.error('Response does not contain an array of results:', response);
//       }
//     });
//   }
//
//
//   search() {
//     if (this.searchQuery == "") {
//       this.ngOnInit();
//     } else {
//       this.pokemons = this.pokemons.filter(res => {
//         return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
//       })
//     }
//   }
}
