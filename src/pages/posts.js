import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CardSingle} from "../component/posts/card_single";


export function Posts(props) {

    // initialisation
    const [posts, setPosts] = useState([]);
    const [infoPost, setInfoPost] = useState([{
        "id": 0,
        "nbImage": 1,
        "nbLike": 78,
        "nbCom": 30,
        "Description": "",
        "date_création": "",
        "type": "post",
        "image": ["img/levre2.jpg"],
        "note" : 0,
        "is_like" : 1,
        "classement" : 0,
    }]);
    const [idPostCom, setIdPostCom] = useState("test");

    //UseEffect
    useEffect( ()=>{
        let tab = getInfotest()
        setPosts(tab);

    }, [])

    // Afficher l'overlay
    function showOverlay() {
        document.getElementById("overlay").classList.add("active");
        document.body.style.overflow = "hidden"; // Empêche le scroll
    }

// Cacher l'overlay
    function hideOverlay() {
        document.getElementById("overlay").classList.remove("active");
        document.body.style.overflow = "auto"; // Permet de scroller à nouveau
    }

    //récupération des commentaire d'un post lors du click
    useEffect( ()=>{
        let postRecherche = posts.find(post => post.id === idPostCom);
        console.log(postRecherche);
        console.log(idPostCom);
        setInfoPost(postRecherche);

    }, [idPostCom])



    return (<>
            <div className="conteneurPost uk-container-expend  uk-padding-remove-top uk-flex uk-flex-wrap uk-flex-auto ">

                {posts.length > 0 &&
                    posts.map((post, cpt) => {
                        return (
                            <CardSingle id={post.id} like={post.nbLike} com={post.nbCom} images={post.image}  nbImage={post.nbImage} type={post.type}
                                        note={post.note} isLike={post.is_like} classement={post.classement} showOverlay={showOverlay} setIdPostCom={setIdPostCom}/>
                        )
                    })
                }

            </div>


            <div className="overlay" id="overlay" onClick={hideOverlay}>
                <div className="uk-flex uk-flex-around overlay-content">
                    <div className="image uk-width-1-2">
                        <p>Post en cours d'affichage {idPostCom} rgbf</p>
                        <img src="img/badge2.png"   className={props.classement === 1 ? "" : "uk-hidden"}alt="Concours blabla"/>
                    </div>

                    <div className="commentaire uk-width-1-2">
                        les commentaires
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
        "Description": "31/12",
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
            "Description": "31/12",
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
            "Description": "31/12",
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
