import {route} from './route';

// GET

export async function getReseaux(token, id_utilisateur) {

    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route +`users/getReseaux/${id_utilisateur}`, {
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

export async function getInfoNS(token, id_utilisateur) {
    try {
        const response = await fetch(`${route}users/info/${id_utilisateur}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json(); // réponse JSON du backend

        return [response.status, data]; // tableau contenant le code HTTP et la réponse
    } catch (error) {
        console.error("Erreur lors de l'appel à getInfoNS:", error);
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


// POST

export async function updateReseaux(token, userId, instagram, twitter, discord, twitch, tiktok, etsy) {

    if (!token) {
        return [];
    }
    try {
        const response = await fetch(route + "users/modifReseaux", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                "userId": userId,
                "instagram": instagram,
                "twitter": twitter,
                "discord": discord,
                "twitch": twitch,
                "tiktok": tiktok,
                "etsy": etsy
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// PATCH

export async function updateUser(token, userId, fields = {}) {
    // `fields` est un objet contenant uniquement les propriétés à modifier,
    // par exemple : { pseudo: "...", description: "...", mdp: "..." }

    if (!token) {
        return [401, { error: "Token manquant" }];
    }

    try {
        const response = await fetch(`${route}users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(fields),
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        console.error("Erreur updateUser:", error);
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

