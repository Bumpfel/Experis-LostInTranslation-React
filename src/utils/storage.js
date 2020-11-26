const tKey = 'translations';
const uKey = 'user';

export const storeUser = (user) => {
    localStorage.setItem(uKey, user);
}

export const clearUser = (user) => {
    localStorage.removeItem(uKey)
    clearTranslations();
}

export const getUser = () => {
    return localStorage.getItem(uKey);
}

export const storeTranslation = (translation) => {
    if (translation !== '') {
        const translated = loadTranslations()

        translated.push(translation);

        if (translated.length > 10){
            translated.shift();
        }

        localStorage.setItem(tKey, JSON.stringify(translated));
    }
}

export const loadTranslations = () => {
    const existingItems = localStorage.getItem(tKey)
    return existingItems ? JSON.parse(existingItems) : []
}

export const clearTranslations = () => {
    localStorage.removeItem(tKey);
}