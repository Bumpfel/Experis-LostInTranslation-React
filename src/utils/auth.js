export const login = (user) => {
    localStorage.setItem('user',user);
}

export const logout = (user) => {
    localStorage.removeItem('user',user)
    localStorage.removeItem('loggedin');
}

export const isLoggedIn = () => {
    localStorage.setItem('loggedin',true);
}