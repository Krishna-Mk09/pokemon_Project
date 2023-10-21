package com.pokemon.pokemon_Backend.service;

import com.pokemon.pokemon_Backend.domain.Pokemon;

import java.util.List;
import java.util.Optional;


public interface PokemonService{
    Pokemon createPokemon(Pokemon pokemon);

    Optional<Pokemon> getPokemonById(int id);

    Pokemon getPokemonByName(String name);

    List<Pokemon> getAllPokemon();

    void deletePokemon(int id);
}
