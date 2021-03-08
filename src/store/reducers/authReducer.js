import {RESET_AUTH_STATE} from '../actions/resetStateAction';

const iniState = {
    status: 'notAuth'
} 

const authReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE USER SUCCESS':
            console.log('signup successful');  
            return {
                data: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE USER ERROR':
            console.log('signup error');  
            return {
                ...state,
                serverError: 'server error',
                time: action.time

             } 
         case 'LOGIN USER SUCCESS':
            console.log('login success');  
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'LOGIN USER ERROR':
            console.log('login error');  
            return {
                ...state,
                authStatus: 'error',
             }
        case 'RESET_AUTH_STATE':
           console.log('login error');  
           return {
               state
            }          
         
        default:
            return state;
    }
}

export default authReducer;