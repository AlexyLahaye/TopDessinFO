
import {route} from "./route";

// ✅ Créer un tournoi
export async function createTournoisRoute(tournoiData) {
    try {
        const response = await fetch(route + "tournois", {
            method: "POST",
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
            body: tournoiData, // ✅ on envoie directement le FormData
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


// ✅ Supprimer un tournoi
export async function deleteTournoisRoute(tournoiId) {
    try {
        const response = await fetch(route + `tournois/${tournoiId}`, {
            method: "DELETE",
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// ✅ Récupérer tous les tournois
export async function getAllTournoisRoute() {
    try {
        const response = await fetch(route + "tournois", {
            method: "GET",
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
// ✅ Récupérer un tournoi par son ID
export async function getTournoisByIdRoute(tournoiId) {
    try {
        const response = await fetch(route + `tournois/${tournoiId}`, {
            method: "GET",
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// ✅ Récupérer les tournois organisés par un utilisateur
export async function getTournoisByUserRoute(userId) {
    try {
        const response = await fetch(route + `tournois/user/${userId}`, {
            method: "GET",
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
export async function getTournoiById( token, id) {
    if (!token || !id) {
        return [];
    }

    try {
        const response = await fetch(route + `tournois/getTournoi/${id}`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        return [response.status, data]; // [status, data ou erreur]
    }
    catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

