import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Posts(props) {

    // initialisation
    const [posts, setPosts] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setPosts(props.participation);

    }, [props.participation])

    return (<>
            <div className="conteneurPost uk-container-expend  uk-padding-remove-top uk-flex uk-flex-wrap uk-flex-auto ">

                <div className="cardPost uk-margin-bottom uk-margin-top">
                    <div className="cardenfant uk-card ">
                        <div className="img uk-card-media-top">
                            <div data-uk-lightbox>

                                <a href="img/levre2.jpg"><img src="img/levre2.jpg" alt=""/></a>
                            </div>

                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> <span className="nbComment"  >12 </span>
                                </div>
                                <div className="uk-padding-small">
                                    <span className="nbComment" > 3 </span> <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>

                            </div>
                            <div className="uk-flex">
                                <div className="AjoutCom uk-inline ">
                                    <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                                    <input className="radius-Small uk-input" type="text" aria-label="Clickable icon" placeholder="Ecrire un commentaire..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cardPost uk-margin-bottom uk-margin-top">
                    <div className="cardenfant uk-card">
                        <div className="topCard uk-card-media-top">


                                <div className="topCard uk-position-relative" data-uk-slideshow="animation: fade">

                                    <div className="img topCard uk-slideshow-items">
                                        <div>
                                            <div data-uk-lightbox>

                                                <a href="img/fee.jpg"><img src="img/fee.jpg" alt="" data-uk-cover/></a>
                                            </div>

                                        </div>
                                        <div>

                                            <div data-uk-lightbox>

                                                <a href="img/oeil.jpg"><img src="img/oeil.jpg" alt="" data-uk-cover/></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div data-uk-lightbox>

                                                <a href="img/levre.jpg"><img src="img/levre.jpg" alt="" data-uk-cover/></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vuesPlsImage uk-position-bottom-right uk-position-small">
                                        <ul className="uk-thumbnav">
                                            <li data-uk-slideshow-item="0">
                                                <a href="#">
                                                    <img src="img/fee.jpg" width="50" height="15" alt=""/>
                                                </a>
                                            </li>
                                            <li data-uk-slideshow-item="1">
                                                <a href="#">
                                                    <img src="img/oeil.jpg"  width="50" height="15"  alt=""/>
                                                </a>
                                            </li>
                                            <li data-uk-slideshow-item="2">
                                                <a href="#">
                                                    <img src="img/levre.jpg"  width="50" height="15"  alt=""/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> 12
                                </div>
                                <div className="uk-padding-small">
                                    26 <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>
                            </div>
                            <h3 className="uk-card-title">Media Top</h3>
                            dsfgvdf

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>

                <div className=" cardPost">
                    <div className="cardenfant uk-card uk-card-default">
                        <div className="img uk-card-media-top">
                            <img src="img/boucle.jpg" width="300" height="100" alt=""/>
                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> 12
                                </div>
                                <div className="uk-padding-small">
                                    26 <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>
                            </div>
                            <h3 className="uk-card-title">Media Top</h3>
                            dsfgvdf

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>

                <div className="cardPost">
                    <div className="cardenfant uk-card uk-card-default">
                        <div className="img uk-card-media-top">
                            <img src="img/ange.jpg" width="300"  height="100"alt=""/>


                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> 12
                                </div>
                                <div className="uk-padding-small">
                                    26 <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>
                            </div>
                            <h3 className="uk-card-title">Media Top</h3>
                            dsfgvdf

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>

                <div className="cardPost ">
                    <div className="cardenfant uk-card uk-card-default">
                        <div className="img uk-card-media-top">
                            <img src="img/vintage.jpg" width="300"  height="100"alt=""/>
                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> 12
                                </div>
                                <div className="uk-padding-small">
                                    26 <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>
                            </div>
                            <h3 className="uk-card-title">Media Top</h3>
                            dsfgvdf

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden-div cardPost ">
                    <div className="cardenfant uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src="img/fleur.jpg" width="300"  height="100"alt=""/>
                        </div>
                        <div className="uk-card-body uk-padding-remove">
                            <div className="uk-flex uk-flex-between ">
                                <div className="uk-padding-small">
                                    <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" style={{color: "#fe5152",}} /> 12
                                </div>
                                <div className="uk-padding-small">
                                    26 <FontAwesomeIcon icon="fa-regular fa-comment-dots" size="2xl" style={{color: "#000000",}} />
                                </div>
                            </div>
                            <h3 className="uk-card-title">Media Top</h3>
                            dsfgvdf

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

function getInfotest() {

    var tab = [{
        "id": 1,
        "type": "normal",
        "etat": 0,
        "participant": 30,
        "date_com": "31/12",
        "date_fin": "31/12",
        "titre": "Un jour au paradis"
    }]

    return tab;


}
