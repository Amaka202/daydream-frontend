const iniState = {}

const entriesReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET ENTRIES':
            console.log(' successful');  
            return {
                ...state,
                entriesData: action.response.data,
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
                entryCreated: action.response,
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