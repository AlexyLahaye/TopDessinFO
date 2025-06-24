import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { getID } from '../../function/token';
import UIkit from 'uikit';
import {checkIfLiked, removeLike, sendLike} from "../../function/post/like";

export default function PostMasonryGrid({ posts }) {
    const userId = getID();
    const token = sessionStorage.getItem("token");

    const [likesState, setLikesState] = useState({});

    useEffect(() => {
        const fetchLikes = async () => {
            const newLikesState = {};
            for (const post of posts) {
                const liked = await checkIfLiked(token, userId, post.id);
                newLikesState[post.id] = liked;
            }
            setLikesState(newLikesState);
        };

        if (token && userId) {
            fetchLikes();
        }
    }, [posts, token, userId]);

    const toggleLike = async (postId) => {
        const isLiked = likesState[postId];

        if (isLiked) {
            await removeLike(token, userId, postId);
            setLikesState(prev => ({ ...prev, [postId]: false }));
        } else {
            await sendLike(token, userId, postId);
            setLikesState(prev => ({ ...prev, [postId]: true }));
        }
    };

    return (
        <div className="pinterest-masonry">
            {posts.map(post => (
                <div key={post.id} className="masonry-card">
                    <div className="masonry-image-wrapper">
                        <img
                            src={`http://localhost:3333/uploads/${post.images[0]}`}
                            alt="post"
                            className="masonry-image"
                        />
                        {/* Like button */}
                        <button
                            className={`like-btn${likesState[post.id] ? " liked" : ""}`}
                            title={likesState[post.id] ? "Retirer le like" : "Liker"}
                            type="button"
                            onClick={() => toggleLike(post.id)}
                            style={{ outline: "none", border: "none", background: "none" }}
                        >
                            <FontAwesomeIcon
                                icon={likesState[post.id] ? faHeartSolid : faHeartRegular}
                                className="like-heart-icon"
                            />
                        </button>

                        {/* Badge image count */}
                        {post.images.length > 1 && (
                            <span className="image-count-badge">
                                <FontAwesomeIcon icon={faImages} /> {post.images.length}
                            </span>
                        )}

                        {/* Overlay description */}
                        <div className="masonry-overlay">
                            <p>{post.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
