import {getReseaux} from "../../route/utilisateur";
import {getID, getToken} from "../token";


export async function getInfoReseaux(token , id_utilisateur) {

    const [status, data] = await getReseaux(token, id_utilisateur );
    if(data.success !== null ){
        return [data.success];
    }

}

export async function setVar(
    setInstagram,
    setTwitter,
    setTiktok,
    setTwitch,
    setDiscord,
    setEtsy,
    token,
    id_utilisateur
) {
    try {
        const [status, data] = await getReseaux(token, id_utilisateur );

        if(data.success !== null ){

            setInstagram(data.success.instagram || "");
            setTwitter(data.success.twitter || "");
            setTiktok(data.success.tiktok || "");
            setTwitch(data.success.twitch || "");
            setDiscord(data.success.discord || "");
            setEtsy(data.success.etsy || "");
        }


    } catch (error) {
        console.error("Erreur lors de l'initialisation des réseaux :", error);
    }
}


