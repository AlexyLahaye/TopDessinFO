import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UIkit from 'uikit';
import {Card} from "../utilisateur/participation_en_cours/card";

export function MultipleImage(props) {

    return (<>
            <div className=" uk-card-media-top">
                <div className="topCard uk-position-relative" data-uk-slideshow="animation: fade">

                    <div className="img topCard uk-slideshow-items">
                        {props.images.length > 0 &&
                            props.images.map((image, cpt) => {

                                return (

                                    <div>
                                        <div data-uk-lightbox>
                                            <a href={image}><img src={image} alt="" data-uk-cover/></a>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="vuesPlsImage uk-position-bottom-right uk-position-small">
                        <ul className="uk-thumbnav">
                            {props.images.length > 0 &&
                                props.images.map((image, cpt) => {

                                    return (
                                        <li data-uk-slideshow-item={cpt}>
                                            <a href="#">
                                                <img src={image} width="50" height="15" alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}