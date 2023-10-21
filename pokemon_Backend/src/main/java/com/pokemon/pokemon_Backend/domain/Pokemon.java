package com.pokemon.pokemon_Backend.domain;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Pokemon {
    @Id
    private int id;
    private String name;
    private int height;
    private int weight;
    private String url;
    private String[] types;
    private String[] abilities;
    private int[] stats;
    private String species;
    private String imageUrl; // URL to an image of the Pokemon
    private String description;

}
