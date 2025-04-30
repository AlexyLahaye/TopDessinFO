import React, { useState, useEffect } from 'react';
import {inscription} from "../function/connexion";



export function Connexion(props) {

    //initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [mdpCache, setMdpCache] = useState(true)
    const [mdpCacheVerif, setMdpCacheVerif] = useState(true)

    const [etat, setEtat] = useState("con");

    const [inputEmail, setInputEmail] =useState ('')
    const [inputMdp, setInputMdp] =useState ('')
    const [inputMdpVerif, setInputMdpVerif] =useState ('')
    const [inputPseudo, setInputPseudo] =useState ('')

    // changement des input
    const handleChangeEmail = (event) => {
        setInputEmail(event.target.value);
    };
    const handleChangeMdp = (event) => {
        setInputMdp(event.target.value);
    };
    const handleChangeMdpVerif = (event) => {
        setInputMdpVerif(event.target.value);
    };
    const handleChangePseudo = (event) => {
        setInputPseudo(event.target.value);
    };

    //autres
    const connexion = async () =>{
        setError(true)
        alert('yo')
    }




    return (<>

        <div className="canteneurUtilisateurAll uk-container-expend  uk-padding-remove-top">

            <div className="connexionContainer uk-container-xlarge  uk-position-center radius-Small">

                <div className="radius-Small connexionCard uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s  " data-uk-grid >

                    <div className="uk-card-media-left uk-cover-container ">
                        <img src="img/back/connexion.png" alt=""  className="uk-position-bottom" />
                        <canvas  height="500"></canvas>
                    </div>
                    <div>
                        <div className="uk-card-body ">


                            <fieldset className="uk-fieldset">

                                <legend className={etat === 'inscr' ? "uk-legend" : "uk-hidden "}>Inscription</legend>
                                <legend className={etat === 'con' ? "uk-legend" : "uk-hidden "}>Connexion</legend>


                                <div className={error === true ? "uk-alert-danger uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href className="uk-alert-close " data-uk-close></a>
                                    <p>{messError}</p>
                                </div>
                                <div className={success === true ? "uk-alert-success uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href className="uk-alert-close " data-uk-close></a>
                                    <p>{messSuccess}</p>
                                </div>


                                <div className="uk-margin">
                                    <div className="uk-inline perso-longeur-80">
                                        <span className="uk-form-icon " data-uk-icon="icon: mail"></span>
                                        <input className="uk-input" type="text"  placeholder="Email" aria-label="Not clickable icon"   value={inputEmail} onChange={handleChangeEmail}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <div className="uk-inline perso-longeur-80">
                                        <span className=" uk-form-icon uk-form-icon-flip " style={{ pointerEvents: "auto", cursor: "pointer" }} data-uk-icon={mdpCache  ? "icon: lock" : "icon: unlock" }
                                              onClick={
                                            () => { if( mdpCache ) {setMdpCache(false)} else(setMdpCache(true) )}
                                        }></span>
                                        <input className="uk-input" type={mdpCache ? "password" : "text" } placeholder="Mot de passe" aria-label="Not clickable icon"  value={inputMdp} onChange={handleChangeMdp}/>
                                    </div>

                                </div>

                                <div className="uk-margin"  style={{ visibility: etat === "inscr" ? "visible" : "hidden" }}>
                                    <div className="uk-inline perso-longeur-80">
                                        <span className="uk-form-icon uk-form-icon-flip"  style={{ pointerEvents: "auto", cursor: "pointer" }} data-uk-icon={mdpCacheVerif  ? "icon: lock" : "icon: unlock" }
                                              onClick={
                                                  () => { if( mdpCacheVerif ) {setMdpCacheVerif(false)} else(setMdpCacheVerif(true) )}
                                              }></span>
                                        <input className="uk-input" type={mdpCacheVerif ? "password" : "text" } placeholder="Confirmation du mot de passe" aria-label="Not clickable icon" value={inputMdpVerif} onChange={handleChangeMdpVerif}/>
                                    </div>
                                </div>
                                <div className="uk-margin" style={{ visibility: etat === "inscr" ? "visible" : "hidden" }}>
                                    <div className="uk-inline perso-longeur-80">
                                        <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                        <input className="uk-input" type="text"  placeholder="Pseudo" aria-label="Not clickable icon" maxLength="14"   value={inputPseudo} onChange={handleChangePseudo} />
                                    </div>
                                </div>

                            </fieldset>


                                <hr className="uk-divider-icon"/>

                                <div>
                                    <p uk-margin className="uk-flex  uk-flex-between ">
                                        <button className="uk-button uk-button-default"
                                                onClick={() => {

                                                    if( etat === "con" ) {
                                                        setEtat("inscr")
                                                        setError(false)
                                                        setSuccess(false)
                                                        setMdpCacheVerif(true)
                                                        setMdpCache(true)
                                                        setInputMdpVerif("")
                                                        setInputMdp("")
                                                    }
                                                    else{ inscription(
                                                        setEtat,
                                                        setError,
                                                        setMessError,
                                                        setSuccess,
                                                        setMessSuccess,
                                                        setMdpCacheVerif,
                                                        setMdpCache,
                                                        inputEmail,
                                                        inputMdp,
                                                        inputMdpVerif,
                                                        inputPseudo,
                                                        setInputEmail,
                                                        setInputMdp,
                                                        setInputMdpVerif,
                                                        setInputPseudo
                                                        );
                                                    } } }
                                        >
                                            S'inscrire
                                        </button>
                                        <button className="uk-button uk-button-default"
                                                onClick={() => {

                                                    if( etat === "inscr" ) {
                                                        setEtat("con")
                                                        setError(false)
                                                        setSuccess(false)
                                                        setMdpCacheVerif(true)
                                                        setMdpCache(true)
                                                        setInputMdpVerif("")
                                                        setInputMdp("")
                                                    }else{
                                                        connexion()}
                                                }
                                        }>
                                            Connexion
                                        </button>
                                    </p>
                                </div>







                        </div>
                    </div>
                </div>

            </div>


        </div>

        </>
    )

}