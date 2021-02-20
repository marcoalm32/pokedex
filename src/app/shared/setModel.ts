export interface setModel {
    id: "xy7",
    name: "Ancient Origins",
    series: "XY",
    printedTotal: 98,
    total: 100,
    legalities: legalitiesModelSet,
    ptcgoCode: string,
    releaseDate: string,
    updatedAt: string,
        images: imagesModelSet
        
}


export interface legalitiesModelSet {
    unlimited: string,
    expanded: string
}

export interface imagesModelSet {
    symbol: string,
    logo: string,
}