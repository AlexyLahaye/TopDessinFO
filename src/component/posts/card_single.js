import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UIkit from 'uikit';
import {MultipleImage} from "./multiple_image";
import {NotationEtoile} from "./notation_etoile";

import {showModal} from "../../function/modal";
import {Modal_Reclamation_Post} from "../modal/parametre/reclamation_post";
import {reportCom} from "../../function/parametre/signalement";

//affichage des différents posts en mode vielles vignettes vintage
export function CardSingle(props) {

    return (<>

            <div className="cardPost uk-margin-bottom uk-margin-top">
                <div className="medaillePost">
                    <img src="img/badge2.png"   className={props.classement === 1 ? "" : "uk-hidden"}alt="Concours blabla"/>
                    <img src="img/badge15.png"   className={props.classement === 3 ? "" : "uk-hidden"}alt="Concours blabla"/>
                </div>
                <div className="cardenfant uk-card ">

                    {props.nbImage > 1 ? <MultipleImage images={props.images}/> :
                        <div className="img uk-card-media-top">
                            <div data-uk-lightbox>
                                <a href={props.images[0]}><img src={props.images[0]} alt=""/></a>
                            </div>

                        </div>
                    }
                    <div className={props.context == "parametre_mine" ? "uk-hidden" : "uk-card-body uk-padding-remove"} >
                        <div className="uk-flex uk-flex-between ">
                            <div className="uk-padding-small">
                                <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={props.isLike === 1  ? {color: "#fe5152",} : {color: "#bcbec0",}} className="like"/> <span className="nbComment"  >{props.like} </span>
                            </div>
                            <div className="uk-padding-small">
                                <span className="nbComment" > {props.com}</span>
                                <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000"}}
                                                 onClick={() => { props.showOverlay(); props.setIdPostCom(1)}}
                                />
                                <span className= "pointer uk-margin-small-left"  style={{ color: 'red' }}
                                      onClick={async () =>{

                                      }
                                      }

                                      uk-icon="ban"></span>
                            </div>


                        </div>
                        <div className="annexePost">
                            <img src="img/chapeau-etudiant.png"   className={props.type === "tutoriel" ? "" : "uk-hidden"}alt="Concours blabla"/>
                        </div>
                        <div className="uk-flex ">

                            <div className="AjoutCom uk-inline ">
                                <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                                <input className="radius-Small uk-input" type="text" aria-label="Clickable icon" placeholder="Ecrire un commentaire..."/>
                            </div>
                            <div className={props.type === "rank" ? "AjoutCom uk-inline" : "uk-hidden"}>
                                <NotationEtoile note={props.note}/>
                            </div>

                        </div>

                    </div>
                    <div className={props.context == "parametre_mine" ? "uk-card-body uk-padding-remove" : "uk-hidden" } >
                        <div className="uk-padding-small uk-multiline-truncate">
                            {props.description}
                        </div>
                        <div className="uk-flex uk-flex-center uk-margin-top">
                            <button className="uk-button uk-button-danger" onClick={() =>{ showModal("modalReclamationPost")}} >Porter réclamation</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}