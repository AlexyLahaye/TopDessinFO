import {addPostRoute, getFollowedPostsRoute, getPostReportedByIdUser} from "../../route/post";
import {route} from "../../route/route";

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
    resetForm,           // pour vider le formulaire
    setRechargePage,     // pour déclencher la recharge (facultatif)
    rechargePage         // pour inverser le booléen (facultatif)
) {
    // Vérification des champs obligatoires
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
    formData.append("etat", inputEtat); // même si vide
    formData.append("userId", userId);
    formData.append("hashtags", JSON.stringify(inputHashtags));

    for (let i = 0; i < inputImages.length; i++) {
        formData.append("images", inputImages[i]);
    }

    const [status, data] = await addPostRoute(formData);

    if (status === 201) {
        setSuccess(true);
        setError(false);
        setMessSuccess(data.message || "Post créé avec succès.");

        if (resetForm) resetForm();
        if (setRechargePage) setRechargePage(!rechargePage);
    } else {
        setError(true);
        setSuccess(false);
        setMessError(data.error || "Erreur inconnue lors de la création du post.");
    }
}

export async function fetchUserFromPost(postId) {
    try {
        const response = await fetch(route + `posts/user-from-post/${postId}`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        });
        const data = await response.json();
        return [response.status, data];
    } catch (error) {
        console.error("Erreur dans fetchUserFromPost :", error);
        return [500, { error: "Erreur serveur" }];
    }
}


export async function getAllPostsReportedFromUserId(token, userId) {
    try {
        const [status, data] = await getPostReportedByIdUser(token, userId);
        return data.success;
    } catch (error) {
        return []
    }
}

export async function getFollowedPosts(userId) {
    try {
        const [status, data] = await getFollowedPostsRoute(userId);
        if (status === 200) {
            return data;
        } else {
            console.warn("Erreur récupération posts suivis :", data.error || data);
        }
    } catch (error) {
        console.error("Erreur dans getFollowedPosts :", error);
    }
}



