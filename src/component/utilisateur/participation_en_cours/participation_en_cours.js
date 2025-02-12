import React, { useState, useEffect } from 'react';
import {Card} from "./card";

export function Participation_Conteneur(props) {

    // initialisation
    const [participation, setParticipation] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setParticipation(props.participation);

    }, [props.participation])

    return (<>

            <div className="travail  participationConteneur uk-container-large">

                <div className="conBackground radius-Small uk-container-large uk-border-rounded">
                    <div className=" partieTitre radius-Small backgroundViolet uk-border-rounded">
                        <div className="conTitreParti uk-flex uk-align-center">
                           <div>
                               <h2 className="uk-padding-small uk-padding-remove"> PARTICIPATIONS EN COURS</h2>
                           </div>
                           <div data-uk-lightbox className="pointer">

                               <div data-uk-lightbox>
                                   <a
                                      href="http://localhost:3001/participation"
                                      data-type="iframe">Show all</a>
                               </div>
                           </div>


                        </div>
                    </div>
                </div>

                <div className="PartieSlider ">

                    <div className=" uk-slider-container-offset uk-padding-remove-bottom" data-uk-slider="finite: true;">

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                            <div className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-3@l  uk-child-width-1-4@xl uk-grid uk-padding-remove-bottom">

                                {participation.length > 0 &&
                                    participation.map((parti, cpt) => {

                                        return (
                                            <Card type={parti.type} etat={parti.etat} participant={parti.participant} fin={parti.date_fin} com={parti.date_com} id={parti.id}
                                                  titre={parti.titre}/>
                                        )
                                    })
                                    }

                            </div>

                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href
                               uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
                               uk-slider-item="next"></a>

                        </div>

                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                    </div>
                </div >

            </div>

        </>
    );
}