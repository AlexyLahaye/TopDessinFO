import {followFriend, estAmi, ajoutAmi, suppAmi, amis} from "../../route/follows";

export async function isFriend(token , id_utilisateur, idToken, ami, setAmi) {

    const [status, data] = await estAmi(token, id_utilisateur, idToken  );

    if(status === 200){
        setAmi(data.success);
    }else{
        setAmi(false);
    }

}

export async function addFriend(token , id_utilisateur, idToken, ami, setAmi) {

    const [status, data] = await ajoutAmi(token, id_utilisateur, idToken  );
    if(status === 200){

        //on vérifie si ça c'est bien ajouté dans sa liste d'ami
        const verif = await isFriend(token, id_utilisateur, idToken , ami, setAmi );

    }

}

export async function deleteFriend(token , id_utilisateur, idToken, ami, setAmi) {

    const [status, data] = await suppAmi(token, id_utilisateur, idToken  );
    if(status === 200){

        //on vérifie si ça c'est bien ajouté dans sa liste d'ami
        const verif = await isFriend(token, id_utilisateur, idToken , ami, setAmi );

    }

}

export async function getFriends(token ,  idToken ) {

    const [status, data] = await amis(token,  idToken  );
    return data.success;

}







