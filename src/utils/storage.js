const key = 'user';

export const login = (user) => {
    localStorage.setItem(key, JSON.stringify({user, 'translation': [] }));
}

export const storeTranslation = (translation) => {
    localStorage.setItem(key, JSON.stringify({'translation': translation}));
}

export const loadTranslations = () => {
   return localStorage.getItem('translation');
}

export const clearTranslations = () => {
    localStorage.removeItem('translation');
}

