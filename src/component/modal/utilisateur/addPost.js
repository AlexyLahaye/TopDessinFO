// ✅ src/component/post/modal_add_post.js
import React, { useState } from 'react';
import { getToken } from "../../../function/token";
import { addPost } from "../../../function/post/CRUD";
import { hideALert, hideModal } from "../../../function/modal";

export function Modal_Add_Post({ idUtilisateur, rechargePage, setRechargePage }) {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [categorie, setCategorie] = useState("");
    const [etat, setEtat] = useState("");
    const [hashtags, setHashtags] = useState("");
    const [images, setImages] = useState([]);

    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");
    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div className="overlay" id="modalAjoutPost">
            <div className="overlayModal">
                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Créer un nouveau post</h2>
                </div>
                <div className="contentModal uk-modal-body">
                    {error && <div className="uk-alert-danger uk-margin" data-uk-alert><p>{messError}</p></div>}
                    {success && <div className="uk-alert-success uk-margin" data-uk-alert><p>{messSuccess}</p></div>}

                    <input className="uk-input uk-margin" type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    <input className="uk-input uk-margin" type="text" placeholder="Type" value={type} onChange={e => setType(e.target.value)} />
                    <input className="uk-input uk-margin" type="text" placeholder="Catégorie" value={categorie} onChange={e => setCategorie(e.target.value)} />
                    <input className="uk-input uk-margin" type="text" placeholder="Etat" value={etat} onChange={e => setEtat(e.target.value)} />
                    <input className="uk-input uk-margin" type="text" placeholder="#hashtags (séparés par virgule)" value={hashtags} onChange={e => setHashtags(e.target.value)} />
                    <input className="uk-input uk-margin" type="file" multiple accept="image/*" onChange={handleImageChange} />
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default" onClick={() => {
                        hideALert(setError, setMessError, setSuccess, setMessSuccess);
                        hideModal("modalAjoutPost");
                    }}>Retour</button>

                    <button className="uk-button uk-button-primary" onClick={() => {
                        const token = getToken();
                        addPost(description, type, categorie, etat, hashtags, images, token, idUtilisateur, setError, setMessError, setSuccess, setMessSuccess, setRechargePage, rechargePage);
                    }}>Publier</button>
                </div>
            </div>
        </div>
    );
}
