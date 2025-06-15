import React, { useState, useEffect } from 'react';
import {logout} from "../../function/connexion";
import {initVar, modifMail, modifMdp} from "../../function/parametre/profil";
import {getID} from "../../function/token";


export function Profil(props) {

    // initialisation
    const [mdpCache, setMdpCache] = useState(true)
    const [mdpCacheVerif, setMdpCacheVerif] = useState(true)

    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [mail, setMail] = useState([]);
    const [mdp, setMdp] = useState([]);
    const [mdpVerif, setMdpVerif] = useState([]);

    //onchange handle
    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };
    const handleChangeMdp = (event) => {
        setMdp(event.target.value);
    };
    const handleChangeMdpVerif = (event) => {
        setMdpVerif(event.target.value);
    };

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();

    //UseEffect
    useEffect( ()=>{

        initVar(token, id_utilisateur, setMail)

    }, [])


    return (<>

            <div className="parametreBox travail">

                <div className={error ? "uk-alert-danger uk-margin" : "uk-hidden"} data-uk-alert="">
                    <a href="#" className="uk-alert-close" data-uk-close></a>
                    <p>{messError}</p>
                </div>
                <div className={success ? "uk-alert-success uk-margin" : "uk-hidden"} data-uk-alert="">
                    <a href="#" className="uk-alert-close" data-uk-close></a>
                    <p>{messSuccess}</p>
                </div>


            </div>

            <div className="parametreBox travail">
                <h2 className="uk-heading-line"><span>Modification Profil</span></h2>

                <div className="uk-margin">
                    <div className="uk-inline perso-longeur-30">
                        <span className="uk-form-icon " data-uk-icon="icon: mail"></span>
                        <input className="uk-input" type="text"  placeholder="Email" aria-label="Not clickable icon"  value={mail} onChange={handleChangeMail} />
                    </div>
                    <button className="uk-margin-left uk-button uk-button-primary"
                            onClick={() => {modifMail( token , id_utilisateur, mail, setMail,
                                setError, setMessError, setSuccess, setMessSuccess)}}>Modifier</button>
                </div>
            </div>

            <div className="parametreBox travail">

                <h2 className="uk-heading-line"><span>Modification Mot de Passe</span></h2>

                <div className="uk-margin">
                    <div className="uk-inline perso-longeur-30">
                                        <span className=" uk-form-icon uk-form-icon-flip " style={{ pointerEvents: "auto", cursor: "pointer" }} data-uk-icon={mdpCache  ? "icon: lock" : "icon: unlock" }
                                              onClick={
                                                  () => { if( mdpCache ) {setMdpCache(false)} else(setMdpCache(true) )}
                                              }></span>
                        <input className="uk-input" type={mdpCache ? "password" : "text" } placeholder="Mot de passe" aria-label="Not clickable icon"  value={mdp} onChange={handleChangeMdp}/>
                    </div>

                </div>

                <div className="uk-margin"  >
                    <div className="uk-inline perso-longeur-30">
                                        <span className="uk-form-icon uk-form-icon-flip"  style={{ pointerEvents: "auto", cursor: "pointer" }} data-uk-icon={mdpCacheVerif  ? "icon: lock" : "icon: unlock" }
                                              onClick={
                                                  () => { if( mdpCacheVerif ) {setMdpCacheVerif(false)} else(setMdpCacheVerif(true) )}
                                              }></span>
                        <input className="uk-input" type={mdpCacheVerif ? "password" : "text" } placeholder="Confirmation du mot de passe" aria-label="Not clickable icon"  value={mdpVerif} onChange={handleChangeMdpVerif}/>
                    </div>
                    <button className="uk-margin-left uk-button uk-button-primary"
                            onClick={ ()=>{
                                        modifMdp(token , id_utilisateur, mdp, setMdp , mdpVerif, setMdpVerif ,
                                        setError, setMessError, setSuccess, setMessSuccess)
                                    }}>
                        Modifier
                    </button>
                </div>


            </div>

            <div className="parametreBox travail">
                <hr className="uk-divider-icon"/>
                <div className="uk-flex uk-flex-around">
                    <button className="uk-button uk-button-secondary" onClick={()=>{ logout()}}>Déconnexion</button>
                    <button className="uk-button uk-button-danger">Supprimer mon compte</button>
                </div>

            </div>





            <img className="imageDecoParametreDroite" src="/img/back/deco_site/profil_1.png" />



        </>
    );
}

