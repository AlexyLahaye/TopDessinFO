import {addPostRoute, getUserFromPost} from "../../route/post";
import UIkit from "uikit";

export async function addPost(
    setError,
    setMessError,
    setSuccess,
    setMessSuccess,
    inputDescription,
    inputCategorie,
    inputType,
    inputEtat,
    inputHashtags,
    inputImages,
    userId,
    resetForm // une fonction pour réinitialiser les champs si tu veux
) {
    if (!inputDescription || !inputCategorie || !inputType) {
        setError(true);
        setMessError("Tous les champs doivent être remplis.");
        return;
    }

    // Construction du formData
    const formData = new FormData();
    formData.append("description", inputDescription);
    formData.append("categorie", inputCategorie);
    formData.append("type", inputType);
    formData.append("userId", userId);
    formData.append("hashtags", JSON.stringify(inputHashtags));

    for (let i = 0; i < inputImages.length; i++) {
        formData.append("images", inputImages[i]);
    }

    const [status, data] = await addPostRoute(formData);

    if (status === 201) {
        setSuccess(true);
        setError(false);
        setMessSuccess(data.message);
        if (resetForm) resetForm();
    } else {
        setError(true);
        setSuccess(false);
        setMessError(data.error || "Erreur inconnue lors de la création du post.");
    }
}

export async function fetchUserFromPost(postId) {
    try {
        const response = await fetch(`http://localhost:3333/posts/user-from-post/${postId}`);
        const data = await response.json();
        return [response.status, data]; // <-- bien retourner un tableau ici !
    } catch (error) {
        console.error("Erreur dans fetchUserFromPost :", error);
        return [500, { error: "Erreur serveur" }];
    }
}

