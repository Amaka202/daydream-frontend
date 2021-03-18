export const saveToken = (userToken) => {
    return localStorage.setItem('dayDreamToken', userToken)
}

export const deleteToken = () => {
    return localStorage.removeItem('dayDreamToken')
}