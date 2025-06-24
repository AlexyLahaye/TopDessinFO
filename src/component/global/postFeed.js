import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faCommentDots, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { getID } from '../../function/token';
import { checkIfLiked, sendLike, removeLike, timeSince } from "../../function/post/like";
import { fetchUserFromPost } from "../../function/post/CRUD";
export default function PostFeed({ posts }) {
    const [likesState, setLikesState] = useState({});
    const [likesCount, setLikesCount] = useState({});
    const [userInfos, setUserInfos] = useState({});
    const [mainImages, setMainImages] = useState({});
    const [previewData, setPreviewData] = useState(null); // { images: [...], currentIndex: 0 }

    const token = sessionStorage.getItem("token");
    const userId = getID();

    useEffect(() => {
        const fetchLikesAndUsers = async () => {
            const newLikesState = {};
            const newLikesCount = {};
            const newUserInfos = {};
            const newMainImages = {};

            for (const post of posts) {
                try {
                    const liked = await checkIfLiked(token, userId, post.id);
                    newLikesState[post.id] = liked;
                    newLikesCount[post.id] = post.nb_like || 0;
                    newMainImages[post.id] = post.images[0];

                    const [status, userData] = await fetchUserFromPost(post.id);
                    newUserInfos[post.id] = status === 200
                        ? userData
                        : { pseudo: "Inconnu", image: null };

                } catch (e) {
                    console.error("Erreur dans checkIfLiked ou getUserFromPost :", e);
                    newLikesState[post.id] = false;
                    newLikesCount[post.id] = post.nb_like || 0;
                    newUserInfos[post.id] = { pseudo: "Erreur", image: null };
                }
            }

            setLikesState(newLikesState);
            setLikesCount(newLikesCount);
            setUserInfos(newUserInfos);
            setMainImages(newMainImages);
        };

        if (token && userId) {
            fetchLikesAndUsers();
        }
    }, [posts, token, userId]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!previewData) return;

            if (e.key === 'Escape') {
                setPreviewData(null);
            } else if (e.key === 'ArrowRight') {
                setPreviewData(prev => ({
                    ...prev,
                    currentIndex: (prev.currentIndex + 1) % prev.images.length
                }));
            } else if (e.key === 'ArrowLeft') {
                setPreviewData(prev => ({
                    ...prev,
                    currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
                }));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [previewData]);

    const toggleLike = async (postId) => {
        const isLiked = likesState[postId];

        if (isLiked) {
            await removeLike(token, userId, postId);
            setLikesState(prev => ({ ...prev, [postId]: false }));
            setLikesCount(prev => ({
                ...prev,
                [postId]: Math.max(0, (prev[postId] || 1) - 1)
            }));
        } else {
            await sendLike(token, userId, postId);
            setLikesState(prev => ({ ...prev, [postId]: true }));
            setLikesCount(prev => ({
                ...prev,
                [postId]: (prev[postId] || 0) + 1
            }));
        }
    };

    const changeMainImage = (postId, newImage) => {
        setMainImages(prev => ({
            ...prev,
            [postId]: newImage
        }));
    };

    const showPrev = () => {
        setPreviewData(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
    };

    const showNext = () => {
        setPreviewData(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    };

    return (
        <div className="feed-container">
            {posts.map(post => (
                <div key={post.id} className="feed-card">
                    <div className="feed-header">
                        <span className="feed-avatar">
                            <img src={`../../../../img/icone/${userInfos[post.id]?.icone}`} alt="avatar" />
                        </span>
                        <span className="feed-username">{userInfos[post.id]?.pseudo || "Chargement..."}</span>
                        <span className="feed-time">{timeSince(post.createdAt)}</span>
                    </div>
                    <div
                        className="feed-main-image-wrapper"
                        onClick={() =>
                            setPreviewData({
                                images: post.images,
                                currentIndex: post.images.findIndex(i => i === mainImages[post.id])
                            })
                        }
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={`http://localhost:3333/uploads/${mainImages[post.id]}`}
                            alt="post"
                            className="feed-main-image"
                        />
                    </div>

                    {post.images.length > 1 && (
                        <div className="feed-thumbnails-row">
                            {post.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`http://localhost:3333/uploads/${img}`}
                                    alt=""
                                    className="feed-thumbnail"
                                    onClick={() => changeMainImage(post.id, img)}
                                    style={{
                                        border: mainImages[post.id] === img ? '2px solid #000' : 'none',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                    )}
                    <span className="feed-description">{post.description}</span>
                    <div className="feed-actions">
                        <button
                            className={`like-btn-feed${likesState[post.id] ? ' liked' : ''}`}
                            onClick={() => toggleLike(post.id)}
                        >
                            <FontAwesomeIcon
                                icon={likesState[post.id] ? faHeartSolid : faHeartRegular}
                                className="like-heart-icon"
                            />
                        </button>
                        <span className="feed-likes-count">{likesCount[post.id] || 0}</span>
                        <span className="feed-comments">
                            <FontAwesomeIcon icon={faCommentDots} /> 15
                        </span>
                    </div>
                </div>
            ))}

            {previewData && (
                <div className="image-preview-modal">
                    <button className="preview-close" onClick={() => setPreviewData(null)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <img
                        src={`http://localhost:3333/uploads/${previewData.images[previewData.currentIndex]}`}
                        alt="preview"
                    />
                </div>
            )}
        </div>
    );
}
