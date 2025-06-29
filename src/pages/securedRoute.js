import { Navigate, useLocation } from 'react-router-dom';
import { isAuthorized } from '../function/token';

export default function SecuredRoute({ children, token }) {
    const loc = useLocation();

    if (loc.pathname === '/connexion') {
        return children;
    }

    if (token === null) {
        return <div>Chargement de la session...</div>;
    }

    if (!isAuthorized()) {
        return <Navigate to="/connexion" replace />;
    }

    return children;
}
