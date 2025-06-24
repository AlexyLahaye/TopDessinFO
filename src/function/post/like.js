
import UIkit from "uikit";
import {createLike, deleteLike, getAllPostsLikedByUser, hasUserLiked} from "../../route/like";

// Vérifie si l'utilisateur a liké un post
export async function checkIfLiked(token, userId, postId) {
    const [status, data] = await hasUserLiked(token, userId, postId);

    if (status === 200) {
        return data.liked; // true ou false
    } else {
        UIkit.notification({
            message: 'Erreur lors de la vérification du like.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
        return false;
    }
}

// Récupère tous les posts likés par l'utilisateur
export async function getLikedPosts(token, userId) {
    const [status, data] = await getAllPostsLikedByUser(token, userId);

    if (status === 200) {
        return data.likedPosts; // tableau d'IDs
    } else {
        UIkit.notification({
            message: 'Erreur lors de la récupération des likes.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
        return [];
    }
}

// Envoie un like
export async function sendLike(token, userId, postId) {
    const [status, data] = await createLike(token, userId, postId);

    if (status !== 200) {
        UIkit.notification({
            message: 'Erreur lors de l\'ajout du like.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }
}

// Supprime un like (par son ID)
export async function removeLike(token, userId, postId) {
    const [status, data] = await deleteLike(token, userId, postId);

    if (status !== 200) {
        UIkit.notification({
            message: 'Erreur lors de la suppression du like.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }
}

export function timeSince(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} sec`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} h`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} j`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} mois`;
    const years = Math.floor(months / 12);
    return `${years} an${years > 1 ? 's' : ''}`;
}


