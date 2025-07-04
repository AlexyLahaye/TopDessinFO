import React, { useState, useEffect } from 'react';
import {Card} from "./card";
import {showModal} from "../../../function/modal";
import {useNavigate} from "react-router-dom";
import {route} from "../../../route/route";

export function Dernier_Post(props) {

    // initialisation
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    //UseEffect
    useEffect( ()=>{
        setPosts(props.posts);
    }, [props.posts])

    function handleShowAllPosts() {
        sessionStorage.setItem("userIdSelected", props.userId);
    }

    return (<>
            <div className="travail  participationConteneur uk-container-large">

                <div className="conBackground radius-Small uk-container-large uk-border-rounded">
                    <div className=" partieTitre radius-Small backgroundViolet uk-border-rounded">
                        <div className="conTitreParti uk-flex uk-align-center">
                            <div>
                                <h2 className="uk-padding-small uk-padding-remove"> DERNIERS POSTS  <button uk-icon="icon: plus-circle" onClick={() =>{ showModal("modalAjoutPost")}}></button></h2>
                            </div>
                            <div data-uk-lightbox className="pointer">

                                <div data-uk-lightbox>
                                    <a className="show_all"
                                       href="/post"
                                       data-type="iframe"
                                       onClick={handleShowAllPosts}>Show all</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="PartieSlider ">

                    <div className=" uk-slider-container-offset uk-padding-remove-bottom" data-uk-slider="finite: true;">

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                            <div className="uk-slider-items  uk-child-width-1-2@s uk-child-width-1-2@m  uk-child-width-1-3@xl uk-grid uk-padding-remove-bottom">

                                {posts.length > 0 &&
                                    posts.map((post, cpt) => {
                                        return (
                                            <Card id={post.id} chemin={route +`uploads/${post.image_1}`} />
                                        )
                                    })
                                }

                            </div>

                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href
                               uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
                               uk-slider-item="next"></a>

                        </div>

                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                    </div>
                </div >

            </div>

        </>
    );
}