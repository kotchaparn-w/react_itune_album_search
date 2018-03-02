import axios from 'axios';
import { reset } from 'redux-form'
import {
    FETCH_ALBUM_SUCCESS,
    FETCH_ALBUM_FAIL,
    FETCH_ALBUM_START
} from './types';

function fetchAlbumStart(){
    return {
        type: FETCH_ALBUM_START
    }
}

function fetchAlbumSuccess(response) {
    return {
        type: FETCH_ALBUM_SUCCESS,
        payload: response
    }
}

function fetchAlbumFail(error) {
    return {
        type: FETCH_ALBUM_FAIL,
        payload: error
    }
}

export function fetchAlbum ( searchTerm ) {
        return function (dispatch) {
            dispatch(fetchAlbumStart())
            const URL = `https://itunes.apple.com/search?term=${searchTerm}`;    
            axios.get(URL)
            .then(response => {
                dispatch(reset('searchInput'));
                dispatch(fetchAlbumSuccess(response.data.results));
            })
            .catch(error => {
                dispatch(fetchAlbumFail(error.response))
            });     
        }   
    // }
}