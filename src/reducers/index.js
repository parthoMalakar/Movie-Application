import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions/index'

const initalMoviesState = {
    list : [],
    favourites : [],
    showFavourites: false
};


export function movies (state = initalMoviesState, action) {
    console.log("Movies Reducers");
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     };
    // }
    // return state;

    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(  // filter will return absolutely new array
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    results : {}
};

export function search (state = initialSearchState, action) {
    console.log("Search Reducers");
    return state;
}

const initialRootState = {
    movies: initalMoviesState,
    search: initialSearchState
};

export default function rootReducer (state = initialRootState, action) {
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    };
}