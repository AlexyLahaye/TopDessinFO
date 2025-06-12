import {getReseaux} from "../../route/utilisateur";


export async function getInfoReseaux(token) {


    const [status, data] = await getReseaux(token );

    return [data.success];

}


export async function setVar(
    setInstagram,
    setTwitter,
    setTiktok,
    setTwitch,
    setDiscord,
    setEtsy,
    token
) {
    try {
        const [status, data] = await getReseaux(token );


        console.log(data.success.instagram)

        setInstagram(data.success.instagram || "");
        setTwitter(data.success.twitter || "");
        setTiktok(data.success.tiktok || "");
        setTwitch(data.success.twitch || "");
        setDiscord(data.success.discord || "");
        setEtsy(data.success.etsy || "");

    } catch (error) {
        console.error("Erreur lors de l'initialisation des réseaux :", error);
    }
}


