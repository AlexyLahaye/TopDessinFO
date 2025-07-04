import {route} from "./route";

// GET
export async function getSignalementPost(token, postId) {
    if (!token) return [];
    try {
        const response = await fetch(route +`repport/getSignalPost/${postId}`, {
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

export async function getReclamation(token, tokenId) {
    if (!token) return [];
    try {
        const response = await fetch(route +`repport/getReclamation/${tokenId}`, {
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

export async function getRéclamationPost(token, postId) {
    if (!token) return [];
    try {
        const response = await fetch(route +`repport/getReclamationPost/${postId}`, {
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

export async function getAllMineReclamations(token, tokenId) {
    if (!token) return [];
    try {
        const response = await fetch(route +`repport/allMineReclamations/${tokenId}`, {
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

export async function getAllRaison(token) {
    if (!token) return [];
    try {
        const response = await fetch(route +`repport/raisonAll`, {
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

export async function getOnePost(token, postId) {
    if (!token) return [];
    try {
        const response = await fetch(route +`posts/getOnePost/${postId}`, {
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

// POST
export async function writeMess(token, userId, postId, commentaire, type) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/creaReclamation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ userId, postId, commentaire, type })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function approuvepost(token, postId) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/approuvePost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ postId })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function deletepost(token, postId) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/deletePost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ postId })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function signalCom(token, userId, comId) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/signalCom", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ userId, comId })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function signalPost(token, userId, postId, description, raison) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/signalPost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ userId, postId, raisonId: raison, description })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}

export async function createReclamation(token, userId, postId, commentaire) {
    if (!token) return [];
    try {
        const response = await fetch(route + "repport/creaReclamation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({ userId, postId, commentaire, type: 0 })
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
