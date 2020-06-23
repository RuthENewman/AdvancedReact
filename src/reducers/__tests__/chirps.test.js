import chirpsReducer from 'reducers/chirps';
import { SAVE_CHIRP } from 'actions/types';

it('handles SAVE_CHIRP actions', () => {
    const action = {
        type: SAVE_CHIRP,
        payload: 'chirpy chirp'
    };
    const newState = chirpsReducer([], action);
    expect(newState).toEqual(['chirpy chirp']);
});

it('handles action of unknown type', () => {
    const newState = chirpsReducer([], {});
    expect(newState).toEqual([]);
});