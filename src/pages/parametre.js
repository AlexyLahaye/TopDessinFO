import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CardSingle} from "../component/posts/card_single";
import {Commentaire} from "../component/global/commentaire.js";
import {MultipleImage} from "../component/posts/multiple_image";
import {Overlay_Commentaire} from "../component/posts/overlay_commentaire";
import {NavbarHorizontal, NavbarVertical} from "../component/global/navbar";
import {Profil} from "../component/parametres/profil";
import {ListeAmis} from "../component/parametres/listeAmis";
import {Signalement} from "../component/parametres/signalement";


export function Parametre(props) {

    // initialisation
    const [posts, setPosts] = useState([]);


    //UseEffect
    useEffect( ()=>{
        let tab = getInfotest();
        setPosts(tab);

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
                    <li><a href="#">Liste amis</a></li>
                    <li><a href="#">Participation</a></li>
                    <li><a href="#">Signalement</a></li>
                </ul>

                <div className="uk-switcher uk-margin">
                    <div>
                        <Profil />
                    </div>
                    <div>
                        <ListeAmis />
                    </div>
                    <div>
                        Hello again!
                        <img className="imageDecoParametreGauche" src="/img/back/deco_site/enfants_tm.png" />
                    </div>
                    <div>

                        <Signalement posts={posts}/>

                    </div>

                </div>





        </div>



        </>
    );
}


function getInfotest() {

    var tab = [{
        "id": 1,
        "nbImage": 1,
        "nbLike": 78,
        "nbCom": 30,
        "Description": "Voici ma description blablabalbla",
        "date_création": "31/12",
        "type": "post",
        "image": ["img/levre2.jpg"],
        "note" : 0,
        "is_like" : 1,
        "classement" : 0,
    },
        {
            "id": 2,
            "nbImage": 3,
            "nbLike": 156,
            "nbCom": 9,
            "Description": "Ce lieu magique semble tout droit sorti d’un rêve. Entre lumière dorée et silence apaisant, chaque instant passé ici devient un souvenir précieux.\n" +
                "La nature y danse avec le vent, et l’horizon paraît sans fin.\n" +
                "On s’y sent libre, inspiré, comme suspendu hors du temps.\n" +
                "C’est un refuge discret pour ceux qui cherchent la beauté dans les détails simples.",
            "date_création": "31/12",
            "type": "tutoriel",
            "image": ["img/fee.jpg", "img/oeil.jpg", "img/levre.jpg"],
            "note" : 0,
            "is_like" : 0,
            "classement" : 0,
        },
        {
            "id": 3,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "Ma description de mon oeuvre",
            "date_création": "31/12",
            "type": "rank",
            "image": ["img/boucle.jpg"],
            "note" : 3.5,
            "is_like" : 1,
            "classement" : 1,
        },
        {
            "id": 4,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "rank",
            "image": ["img/ange.jpg"],
            "note" : 1,
            "is_like" : 0,
            "classement" : 3,
        },
        {
            "id": 5,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "post",
            "image": ["img/vintage.jpg"],
            "is_like" : 0,
            "classement" : 0,
        },
        {
            "id": 6,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "post",
            "image": ["img/fleur.jpg"],
            "is_like" : 0,
            "classement" : 0,
        }]

    return tab;


}

