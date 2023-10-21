package com.pokemon.pokemon_Backend.service;

import com.pokemon.pokemon_Backend.Exception.PokemonAlreadyExistsException;
import com.pokemon.pokemon_Backend.Exception.PokemonNotFoundException;
import com.pokemon.pokemon_Backend.domain.Pokemon;

import java.util.List;
import java.util.Optional;


public interface PokemonService{
    Pokemon createPokemon(Pokemon pokemon) throws PokemonAlreadyExistsException;

    Optional<Pokemon> getPokemonById(int id) throws PokemonNotFoundException;;

    Pokemon getPokemonByName(String name) throws PokemonNotFoundException;

    List<String> getAllPokemon();

    void deletePokemon(int id);

    void fetchDataAndStoreInMongoDB();
}
