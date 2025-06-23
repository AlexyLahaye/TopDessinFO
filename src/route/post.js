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

export async function deletePostRoute(postId) {
    try {
        const response = await fetch(`http://localhost:3333/posts/${postId}`, {
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
        const response = await fetch("http://localhost:3333/posts");
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function getInfoPost(userId) {
    try {
        const response = await fetch(`http://localhost:3333/posts/user/${userId}`);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}


export async function getPostByIdRoute(postId) {
    try {
        const response = await fetch(`http://localhost:3333/posts/${postId}`);
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        return [500, { error: "Erreur réseau ou serveur" }];
    }
}
