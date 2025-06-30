import React, { useState } from 'react';
import { getToken } from "../../../function/token";
import { addPost } from "../../../function/post/CRUD";
import { hideALert, hideModal } from "../../../function/modal";

export function Modal_Add_Post({ idUtilisateur, rechargePage, setRechargePage }) {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [categorie, setCategorie] = useState("");
    const [hashtags, setHashtags] = useState("");
    const [images, setImages] = useState([]);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");
    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const totalFiles = images.length + selectedFiles.length;
        if (totalFiles > 4) {
            setError(true);
            setMessError("Tu peux ajouter jusqu'à 4 images maximum.");
            return;
        }
        setImages(prev => [...prev, ...selectedFiles]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        const totalFiles = images.length + droppedFiles.length;
        if (totalFiles > 4) {
            setError(true);
            setMessError("Tu peux ajouter jusqu'à 4 images maximum.");
            return;
        }
        setImages(prev => [...prev, ...droppedFiles]);
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleDragStart = (index) => setDraggedIndex(index);

    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (draggedIndex === index) return;
        const newImages = [...images];
        const draggedItem = newImages[draggedIndex];
        newImages.splice(draggedIndex, 1);
        newImages.splice(index, 0, draggedItem);
        setDraggedIndex(index);
        setImages(newImages);
    };

    return (
        <div className="overlay" id="modalAjoutPost">
            <div className="overlayModal uk-modal-body uk-background-muted uk-border-rounded uk-box-shadow-large">
                <h3 className="uk-modal-title uk-text-center">Créer un nouveau post</h3>

                <div className="uk-margin">
                    {error && <div className="uk-alert-danger" data-uk-alert><p>{messError}</p></div>}
                    {success && <div className="uk-alert-success" data-uk-alert><p>{messSuccess}</p></div>}
                </div>

                <form className="uk-form-stacked">
                    <div className="uk-margin">
                        <label className="uk-form-label">Description</label>
                        <input className="uk-input" type="text" placeholder="Décris ton post" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>

                    <div className="uk-margin uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Type</label>
                            <input className="uk-input" type="text" placeholder="Type" value={type} onChange={e => setType(e.target.value)} />
                        </div>
                        <div className="uk-width-1-2">
                            <label className="uk-form-label">Catégorie</label>
                            <input className="uk-input" type="text" placeholder="Catégorie" value={categorie} onChange={e => setCategorie(e.target.value)} />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label">Hashtags</label>
                        <input className="uk-input" type="text" placeholder="#tag1, #tag2..." value={hashtags} onChange={e => setHashtags(e.target.value)} />
                    </div>

                    <div
                        className={`uk-placeholder uk-text-center uk-border-rounded uk-background-muted drop-area ${isDragOver ? 'drop-hover' : ''}`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragOver(true);
                        }}
                        onDragLeave={() => setIsDragOver(false)}
                        onDrop={handleDrop}
                    >
                        <span data-uk-icon="icon: cloud-upload"></span>
                        <span className="uk-text-middle"> Glisse des images ici ou </span>
                        <div className="uk-form-custom uk-display-inline">
                            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
                            <span className="uk-link">clique pour en sélectionner</span>
                        </div>
                        <div className="uk-margin-small-top uk-text-meta">Tu peux réorganiser les images après ajout</div>
                    </div>

                    {images.length > 0 && (
                        <div className="uk-grid-small uk-child-width-1-4 uk-margin-top image-preview-grid" data-uk-grid>
                            {images.map((file, index) => (
                                <div
                                    key={index}
                                    draggable
                                    onDragStart={() => handleDragStart(index)}
                                    onDragOver={(e) => handleDragOver(e, index)}
                                    className="draggable-card"
                                >
                                    <div className="uk-card uk-card-default uk-card-small uk-border-rounded uk-position-relative uk-overflow-hidden uk-transition-toggle">
                                        <div className="uk-card-media-top uk-position-relative">
                                            <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
                                            <button
                                                className="delete-button"
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="uk-card-body uk-padding-small uk-text-small uk-text-center">
                                            {file.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </form>

                <div className="uk-modal-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-margin-right"
                        type="button"
                        onClick={() => {
                            hideALert(setError, setMessError, setSuccess, setMessSuccess);
                            hideModal("modalAjoutPost");
                        }}
                    >
                        Annuler
                    </button>

                    <button
                        className="uk-button uk-button-primary"
                        type="button"
                        onClick={() => {
                            addPost(
                                setError,
                                setMessError,
                                setSuccess,
                                setMessSuccess,
                                description,
                                categorie,
                                type,
                                "", // etat
                                hashtags.split(",").map(tag => tag.trim()),
                                images,
                                idUtilisateur,
                                () => {
                                    setDescription("");
                                    setCategorie("");
                                    setType("");
                                    setHashtags("");
                                    setImages([]);
                                },
                                setRechargePage,
                                rechargePage
                            );
                        }}
                    >
                        Publier
                    </button>

                </div>
            </div>
        </div>
    );
}
