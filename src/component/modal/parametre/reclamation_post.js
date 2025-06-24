import React, { useState, useEffect , useRef} from 'react';

import {setVar, updateInfoReseaux} from "../../../function/utilisateur/reseaux";
import {getToken} from "../../../function/token";

import {hideModal} from "../../../function/modal";
import {creaRecla} from "../../../function/parametre/signalement";

// POur fonctionner ce composant à besoin d'être appelé par la fonction :
//
//
//                          showModal("idDeLaModal")
//
//

export function Modal_Reclamation_Post(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [explication, setExplication] = useState('');

    return (<>

            {props.tokenId !== undefined && (

                <>


                    <div  className="overlay " id="modalReclamationPost">

                        <div className="overlayModal">

                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title"> Porter Réclamation</h2>
                            </div>
                            <div className="contentModal uk-modal-body">

                                <div className={error ? "uk-alert-danger uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href="#" className="uk-alert-close" data-uk-close></a>
                                    <p>{messError}</p>
                                </div>
                                <div className={success ? "uk-alert-success uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href="#" className="uk-alert-close" data-uk-close></a>
                                    <p>{messSuccess}</p>
                                </div>

                                <div className="">

                                    <div>
                                        <span className="uk-margin-small-right" uk-icon="info"></span>
                                        Merci de bien détailler l’objet de votre réclamation. <br/>
                                        Tout propos insultant ou tout manque de respect envers l’équipe de modération entraînera un bannissement temporaire.
                                    </div>
                                    <div className="uk-margin">
                                       <textarea
                                           className="uk-textarea inputModif"
                                           rows="7"
                                           placeholder="Explication"
                                           aria-label="Explication"
                                           value={explication}
                                           onChange={(e) => setExplication(e.target.value)}
                                       ></textarea>
                                    </div>

                                </div>

                                <img className="ImageModal" src="/img/tache_encre_4.png" />
                            </div>

                            <div className="uk-modal-footer uk-text-right">
                                <button
                                    className="uk-button uk-button-default uk-modal-close"
                                    type="button"
                                    onClick={() => {
                                        hideModal("modalReclamationPost")
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="uk-button uk-button-primary"
                                    type="button"
                                    onClick={ async () => {

                                        const recla = await creaRecla(props.token , props.tokenId, props.postReclaId, explication);
                                        props.setRefresh(!props.refresh);
                                        hideModal("modalReclamationPost");
                                        }}
                                >
                                    Réclamer
                                </button>
                            </div>
                        </div>
                    </div>

                </>

            )}


        </>
    );
}