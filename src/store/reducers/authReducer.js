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
                authStatus: 'error',
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
         
        default:
            return state;
    }
}

export default authReducer;