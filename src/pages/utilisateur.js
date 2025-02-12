import React, { useState, useEffect } from 'react';
import {Participation_Conteneur} from "../component/utilisateur/participation_en_cours/participation_en_cours";
import {Dernier_Post} from "../component/utilisateur/dernier_post/dernier_post";
import {Header} from "../component/utilisateur/header/header";
import {Rank} from "../component/utilisateur/rank/rank";

export function Utilisateur(props) {

    //initialisation
    const [participation, setParticipation] = useState([]);
    const [posts, setPosts] = useState([]);
    const [ranks, setRanks] = useState([]);

    //useState
    useEffect( ()=>{
        let tab = getInfotest();
        let tabPost = getInfoPost();
        let tabRank = getInfoRank();
        setParticipation(tab);
        setPosts(tabPost);
        setRanks(tabRank);
        
        console.log(tabRank);
    }, [])


    return (<>
            <div className="canteneurUtilisateurAll uk-container-expend  uk-padding-remove-top">
                <div className="uk-container-expend">
                    <Header/>
                </div>
                <div data-uk-grid className="allUti uk-padding-large">
                    <div className="uk-width-1-2">
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
                    <div className="participationPositionnement">
                        <Participation_Conteneur participation={participation}/>
                    </div>
                </div>

            </div>

        </>
    );
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