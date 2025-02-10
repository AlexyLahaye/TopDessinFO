import React, { useState, useEffect } from 'react';

export function Participation_Conteneur(props) {

    return (<>

            <div className="uk-container-large travail participationConteneur radius-Small backgroundViolet">
                <div className="backgroundViolet">
                    <div className="uk-slider-container-offset" data-uk-slider>

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                            <div className="uk-slider-items uk-child-width-1-2@s uk-grid">
                                <div>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src="images/photo.jpg" width="1800" height="1200" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src="images/dark.jpg" width="1800" height="1200" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src="images/light.jpg" width="1800" height="1200" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src="images/photo2.jpg" width="1800" height="1200" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                            <img src="images/photo3.jpg" width="1800" height="1200" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Headline</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href
                               uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
                               uk-slider-item="next"></a>

                        </div>

                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                    </div>
                </div>
            </div>

        </>
    );
}