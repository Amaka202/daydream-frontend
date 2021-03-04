import authReducer from './authReducer';
import entriesReducer from './entriesReducer';
import {combineReducers} from 'redux';
import reminderReducer from './reminderReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    entries: entriesReducer,
    reminders: reminderReducer
})

export default rootReducer;