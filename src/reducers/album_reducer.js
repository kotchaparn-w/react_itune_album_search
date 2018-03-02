import {
    FETCH_ALBUM_SUCCESS,
    FETCH_ALBUM_FAIL,
    FETCH_ALBUM_START
} from '../actions/types';

export default function fetchAlbum(state = {}, action) {
    switch (action.type) {
        case FETCH_ALBUM_START:
            return {
                ...state,
                isAlbumFetching: true
            }
        case FETCH_ALBUM_SUCCESS:
            return { 
                ...state, 
                fetchAlbumSuccess: true,
                albumLists: action.payload,
                isAlbumFetching: false
                
            }
        case FETCH_ALBUM_FAIL:
            return {
                ...state,
                fetchAlbumSuccess: false,
                fetchAlbumError: action.payload,
                isAlbumFetching: false
            }
        default:
            return state
    }
}