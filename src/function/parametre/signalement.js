import {
    approuvepost,
    deletepost,
    getReclamation,
    getRéclamationPost,
    getSignalementPost,
    writeMess
} from "../../route/signalement";

import UIkit from 'uikit';


export async function recupSignalementPost(token , postId) {

    const [status, data] = await getSignalementPost(token , postId);

    if(status === 200 ){
        return data.success
    }else{
        return data.error
    }

}

export async function recupRéclamationt(token , tokenId) {

    const [status, data] = await getReclamation(token , tokenId);

    if(status === 200 ){
        return data.success
    }else{
        return data.error
    }

}

export async function recupRéclamationtPost(token , postId) {

    const [status, data] = await getRéclamationPost(token , postId);

    if(status === 200 ){
        return data.success
    }else{
        return data.error
    }

}

export async function sendMess(token, tokenId, postId, commentaire, type, setError, setMessError) {

    if (commentaire.trim() !== "") {

        const [status, data] = await writeMess(token, tokenId, postId, commentaire, type);
        console.log(status)
        console.log(data)
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

export async function aprouvPost(token, postId) {
    const [status, data] = await approuvepost(token, postId);

    if (status === 200) {
        UIkit.notification({
            message: 'Le post a été approuvé avec succès.',
            status: 'success',
            pos: 'top-center',
            timeout: 3000
        });
    } else {
        UIkit.notification({
            message: 'Erreur lors de l\'approbation du post.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }
}

export async function suppPost(token, postId) {
    const [status, data] = await deletepost(token, postId);

    if (status === 200) {
        UIkit.notification({
            message: 'Le post a été supprimé avec succès.',
            status: 'success',
            pos: 'top-center',
            timeout: 3000
        });
    } else {
        UIkit.notification({
            message: 'Erreur lors de la suppression du post.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }
}







