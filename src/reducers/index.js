import { combineReducers } from 'redux';
import chirpsReducer from 'reducers/chirps';
import authReducer from 'reducers/auth';

export default combineReducers({
    chirps: chirpsReducer,
    auth: authReducer
});