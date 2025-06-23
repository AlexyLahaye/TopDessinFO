import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UIkit from 'uikit';

export function Card(props) {

    return (<>

            <div className={`${props.id}Card cardParticipation`}>
                <div className={props.type == "normal" ? "cardParticipation backgroundBleuCard radius-Small uk-card uk-card-default uk-box-shadow-hover-large" : "cardParticipation backgroundVioletCard radius-Small uk-card uk-card-default uk-box-shadow-hover-large"}>

                    <img src={props.chemin} alt="" data-uk-cover className="radius-Small"/>
                        <canvas ></canvas>

                </div>
            </div>

        </>
    );
}