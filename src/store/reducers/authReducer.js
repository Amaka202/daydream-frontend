const iniState = {
    status: 'notAuth'
} 

const authReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE USER SUCCESS':
            return {
                data: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE USER ERROR':
            return {
                ...state,
                serverError: 'server error',
                time: action.time

             } 
         case 'LOGIN USER SUCCESS':
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'LOGIN USER ERROR':
            return {
                ...state,
                authStatus: 'error',
             }
        case 'RESET_AUTH_STATE':
           return {
               state
            }          
         
        default:
            return state;
    }
}

export default authReducer;