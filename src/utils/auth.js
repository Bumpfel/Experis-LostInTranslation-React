import { clearTranslations } from "./storage";

const key = 'user';

export const login = (user) => {
    storeUser(user)
}

export const logout = (user) => {
    localStorage.removeItem(key)
    clearTranslations();
}

export const isLoggedIn = () => {
    return Boolean(localStorage.getItem(key));
}
