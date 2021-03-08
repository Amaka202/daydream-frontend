const signUpApiUrl = 'https://radiant-dusk-52143.herokuapp.com/api/v1/signup'
// const signUpApiUrlLocal = 'http://localhost:8000/api/v1/signup'
const loginApiUrl = 'https://radiant-dusk-52143.herokuapp.com/api/v1/login'

export const createUser = (userData) => {
    return (dispatch, getState) => {
        fetch(signUpApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'CREATE USER SUCCESS',
                    time: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE USER ERROR',
                    time: new Date(),
                    error
                })
            })
    }
}

export const loginUser = (userData) => {
    return (dispatch, getState) => {
        fetch(loginApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'LOGIN USER SUCCESS',
                    time: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'LOGIN USER ERROR',
                    time: new Date(),
                    error
                })
            })
    }
}
