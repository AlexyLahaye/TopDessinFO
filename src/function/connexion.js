import {route} from "../route/route";
import {inscriptionRoute} from "../route/connexion";

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