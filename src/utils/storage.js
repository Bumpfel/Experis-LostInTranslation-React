const key = 'translations';


export const storeUser = () => {
    localStorage.setItem(key, user);
}

export const storeTranslation = (translation) => {
    if (translation !== '') {
        const translated = loadTranslations()

        translated.push(translation);

        if (translated.length > 10){
            translated.shift();
        }

        localStorage.setItem(key, JSON.stringify(translated));
    }
}

export const loadTranslations = () => {
    const existingItems = localStorage.getItem(key)
    return JSON.parse(existingItems) || []
}

export const clearTranslations = () => {
    localStorage.removeItem(key);
}