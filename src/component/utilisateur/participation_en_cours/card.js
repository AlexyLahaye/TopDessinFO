import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UIkit from 'uikit';

export function Card(props) {

    return (<>

            <div className={`${props.id}Card cardParticipation`}>
                <div className={props.type === "normal" ? "cardParticipation backgroundBleuCard radius-Small uk-card uk-card-default uk-box-shadow-hover-large" : "cardParticipation backgroundVioletCard radius-Small uk-card uk-card-default uk-box-shadow-hover-large"}>
                    <div className="uk-card-media-top">

                        <div className="uk-grid-small uk-flex" data-uk-grid>
                            <div className="uk-width-2-3">
                                <h6 className="uk-margin-remove">MODE : {props.type}</h6>

                            </div>
                            <div className=" uk-width-1-3 ">
                                 <div className=" joeurAct uk-align-right uk-flex">
                                     <FontAwesomeIcon icon="fa-solid fa-user"   style={{color: "#c8cbd3",}} className="iconeNbPart"/> {props.participant}
                                 </div>
                            </div>
                        </div>
                        <p className={props.etat === 0 ? "uk-text-meta uk-margin-remove-top " : "uk-hidden"}>
                            Commence : {props.com}
                        </p>
                        <p className={props.etat === 1 ? "uk-text-meta uk-margin-remove-top " : "uk-hidden"}>
                            En cours  <FontAwesomeIcon icon="fa-solid fa-circle" size="2xs" style={{color: "#00ff40",}} />
                        </p>
                        <p className={props.etat === 2 ? "uk-text-meta uk-margin-remove-top " : "uk-hidden"}>
                            Fin :{props.fin}
                        </p>
                    </div>
                    <div className="uk-card uk-padding-remove-bottom">
                        <div className="uk-child-width-expand uk-flex " data-uk-grid>
                            <div className="uk-card uk-width-2-3">
                                <div className={ props.type == "normal" ? "fondPartiBLeu backgroundBleuBlitz radius-Small uk-flex" : "fondPartiBLeu backgroundVioletBlitz radius-Small uk-flex"}>
                                    <FontAwesomeIcon icon="fa-solid fa-bolt" size="lg" style={{color: "#8000ff",}} className={props.type == "normal" ? "uk-margin-auto uk-margin-auto-vertical" : "uk-hidden"}/>
                                    <FontAwesomeIcon icon="fa-solid fa-trophy" size="lg" style={{color: " #d8a907 ",}} className={props.type == "blitz" ? "uk-margin-auto uk-margin-auto-vertical" : "uk-hidden"}/>

                                </div>

                            </div>
                            <div className="uk-card uk-position-bottom ">

                                <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#c8cbd3",}}  className="uk-align-right pointer info"  />

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}