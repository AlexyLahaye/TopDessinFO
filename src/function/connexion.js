import {route} from "../route/route";
import {inscriptionRoute, connexionRoute} from "../route/connexion";

export async function inscription(   setEtat,
                                     setError,
                                     setMessError,
                                     setSuccess,
                                     setMessSuccess,
                                     setMdpcacheVerif,
                                     setMdpcache,
                                     inputEmail,
                                     inputMdp,
                                     inputMdpVerif,
                                     inputPseudo,
                                     setInputEmail,
                                     setInputMdp,
                                     setInputMdpVerif,
                                     setInputPseudo) {

    //vérification que aucun champs soit nul
    if (!inputEmail || !inputMdp || !inputMdpVerif || !inputPseudo) {
        setError(true);
        setMessError("Tous les champs doivent être remplis.")
    }
    else{

        if(inputMdp !== inputMdpVerif ){
            setError(true);
            setMessError("Les mots de passes ne sont pas égaux.")
            setInputMdp("")
            setInputMdpVerif("")
        }
        else if (inputMdp.length < 8 ) {
            setError(true);
            setMessError("Le mot de passe doit faire au minimum 8 caractères.")
            setInputMdp("")
            setInputMdpVerif("")
        }
        else{

            const [status, data] = await inscriptionRoute(inputEmail, inputPseudo, inputMdp);


            if(status == 200){
                setError(false);
                setSuccess(true);
                setEtat('con')
                setMessSuccess(data.success)

                setMdpcacheVerif(true)
                setMdpcache(true)

                setInputMdp("")
                setInputMdpVerif("")
                setInputPseudo("")

            }
            else{
                setError(true);
                setMessError(data.error)
            }
        }
    }
}

// Fonction pour se connecter
export async function connexion(
    setError,
    setMessError,
    inputEmail,
    inputMdp,
    tokenManager, // ajoute ceci pour stocker le token côté front
    navigate // si tu utilises react-router-dom v6, pour rediriger après
) {
    // vérifie les champs
    if (!inputEmail || !inputMdp) {
        setError(true);
        setMessError("Veuillez remplir tous les champs.");
        return;
    }

    const [status, data] = await connexionRoute(inputEmail, inputMdp);

    if (status === 200 && data.token) {
        // Stock le token
        tokenManager(data.token);

        // Redirection
        if (navigate) navigate('/');
    } else {
        // Erreur d'identifiants
        setError(true);
        setMessError(data.error || "Identifiants incorrects ou compte inexistant.");
    }
}


// Fonction pour déconnecter l'utilisateur
export function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id_user');
    window.location.href = '/Connexion';
}