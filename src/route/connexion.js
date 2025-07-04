import {route} from './route';


export async function inscriptionRoute(email, pseudo, mdp) {
    try {
        const response = await fetch(route + "users/crea", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "pseudo": pseudo,
                "mdp":  mdp
            }),
        });

        const data = await response.json(); // ici on attend le corps JSON

        return [response.status, data]; // tableau contenant le status et la réponse
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

// Fonction pour se connecter au site.
export async function connexionRoute(email, mdp) {
    try {
        const response = await fetch(route + "auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "mdp": mdp
            }),
        });

        const data = await response.json();

        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}