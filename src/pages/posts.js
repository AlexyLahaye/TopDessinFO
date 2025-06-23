import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { CardSingle } from "../component/posts/card_single";
import { Overlay_Commentaire } from "../component/posts/overlay_commentaire";
import { getInfoPost } from "../route/post"; // Fonction d'appel au backend pour récupérer les posts

export function Posts() {
    // States
    const [posts, setPosts] = useState([]);
    const [infoPost, setInfoPost] = useState("");
    const [idPostCom, setIdPostCom] = useState("test");
    const [commentaires, setCommentaires] = useState([]);
    const [rechargePage, setRechargePage] = useState(false);

    const token = sessionStorage.getItem("token");
    const userIdSelected = sessionStorage.getItem("userIdSelected");

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

    // Récupération des commentaires
    useEffect(() => {
        const postRecherche = posts.find(post => post.id === idPostCom);
        setInfoPost(postRecherche);
        const commentaires = getCom(idPostCom); // ❗ à remplacer par appel API réel plus tard
        setCommentaires(commentaires);
    }, [idPostCom]);

    // Fonctions utilitaires
    function showOverlay() {
        document.getElementById("overlay").classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function hideOverlay() {
        document.getElementById("overlay").classList.remove("active");
        document.body.style.overflow = "auto";
    }

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
                        />
                    ))}
            </div>

            <div className="overlay" id="overlay">
                <Overlay_Commentaire infoPost={infoPost} commentaires={commentaires} hideOverlay={hideOverlay} />
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
