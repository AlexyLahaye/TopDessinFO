
import {route} from "./route";

export async function getTournoiById( token, id) {
    if (!token || !id) {
        return [];
    }

    try {
        const response = await fetch(route + `tournois/getTournoi/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        return [response.status, data]; // [status, data ou erreur]
    }
    catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}