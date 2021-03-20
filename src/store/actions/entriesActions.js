import {getToken} from '../../components/helpers/getToken';
const entriesApiUrl = 'https://radiant-dusk-52143.herokuapp.com/api/v1/entries'
const deleteEntryApiUrl = 'https://radiant-dusk-52143.herokuapp.com/api/v1/entries/:entryId/delete'

export const getEntries = () => {
    return (dispatch, getState) => {
        fetch(entriesApiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
        })
            .then((data) => {
                return data.json()
            })
            .then((response) => {
                dispatch({
                     type: 'GET ENTRIES',
                    getEntriesSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET ENTRIES ERROR',
                    getEntriesErrorTime: new Date(),
                    error
                })
            })
    }
}

export const createEntry = (entryData) => {
    return (dispatch, getState) => {
        fetch(entriesApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(entryData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'CREATE ENTRY SUCCESS',
                    createEntriesSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE ENTRY ERROR',
                    createEntriesErrorTime: new Date(),
                    error
                })
            })
    }
}

export const editEntry = (entryId, entryToUpdate) => {
    const editEntryApiUrl = `https://radiant-dusk-52143.herokuapp.com/api/v1/entries/${entryId}/edit`
    return (dispatch, getState) => {
        fetch(editEntryApiUrl, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(entryToUpdate)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'EDIT ENTRY SUCCESS',
                    editEntriesSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'EDIT ENTRY ERROR',
                    editEntriesErrorTime: new Date(),
                    error
                })
            })
    }
} 

export const deleteEntry = (entryId) => {
    const deleteEntryApiUrl = `https://radiant-dusk-52143.herokuapp.com/api/v1/entries/${entryId}/delete`
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
                dispatch({
                    type: 'DELETE ENTRY SUCCESS',
                    deleteEntriesSuucessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'DELETE ENTRY ERROR',
                    deleteEntriesErrorTime: new Date(),
                    error
                })
            })
    }
}