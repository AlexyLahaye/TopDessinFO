import {jwtDecode} from 'jwt-decode';

// Fonction pour vérifier si le token est valide
export function isTokenValid(token) {
    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

// Fonction pour obtenir le token depuis le sessionStorage
export function getToken() {
    const token = sessionStorage.getItem('token');
    if (token && isTokenValid(token)) {
        return token;
    }
    sessionStorage.removeItem('token');
    return null;
}

//TODO Pourait aussi gérer dans cette fonction les droits ?
export function isAuthorized() {
    return getToken() !== null;
}