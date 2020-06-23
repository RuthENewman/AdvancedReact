import axios from 'axios';
import { SAVE_CHIRP, UPDATE_FEED } from 'actions/types';

export function saveChirp(chirp) {
    return {
        type: SAVE_CHIRP,
        payload: chirp
    };
}

export function updateFeed() {
    const response = axios.get("https://jsonplaceholder.typicode.com/comments");

    return {
        type: UPDATE_FEED,
        payload: response
    };
};