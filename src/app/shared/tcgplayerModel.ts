export interface tcgplayerModel {
    url: string,
    updatedAt: string,
    prices: pricesModel
}

export interface pricesModel {
    holofoil: holofoilModel
}

export interface holofoilModel {
    low: number,
    mid: number,
    high: number,
    market: number,
    directLow: any,
}


