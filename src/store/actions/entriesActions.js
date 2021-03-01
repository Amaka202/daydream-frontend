import {getToken} from '../../components/helpers/getToken';
const entriesApiUrl = 'http://localhost:8000/api/v1/entries'

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
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'GET ENTRIES',
                    time: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET ENTRIES ERROR',
                    time: new Date(),
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
                    time: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE ENTRY ERROR',
                    time: new Date(),
                    error
                })
            })
    }
}