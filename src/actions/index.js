// {
//     type: 'ADD_MOVIES' ,
//     movies: [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }

//actiion types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

//action creators
export function addMovies  (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite  (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFrpmFavourites  (movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}