package com.pokemon.pokemon_Backend.service;

import com.pokemon.pokemon_Backend.domain.Pokemon;
import com.pokemon.pokemon_Backend.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PokemonServiceImpl implements PokemonService {

    private final PokemonRepository POKEMON_REPOSITORY;

    @Autowired
    public PokemonServiceImpl(PokemonRepository pokemonRepository) {
        POKEMON_REPOSITORY = pokemonRepository;
    }

    @Override
    public Pokemon createPokemon(Pokemon pokemon) {
        return this.POKEMON_REPOSITORY.save(pokemon);
    }

    @Override
    public Optional<Pokemon> getPokemonById(int id) {
        return this.POKEMON_REPOSITORY.findById(id);
    }

    @Override
    public Pokemon getPokemonByName(String name) {
        return this.POKEMON_REPOSITORY.getPokemonByName(name);
    }

    @Override
    public List<Pokemon> getAllPokemon() {
        return this.POKEMON_REPOSITORY.findAll();
    }

    @Override
    public void deletePokemon(int id) {
        this.POKEMON_REPOSITORY.deleteById(id);
    }
}

