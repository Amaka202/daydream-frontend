import { logDOM } from "@testing-library/react";

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
            console.log('login success');  
            return {
                ...state,
                entryCreated: action.response,
                authStatus: 'success',
                createEntriesSuccessTime: action.createEntriesSuccessTime
            }
        case 'CREATE ENTRY ERROR':
            console.log('login error');  
            return {
                ...state,
                postStatus: 'error',
                createEntriesErrorTime: action.createEntriesErrorTime

             }

         case 'EDIT ENTRY SUCCESS':
            console.log('edit success'); 
            console.log(action.response); 
            return {
                ...state,
                editedData: action.response,
                editEntriesSuccessTime: action.editEntriesSuccessTime,
            }
        case 'EDIT ENTRY ERROR':
            console.log('edit error');  
            return {
                ...state,
                authStatus: 'error',
                editEntriesErrorTime: action.editEntriesErrorTime
             }     
             
         case 'DELETE ENTRY SUCCESS':
            console.log('delete success');  
            return {
                ...state,
                deleteEntriesSuucessTime: action.deleteEntriesSuucessTime,
            }
        case 'DELETE ENTRY ERROR':
            console.log('delete error');  
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