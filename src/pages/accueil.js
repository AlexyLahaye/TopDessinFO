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
                <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match uk-grid-small" data-uk-grid>
                    {posts.map(post => (
                        <div key={post.id}>
                            <div className="uk-card uk-card-default uk-card-small uk-overflow-hidden uk-transition-toggle">
                                <div className="uk-position-relative">
                                    <img
                                        src={`http://localhost:3333/uploads/${post.images[currentImageIndex[post.id] || 0]}`}
                                        alt="post"
                                        className="uk-transition-scale-up uk-transition-opaque"
                                    />

                                    {post.images.length > 1 && (
                                        <>
                                            <span className="uk-position-bottom-right uk-label uk-margin-small">
                                                <FontAwesomeIcon icon={faImages} /> {post.images.length}
                                            </span>
                                            <button className="uk-position-center-left uk-icon-button uk-button-small" onClick={() => changeImage(post.id, -1)} uk-icon="chevron-left"></button>
                                            <button className="uk-position-center-right uk-icon-button uk-button-small" onClick={() => changeImage(post.id, 1)} uk-icon="chevron-right"></button>
                                        </>
                                    )}
                                </div>
                                <div className="uk-card-body uk-padding-small">
                                    <p className="uk-text-small uk-text-truncate">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
