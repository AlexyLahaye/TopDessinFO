
import {addCom, deleteCom, getCommentaire} from "../../route/commentaire";
import {writeMess} from "../../route/signalement";
import UIkit from "uikit";

export async function recupCom(token , postId) {


    const [status, data] = await getCommentaire(token , postId);

    if(status === 200 ){
        return data.success
    }else{
        return data.error
    }
}

export async function envoieCom(token, userID,  postId, contenu) {

    if (contenu.trim() !== "") {

        const [status, data] = await addCom(token, userID, postId, contenu);

        if (status !== 200){
            UIkit.notification({
                message: 'Erreur lors de l\'envoie du message.',
                status: 'danger',
                pos: 'top-center',
                timeout: 3000
            });
        }

    }
}

export async function suppCom(token, userID,  comId) {

    const [status, data] = await deleteCom(token, userID, comId);

    if (status !== 200){
        UIkit.notification({
            message: 'Erreur lors de l\'envoie du message.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }


}