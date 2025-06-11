import { useEffect } from 'react';
import { getToken } from '../function/token';

const useAuth = () => {
    useEffect(() => {
        const token = getToken();

        if (window.location.pathname === '/Connexion') {
            return;
        }

        if (!token) {
            window.location.href = '/Connexion';
        }
    }, []);
};

export default useAuth;
