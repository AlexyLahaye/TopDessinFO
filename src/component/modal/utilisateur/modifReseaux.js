import React, { useState, useEffect } from 'react';

import {setVar} from "../../../function/utilisateur/reseaux";
import {getToken} from "../../../function/token";


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



    const [inputInstagram, setInputInstagram] = useState('');
    const [inputTwitter, setInputTwitter] = useState('');
    const [inputTiktok, setInputTiktok] = useState('');
    const [inputTwitch, setInputTwitch] = useState('');
    const [inputDiscord, setInputDiscord] = useState('');
    const [inputEtsy, setInputEtsy] = useState('');

    // changement des input
    const handleChangeInstagram = (event) => {
        setInputInstagram(event.target.value);
    };

    const handleChangeTwitter = (event) => {
        setInputTwitter(event.target.value);
    };

    const handleChangeTiktok = (event) => {
        setInputTiktok(event.target.value);
    };

    const handleChangeTwitch = (event) => {
        setInputTwitch(event.target.value);
    };

    const handleChangeDiscord = (event) => {
        setInputDiscord(event.target.value);
    };

    const handleChangeEtsy = (event) => {
        setInputEtsy(event.target.value);
    };

    //UseEffect
    useEffect( ()=>{

        const token = getToken();

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

    }, [props.idUtilisateur])


    return (<>

            {props.idUtilisateur !== undefined && (

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
                                            <input
                                                className="uk-input inputModif"
                                                type="text"
                                                aria-label="Not clickable icon"
                                                value={instagram}
                                                onChange={handleChangeInstagram}
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
                                            />
                                        </div>
                                    </div>


                                </div>

                                <img className= "ImageModal"  src="/img/tache_encre.png" />

                            </div>
                            <div className="uk-modal-footer uk-text-right">
                                <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel
                                </button>
                                <button className="uk-button uk-button-primary" type="button" onClick={ () => { }} >Save</button>
                            </div>
                        </div>
                    </div>



                </>

            )}



        </>
    );
}