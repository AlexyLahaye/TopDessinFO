import { route } from "./route";

export async function addPostRoute(formData) {
    try {
        const response = await fetch(route + "posts/crea", {
            method: 'POST',
            body: formData // ⚠️ Pas de headers ici car FormData gère les boundaries
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function deletePostRoute(postId) {
    try {
        const response = await fetch(route + `posts/${postId}`, {
            method: 'DELETE',
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

export async function getAllPostsRoute() {
    try {
        const response = await fetch(route + "posts", {
            method: 'GET',
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

export async function getInfoPost(userId) {
    try {
        const response = await fetch(route + `posts/user/${userId}`, {
            method: 'GET',
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

export async function getPostByIdUser(userId) {
    try {
        const response = await fetch(route + `posts/${userId}`, {
            method: 'GET',
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

export async function getPostReportedByIdUser(token, userId) {
    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route + `posts/${userId}/reported`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function getUserFromPost(postId) {
    try {
        const response = await fetch(route + `posts/user-from-post/${postId}`, {
            method: 'GET',
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

export async function getFollowedPostsRoute(userId) {
    try {
        const response = await fetch(route + `posts/followed/${userId}`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

