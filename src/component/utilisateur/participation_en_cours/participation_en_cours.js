import React, { useState, useEffect } from 'react';
import {Card} from "./card";

export function Participation_Conteneur(props) {

    // initialisation

    //UseEffect

    return (<>

            <div className="travail participationConteneur uk-container-large">
                <div className="conBackground uk-container-large uk-border-rounded">
                    <div className=" test backgroundViolet uk-border-rounded">

                    </div>
                </div>

                <div className="test2 ">

                    <div className="noPadding uk-slider-container-offset" data-uk-slider>

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                            <div className="uk-slider-items uk-child-width-1-2@s uk-grid">

                                {mesTachesInfo.length > 0 &&
                                    mesTachesInfo.map((tache, cpt) => {

                                        return (
                                            <Card />
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