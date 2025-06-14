import {getInfoNS} from "../../route/utilisateur";

export async function getInfoNonSensible(token , id_utilisateur) {

    const [status, data] = await getInfoNS(token, id_utilisateur );
    if(status === 200){
        return data.success;
    }

}