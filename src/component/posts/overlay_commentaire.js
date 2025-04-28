import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MultipleImage} from "./multiple_image";
import {Commentaire} from "../global/commentaire";

export function Overlay_Commentaire(props) {


    return (<>

            <div className="uk-flex uk-flex-around overlay-content allUti">

                <div className="image uk-width-1-2">

                    {props.infoPost?.nbImage === 1 ?
                        <div >
                            <img src={props.infoPost?.image[0]} alt="" className="imgCommentaire"/>
                        </div>

                        :""
                    }
                    <div className="multipleImgCommentaire">
                        {props.infoPost?.nbImage > 1 ?
                            <MultipleImage images={props.infoPost?.image} contexte="commentaire"/>

                            : ""
                        }
                    </div>


                </div>
                <div className="commentaire uk-width-1-2" onClick={props.hideOverlay}>
                    {props.commentaires.length > 0 &&
                        props.commentaires.map((com, cpt) => {
                            return (
                                <>
                                    <Commentaire utilisateur={com.nom_utilisateur} icone={com.icone_uti} commentaire={com.commentaire} date={com.date}/>
                                </>
                            )
                        })
                    }

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                            <input className="uk-input" type="text" aria-label="Clickable icon"/>
                        </div>
                    </div>


                </div>


            </div>


            <div className="allUtiResponsive responsiveCommentaire" onClick={props.hideOverlay}>
                <div className="commentaire" >
                    {props.commentaires.length > 0 &&
                        props.commentaires.map((com, cpt) => {
                            return (
                                <>
                                    <Commentaire utilisateur={com.nom_utilisateur} icone={com.icone_uti} commentaire={com.commentaire} date={com.date}/>
                                </>
                            )
                        })
                    }
                </div>

                <div className="uk-margin">
                    <div className="uk-inline">
                        <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                        <input className="uk-input" type="text" aria-label="Clickable icon"/>
                    </div>
                </div>
            </div>

        </>
    );
}

