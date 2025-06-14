// Afficher l'overlay
export function showModal(id) {
    document.getElementById(id).classList.add("active");
    document.body.style.overflow = "hidden"; // Empêche le scroll
}

// Cacher l'overlay
export function hideModal(id) {
    document.getElementById(id).classList.remove("active");
    document.body.style.overflow = "auto"; // Permet de scroller à nouveau
}


export function hideALert(setError, setMessError, setSuccess, setMessSuccess,) {

    setError(false);
    setMessError("");

    setSuccess(false);
    setMessSuccess("");

}