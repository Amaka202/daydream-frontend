const iniState = {}

const reminderReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET REMINDERS':
            return {
                ...state,
                reminderData: action.response.data,
                getRemindersSucesstime: action.getRemindersSucesstime
            }
        case 'GET REMINDERS ERROR':
            return {
                ...state,
                getRemindersErrortime: action.getRemindersErrortime
             } 
         case 'CREATE REMINDER SUCCESS':
            return {
                ...state,
                reminderCreated: action.response,
                authStatus: 'success',
                createRemindersSucesstime: action.createRemindersSucesstime
            }
        case 'CREATE REMINDER ERROR':
            return {
                ...state,
                reminderStatus: 'error',
                createRemindersErrortime: action.createRemindersErrortime

             }    
             
         case 'DELETE REMINDER SUCCESS':
            return {
                ...state,
                deleteRemindersSucesstime: action.deleteRemindersSucesstime,
            }
        case 'DELETE REMINDER ERROR':
            console.log('delete error');  
            return {
                ...state,
                authStatus: 'error',
                deleteRemindersErrortime: action.deleteRemindersErrortime
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