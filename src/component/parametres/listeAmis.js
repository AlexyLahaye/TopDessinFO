import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {getID} from "../../function/token";
import {getFriends} from "../../function/utilisateur/follows";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




export function ListeAmis(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [amis, setAmis] = useState([]);

    const token = sessionStorage.getItem("token");
    const id_utilisateur = getID();

    //UseEffect
    useEffect( ()=>{

        // récupération des données depuis le back
        const fetchData = async () => {

            if (id_utilisateur !== undefined && id_utilisateur !== null && id_utilisateur) {
                // Appel API avec le token et l'ID
                const tabFriends = await getFriends(token, id_utilisateur)

                setAmis(tabFriends);
            }
        }

        fetchData();

    }, [])


    return (<>

            <div className="parametreBox travail">


                <h2 className="uk-heading-line"><span>Mes amis</span></h2>
                <span className="uk-label">Nombre d'ami : {amis?.length}</span>

                <ul className=" uk-list  perso-longeur-30 ">

                    {amis?.length > 0 &&
                        amis?.map((ami, cpt) => {
                            return (

                                <li className="uk-flex ">
                                    <img className={ami?.icone !== null ? "header_user_logo icone" : "uk-hidden"} src={"/img/icone/" + ami?.icone} />

                                    <Link to={`/utilisateur/${ami?.pseudo}`+`#${ami?.id}`} className="listeAmis uk-margin-left aNavVerti uk-text-lead">
                                        {ami?.pseudo}
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>



            <img className="imageDecoParametreDroite" src="/img/back/deco_site/amis_2.png" />



        </>
    );
}

