import {
    createTournoisRoute,
    deleteTournoisRoute,
    getAllTournoisRoute,
    getTournoisByUserRoute,
    getTournoisByIdRoute,
} from "../../route/tournois";
import { route } from "../../route/route";
import UIkit from "uikit";

// ✅ Créer un tournoi
export async function createTournois(
    setError,
    setMessError,
    setSuccess,
    setMessSuccess,
    formDataTournois,
    resetForm
) {
    const [status, data] = await createTournoisRoute(formDataTournois);

    if (status === 201) {
        setSuccess(true);
        setError(false);
        setMessSuccess("Tournoi créé avec succès.");
        if (resetForm) resetForm();
    } else {
        setError(true);
        setSuccess(false);
        setMessError(data.error || "Erreur lors de la création du tournoi.");
    }
}

// ✅ Supprimer un tournoi
export async function deleteTournois(
    tournoiId,
    setError,
    setMessError,
    setSuccess,
    setMessSuccess
) {
    const [status, data] = await deleteTournoisRoute(tournoiId);

    if (status === 200) {
        setSuccess(true);
        setError(false);
        setMessSuccess("Tournoi supprimé avec succès.");
    } else {
        setError(true);
        setSuccess(false);
        setMessError(data.error || "Erreur lors de la suppression.");
    }
}

// ✅ Récupérer tous les tournois
export async function getAllTournois(setTournois) {
    const [status, data] = await getAllTournoisRoute();

    if (status === 200) {
        setTournois(data);
    } else {
        UIkit.notification("Erreur lors du chargement des tournois", "danger");
    }
}

// ✅ Récupérer les tournois d’un utilisateur
export async function getTournoisByUser(userId, setTournois) {
    const [status, data] = await getTournoisByUserRoute(userId);

    if (status === 200) {
        setTournois(data);
    } else {
        UIkit.notification("Erreur lors du chargement des tournois utilisateur", "danger");
    }
}

// ✅ Récupérer un tournoi par son ID
export async function getTournoisById(tournoiId) {
    const [status, data] = await getTournoisByIdRoute(tournoiId);
    return [status, data];
}
