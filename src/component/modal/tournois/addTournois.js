import React, { useState } from 'react';
import { hideALert, hideModal } from "../../../function/modal";
import { createTournois } from "../../../function/tournois/CRUD";
import { getID } from "../../../function/token";

export function Modal_Add_Tournoi({ idUtilisateur }) {
    const [titre, setTitre] = useState("");
    const [theme, setTheme] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [recompense, setRecompense] = useState("");
    const [couleur, setCouleur] = useState(""); // Vide par défaut (obligatoire)
    const [style, setStyle] = useState("");
    const [attente, setAttente] = useState("");
    const [prixEntre, setPrixEntre] = useState("");
    const [banner, setBanner] = useState(null);
    const [paralaxe, setParalaxe] = useState(null);

    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");
    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const handleSubmit = async () => {
        if (!titre || !dateFin || !couleur) {
            setError(true);
            setMessError("Titre, date de fin et catégorie sont obligatoires.");
            return;
        }

        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("theme", theme);
        formData.append("dateFin", dateFin);
        formData.append("recompense", recompense);
        formData.append("couleur", couleur);
        formData.append("style", style);
        formData.append("attente", attente);
        formData.append("prixEntre", prixEntre);
        formData.append("userId", idUtilisateur || getID());

        if (banner) formData.append("banner", banner);
        if (paralaxe) formData.append("paralaxe", paralaxe);

        await createTournois(
            setError,
            setMessError,
            setSuccess,
            setMessSuccess,
            formData,
            () => {
                // Reset
                setTitre("");
                setTheme("");
                setDateFin("");
                setRecompense("");
                setCouleur("");
                setStyle("");
                setAttente("");
                setPrixEntre("");
                setBanner(null);
                setParalaxe(null);

                // Fermer
                setTimeout(() => {
                    hideModal("modalAjoutTournoi");
                }, 1500);
            }
        );
    };

    return (
        <div className="overlay" id="modalAjoutTournoi">
            <div className="overlayModal uk-modal-body uk-background-muted uk-border-rounded uk-box-shadow-large">
                <h3 className="uk-modal-title uk-text-center">Créer un tournoi</h3>

                {error && <div className="uk-alert-danger" data-uk-alert><p>{messError}</p></div>}
                {success && <div className="uk-alert-success" data-uk-alert><p>{messSuccess}</p></div>}

                <form className="uk-form-stacked">

                    {/* Titre */}
                    <div className="uk-margin">
                        <label className="uk-form-label">Titre *</label>
                        <input className="uk-input" type="text" value={titre} onChange={e => setTitre(e.target.value)} />
                    </div>

                    {/* Thème */}
                    <div className="uk-margin">
                        <label className="uk-form-label">Thème</label>
                        <input className="uk-input" type="text" value={theme} onChange={e => setTheme(e.target.value)} />
                    </div>

                    {/* Style & Attente */}
                    <div className="uk-grid-small uk-margin" data-uk-grid>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Style</label>
                            <input className="uk-input" type="text" value={style} onChange={e => setStyle(e.target.value)} />
                        </div>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Attente</label>
                            <input className="uk-input" type="text" value={attente} onChange={e => setAttente(e.target.value)} />
                        </div>
                    </div>

                    {/* Prix d'entrée & Récompense */}
                    <div className="uk-grid-small uk-margin" data-uk-grid>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Prix d'entrée</label>
                            <input className="uk-input" type="number" value={prixEntre} onChange={e => setPrixEntre(e.target.value)} />
                        </div>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Récompense</label>
                            <input className="uk-input" type="number" value={recompense} onChange={e => setRecompense(e.target.value)} />
                        </div>
                    </div>

                    {/* Date de fin */}
                    <div className="uk-margin">
                        <label className="uk-form-label">Date de fin *</label>
                        <input className="uk-input" type="date" value={dateFin} onChange={e => setDateFin(e.target.value)} />
                    </div>

                    {/* Catégorie de tournoi (couleur imposée) */}
                    <div className="uk-margin">
                        <label className="uk-form-label">Catégorie *</label>
                        <div className="uk-flex uk-flex-between">
                            <button
                                type="button"
                                className={`uk-button ${couleur === "#d44545" ? "uk-button-danger" : "uk-button-default"}`}
                                onClick={() => setCouleur("#d44545")}
                            >
                                🔥 En feu
                            </button>
                            <button
                                type="button"
                                className={`uk-button ${couleur === "#5f71d4" ? "uk-button-primary" : "uk-button-default"}`}
                                onClick={() => setCouleur("#5f71d4")}
                            >
                                👑 Officiel
                            </button>
                            <button
                                type="button"
                                className={`uk-button ${couleur === "#ba71c8" ? "uk-button-secondary" : "uk-button-default"}`}
                                onClick={() => setCouleur("#ba71c8")}
                            >
                                🃏 Hazard
                            </button>
                        </div>
                    </div>

                    {/* Banner & Paralaxe */}
                    <div className="uk-grid-small uk-margin" data-uk-grid>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Bannière</label>
                            <input type="file" accept="image/*" onChange={e => setBanner(e.target.files[0])} />
                            {banner && (
                                <img
                                    src={URL.createObjectURL(banner)}
                                    alt="banner-preview"
                                    style={{ marginTop: "10px", borderRadius: "10px", maxHeight: "150px", maxWidth: "100%", objectFit: "cover" }}
                                />
                            )}
                        </div>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Paralaxe</label>
                            <input type="file" accept="image/*" onChange={e => setParalaxe(e.target.files[0])} />
                            {paralaxe && (
                                <img
                                    src={URL.createObjectURL(paralaxe)}
                                    alt="paralaxe-preview"
                                    style={{ marginTop: "10px", borderRadius: "10px", maxHeight: "150px", maxWidth: "100%", objectFit: "cover" }}
                                />
                            )}
                        </div>
                    </div>
                </form>

                <div className="uk-modal-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-margin-right"
                        type="button"
                        onClick={() => {
                            hideALert(setError, setMessError, setSuccess, setMessSuccess);
                            hideModal("modalAjoutTournoi");
                        }}
                    >
                        Annuler
                    </button>
                    <button
                        className="uk-button uk-button-primary"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Publier
                    </button>
                </div>
            </div>
        </div>
    );
}
