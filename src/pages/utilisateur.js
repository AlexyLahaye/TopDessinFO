import React, { useState, useEffect } from 'react';
import {Participation_Conteneur} from "../component/utilisateur/participation_en_cours/participation_en_cours";
import {Dernier_Post} from "../component/utilisateur/dernier_post/dernier_post";
import {Header} from "../component/utilisateur/header/header";
import {Rank} from "../component/utilisateur/rank/rank";
import {Evenement_recent} from "../component/utilisateur/evenement_recent/evenement_recent";
import {Reseau} from "../component/utilisateur/reseau_sociaux/reseau_sociaux";

export function Utilisateur(props) {

    //initialisation

    const [user, setUser] = useState();
    const [aquiredBadges, setAquiredBadges] = useState([]);
    const [participation, setParticipation] = useState([]);
    const [posts, setPosts] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [recentEves, setRecentEves] = useState([]);
    const [reseaux, setReseaux] = useState([]);

    //useState
    useEffect( ()=>{
        let tabUser = getInfoHeader();
        let tabAquiredBadge = getInfoAquiredBadge()
        let tab = getInfotest();
        let tabPost = getInfoPost();
        let tabRank = getInfoRank();
        let tabRecentEve = getInfoRecentEven();
        let tabReseaux = getInfoReseaux();

        setUser(tabUser);
        setAquiredBadges(tabAquiredBadge)
        setParticipation(tab);
        setPosts(tabPost);
        setRanks(tabRank);
        setRecentEves(tabRecentEve);
        setReseaux(tabReseaux);
    }, [])

    // Gestion de la scroll bar apparante ou non
    useEffect(() => {
        const disableScroll = () => {
            if (window.innerWidth >= 1900) {
                document.body.style.overflow = "hidden";
                window.scrollTo(0, 0);
            } else {
                document.body.style.overflow = "auto";
            }
        };

        // Vérifier au chargement
        disableScroll();

        // Écouter les changements de taille d'écran (si la fenêtre est redimensionnée)
        window.addEventListener("resize", disableScroll);

        return () => {
            // Nettoyer l'écouteur et réactiver le scroll lors du démontage du composant
            window.removeEventListener("resize", disableScroll);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (<>
            <div className="canteneurUtilisateurAll uk-container-expend  uk-padding-remove-top">

                {user?.id_user}
                {posts[3]?.id}
                {aquiredBadges[1]?.cc}



                <div className="uk-container-expend">
                    <Header dataUser={user} aquiredBadges={aquiredBadges}/>
                </div>


                <div data-uk-grid className="allUti uk-padding-large">


                    <div className="uk-width-1-2">
                        <div className="reseaux uk-flex uk-flex-wrap uk-margin">
                            <Reseau reseaux={reseaux}/>
                        </div>
                        <Evenement_recent recentEves={recentEves}/>
                    </div>
                    <div className="uk-width-1-2 partie_droite">
                        <div className="DernierPostContainer">
                            <Dernier_Post posts={posts}/>
                        </div>
                        <div className="RankContainer radius-Small">
                            <Rank ranks={ranks}/>
                        </div>

                        <div className="participationPositionnement">
                            <Participation_Conteneur participation={participation}/>
                        </div>

                    </div>


                </div>

                <div className="allUtiResponsive uk-padding-large">

                    <div className="DernierPostContainer">
                        <Dernier_Post posts={posts}/>
                    </div>
                    <div className="RankContainerResponsive radius-Small">
                        <div className="conteneurRankReponsive">
                            <Rank ranks={ranks}/>
                        </div>

                    </div>
                    <div className="participationPositionnement">
                        <Participation_Conteneur participation={participation}/>
                    </div>
                    <div className="EvenementResponsive">
                        <Evenement_recent recentEves={recentEves}/>
                    </div>

                    <div className=" uk-flex uk-flex-wrap uk-margin">
                        <Reseau reseaux={reseaux}/>
                    </div>
                </div>

            </div>

        </>
    );
}

function getInfoHeader(){
    var tab = {
            "id_user":1,
            //Max 13 charac
            "nickname_user":"Zazou Studio",
            //Max 112 charac
            "legend_user":"Rouge, bleu, vert, jaune, toute les couleurs font vivre l'esprit",
            "icon_user":"champi.png",
            "bg_img_user":"spiderBG.jpg"
        }

    return tab;
}

function getInfoAquiredBadge(){
    var tab = [
        {"img": "/img/Badge1.png",},
        {"img": "/img/Badge2.png",},
        {"img": "/img/Badge5.png",},
        {"img": "/img/Badge9.png",},
        {"img": "/img/Badge11.png",},
        {"img": "/img/Badge6.png",},
        {"img": "/img/Badge10.png",},
        {"img": "/img/Badge7.png",},
    ]

    return tab;
}


function getInfotest() {

    var tab = [{
        "id": 1,
        "type": "normal",
        "etat": 0,
        "participant": 30,
        "date_com": "31/12",
        "date_fin": "31/12",
        "titre": "Un jour au paradis"
    },{
        "id": 2,
        "type": "blitz",
        "etat": 1,
        "participant": 4,
        "date_com": "10/02",
        "date_fin": "10/02",
        "titre": "Un jour au sol"
    },{
        "id": 1,
        "type": "normal",
        "etat": 2,
        "participant": 78,
        "date_com": "10/02",
        "date_fin": "15/02",
        "titre": "zazou"
    },{
        "id": 1,
        "type": "normal",
        "etat": 2,
        "participant": 15,
        "date_com": "31/12",
        "date_fin": "15/02",
        "titre": "Un jour au paradis"
    },{
        "id": 1,
        "type": "normal",
        "etat": 0,
        "participant": 30,
        "date_com": "31/12",
        "date_fin": "31/12",
        "titre": "Un jour au paradis"
    },{
        "id": 2,
        "type": "blitz",
        "etat": 1,
        "participant": 4,
        "date_com": "10/02",
        "date_fin": "10/02",
        "titre": "Un jour au paradis"
    },{
        "id": 1,
        "type": "blitz",
        "etat": 2,
        "participant": 78,
        "date_com": "10/02",
        "date_fin": "15/02",
        "titre": "Un jour au paradis"
    },{
        "id": 1,
        "type": "normal",
        "etat": 2,
        "participant": 15,
        "date_com": "31/12",
        "date_fin": "15/02",
        "titre": "Un jour au paradis"
    }]

    return tab;
}

function getInfoPost() {

    var tab = [{
        "id": 1,
        "chemin": "img/hwei.jpg"
    },{
        "id": 2,
        "chemin": "img/oeil.jpg"
    },,{
        "id": 3,
        "chemin": "img/visage_jolie.jpg"
    },{
        "id": 4,
        "chemin": "img/visage.jpg"
    },{
        "id": 5,
        "chemin": "img/oeil.jpg"
    }]

    return tab;
}

function getInfoRank() {

    var tab = [{
        "classe": 1,
        "rang": "immortal",
        "mode": "normal"
    },{
        "classe": 78,
        "rang": "immortal",
        "mode": "blitz"
    },{
        "classe": 9972,
        "rang": "immortal",
        "mode": "commu"
    }]

    return tab;
}

function getInfoRecentEven(){
    var tab = [{
        "titre":"Participation au concours du mois",
        "date":"2024-11-11",
        "img":null
    },
    {
        "titre":"Championnat Régional",
        "date":"2024-12-01",
        "img":"Badge1.png"
    },
    {
        "titre":"Tournoi Blitz",
        "date":"2024-11-11",
        "img":null
    },
    {
        "titre":"Ajout post",
        "date":"2024-12-01",
        "img":"hwei.jpg"
    },
    {
        "titre":"Tournoi Blitz",
        "date":"2024-11-11",
        "img":null
    },
    {
        "titre":"Championnat Régional",
        "date":"2024-12-01",
        "img":"Badge8.png"
    },
    {
        "titre":"Obtention icone 'Champimignon'",
        "date":"2024-11-11",
        "img":"champi.png"
    },
    {
        "titre":"Championnat Régional",
        "date":"2024-12-01",
        "img":null
    },
    {
        "titre":"1ere Place Tournoi Blitz",
        "date":"2024-10-10",
        "img":"Badge15.png"
    },
    ]

    return tab;
}

function getInfoReseaux() {

    var tab = [{
        "instagram": "malaury__",
        "twitter": "AA",
        "tiktok": "MalauryZazou",
        "discord": "kiun__4567",
        "twitch": "",
        "etsy": ""
    }]

    return tab;
}