export const storeTranslation = (translation) => {
    localStorage.setItem('translation', JSON.stringify(translation));
}

export const loadTranslations = () => {
    localStorage.getItem('translation');
}

export const clearTranslations = () => {
    localStorage.removeItem('translation');
}

