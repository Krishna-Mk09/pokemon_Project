

export type PokemonDetails = {
  id?: number;
  order?: number;
  name?: string
  height?: number;
  abilities?: Ability[];
  spices: Species;
  types?: Type[]
  weights?: number;
  sprites?: Sprites;
  stats?: Stat[]
}

class Ability {
  ability?: {
    name: string;
  }
}

class Species {
  url?: string;
}

class Type {

  slot?: number;
  type?: {
    name: string;
  }
}

class Sprites{
  front_default?:string;
}
class Stat {
  base_stat?: number;
  stat?: {
    name: string
  }
}
