import { SAVE_CHIRP } from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_CHIRP:
            return [...state, action.payload];
        default: 
            return state;
    }
}