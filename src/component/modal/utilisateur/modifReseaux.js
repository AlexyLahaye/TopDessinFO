import React, { useState, useEffect , useRef} from 'react';

import {setVar, updateInfoReseaux} from "../../../function/utilisateur/reseaux";
import {getToken} from "../../../function/token";

import {hideALert, hideModal} from "../../../function/modal";

// POur fonctionner ce composant à besoin :
//
//
// idUtilisateur : afin de récupérer les bonne sinfos par rapport à l'utilisateur
//
//

export function Modal_Modif_Reseaux(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [instagram, setInstagram] = useState(true);
    const [twitter, setTwitter] = useState(true);
    const [tiktok, setTiktok] = useState(true);
    const [twitch, setTwitch] = useState(true);
    const [discord, setDiscord] = useState(true);
    const [etsy, setEtsy] = useState(true);

    const token = getToken();


    // changement des input
    const handleChangeInstagram = (event) => {
        setInstagram(event.target.value);
    };

    const handleChangeTwitter = (event) => {
        setTwitter(event.target.value);
    };

    const handleChangeTiktok = (event) => {
        setTiktok(event.target.value);
    };

    const handleChangeTwitch = (event) => {
        setTwitch(event.target.value);
    };

    const handleChangeDiscord = (event) => {
        setDiscord(event.target.value);
    };

    const handleChangeEtsy = (event) => {
        setEtsy(event.target.value);
    };

    //UseEffect
    useEffect( ()=>{

        const setVariable = async () =>{

            await setVar(
                setInstagram,
                setTwitter,
                setTiktok,
                setTwitch,
                setDiscord,
                setEtsy,
                token,
                props.idUtilisateur
            );

        }

        setVariable() ;


    }, [props.idUtilisateur,  props.rechargePage])


    return (<>

            {props.idUtilisateur !== undefined && (

                <>


                        <div  className="overlay " id="modalModifReseaux">

                            <div className="overlayModal">

                                <div className="uk-modal-header">
                                    <h2 className="uk-modal-title">Modification Réseaux Sociaux</h2>
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


                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80 ">
                                                <span className="uk-form-icon" uk-icon="instagram"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={instagram}
                                                    onChange={handleChangeInstagram}
                                                    maxLength="25"

                                                />
                                            </div>
                                        </div>

                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80">
                                                <span className="uk-form-icon" uk-icon="twitter"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={twitter}
                                                    onChange={handleChangeTwitter}
                                                    maxLength="25"
                                                />
                                            </div>
                                        </div>

                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80">
                                                <span className="uk-form-icon" uk-icon="tiktok"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={tiktok}
                                                    onChange={handleChangeTiktok}
                                                    maxLength="25"
                                                />
                                            </div>
                                        </div>

                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80">
                                                <span className="uk-form-icon" uk-icon="discord"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={discord}
                                                    onChange={handleChangeDiscord}
                                                    maxLength="25"
                                                />
                                            </div>
                                        </div>

                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80">
                                                <span className="uk-form-icon" uk-icon="twitch"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={twitch}
                                                    onChange={handleChangeTwitch}
                                                    maxLength="25"
                                                />
                                            </div>
                                        </div>

                                        <div className="uk-margin centrer-contenu">
                                            <div className="uk-inline perso-longeur-80">
                                                <span className="uk-form-icon" uk-icon="etsy"></span>
                                                <input
                                                    className="uk-input inputModif"
                                                    type="text"
                                                    aria-label="Not clickable icon"
                                                    value={etsy}
                                                    onChange={handleChangeEtsy}
                                                    maxLength="25"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <img className="ImageModal" src="/img/tache_encre.png" />
                                </div>

                                <div className="uk-modal-footer uk-text-right">
                                    <button
                                        className="uk-button uk-button-default uk-modal-close"
                                        type="button"
                                        onClick={() => {

                                            hideALert(setError, setMessError, setSuccess, setMessSuccess,);
                                            hideModal("modalModifReseaux");
                                        }}
                                    >
                                        retour
                                    </button>

                                    <button
                                        className="uk-button uk-button-primary"
                                        type="button"
                                        onClick={ () => {
                                            console.log("je click");
                                            updateInfoReseaux(token, props.idUtilisateur, instagram, twitter, discord, twitch, tiktok, etsy,
                                                setError, setMessError, setSuccess, setMessSuccess, props.setRechargePage , props.rechargePage);}}
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>

                </>

            )}



        </>
    );
}