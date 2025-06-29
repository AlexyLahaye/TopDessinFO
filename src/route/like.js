import { route } from "./route";

// Créer un like
export async function createLike(token, userId, postId) {
    if (!token) return [];

    try {
        const response = await fetch(route + "like/creaLike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
            },
            body: JSON.stringify({ userId, postId })
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// Supprimer un like (par son ID)
export async function deleteLike(token, userId, postId) {
    if (!token) return [];

    try {
        const response = await fetch(route + "like/suppLike", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
            },
            body: JSON.stringify({ userId, postId })
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// Vérifier si un utilisateur a liké un post
export async function hasUserLiked(token, userId, postId) {
    if (!token) return [];

    try {
        const response = await fetch(route + `like/hasLiked?userId=${userId}&postId=${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// Récupérer tous les posts likés par un utilisateur
export async function getAllPostsLikedByUser(token, userId) {
    if (!token) return [];

    try {
        const response = await fetch(route + `like/user/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
