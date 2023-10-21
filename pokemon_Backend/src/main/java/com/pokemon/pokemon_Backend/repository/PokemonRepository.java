package com.pokemon.pokemon_Backend.repository;

import com.pokemon.pokemon_Backend.domain.Pokemon;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PokemonRepository extends MongoRepository<Pokemon, Integer> {
    void createPokemon(Pokemon pokemon);

    Pokemon getPokemonById(int id);

    Pokemon getPokemonByName(String name);

    List<Pokemon> getAllPokemon();

    void deletePokemon(int id);
}
