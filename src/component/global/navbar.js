import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../css/commentaire.css";
import {getID, getPseudo} from "../../function/token";

//Pour fonctionner ce component à besoin des props suivante :

//id_utilisateur
//l'utilisateur
//la page où il est actuellement


export function NavbarHorizontal(props) {

    // initialisation
    const pseudoCurrentUser = getPseudo()
    const idCurrentUser = getID()
    //UseEffect

    return (<>


            <nav className="navBarHorizontale backgroundViolet " data-uk-navbar>
                <div className="uk-navbar-left backgroundViolet">

                    <a className="uk-navbar-item uk-logo" href="/" aria-label="Back to Home"><img src={"/img/logo.png"} className="logoImg"/></a>

                    <ul className="uk-navbar-nav ulNavbar">
                        <li >
                            <div className="uk-inline uk-margin-small-bottom">
                                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon:  search"></span>
                                <input className="uk-input radius-Small" type="text" aria-label="Not clickable icon"/>
                            </div>
                        </li>

                    </ul>

                </div>
                <div className="uk-navbar-right backgroundViolet ">

                    <ul className="uk-navbar-nav EditProfilNavbar">
                        <li>
                            <Link to="/boite-outil" className="aNavVerti">
                                <FontAwesomeIcon icon="fa-solid fa-toolbox" size="2xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/parametres" className="aNavVerti">
                                <FontAwesomeIcon icon="fa-solid fa-gears" size="2xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to={`/utilisateur/${pseudoCurrentUser}`+`#${idCurrentUser}`} className="aNavVerti">
                                <FontAwesomeIcon icon="fa-solid fa-user-pen" size="2xl" />
                            </Link>
                        </li>
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
                className=" navBarVertical uk-card  uk-card-body uk-padding-remove uk-margin-remove uk-flex uk-flex-middle uk-height-viewport backgroundViolet"
                style={{ width: "60px" }}
            >
                <div className="uk-flex uk-flex-column uk-flex-center uk-width-1-1 ">
                    <Link to="/" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-house" size="2xl" />
                    </Link>
                    <Link to="/monnaie" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-coins" size="2xl" />
                    </Link>
                    <Link to="/taches" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-list-check" size="2xl" />
                    </Link>
                    <Link to="/concours" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-trophy" size="2xl" />
                    </Link>
                    <Link to="/tutoriels" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="2xl" />
                    </Link>
                </div>

            </div>


        </>
    );
}


