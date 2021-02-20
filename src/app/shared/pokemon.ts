import { legalitiesModel } from "./legalitiesModel";
import { setModel } from "./setModel";

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
      images: {
        
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy7-54",
        "updatedAt": "2021/02/20",
        "prices": {
          "holofoil": {
            "low": 3.0,
            "mid": 3.0,
            "high": 3.0,
            "market": 2.93,
            "directLow": null
          }
        }
      }
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