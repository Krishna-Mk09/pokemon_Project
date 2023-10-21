package com.pokemon.pokemon_Backend.repository;

import com.pokemon.pokemon_Backend.domain.Pokemon;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PokemonRepository extends MongoRepository<Pokemon, Integer> {
    Pokemon getPokemonByName(String name);
}

