package com.pokemon.pokemon_Backend.controller;

import com.pokemon.pokemon_Backend.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {
    private final PokemonService POKEMON_SERVICE;

    @Autowired
    public PokemonController(PokemonService pokemonService) {
        POKEMON_SERVICE = pokemonService;
    }
}
