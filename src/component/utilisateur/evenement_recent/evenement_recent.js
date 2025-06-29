import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Evenement_recent(props) {


    // initialisation
    const [recentEves, setRecentEves] = useState([]);

    //UseEffect
    useEffect( ()=>{
        if (props.recentEves && props.recentEves.length > 0) {
            setRecentEves(props.recentEves);
        }

    }, [props.recentEves])

    return(
        <div className="evenement_recent_global">

            <div className="evenement_head">
                <div>EVENEMENTS RECENTS</div>
                <div data-uk-lightbox className="pointer">

                    <div data-uk-lightbox>
                        <a className="show_all"
                           href="/participation"
                           data-type="iframe">Show all</a>
                    </div>
                </div>
            </div>

            <div className="evenement_container">

                <div className="evenements_container">
                    <div className="evenements_border">
                        {recentEves.length > 0 &&
                            recentEves.map((evenement, index) => {

                                return (
                                    <div key={index} className="un_evenement">
                                        <div className="evenement_dot">
                                            <FontAwesomeIcon icon="fa-solid fa-circle" size="xs" color="#8b9dd8"></FontAwesomeIcon>
                                        </div>
                                        {/* Vérifier si l'image existe, sinon ne pas afficher l'élément div */}
                                        {evenement.img && (
                                            <div className="evenement_img_container">
                                                <img className="evenement_img" src={"/img/" + evenement.img } alt={evenement.titre} />
                                            </div>
                                        )}
                                        <div className="evenement_titre">{evenement.titre}</div>
                                        <div className="evenement_date">{evenement.date}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    );
}