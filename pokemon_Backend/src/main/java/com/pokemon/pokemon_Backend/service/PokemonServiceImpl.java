package com.pokemon.pokemon_Backend.service;

import com.pokemon.pokemon_Backend.Exception.PokemonAlreadyExistsException;
import com.pokemon.pokemon_Backend.Exception.PokemonNotFoundException;
import com.pokemon.pokemon_Backend.domain.Pokemon;
import com.pokemon.pokemon_Backend.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public Pokemon createPokemon(Pokemon pokemon) throws PokemonAlreadyExistsException {
        if (this.POKEMON_REPOSITORY.existsById(pokemon.getId())) {
            throw new PokemonAlreadyExistsException();
        }
        return this.POKEMON_REPOSITORY.save(pokemon);
    }

    @Override
    public Optional<Pokemon> getPokemonById(int id) throws PokemonNotFoundException {
        Optional<Pokemon> byId = POKEMON_REPOSITORY.findById(id);
        if (byId == null) {
            throw new PokemonNotFoundException();
        }
        return byId;

    }

    @Override
    public Pokemon getPokemonByName(String name) throws PokemonNotFoundException {

        Pokemon pokemonByName = this.POKEMON_REPOSITORY.getPokemonByName(name);
        if (pokemonByName == null) {
            throw new PokemonNotFoundException();
        }
        return pokemonByName;
    }

    @Override
    public List<String> getAllPokemon() {

        List<Pokemon> pokemon = POKEMON_REPOSITORY.findAll();
        List<String> pokemons = new ArrayList<>();
        for (String pokemon1 : pokemons) {
            pokemons.add(pokemon1);
        }
        return pokemons;
    }

    @Override
    public void deletePokemon(int id) {
        this.POKEMON_REPOSITORY.deleteById(id);
    }
}

