import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../css/commentaire.css";

//Pour fonctionner ce component à besoin des props suivante :

//id_utilisateur
//l'utilisateur
//la page où il est actuellement


export function NavbarHorizontal(props) {

    // initialisation

    //UseEffect

    return (<>


            <nav className="navBarHorizontale backgroundViolet" data-uk-navbar>
                <div className="uk-navbar-left backgroundViolet">

                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>

                </div>
            </nav>

        </>
    );
}

export function NavbarVertical(props) {

    // initialisation

    //UseEffect

    return (<>


            <div
                className="navBarVertical uk-card  uk-card-body uk-padding-remove uk-margin-remove uk-flex uk-flex-middle uk-height-viewport backgroundViolet"
                style={{ width: "60px" }}
            >
                <div className="alignitemNavBarVert uk-flex uk-flex-column uk-flex-center uk-width-1-1 ">
                    <a href="#" className="uk-padding-small" uk-icon="icon: home; ratio: 2"></a>
                    <a href="#" className="uk-padding-small" uk-icon="icon: cart; ratio: 2"></a>
                    <a href="#" className="uk-padding-small">
                        <FontAwesomeIcon icon="fa-solid fa-list-check" size="2xl" />
                    </a>
                    <a href="#" className="uk-padding-small">
                        <FontAwesomeIcon icon="fa-solid fa-trophy" size="2xl" />
                    </a>
                    <a href="#" className="uk-padding-small">
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="2xl" />
                    </a>
                </div>
            </div>


        </>
    );
}


