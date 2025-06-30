import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import "../../css/tournois.css";

export default function TournoisMiniCard({ tournoi }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tournois/${tournoi.id}`);
    };

    const backgroundColor = tournoi.couleur || "#d44545"; // couleur par défaut rouge


    return (
        <div
            className="tournoi-mini-card"
            onClick={handleClick}
            style={{ backgroundColor, cursor: "pointer" }}
        >
            <h4 className="mini-card-title">{tournoi.titre}</h4>

            <div className="tournoi-tag">
                {tournoi.tags?.[0] || "Sans tag"}
            </div>

            <div className="mini-card-reward">
                <FontAwesomeIcon icon={faCoins} className="reward-icon" />
                {tournoi.recompense} pts
            </div>
        </div>
    );
}
