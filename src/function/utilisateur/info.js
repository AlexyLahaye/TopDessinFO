import {getInfoNS, updateUser} from "../../route/utilisateur";

export async function getInfoNonSensible(token , id_utilisateur) {

    const [status, data] = await getInfoNS(token, id_utilisateur );
    if(status === 200){
        return data.success;
    }

}

export async function updateInfoUser(
    token,
    id_utilisateur,
    pseudo,
    description,
    setError,
    setMessError,
    setSuccess,
    setMessSuccess,
    setRechargePage,
    rechargePage
) {
    // Prépare les champs à mettre à jour
    const fields = {};
    if (pseudo !== undefined) fields.pseudo = pseudo || null;
    if (description !== undefined) fields.description = description || null;

    // Appelle l'API
    const [status, data] = await updateUser(token, id_utilisateur, fields);

    if (status === 200) {
        setSuccess(true);
        setMessSuccess(data.success || "Mise à jour réussie");
        setError(false);
        setMessError("");
        setRechargePage(!rechargePage);
    } else {
        setError(true);
        setMessError(data.error || "Erreur lors de la mise à jour");
        setSuccess(false);
        setMessSuccess("");
    }
}
