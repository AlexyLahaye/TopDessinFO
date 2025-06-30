import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { route } from "../../route/route";


import "../../css/commentaire.css";
import {getID} from "../../function/token";


//Pour fonctionner ce component à besoin des props suivante :

//id_utilisateur
//l'utilisateur
//la page où il est actuellement


export function NavbarHorizontal(props) {

    const [idCurrentUser, setIdCurrentUser] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const id = getID();
        if (id) setIdCurrentUser(id);
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchValue.trim().length > 0) {
                axios.get(`${route}users/searchUsers/${searchValue}`)
                    .then(res => {
                        setResults(res.data); // tableau [{id, pseudo, icone}]
                    })
                    .catch(() => {
                        setResults([]);
                    });
            } else {
                setResults([]);
            }
        }, 300); // debounce de 300ms

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue]);


    return (<>


            <nav className="navBarHorizontale backgroundViolet " data-uk-navbar>
                <div className="uk-navbar-left backgroundViolet">

                    <a className="uk-navbar-item uk-logo" href="/" aria-label="Back to Accueil"><img src={"/img/logo.png"} className="logoImg"/></a>

                    <li className="uk-position-relative">
                        <div className="uk-inline uk-margin-small-bottom">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                            <input
                                className="uk-input radius-Small"
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Rechercher un utilisateur"
                            />
                        </div>

                        {results.length > 0 && (
                            <ul className="uk-list uk-position-absolute uk-background-muted uk-width-medium uk-box-shadow-large uk-padding-small uk-margin-remove-top" style={{ zIndex: 999 }}>
                                {results.map(user => (
                                    <li key={user.id} className="uk-flex uk-flex-middle uk-padding-small pointer" onClick={() => navigate(`/utilisateur/${user.id}`)}>
                                        <img src={"/img/icone/" + user.icone} alt="avatar" style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }} />
                                        {user.pseudo}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>


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
                            <Link to={`/utilisateur/${idCurrentUser}`} className="aNavVerti">
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
                    <Link to="/logs" className="uk-padding-small aNavVerti">
                        <FontAwesomeIcon icon="fa-solid fa-list-check" size="2xl" />
                    </Link>
                    <Link to="/tournois" className="uk-padding-small aNavVerti">
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


