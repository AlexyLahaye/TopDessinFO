import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {NavbarHorizontal, NavbarVertical} from "../component/global/navbar";
import {getID} from "../function/token";
import {suppCom} from "../function/post/commentaire";
import {reportCom} from "../function/parametre/signalement";
import {Link, useParams} from "react-router-dom";
import {NotationEtoile} from "../component/posts/notation_etoile";
import {recupInfoTournois} from "../function/tournois/infoTournois";


export function Info_Tournois(props) {

    // initialisation
    const [infoTournois, setInfoTournois] = useState(null);
    const [classement, setClassement] = useState(null);
    const [juges, setJuges] = useState(null);
    const [refresh, setRefresh] = useState(true);

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();
    const { id } = useParams();

    //UseEffect
    useEffect( ()=>{

        async function fetchPosts() {

            const tab = await recupInfoTournois(token, id)
            console.log(tab)
            const tab2 = getInfoClassement()
            const tab3 = getInfoJuges()
            setInfoTournois(tab)
            setClassement(tab2)
            setJuges(tab3)
        }

        fetchPosts();



    }, [])


    return (<>

            {infoTournois !== null && infoTournois !== undefined && (
                <>
                    <div className="navBarHorizontale">
                        <NavbarHorizontal />
                    </div>
                    <div className="navBarVertical">
                        <NavbarVertical />
                    </div>

                    <div className="conteneurAllPage">


                        <span className="voter pointer uk-label uk-margin-small-left ">Commencer à voter</span>

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



                    <div className="">

                        <div className=" travail ">
                            <h2 className=" uk-text-center "> * Classement provisoire *</h2>

                            <div className="uk-container uk-container-medium uk-margin-auto ">


                                {infoTournois?.monClassement !== undefined && (
                                    <>
                                        <div className="uk-margin-medium-top text-blanc" >
                                            Mon classement :

                                            <div className="boxclassement uk-margin-medium-top uk-flex uk-flex-around divInfoClassement">

                                               <span className="monoton text-blanc uk-margin-small-left"> #23 </span>
                                                <div className="perso-longeur-50 uk-flex uk-flex-around uk-margin-small-top">

                                                    {infoTournois?.monClassement !== undefined && (
                                                        <>
                                                                <NotationEtoile note={infoTournois?.monClassement.originalite} />
                                                                <NotationEtoile note={infoTournois?.monClassement.theme} />
                                                                <NotationEtoile note={infoTournois?.monClassement.technique} />

                                                        </>
                                                    )}

                                                </div>

                                                <div className="userinfoClassement uk-margin-small-top perso-longeur-30 uk-text-right">
                                                    {infoTournois?.monClassement !== undefined && (
                                                        <>
                                                            <Link
                                                                to={`/utilisateur/${infoTournois?.monClassement.user.pseudo}#${infoTournois?.monClassement.user.id}`}
                                                                className="perso-longeur-100 uk-text-center  aNavVerti uk-text-lead uk-width-1-1"
                                                            >
                                                                {infoTournois?.monClassement.user.pseudo}
                                                            </Link>

                                                             <img
                                                                 className={infoTournois?.monClassement.user.icone ? "classementIcone header_user_logo icone " : "uk-hidden"}
                                                                 src={"/img/icone/" + infoTournois?.monClassement.user.icone}
                                                             />
                                                        </>

                                                    )}
                                                </div>

                                            </div>

                                        </div>

                                        </>
                                )}

                                <div className="uk-margin-medium-top text-blanc" >
                                    Classement :

                                    <div className="containerClassement">
                                        {classement.classement?.length > 0 &&
                                            classement.classement.map((info, index) => (

                                                <div className="boxclassement uk-margin-medium-top uk-flex uk-flex-around divInfoClassement">

                                                    <span className="monoton text-blanc uk-margin-small-left"> #{info.rang} </span>
                                                    <div className="perso-longeur-50 uk-flex uk-flex-around uk-margin-small-top">
                                                        <NotationEtoile note={info.originalite} />
                                                        <NotationEtoile note={info.theme} />
                                                        <NotationEtoile note={info.technique} />
                                                    </div>

                                                    <div className="userinfoClassement uk-margin-small-top perso-longeur-30 uk-text-right ">
                                                        <Link
                                                            to={`/utilisateur/${info.user.pseudo}#${info.user.id}`}
                                                            className="perso-longeur-100 uk-text-center  aNavVerti uk-text-lead uk-width-1-1"
                                                        >
                                                            {info.user.pseudo}
                                                        </Link>

                                                        <img
                                                            className={info.user.icone ? "classementIcone header_user_logo icone " : "uk-hidden"}
                                                            src={"/img/icone/" + info.user.icone}
                                                        />
                                                    </div>

                                                </div>

                                            ))}

                                    </div>

                                </div>


                                <div className="uk-margin-large-top">

                                    <h2 className=" uk-text-center "> L'équipe de juges </h2>
                                </div>

                                <div className="uk-flex uk-flex-center uk-margin-large-top">

                                    {juges.juges?.length > 0 &&
                                        juges.juges.map((info, index) => (


                                            <div key={index} className=" boxClassement8 radius-Small">
                                                <div className="uk-flex uk-flex-middle uk-margin-medium-top">
                                                    <Link
                                                        to={`/utilisateur/${info.user.pseudo}#${info.user.id}`}
                                                        className="perso-longeur-100 uk-text-center  aNavVerti uk-text-lead uk-width-1-1"
                                                    >
                                                        {info.user.pseudo}
                                                    </Link>

                                                    <img
                                                        className={info.user.icone ? " jugesIcone icone " : "uk-hidden"}
                                                        src={"/img/icone/" + info.user.icone}
                                                    />
                                                </div>

                                                <div className=" uk-flex uk-flex-center uk-position-bottom uk-margin-small-top">
                                                    <img src="/img/rang/diamand.png" className="rangJuges"/>
                                                </div>

                                            </div>




                                        ))}

                                </div>


                            </div>

                        </div>

                    </div>


                    <div className="parentVague" >

                        {infoTournois?.monClassement === undefined && (
                            <>
                                <div className="uk-container uk-container-medium uk-margin-auto ">
                                    <div className="btn-wrapper">
                                        <div className="btn-like">Participer</div>
                                    </div>
                                </div>

                            </>
                        )}


                        <img src="/img/back/fumee.png" className="VagueImg"/>

                    </div>





                </>
            )}

            {infoTournois === null &&
                (
                    <h2>Tournois introuvable</h2>

                )

            }



        </>
    );
}


