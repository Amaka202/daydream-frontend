import {getToken} from '../../components/helpers/getToken';
const reminderApiUrl = 'https://radiant-dusk-52143.herokuapp.com/api/v1/reminders'

export const getReminders = () => {
    return (dispatch, getState) => {
        fetch(reminderApiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'GET REMINDERS',
                    getRemindersSucesstime: new Date(),
                    response
                 })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET REMINDERS ERROR',
                    getRemindersErrortime: new Date(),
                    error
                })
            })
    }
}

export const createReminder = (redminderData) => {
    return (dispatch, getState) => {
        fetch(reminderApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(redminderData)
        })
            .then((data) => data.json())
            .then((response) => {
                console.log('got here');
                dispatch({
                    type: 'CREATE REMINDER SUCCESS',
                    createRemindersSucesstime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE REMINDER ERROR',
                    createRemindersErrortime: new Date(),
                    error
                })
            })
    }
}

export const deleteReminder = (reminderId) => {
    const deleteEntryApiUrl = `https://radiant-dusk-52143.herokuapp.com/api/v1/reminders/${reminderId}/delete`
    return (dispatch, getState) => {
        fetch(deleteEntryApiUrl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
        })
            .then((data) => data.json())
            .then((response) => {
                console.log('git ahere');
                dispatch({
                    type: 'DELETE REMINDER SUCCESS',
                    deleteRemindersSucesstime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'DELETE REMINDER ERROR',
                    deleteRemindersErrortime: new Date(),
                    error
                })
            })
    }
}