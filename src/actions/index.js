import axios from 'axios';
import history from '../history';
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

                if (response.data.resultCount !== 0) {
                    dispatch(fetchAlbumSuccess(response.data.results));
                    history.push(`${process.env.PUBLIC_URL}/${searchTerm}`);
                } else {
                    dispatch(fetchAlbumFail('There is no result with this search term'));
                }
            })
            .catch(error => {
                dispatch(fetchAlbumFail(error.response));
            });     
        }   
}