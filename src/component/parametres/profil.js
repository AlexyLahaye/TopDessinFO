import React, { useState, useEffect } from 'react';
import {logout} from "../../function/connexion";


export function Profil(props) {

    // initialisation
    const [posts, setPosts] = useState([]);


    const [mdpCache, setMdpCache] = useState(true)
    const [mdpCacheVerif, setMdpCacheVerif] = useState(true)


    //UseEffect
    useEffect( ()=>{


    }, [])


    return (<>

            <div className="parametreBox travail">
                <h2 className="uk-heading-line"><span>Modification Profil</span></h2>

                <div className="uk-margin">
                    <div className="uk-inline perso-longeur-30">
                        <span className="uk-form-icon " data-uk-icon="icon: mail"></span>
                        <input className="uk-input" type="text"  placeholder="Email" aria-label="Not clickable icon"   />
                    </div>
                    <button className="uk-margin-left uk-button uk-button-primary">Modifier</button>
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
                        <input className="uk-input" type={mdpCache ? "password" : "text" } placeholder="Mot de passe" aria-label="Not clickable icon"  />
                    </div>

                </div>

                <div className="uk-margin"  >
                    <div className="uk-inline perso-longeur-30">
                                        <span className="uk-form-icon uk-form-icon-flip"  style={{ pointerEvents: "auto", cursor: "pointer" }} data-uk-icon={mdpCacheVerif  ? "icon: lock" : "icon: unlock" }
                                              onClick={
                                                  () => { if( mdpCacheVerif ) {setMdpCacheVerif(false)} else(setMdpCacheVerif(true) )}
                                              }></span>
                        <input className="uk-input" type={mdpCacheVerif ? "password" : "text" } placeholder="Confirmation du mot de passe" aria-label="Not clickable icon" />
                    </div>
                    <button className="uk-margin-left uk-button uk-button-primary">Modifier</button>
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

