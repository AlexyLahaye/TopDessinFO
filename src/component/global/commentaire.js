import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../css/commentaire.css";
import {Link} from "react-router-dom";
import {getID} from "../../function/token";
import {suppCom} from "../../function/post/commentaire";
import {reportCom} from "../../function/parametre/signalement";

//Pour fonctionner ce component à besoin des props suivante :

//id_utilisateur : afin de lié directement avec la page profil de l'utilisateur
//l'utilisateur
//icone utilisateur
//le commentaire

export function Commentaire(props) {

    // initialisation
    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();


    return (<>
            <div className="unCommentaire uk-flex uk-margin-top">
                <div>
                    <img src={"img/icone/" + props.icone} className={props.icone !== null ? "icone" : "uk-hidden"}/>
                </div>
                <div className="conteneurCom">
                    <h3 className="uk-text-left uk-padding-remove uk-margin-remove">
                        <a
                            href={`/utilisateur/${props.utilisateur}#${props.id_utilisateur}`}
                            className="h3Like"
                            target="_top"
                        >
                            {props.utilisateur}
                        </a>
                        <span className={props.tokenId === props.id_utilisateur ?  "pointer uk-margin-small-left" : "uk-hidden" }   style={{ color: 'red' }}
                              onClick={async () =>{
                                  const supp = await suppCom(token, props.tokenId, props.idCom);
                                  props.refreshcom()
                              }
                              }

                              uk-icon="trash"></span>
                        <span className={props.tokenId !== props.id_utilisateur ?  "pointer uk-margin-small-left" : "uk-hidden" }   style={{ color: 'red' }}
                              onClick={async () =>{
                                  const supp = await reportCom(token, props.tokenId, props.idCom);
                                  props.refreshcom()
                              }
                              }

                              uk-icon="ban"></span>
                    </h3>
                    <p className="uk-text-lighter uk-text-small uk-text-left uk-text-meta uk-margin-remove"> {props.date}</p>
                    <p className="uk-text-lighter leCom"> {props.commentaire}</p>
                </div>

            </div>
        </>
    );
}

