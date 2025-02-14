import React, { useState, useEffect } from 'react';
import {Evenement_liste} from "./evenement_liste";

export function Evenement_recent(props) {
    return(
        <div className="evenement_recent_global">

            <div className="evenement_head">
                <div>EVENEMENTS RECENTS</div>
                <div data-uk-lightbox className="pointer">

                    <div data-uk-lightbox>
                        <a className="show_all"
                           href="http://localhost:3001/participation"
                           data-type="iframe">Show all</a>
                    </div>
                </div>
            </div>

            <div className="evenement_container">
                <Evenement_liste/>
            </div>
        </div>
    );
}