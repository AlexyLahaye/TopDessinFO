import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import "../../css/tournois.css";

export default function TournoisMiniCard({ tournoi }) {
    return (
        <div className="tournoi-mini-card">
            <h4 className="mini-card-title">{tournoi.titre}</h4>
            <div className="tournoi-tag">
                {tournoi.tags[0]}
            </div>
            <div className="mini-card-reward">
                <FontAwesomeIcon icon={faCoins} className="reward-icon" />
                {tournoi.recompense} pts
            </div>
        </div>
    );
}
