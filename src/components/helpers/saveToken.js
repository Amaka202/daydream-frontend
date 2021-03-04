export const saveToken = (userToken) => {
    return localStorage.setItem('dayDreamToken', userToken)
}