const signUpApiUrl = 'http://localhost:8000/api/v1/signup'
const loginApiUrl = 'http://localhost:8000/api/v1/login'

export const createUser = (userData) => {
    return (dispatch, getState) => {
        // async call to db
        const response = fetch(signUpApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).json()
            .then(() => {
                dispatch({
                    type: 'CREATE USER SUCCESS',
                    response
                })
            })
            .catch(() => {
                dispatch({
                    type: 'CREATE USER ERROR',
                })
            })
    }
}

export const loginUser = (userData) => {
    return (dispatch, getState) => {
        // async call to db
        const response = fetch(loginApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).json()
            .then(() => {
                dispatch({
                    type: 'LOGIN USER SUCCESS',
                    response
                })
            })
            .catch(() => {
                dispatch({
                    type: 'LOGIN USER ERROR',
                })
            })
    }
}