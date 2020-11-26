import { storeUser, clearUser, isUserLoggedIn } from "./storage";

export const login = (user) => {
    storeUser(user)
}

export const logout = (user) => {
    clearUser(user)
}

export const isLoggedIn = () => {
    return isUserLoggedIn();
}
