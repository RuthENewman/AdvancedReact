import { SAVE_CHIRP } from 'actions/types';
import chirps from 'reducers/chirps';

export function saveChirp(chirp) {
    return {
        type: SAVE_CHIRP,
        payload: chirp
    };
}