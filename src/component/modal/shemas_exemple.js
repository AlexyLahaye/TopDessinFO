import React, { useState, useEffect , useRef} from 'react';

import {setVar, updateInfoReseaux} from "../../../function/utilisateur/reseaux";
import {getToken} from "../../../function/token";

import ModalPortal from '../modalPortail';
import {hideModal} from "../../../function/modal";

// POur fonctionner ce composant à besoin d'être appelé par la fonction :
//
//
//                          showModal("idDeLaModal")
//
//

export function Modal_Shemas_EXEMPLE(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    return (<>

            {la variable que l'on veut !== undefined && (

                <>


                    <div  className="overlay " id="modalIDACHoisir">

                        <div className="overlayModal">

                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title"> Titre</h2>
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

                                    /* on met le contenue que nous voulons */

                                </div>

                                <img className="ImageModal" src="/img/tache_encre.png" />
                            </div>

                            <div className="uk-modal-footer uk-text-right">
                                <button
                                    className="uk-button uk-button-default uk-modal-close"
                                    type="button"
                                    onClick={() => {
                                        hideModal("modalModifReseaux")
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="uk-button uk-button-primary"
                                    type="button"
                                    onClick={ () => {
                                        console.log("je click");
                                        updateInfoReseaux(token, props.idUtilisateur, instagram, twitter, discord, twitch, tiktok, etsy,
                                            setError, setMessError, setSuccess, setMessSuccess, props.setRechargePage , props.rechargePage);}}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                </>

            )}



        </>
    );
}