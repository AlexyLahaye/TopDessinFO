import React, { useState, useEffect } from 'react';
import {logout} from "../../function/connexion";
import {initVar, modifMail, modifMdp, suppUser} from "../../function/parametre/profil";
import {getID} from "../../function/token";
import {CardSingle} from "../posts/card_single";
import {Modal_Reclamation_Post} from "../modal/parametre/reclamation_post";
import {Procedure_en_Cours} from "./procédure_en_cours";


export function Signalement(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();



    //UseEffect
    useEffect( ()=>{

        const container = document.getElementById("id3");
        container.scrollTop = container.scrollHeight;
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

            <div className="signalement">

                <div>
                    <div data-uk-grid>
                        <div className="uk-width-auto@m">
                            <ul className="uk-tab-left"
                                uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                                <li><a href="#">Historique</a></li>
                                <li><a href="#">Procédure en cours</a></li>
                                <li><a className="admin" href="#">Réclamation</a></li>
                            </ul>
                        </div>

                        <div className="uk-width-expand@m">
                            <div id="component-tab-left" className="uk-switcher">

                                <div>
                                    <h2 className="uk-heading-line"><span>Mes Posts supprimés</span></h2>
                                    {props.posts.length > 0 &&
                                        props.posts.map((post, cpt) => {
                                            return (
                                                <CardSingle id={post.id} like={post.nbLike} com={post.nbCom} images={post.image}  nbImage={post.nbImage} type={post.type}
                                                            note={post.note} isLike={post.is_like} classement={post.classement} description={post.Description} context={"parametre_mine"}/>
                                            )
                                        })
                                    }
                                </div>

                                <div>
                                  <Procedure_en_Cours/>
                                </div>
                                <div>
                                    <Procedure_en_Cours/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <Modal_Reclamation_Post id_utilisateur={id_utilisateur}/>

        </>
    );
}

