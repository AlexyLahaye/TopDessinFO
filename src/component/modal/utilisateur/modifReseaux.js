import React, { useState, useEffect } from 'react';

export function Modal_Modif_Reseaux(props) {

    // initialisation
    const [idUtilisateur, setId_Utilisateur] = useState(1);

    //UseEffect
    useEffect( ()=>{
        setId_Utilisateur(props.reseaux);
    }, [props.reseaux])

    return (<>

            {idUtilisateur !== "" && (

                <>

                    <div id="modifReseau" data-uk-modal>
                        <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" data-uk-close></button>
                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title">Modification Réseaux Sociaux</h2>
                            </div>
                            <div className=" testModal  uk-modal-body ">

                                <div className="">

                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80 ">
                                            <span className="uk-form-icon" uk-icon="instagram"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <span className="uk-form-icon" uk-icon="twitter"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <span className="uk-form-icon" uk-icon="tiktok"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <span className="uk-form-icon" uk-icon="discord"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <span className="uk-form-icon" uk-icon="twitch"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>
                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <span className="uk-form-icon" uk-icon="etsy"></span>
                                            <input className="uk-input inputModif" type="text" aria-label="Not clickable icon"/>
                                        </div>
                                    </div>

                                </div>

                                <img className= "ImageModal"  src="/img/tache_encre.png" />

                            </div>
                            <div className="uk-modal-footer uk-text-right">
                                <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel
                                </button>
                                <button className="uk-button uk-button-primary" type="button">Save</button>
                            </div>
                        </div>
                    </div>



                </>

            )}



        </>
    );
}