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
import { getInfoPost } from "../route/post"; // Fonction d'appel au backend pour récupérer les posts

export function Posts() {
    // States
    const [posts, setPosts] = useState([]);
    const [infoPost, setInfoPost] = useState("");
    const [idPostCom, setIdPostCom] = useState(0);
    const [commentaires, setCommentaires] = useState([]);
    const [rechargePage, setRechargePage] = useState(false);

    const token = sessionStorage.getItem("token");
    const userIdSelected = sessionStorage.getItem("userIdSelected");
    const id_utilisateur = getID();

    // Appel API pour récupérer les posts du user
    useEffect(() => {
        async function fetchPosts() {
            if (userIdSelected) {
                const response = await getInfoPost(userIdSelected);
                if (response && response[0] === 200) {
                    const rawPosts = response[1];
                    const formatted = formatPostsWithImages(rawPosts);
                    setPosts(formatted);
                } else {
                    console.warn("Erreur récupération posts");
                }
            }
        }

        fetchPosts();
    }, [userIdSelected, rechargePage]);


    //récupération des commentaire d'un post lors du click
    useEffect( ()=>{

        const fetchData = async () => {

            if(idPostCom !== undefined){
                const  commentaires = await recupCom(token, idPostCom);
                setCommentaires(commentaires);
                console.log("💬 Commentaires reçus :", commentaires);
            }

        }
        fetchData();

        let postRecherche = posts.find(post => post.id === idPostCom);
        setInfoPost(postRecherche);


    }, [idPostCom])

    // Afficher l'overlay
    function showOverlay() {
        document.getElementById("overlay").classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function hideOverlay() {
        document.getElementById("overlay").classList.remove("active");
        document.body.style.overflow = "auto";
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

    function formatPostsWithImages(posts) {
        return posts.map(post => {
            const images = [post.image_1, post.image_2, post.image_3, post.image_4].filter(Boolean);
            return { ...post, images };
        });
    }

    return (
        <>
            <div className="conteneurPost uk-container-expend uk-padding-remove-top uk-flex uk-flex-wrap uk-flex-auto">
                {posts.length > 0 &&
                    posts.map((post) => (
                        <CardSingle
                            key={post.id}
                            id={post.id}
                            like={post.nb_like}
                            com={post.nb_com}
                            images={post.images}
                            nbImage={post.images.length}
                            type={post.type}
                            note={4 /* post.note */}
                            isLike={false /* post.is_like */}
                            classement={0 /* post.classement */}
                            showOverlay={showOverlay}
                            setIdPostCom={setIdPostCom}
                            tokenId={id_utilisateur}
                            token={token}
                        />
                    ))}
            </div>


            <div className="overlay " id="overlay" >

                <Overlay_Commentaire infoPost={infoPost} commentaires={commentaires} hideOverlay={hideOverlay} setIdPostCom={setIdPostCom} idPostCom={idPostCom}  handleRefresh={handleRefresh} refreshcom={refreshcom} tokenId={id_utilisateur}/>

            </div>
        </>
    );


}

// ✴️ TEMP : commentaires de test
function getCom(id) {
    return [
        {
            id_post: 1,
            id_Profil_Com: 1,
            id_Com: 1,
            commentaire: "waouh ! Trop fort",
            nom_utilisateur: "ZazouPazard_38",
            icone_uti: "img/icone/lapin_alice.png",
            date: "02/02/2025",
        },
        {
            id_post: 1,
            id_Profil_Com: 2,
            id_Com: 2,
            commentaire: "bg bg",
            nom_utilisateur: "Kanpai",
            icone_uti: "img/icone/poisson(1).png",
            date: "01/02/2025",
        },
    ];
}
