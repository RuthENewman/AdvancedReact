import { saveChirp } from 'actions';
import { SAVE_CHIRP } from 'actions/types';

describe('saveChirp action', () => {
    it('has the correct type', () => {
        const action = saveChirp();
        expect(action.type).toEqual(SAVE_CHIRP);
    });
    it('has the correct payload', () => {
        const action = saveChirp('new chirp');
        expect(action.payload).toEqual('new chirp');
    });
});