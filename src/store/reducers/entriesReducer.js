const iniState = {}

const entriesReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET ENTRIES':
            return {
                ...state,
                entriesData: action.response.data,
                getEntriesSuccessTime: action.getEntriesSuccessTime
            }
        case 'GET ENTRIES ERROR':
            return {
                ...state,
                getEntriesErrorTime: action.getEntriesErrorTime
             } 
         case 'CREATE ENTRY SUCCESS':
            return {
                ...state,
                entryCreated: action.response,
                authStatus: 'success',
                createEntriesSuccessTime: action.createEntriesSuccessTime
            }
        case 'CREATE ENTRY ERROR':
            return {
                ...state,
                postStatus: 'error',
                createEntriesErrorTime: action.createEntriesErrorTime

             }

         case 'EDIT ENTRY SUCCESS':
            return {
                ...state,
                editedData: action.response,
                editEntriesSuccessTime: action.editEntriesSuccessTime,
            }
        case 'EDIT ENTRY ERROR':
            return {
                ...state,
                authStatus: 'error',
                editEntriesErrorTime: action.editEntriesErrorTime
             }     
             
         case 'DELETE ENTRY SUCCESS':
            return {
                ...state,
                deleteEntriesSuucessTime: action.deleteEntriesSuucessTime,
            }
        case 'DELETE ENTRY ERROR':
            return {
                ...state,
                authStatus: 'error',
                deleteEntriesErrorTime: action.deleteEntriesErrorTime
             } 
        default:
            return state;
    }
}

export default entriesReducer;