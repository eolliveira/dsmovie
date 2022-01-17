export type Movie = {
    id: number,
    title: string,
    score: number,
    count: number,
    image: string
}

export type MoviePage = {
    content?: Movie[],   
    last: boolean,
    totalElements?: number,
    totalPages: number,
    size?: number,
    number: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean
}

