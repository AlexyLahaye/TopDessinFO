import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import "../../css/tournois.css";

export default function TournoisCard({ tournoi }) {
    console.log(tournoi)
    const {
        mode,
        theme,
        dateFin,
        place,
        participants,
        hashtags,
        imagesTop,
    } = tournoi;

    return (
        <div className="tournoi-card">
            <div className="tournoi-left">
                <div className="tournoi-header">
                    <span className="tournoi-mode">MODE : {mode}</span>
                    <div className="tournoi-participants">
                        <FontAwesomeIcon icon={faUser} /> {participants}
                    </div>
                </div>
                <div className="tournoi-theme">THEME : {theme}</div>
                <div className="tournoi-date">FINI LE {dateFin}</div>
                <div className="tournoi-place">PLACE <span>#{place}</span> <span className="dot"></span></div>
                <div className="tournoi-tags">
                    {hashtags.map((tag, idx) => (
                        <div className="tournoi-tag" key={idx}>{tag}</div>
                    ))}
                </div>
                <div className="tournoi-options">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>

            <div className="tournoi-right">
                {imagesTop.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`top${index + 1}`}
                        className={`tournoi-top-img ${index === 0 ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
