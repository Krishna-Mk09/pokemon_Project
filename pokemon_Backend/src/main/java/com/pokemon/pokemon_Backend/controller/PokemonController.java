package com.pokemon.pokemon_Backend.controller;

import com.pokemon.pokemon_Backend.Exception.PokemonAlreadyExistsException;
import com.pokemon.pokemon_Backend.Exception.PokemonNotFoundException;
import com.pokemon.pokemon_Backend.domain.Pokemon;
import com.pokemon.pokemon_Backend.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {
    private final PokemonService POKEMON_SERVICE;

    @Autowired
    public PokemonController(PokemonService pokemonService) {
        POKEMON_SERVICE = pokemonService;
    }


    @GetMapping("/fetch-and-store-data")
    public void fetchAndStoreData() {
        POKEMON_SERVICE.fetchDataAndStoreInMongoDB();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addPokemon(@RequestBody Pokemon pokemon) throws PokemonAlreadyExistsException {
        try {
            return new ResponseEntity<>(this.POKEMON_SERVICE.createPokemon(pokemon), HttpStatus.CREATED);
        } catch (PokemonAlreadyExistsException e) {
            throw new PokemonAlreadyExistsException();
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePokemon(@PathVariable int id) {
        this.POKEMON_SERVICE.deletePokemon(id);
        return new ResponseEntity<>("pokemon Deleted Successfully", HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getByName(@PathVariable String name) throws PokemonNotFoundException {
        try {
            return new ResponseEntity<>(this.POKEMON_SERVICE.getPokemonByName(name), HttpStatus.OK);
        } catch (PokemonNotFoundException exception) {
            throw new PokemonNotFoundException();
        } catch (Exception exception) {
            return new ResponseEntity<>("Network Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable int id) throws PokemonNotFoundException {
        try {
            return new ResponseEntity<>(this.POKEMON_SERVICE.getPokemonById(id), HttpStatus.OK);
        } catch (PokemonNotFoundException exception) {
            throw new PokemonNotFoundException();
        } catch (Exception exception) {
            return new ResponseEntity<>("Network Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
