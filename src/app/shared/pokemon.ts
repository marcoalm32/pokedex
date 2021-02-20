import { imagesModel } from "./images.model";
import { legalitiesModel } from "./legalitiesModel";
import { setModel } from "./setModel";
import { tcgplayerModel } from "./tcgplayerModel";

export interface Pokemon {
    
  data: {
    id: string,
    name: string,
    supertype: string,
    subtypes: string[],
    hp: string,
    types: string[],
    evolvesFrom: string,
    abilities: abilities[],
    attacks: attacks[],
    weaknesses: weaknesses[],
    resistances: resistances[],
    retreatCost: string[],
    convertedRetreatCost: number,
    set: setModel,
    number: string,
    artist: string,
    rarity: string,
    flavorText: string,
    nationalPokedexNumbers: number[],
      legalities: legalitiesModel,
      images: imagesModel,
      tcgplayer: tcgplayerModel
    }
}


export interface abilities {

      name: string,
      text: string,
      type: string
    
}

export interface attacks {
    
        name: string,
        cost: string[],
        convertedEnergyCost: number,
        damage: string,
        text: string
      
}

export interface weaknesses {
        type: string,
        value: string

}

export interface resistances {

}