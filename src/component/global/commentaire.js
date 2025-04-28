import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../css/commentaire.css";

//Pour fonctionner ce component à besoin des props suivante :

//id_utilisateur : afin de lié directement avec la page profil de l'utilisateur
//l'utilisateur
//icone utilisateur
//le commentaire

export function Commentaire(props) {

    // initialisation

    //UseEffect

    return (<>
            <div className="unCommentaire uk-flex uk-margin-top">
                <div>
                    <img src={props.icone} className="icone"/>
                </div>
                <div className="conteneurCom">
                    <h3 className="uk-text-left uk-padding-remove uk-margin-remove"> {props.utilisateur}</h3>
                    <p className="uk-text-lighter uk-text-small uk-text-left uk-text-meta uk-margin-remove"> {props.date}</p>
                    <p className="uk-text-lighter leCom"> {props.commentaire}</p>
                </div>

            </div>
        </>
    );
}

