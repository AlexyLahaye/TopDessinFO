import React, { useEffect, useState } from 'react';
import { getAllPostsRoute } from '../route/post';
import { NavbarHorizontal, NavbarVertical } from "../component/global/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faImages } from '@fortawesome/free-solid-svg-icons';

export default function Accueil() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await getAllPostsRoute();
                const formatted = result[1].map(post => {
                    const images = [post.image_1, post.image_2, post.image_3, post.image_4].filter(Boolean);
                    return { ...post, images };
                });
                setPosts(formatted);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement des posts :", error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const changeImage = (postId, direction) => {
        setCurrentImageIndex(prev => {
            const current = prev[postId] || 0;
            const total = posts.find(p => p.id === postId)?.images.length || 1;
            let newIndex = current + direction;
            if (newIndex < 0) newIndex = total - 1;
            if (newIndex >= total) newIndex = 0;
            return { ...prev, [postId]: newIndex };
        });
    };

    if (loading) {
        return <div className="uk-text-center uk-margin-large-top uk-text-muted">Chargement...</div>;
    }

    return (
        <>
            <div className="navBarHorizontale">
                <NavbarHorizontal />
            </div>
            <div className="navBarVertical">
                <NavbarVertical />
            </div>

            <div className="uk-container uk-margin-large-top uk-margin-left accueil-container">

                {/* ✅ Titre principal */}
                <h2 className="uk-heading-line uk-text-center uk-margin-large-bottom"><span>Accueil</span></h2>

                <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" data-uk-grid>
                    {posts.map(post => (
                        <div key={post.id}>
                            <div className="post-card-no-border uk-position-relative uk-overflow-hidden uk-border-rounded uk-transition-toggle">
                                <img
                                    src={`http://localhost:3333/uploads/${post.images[currentImageIndex[post.id] || 0]}`}
                                    alt="post"
                                    className="post-img uk-transition-scale-up uk-transition-opaque"
                                />

                                {/* Description en bas */}
                                <div className="uk-position-bottom uk-overlay uk-overlay-primary description-overlay">
                                    <p className="uk-margin-remove">{post.description}</p>
                                </div>

                                {/* Icône image */}
                                {post.images.length > 1 && (
                                    <>
                                    <span className="uk-position-bottom-right uk-label uk-margin-small image-counter">
                                        <FontAwesomeIcon icon={faImages} /> {post.images.length}
                                    </span>
                                        <button className="nav-btn left" onClick={() => changeImage(post.id, -1)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button className="nav-btn right" onClick={() => changeImage(post.id, 1)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}
