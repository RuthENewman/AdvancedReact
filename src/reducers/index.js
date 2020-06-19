import { combineReducers } from 'redux';
import chirpsReducer from 'reducers/chirps';

export default combineReducers({
    chirps: chirpsReducer
});