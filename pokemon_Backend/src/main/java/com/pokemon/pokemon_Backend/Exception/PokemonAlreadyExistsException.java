package com.pokemon.pokemon_Backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Pokemon Already Exists")
public class PokemonAlreadyExistsException extends Throwable {
}
