import {getMail} from "../utilisateur/info";
import {getMailUser, updateMail} from "../../route/utilisateur";


export async function initVar(token , id_utilisateur, setMail) {

    const mail = await getMail(token , id_utilisateur);


    setMail(mail)


}


export async function modifMail(token , id_utilisateur, mail, setMail , setError, setMessError, setSuccess, setMessSuccess) {

    if (mail.trim() === "") {

        setError(true);
        setMessError("L'email est vide.");
        setMail("");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {

        setError(true);
        setMessError("Format d'email invalide.");
        setMail("");

    } else {
        const [status, data] = await updateMail(token , id_utilisateur, mail);
        if(status === 200){

            setError(false);
            setMessError("");

            setSuccess(true);
            setMessSuccess(data.success);

        }
        else{
            setMail("");

            setError(true);
            setMessError(data.error);

            setSuccess(false);
            setMessSuccess("");

        }
    }




}
