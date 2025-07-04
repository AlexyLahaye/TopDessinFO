import { route } from "./route";

export async function estAmi(token, id_utilisateur, idToken) {
    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route + `follow/isFriend/${idToken}/${id_utilisateur}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function amis(token, idToken) {
    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route + `follow/amis/${idToken}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            }
        });

        const data = await response.json();
        return [response.status, data];

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function ajoutAmi(token, id_utilisateur, idToken) {
    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route + "follow/ajoutAmi", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({
                "id": idToken,
                "idAmi": id_utilisateur
            }),
        });

        const data = await response.json();
        return [response.status, data];

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function suppAmi(token, id_utilisateur, idToken) {
    if (!token) {
        return [];
    }

    try {
        const response = await fetch(route + "follow/suppAmi", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({
                "id": idToken,
                "idAmi": id_utilisateur
            }),
        });

        const data = await response.json();
        return [response.status, data];

    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
