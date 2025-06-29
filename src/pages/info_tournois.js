import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {NavbarHorizontal, NavbarVertical} from "../component/global/navbar";
import {getID} from "../function/token";
import {suppCom} from "../function/post/commentaire";
import {reportCom} from "../function/parametre/signalement";
import {Link} from "react-router-dom";
import {NotationEtoile} from "../component/posts/notation_etoile";


export function Info_Tournois(props) {

    // initialisation
    const [infoTournois, setInfoTournois] = useState(null);
    const [refresh, setRefresh] = useState(true);

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();

    //UseEffect
    useEffect( ()=>{

        async function fetchPosts() {
            const tab = getInfotest()
            setInfoTournois(tab)
        }

        fetchPosts();



    }, [])


    return (<>

            {infoTournois !== null && (
                <>
                    <div className="navBarHorizontale">
                        <NavbarHorizontal />
                    </div>
                    <div className="navBarVertical">
                        <NavbarVertical />
                    </div>

                    <div className="conteneurAllPage">



                        <div
                            className="uk-margin-large-top uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex header_TournoisIMG"
                            style={{ backgroundImage: `url('/img/${infoTournois?.banner}')` }}
                            uk-parallax="bgy: -400"
                        >

                        </div>

                        <div className="headerTournois ">

                            <div className="prezTournois backgroundViolet radius-Small">

                                <div className="AvatarTournois">
                                    <img src={"/img/icone/" + infoTournois?.user.icone} className={infoTournois?.user.icone !== null ? "icone avatarPlacement" : "uk-hidden"}/>
                                </div>

                                <div className="uk-flex uk-flex-between ">
                                    <div className="conteneurCom">
                                        <Link to={`/utilisateur/${infoTournois?.user.pseudo}`+`#${infoTournois?.user.id}`} className="listeAmis uk-margin-large-left aNavVerti uk-text-lead">
                                            {infoTournois?.user.pseudo}
                                        </Link>

                                    </div>
                                    <div className="uk-flex text-blanc padding-right-15">
                                        <p className=""> <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#c8cbd3",}} /> 5  </p>
                                    </div>
                                </div>

                                <div className="uk-flex uk-flex-around text-blanc uk-margin-top">
                                    <div>
                                        <img className="iconeTournois" src="/img/ticket.png"/> {infoTournois?.npParticipant}
                                    </div>
                                    <div>
                                        <img className="iconeTournois" src="/img/coin.png"/> {infoTournois?.cagnotte}
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon="fa-solid fa-clock" size="lg" /> 1 j 13 min
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="corpTournois travail ">
                            <div className="travail uk-container-small uk-flex uk-flex-center">
                                <h1 className="text-blanc"> {infoTournois?.titre} </h1>

                            </div>
                            <div className="uk-container uk-container-medium uk-margin-auto">
                                <p className="text-blanc uk-text-center">
                                    {infoTournois?.description}
                                </p>

                                <div>
                                    {infoTournois.htag?.length > 0 &&
                                        infoTournois.htag.map((theme, index) => (
                                            <span key={index} className="pointer uk-label uk-margin-small-left ">{theme.libelle}</span>
                                        ))}


                                </div>

                                <div className="uk-margin-medium-top uk-margin-large-top">

                                    <div className="uk-flex uk-flex-around">
                                        <div className="borderTournois text-blanc">

                                            Début du tournois : {infoTournois?.date_création} <br/>
                                            Fin du tournois : {infoTournois?.date_fin} <br/>
                                            Durée totale : <br/>

                                        </div>
                                        <div className="borderTournois text-blanc">

                                            vote du public : 50%<br/>
                                            Vote des juges : 50%<br/>

                                        </div>
                                    </div>

                                    <div className="uk-flex uk-flex-around uk-margin-large-top">
                                        <div className="borderTournois text-blanc">

                                            Thème : {infoTournois?.theme} <br/>
                                            Style : {infoTournois?.style} <br/>
                                            Durée totale : <br/>

                                        </div>
                                        <div className="borderTournois text-blanc">

                                            Les attentes du dessins : {infoTournois?.attente}

                                        </div>
                                    </div>


                                </div>

                            </div>



                        </div>

                    </div>

                    <div className="uk-margin-large-top uk-height-large uk-overflow-hidden uk-light uk-flex uk-position-relative">


                        <div
                            className="uk-position-cover uk-background-cover paralaxe"
                            style={{
                                backgroundImage: `url('/img/${infoTournois?.paralaxe}')`,
                                opacity: 0.4
                            }}
                            uk-parallax="bgy: -400"
                        ></div>


                        <div className="uk-container uk-container-medium uk-margin-auto">
                            <h2 className="classementProv uk-text-center uk-position-absolute"> Classement provisoire</h2>
                            <div className="uk-flex uk-flex-center uk-flex-wrap uk-position-relative">

                                {infoTournois.podium_provisoire?.length > 0 &&
                                    infoTournois.podium_provisoire.map((info, index) => (

                                        <div key={index} className={index === 1 ? "boxClassement1 radius-Small" : "boxClassement radius-Small"}>
                                            <div className="uk-flex uk-flex-middle">
                                                <img
                                                    className={info?.user.icone ? "header_user_logo icone tournoisIcone" : "uk-hidden"}
                                                    src={"/img/icone/" + info?.user.icone}
                                                />
                                                <Link
                                                    to={`/utilisateur/${info?.user.pseudo}#${info?.user.id}`}
                                                    className="perso-longeur-100 uk-text-center  aNavVerti uk-text-lead uk-width-1-1"
                                                >
                                                    {info?.user.pseudo}
                                                </Link>
                                            </div>

                                            <img src={"/img/medaille_" + info?.rang + ".png"} className="uk-margin-small-top"/>

                                            <div className="uk-margin-medium-top uk-position-bottom uk-text-center">
                                                <div className="uk-flex uk-flex-column uk-flex-middle uk-child-width-auto uk-margin-small">
                                                    <div className="uk-flex"><p className="uk-margin-small-right">Originalité :</p><NotationEtoile note={info?.originalite} /></div>
                                                    <div className="uk-flex"><p className="uk-margin-small-right">Thème :</p><NotationEtoile note={info?.theme} /></div>
                                                    <div className="uk-flex"><p className="uk-margin-small-right">Technique :</p><NotationEtoile note={info?.technique} /></div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                            </div>
                        </div>


                    </div>

                    <div style={{ height: '200vh' }}></div>




                </>
            )}

        </>
    );
}


function getInfotest() {

    var tab = {
        "banner": "jinxx.jpg",
        "paralaxe": "arcanes_fan_art.jpg",
        "user": {
            "id" : 1,
            "pseudo" : "Kiunn",
            "icone" : "champi.png"

        },
        "titre" : "Arcanes en Folie",
        "npParticipant": 78,
        "cagnotte": 3670,
        "description": "Exprime ta créativité et ta passion pour LoL ! Que tu sois pro du digital ou fan du crayon papier, illustre ton champion préféré, une scène épique ou une skin inédite. À la clé : des récompenses et la mise en avant de ton talent sur nos réseaux !",
        "date_création": "31/12/2024",
        "date_fin": "19/07/2025",
        "htag": [
            { "libelle": "LoL" },
            { "libelle": "LeagueOfLegends" },
            { "libelle": "Arcanes" },
            { "libelle": "JeuxVideo" },
            { "libelle": "RiotGames" },
            { "libelle": "EsportArt" },

        ],
        "theme" : "Propose ton meilleur barron de la chimie",
        "style" : "Libre",
        "attente" : "Le dessin doit représenté a fond l'univers de Arcanes.",
        "podium_provisoire" : [{
            "user" : {
                "id" : 1,
                "pseudo" : "Kiunn",
                "icone" : "anime/fille_3.png",
            },
            "originalite" : 4.5,
            "theme" : 5,
            "technique" : 3,
            "rang" : 2
        },{
            "user" : {
                "id" : 1,
                "pseudo" : "Papa Nini",
                "icone" : "anime/gojo.png",
            },
            "originalite" : 5,
            "theme" : 5,
            "technique" : 4.7,
            "rang" : 1
        },{
            "user" : {
                "id" : 1,
                "pseudo" : "Zazou",
                "icone" : "animaux/lapin_rose.png",
            },
            "originalite" : 4,
            "theme" : 4.5,
            "technique" : 5,
            "rang" : 3
        }]
    };

    return tab;

}

