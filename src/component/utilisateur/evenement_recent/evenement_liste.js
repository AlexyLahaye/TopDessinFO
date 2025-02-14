import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function Evenement_liste(props) {
    // Exemple de données pour tester (à remplacer par des données dynamiques)
    const evenementsArray = [
        { titre: "Participation au concours du mois", date: "2024-11-11", img: null },
        { titre: "Championnat Régional", date: "2024-12-01", img: "Badge1.png" },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: null },
        { titre: "Ajout post", date: "2024-12-01", img: "hwei.jpg" },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: null },
        { titre: "Championnat Régional", date: "2024-12-01", img: "Badge8.png" },
        { titre: "Obtention icone 'Champimignon'", date: "2024-11-11", img: "champi.png" },
        { titre: "Championnat Régional", date: "2024-12-01", img: null },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: "Badge15.png" },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: null },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: null },
        { titre: "Tournoi Blitz", date: "2024-11-11", img: null },
    ];

    // Générer la liste des événements avec `.map()`
    const evenements = evenementsArray.map((evenement, index) => (
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