export const login = (user) => {
    localStorage.setItem('user',user);
}

export const logout = (user) => {
    localStorage.removeItem('user')
}

export const isLoggedIn = () => {
    return Boolean(localStorage.getItem('user'));
}
