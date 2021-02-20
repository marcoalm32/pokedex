import { abilities } from "./abilitiesModel";
import { attacks } from "./attacks.Model";
import { imagesModel } from "./images.model";
import { legalitiesModel } from "./legalitiesModel";
import { resistancesModel } from "./resistanceModel";
import { setModel } from "./setModel";
import { tcgplayerModel } from "./tcgplayerModel";
import { weaknessesModel } from "./weaknessesModel";

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
    weaknesses: weaknessesModel[],
    resistances: resistancesModel[],
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
