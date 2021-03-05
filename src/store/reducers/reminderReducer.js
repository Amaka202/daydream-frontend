import { RESET_REMINDERS_STATE} from '../actions/resetStateAction';
const iniState = {}

const reminderReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET REMINDERS':
            console.log(' successful');  
            return {
                ...state,
                reminderData: action.response.data,
            }
        case 'GET REMINDERS ERROR':
            console.log('signup error');  
            return {
                ...state,
             } 
         case 'CREATE REMINDER SUCCESS':
            console.log('reminder success');  
            return {
                ...state,
                reminderCreated: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE REMINDER ERROR':
            console.log('reminder error');
            console.log(action.error);  
            return {
                ...state,
                reminderStatus: 'error',
                time: action.time

             }    
             
         case 'DELETE REMINDER SUCCESS':
            console.log('delete success');  
            return {
                ...state,
                timeDeleted: action.deleteTime,
            }
        case 'DELETE REMINDER ERROR':
            console.log('delete error');  
            return {
                ...state,
                authStatus: 'error',
             } 

        case 'RESET_REMINDERS_STATE':
            return {
                state
             }              

        default:
            return state;
    }
}

export default reminderReducer;