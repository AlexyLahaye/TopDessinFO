import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CardSingle} from "../component/posts/card_single";
import {Commentaire} from "../component/global/commentaire.js";
import {MultipleImage} from "../component/posts/multiple_image";
import {Overlay_Commentaire} from "../component/posts/overlay_commentaire";
import {getID} from "../function/token";
import {getFriends} from "../function/utilisateur/follows";
import {recupCom} from "../function/post/commentaire";
import {recupRéclamationt} from "../function/parametre/signalement";


export function Posts(props) {

    // initialisation
    const [posts, setPosts] = useState([]);
    const [infoPost, setInfoPost] = useState("");
    const [idPostCom, setIdPostCom] = useState(0);
    const [commentaires, setCommentaires] = useState([]);

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();

    //UseEffect
    useEffect( ()=>{
        let tab = getInfotest();
        setPosts(tab);

    }, [])


    //récupération des commentaire d'un post lors du click
    useEffect( ()=>{

        const fetchData = async () => {

            if(idPostCom !== undefined){
                const  commentaires = await recupCom(token, idPostCom);
                setCommentaires(commentaires);
            }

        }
        fetchData();

        let postRecherche = posts.find(post => post.id === idPostCom);
        setInfoPost(postRecherche);


    }, [idPostCom])

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

    async function refreshcom() {
        if(idPostCom !== undefined){
            const  commentaires = await recupCom(token, idPostCom);
            setCommentaires(commentaires);
        }
    }

    const handleRefresh = async () => {

        const  commentaires = await recupCom(token, idPostCom);
        setCommentaires(commentaires);

    };

    return (<>

            <div className="conteneurPost uk-container-expend  uk-padding-remove-top uk-flex uk-flex-wrap uk-flex-auto ">

                {posts.length > 0 &&
                    posts.map((post, cpt) => {
                        return (
                            <CardSingle id={post.id} like={post.nbLike} com={post.nbCom} images={post.image}  nbImage={post.nbImage} type={post.type}
                                        note={post.note} isLike={post.is_like} classement={post.classement} showOverlay={showOverlay} setIdPostCom={setIdPostCom}  tokenId={id_utilisateur} token={token}/>
                        )
                    })
                }

            </div>


            <div className="overlay " id="overlay" >

                <Overlay_Commentaire infoPost={infoPost} commentaires={commentaires} hideOverlay={hideOverlay} setIdPostCom={setIdPostCom} idPostCom={idPostCom}  handleRefresh={handleRefresh} refreshcom={refreshcom} tokenId={id_utilisateur}/>

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

function getCom(id) {

    var tab = [{
        "id_post": 1,
        "id_Profil_Com": 1,
        "id_Com": 1,
        "commentaire": "waouh ! Trop fort",
        "nom_utilisateur": "ZazouPazard_38",
        "icone_uti": "img/icone/lapin_alice.png",
        "date": "02/02/2025",

    },{
        "id_post": 1,
        "id_Profil_Com": 2,
        "id_Com": 2,
        "commentaire": "bg bg",
        "nom_utilisateur": "Kanpai",
        "icone_uti": "img/icone/poisson(1).png",
        "date": "01/02/2025",

    },]

    return tab;


}
