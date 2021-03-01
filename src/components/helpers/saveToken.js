export const saveToken = (userToken) => {
    return localStorage.setItem('token', userToken)
}