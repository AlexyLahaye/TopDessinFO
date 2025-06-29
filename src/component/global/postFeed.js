import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart as faHeartSolid,
    faCommentDots,
    faChevronLeft,
    faChevronRight,
    faXmark,
    faEllipsisV,
    faFlag
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { getID } from '../../function/token';
import { checkIfLiked, sendLike, removeLike, timeSince } from "../../function/post/like";
import { fetchUserFromPost } from "../../function/post/CRUD";
import { recupCom } from "../../function/post/commentaire";
import { Overlay_Commentaire } from "../posts/overlay_commentaire";
import {route} from "../../route/route";

export default function PostFeed({ posts }) {
    const [likesState, setLikesState] = useState({});
    const [likesCount, setLikesCount] = useState({});
    const [comsCount, setComsCount] = useState({});
    const [userInfos, setUserInfos] = useState({});
    const [mainImages, setMainImages] = useState({});
    const [previewData, setPreviewData] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [commentaires, setCommentaires] = useState([]);
    const [idPostCom, setIdPostCom] = useState(0);
    const [infoPost, setInfoPost] = useState(null);

    const token = sessionStorage.getItem("token");
    const userId = getID();

    useEffect(() => {
        const fetchLikesAndUsers = async () => {
            const newLikesState = {};
            const newLikesCount = {};
            const newComsCount = {};
            const newUserInfos = {};
            const newMainImages = {};

            for (const post of posts) {
                try {
                    const liked = await checkIfLiked(token, userId, post.id);
                    newLikesState[post.id] = liked;
                    newLikesCount[post.id] = post.nb_like || 0;
                    newComsCount[post.id] = post.nb_com || 0;
                    newMainImages[post.id] = post.images[0];

                    const [status, userData] = await fetchUserFromPost(post.id);
                    newUserInfos[post.id] = status === 200
                        ? userData
                        : { pseudo: "Inconnu", image: null };
                } catch (e) {
                    console.error("Erreur dans checkIfLiked ou getUserFromPost :", e);
                }
            }

            setLikesState(newLikesState);
            setLikesCount(newLikesCount);
            setComsCount(newComsCount);
            setUserInfos(newUserInfos);
            setMainImages(newMainImages);
        };

        if (token && userId) {
            fetchLikesAndUsers();
        }
    }, [posts]);

    useEffect(() => {
        const fetchComments = async () => {
            if (idPostCom) {
                const coms = await recupCom(token, idPostCom);
                setCommentaires(coms);

                const post = posts.find(p => p.id === idPostCom);
                setInfoPost(post);

                document.getElementById("overlay").classList.add("active");
                document.body.style.overflow = "hidden";
            }
        };

        fetchComments();
    }, [idPostCom]);

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

    const toggleDropdown = (postId) => {
        setOpenDropdown(prev => (prev === postId ? null : postId));
    };

    const handleReport = (postId) => {
        console.log(`Signalement du post ${postId}`);
        setOpenDropdown(null);
    };

    const changeMainImage = (postId, newImage) => {
        setMainImages(prev => ({
            ...prev,
            [postId]: newImage
        }));
    };

    const closeOverlay = () => {
        document.getElementById("overlay").classList.remove("active");
        document.body.style.overflow = "auto";
        setIdPostCom(0);
        setCommentaires([]);
        setInfoPost(null);
    };

    const refreshCom = async () => {
        if (idPostCom) {
            const newComs = await recupCom(token, idPostCom);
            setCommentaires(newComs);
        }
    };

    return (
        <>
            <div className="feed-container">
                {posts.map(post => (
                    <div key={post.id} className="feed-card">
                        <div className="feed-header-top">
                            <div className="feed-user">
                                <span className="feed-avatar">
                                    <img src={`../../../../img/icone/${userInfos[post.id]?.icone}`} alt="avatar" />
                                </span>
                                <span className="feed-username">{userInfos[post.id]?.pseudo || "Chargement..."}</span>
                            </div>
                            <span className="feed-time">{timeSince(post.createdAt)}</span>
                        </div>

                        <div className="feed-header-bottom">
                            <span className="feed-description">{post.description}</span>
                            <div className="feed-menu-container">
                                <button className="feed-menu-btn" onClick={() => toggleDropdown(post.id)}>
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </button>
                                {openDropdown === post.id && (
                                    <div className="feed-dropdown">
                                        <button className="feed-dropdown-item" onClick={() => handleReport(post.id)}>
                                            <FontAwesomeIcon icon={faFlag} /> Signaler ce post
                                        </button>
                                    </div>
                                )}
                            </div>
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
                                src={route +`uploads/${mainImages[post.id]}`}
                                alt="post"
                                className="feed-main-image"
                            />
                        </div>

                        {post.images.length > 1 && (
                            <div className="feed-thumbnails-row">
                                {post.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={route + `uploads/${img}`}
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

                        <div className="feed-actions">
                            <div className="feed-likes">
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
                            </div>
                            <div className="feed-comments" onClick={() => setIdPostCom(post.id)}>
                                <FontAwesomeIcon icon={faCommentDots} /> {comsCount[post.id] || 0}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {previewData && (
                <div className="image-preview-modal">
                    <button className="preview-close" onClick={() => setPreviewData(null)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <img
                        src={route +`uploads/${previewData.images[previewData.currentIndex]}`}
                        alt="preview"
                    />
                </div>
            )}

            <div className="overlay" id="overlay">
                {infoPost && (
                    <Overlay_Commentaire
                        infoPost={infoPost}
                        commentaires={commentaires}
                        hideOverlay={closeOverlay}
                        setIdPostCom={setIdPostCom}
                        idPostCom={idPostCom}
                        handleRefresh={refreshCom}
                        refreshcom={refreshCom}
                        tokenId={userId}
                    />
                )}
            </div>
        </>
    );
}
