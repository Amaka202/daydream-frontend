const iniState = {}

const authReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE USER SUCCESS':
            console.log('login successful');  
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
            }
        case 'CREATE USER ERROR':
            console.log('login success');  
            return {
                ...state,
                authStatus: 'error',
             } 
         case 'LOGIN USER SUCCESS':
            console.log('success');  
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
            }
        case 'LOGIN USER ERROR':
            console.log('error');  
            return {
                ...state,
                authStatus: 'error',
             }     
         
        default:
            return state;
    }
}

export default authReducer;