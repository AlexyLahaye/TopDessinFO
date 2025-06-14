import {route} from './route';

// GET

export async function getReseaux(token, id_utilisateur) {

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