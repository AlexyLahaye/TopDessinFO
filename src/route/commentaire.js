//get
import {route} from "./route";

export async function getCommentaire(token, postId) {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`commentaire/getCom/${postId}`, {
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


//post

export async function addCom(token, userId, postId, contenu) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "commentaire/creaCom", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "userId" : userId,
                "postId" : postId,
                "contenu" : contenu
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function deleteCom(token, userId, comId) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "commentaire/suppCom", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "userId": userId,
                "comId" : comId
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}