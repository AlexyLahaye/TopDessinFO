import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CardSingle} from "../component/posts/card_single";
import {Commentaire} from "../component/global/commentaire.js";
import {MultipleImage} from "../component/posts/multiple_image";
import {Overlay_Commentaire} from "../component/posts/overlay_commentaire";
import {NavbarHorizontal, NavbarVertical} from "../component/global/navbar";
import {Profil} from "../component/parametres/profil";


export function Parametre(props) {

    // initialisation
    const [posts, setPosts] = useState([]);


    //UseEffect
    useEffect( ()=>{


    }, [])


    return (<>

        <div className="navBarHorizontale">
            <NavbarHorizontal />
        </div>
        <div className="navBarVertical">
            <NavbarVertical />
        </div>

        <div className="conteneurAllPage  ">

                <ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Participation</a></li>
                    <li><a href="#">Signalement</a></li>
                </ul>

                <div className="uk-switcher uk-margin">
                    <div>
                        <Profil />
                    </div>
                    <div>
                        Hello again!
                        <img className="imageDecoParametreGauche" src="/img/back/deco_site/enfants_tm.png" />
                    </div>
                    <div>
                        Bazi
                        <img className="imageDecoParametreDroite" src="/img/back/deco_site/tempete.png" />
                    </div>



                </div>





        </div>



        </>
    );
}

