import { Navigate } from 'react-router-dom';
import { isAuthorized } from '../function/token';

export default function SecuredRoute({ children }) {
    if (!isAuthorized()) {
        return <Navigate to="/Connexion" replace />;
    }
    //TODO c'est ici que l'on peut faire des verification pour du spécifique, isAdmin, isBanned, ta capté hehe
    // tu passe ene props une donnée dans protectedRoute et tu la traite ici,
    //Le return children sert comme un then ou un next,
    return children;
}
