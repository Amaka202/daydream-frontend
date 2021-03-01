import authReducer from './authReducer';
import entriesReducer from './entriesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    entries: entriesReducer
})

export default rootReducer;