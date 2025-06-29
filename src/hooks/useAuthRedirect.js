// useAuthRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthorized } from '../function/token';

export default function useAuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized()) {
            navigate('/Connexion');
        }
    }, []);
}
