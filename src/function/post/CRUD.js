import {addPostRoute} from "../../route/post";

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
    if (!inputDescription || !inputCategorie || !inputType || !inputEtat) {
        setError(true);
        setMessError("Tous les champs doivent être remplis.");
        return;
    }

    // Construction du formData
    const formData = new FormData();
    formData.append("description", inputDescription);
    formData.append("categorie", inputCategorie);
    formData.append("type", inputType);
    formData.append("etat", inputEtat);
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
