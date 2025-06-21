export async function addPostRoute(formData) {
    try {
        const response = await fetch("http://localhost:3333/posts/crea", {
            method: 'POST',
            body: formData // ⚠️ Pas de headers ici car FormData gère les boundaries
        });

        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}