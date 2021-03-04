export const getToken = () => {
    const token = localStorage.getItem('dayDreamToken')
    return token;
}