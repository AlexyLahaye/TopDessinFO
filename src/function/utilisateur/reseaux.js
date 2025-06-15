import {getReseaux, updateReseaux} from "../../route/utilisateur";
import {getID, getToken} from "../token";


export async function getInfoReseaux(token , id_utilisateur) {

    const [status, data] = await getReseaux(token, id_utilisateur );
    if(data.success !== null ){
        return [data.success];
    }

}


export async function updateInfoReseaux(token, id_utilisateur, instagram, twitter, discord, twitch, tiktok, etsy,
                                        setError, setMessError, setSuccess, setMessSuccess, setRechargePage, rechargePage) {

    if(instagram === "") instagram = null;
    if(twitter === "") twitter = null;
    if(discord === "") discord = null;
    if(twitch === "") twitch = null;
    if(tiktok === "") tiktok = null;
    if(etsy === "") etsy = null;

    console.log("je passe dedans")

    const [status, data] = await updateReseaux(token, id_utilisateur, instagram, twitter, discord, twitch, tiktok, etsy );

    if(status === 200 ){

        //affichage des messages d'alerte
        setSuccess(true);
        setMessSuccess(data.success);

        setError(false);
        setMessError("");

        // on recharge la page
        setRechargePage(!rechargePage);
    }
    else{

        //affichage des messages d'alerte
        setSuccess(false);
        setMessSuccess("");

        setError(true);
        setMessError(data.error);

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




