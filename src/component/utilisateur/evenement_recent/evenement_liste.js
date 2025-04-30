import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function Evenement_liste(props) {
    // initialisation
    const [recentEves, setRecentEves] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setRecentEves(props.recentEves);

    }, [props.recentEves])

    // Générer la liste des événements avec `.map()`
    const evenements = recentEves.map((evenement, index) => (
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
    ));

    return (
        <div className="evenements_container">
            <div className="evenements_border">
                {evenements}
            </div>
        </div>
    );
}