import React, { useEffect, useState } from 'react';
import { getAllPostsRoute } from '../route/post';
import { NavbarHorizontal, NavbarVertical } from "../component/global/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHeart as faHeartSolid, faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import PostMasonryGrid from '../component/global/postMasonryGrid';
import PostFeed from '../component/global/postFeed';

export default function Accueil() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayMode, setDisplayMode] = useState("grid"); // "grid" ou "feed"

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const [status, data] = await getAllPostsRoute();
                if (status !== 200 || !Array.isArray(data)) throw new Error('Réponse API inattendue');
                const formatted = data.map(p => ({
                    ...p,
                    images: [p.image_1, p.image_2, p.image_3, p.image_4].filter(Boolean),
                    liked: p.liked || false
                }));
                setPosts(formatted);
            } catch (err) {
                console.error('Erreur chargement posts :', err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div className="loader">Chargement...</div>;
    }

    return (
        <>
            <div className="navBarHorizontale">
                <NavbarHorizontal />
            </div>
            <div className="navBarVertical">
                <NavbarVertical />
            </div>


            {/* BOUTONS DE SWITCH AFFICHAGE */}
            <div className="display-switcher">
                <button
                    className={`display-btn ${displayMode === "grid" ? "active" : ""}`}
                    onClick={() => setDisplayMode("grid")}
                    aria-label="Affichage grille"
                >
                    <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button
                    className={`display-btn ${displayMode === "feed" ? "active" : ""}`}
                    onClick={() => setDisplayMode("feed")}
                    aria-label="Affichage feed"
                >
                    <FontAwesomeIcon icon={faTh} />
                </button>
            </div>

            <div className="displayPostContainer">
                {/* Affichage conditionnel */}
                {displayMode === "grid"
                    ? <PostMasonryGrid posts={posts} />
                    : <PostFeed posts={posts} />
                }
            </div>
        </>
    );
}
