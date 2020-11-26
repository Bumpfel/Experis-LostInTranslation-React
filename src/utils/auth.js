export const logout = (user) => {
    localStorage.removeItem('user')
}

export const isLoggedIn = () => {
    return Boolean(localStorage.getItem('user'));
}
