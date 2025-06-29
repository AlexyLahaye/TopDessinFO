import {route} from "./route";

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
            method: 'DELETE'
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function getAllPostsRoute() {
    try {
        const response = await fetch(route + "posts");
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function getInfoPost(userId) {
    try {
        const response = await fetch(route + `posts/user/${userId}`);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function getPostByIdUser(userId) {
    try {
        const response = await fetch(route + `posts/${userId}`);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function getPostReportedByIdUser(token, userId)  {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`posts/${userId}/reported`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`}
        })

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse
    }
    catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }

}

export async function getUserFromPost(postId) {
    try {
        const response = await fetch(route + `posts/user-from-post/${postId}`);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

