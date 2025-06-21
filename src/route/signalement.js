

import {route} from "./route";


// GET
export async function getSignalementPost(token, postId) {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`repport/getSignalPost/${postId}`, {
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


export async function getReclamation(token, tokenId) {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`repport/getReclamation/${tokenId}`, {
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

export async function getRéclamationPost(token, postId) {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`repport/getReclamationPost/${postId}`, {
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

//POST

export async function writeMess(token, userId, postId, commentaire, type) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "repport/creaReclamation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "userId": userId,
                "postId": postId,
                "commentaire": commentaire,
                "type" : type
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function approuvepost(token, postId) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "repport/approuvePost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "postId": postId
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function deletepost(token, postId) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "repport/deletePost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "postId": postId
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}