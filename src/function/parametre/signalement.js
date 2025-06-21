import {getMail} from "../utilisateur/info";
import {getReclamation, getRéclamationPost, getSignalementPost} from "../../route/signalement";


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




