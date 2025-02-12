import React from "react";
import {Badges_header} from "./badges_header";

export function Header() {
    return(
        <div>
            <div className="uk-background-width-1-1 uk-background-muted">
                <img className="header_bg" src="/test_malau/VIKVIK.png" />
                <div className="grid-header">
                    <div className="item1">
                        <img className="header_user_logo" src="/test_malau/champi.png" />
                    </div>
                    <div className="item2">Nom Utilisateur</div>
                    <div className="item3">Description un peu nul blablablablablabla blabla bla</div>
                    <div className="item4">
                        <Badges_header/>
                    </div>
                </div>
            </div>
        </div>
    );
}