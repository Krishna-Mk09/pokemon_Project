package com.pokemon.pokemon_Backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Pokemon not found")
public class PokemonNotFoundException extends Throwable {
}
