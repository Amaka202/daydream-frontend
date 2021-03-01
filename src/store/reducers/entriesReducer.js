const iniState = {}

const entriesReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET ENTRIES':
            console.log(' successful');  
            return {
                data: action.response,
                time: action.time
            }
        case 'GET ENTRIES ERROR':
            console.log('signup error');  
            return {
                ...state,
             } 
         case 'CREATE ENTRY SUCCESS':
            console.log('login success');  
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE ENTRY ERROR':
            console.log('login error');  
            return {
                ...state,
                authStatus: 'error',
             }     
         
        default:
            return state;
    }
}

export default entriesReducer;