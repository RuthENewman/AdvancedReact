import { SAVE_CHIRP, UPDATE_FEED } from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_CHIRP:
            return [...state, action.payload];
        case UPDATE_FEED:
            const chirps = action.payload.data.map(chirp => chirp.name);
            return [...state, ...chirps];
        default: 
            return state;
    }
}