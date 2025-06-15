import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { isAuthorized } from '../function/token';

export default function useAuthCheck() {
    return useCallback(() => {
        const authorized = isAuthorized();

        if (!authorized) {
            toast.error('Session expirée, veuillez rafraîchir la page pour vous reconnecter');
        }

        return authorized;
    }, []);
}

/* Son utilisation exemple :
    function MonComposant() {
      const checkAuth = useAuthCheck();

      const handleAction = () => {
        if (!checkAuth()) return;

        // Si la session est valide, on continue
        faireAppelAPI();
      };

      return <button onClick={handleAction}>Enregistrer</button>;
    }
*/