function getInfotest() {

    var tab = {
        "banner": "jinxx.jpg",
        "paralaxe": "victor.jpg",
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
        }],
        "monClassement" : {
            "user" : {
                "id" : 1,
                "pseudo" : "Moi !!!",
                "icone" : "anime/fille_3.png",
            },
            "originalite" : 4.5,
            "theme" : 5,
            "technique" : 3,
            "rang" : 2
        }
    };

    return tab;

}

function getInfoClassement() {

    var tab = {
        "classement" : [{
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
        },{
            "user" : {
                "id" : 1,
                "pseudo" : "Test2",
                "icone" : "animaux/lapin_rose.png",
            },
            "originalite" : 3,
            "theme" : 3,
            "technique" : 3,
            "rang" : 4
        },{
            "user" : {
                "id" : 1,
                "pseudo" : "ThierryTHOMAS",
                "icone" : "animaux/lapin_rose.png",
            },
            "originalite" : 3,
            "theme" : 3,
            "technique" : 3,
            "rang" : 4
        }],
    };

    return tab;

}

function getInfoJuges() {

    var tab = {
        "juges" : [{
            "user" : {
                "id" : 1,
                "pseudo" : "ThierryTHOMAS",
                "icone" : "animaux/lapin_rose.png"
            }},
            {
                "user" : {
                    "id" : 1,
                    "pseudo" : "SUPERMAN",
                    "icone" : "anime/gojo.png"
                }},
            {
                "user" : {
                    "id" : 1,
                    "pseudo" : "Corrinnee_XXX",
                    "icone" : "animaux/lapin_rose.png"
                }}]
    };

    return tab;

}
