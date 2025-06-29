import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MultipleImage} from "./multiple_image";
import {Commentaire} from "../global/commentaire";
import {envoieCom} from "../../function/post/commentaire";
import {getID} from "../../function/token";
import {route} from "../../route/route";

export function Overlay_Commentaire(props) {

    const token = sessionStorage.getItem("token");
    const tokenId = getID();
    const BASE_URL = "uploads/";

    const [com, setCom] = useState([]);

    const handleCom = (event) => {
        setCom(event.target.value);
    };

    const images = props.infoPost?.images?.map(img => route +`${BASE_URL}${img}`) || [];

    console.log("props.commentaires", props.commentaires)

    return (
        <>
            <div className="uk-flex uk-flex-around overlay-content allUti">
                <div className="image uk-width-1-2">
                    {images.length === 1 &&
                        <div>
                            <img src={images[0]} alt="" className="imgCommentaire" />
                        </div>
                    }

                    {images.length > 1 &&
                        <div className="multipleImgCommentaire">
                            <MultipleImage images={images} contexte="commentaire" />
                        </div>
                    }
                </div>
                <div className="commentaire uk-width-1-2">

                    <div className="divCom">
                        {props.commentaires.length > 0 &&
                            props.commentaires.map((com) => {
                                const date = new Date(com.createdAt);
                                const now = new Date();
                                let  dateAff;

                                // Fonction utilitaire pour comparer les dates (sans l'heure)
                                const isSameDay = (d1, d2) =>
                                    d1.getFullYear() === d2.getFullYear() &&
                                    d1.getMonth() === d2.getMonth() &&
                                    d1.getDate() === d2.getDate();

                                // Vérifie si c’est aujourd’hui
                                if (isSameDay(date, now)) {
                                    dateAff = `Aujourd'hui, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                                }
                                // Vérifie si c’est hier
                                else {
                                    const yesterday = new Date(now);
                                    yesterday.setDate(now.getDate() - 1);

                                    if (isSameDay(date, yesterday)) {
                                        dateAff = `Hier, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                                    } else {
                                        // Format classique si ce n'est ni aujourd'hui ni hier
                                        const formatter = new Intl.DateTimeFormat('fr-FR', {
                                            day: '2-digit',
                                            month: 'long',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: false,
                                        });

                                        const parts = formatter.formatToParts(date);
                                        const jour = parts.find(p => p.type === 'day').value;
                                        const mois = parts.find(p => p.type === 'month').value;
                                        const heure = parts.find(p => p.type === 'hour').value;
                                        const minute = parts.find(p => p.type === 'minute').value;

                                        dateAff = `${jour} ${mois}, ${heure}:${minute}`;
                                    }
                                }

                                return (
                                    <Commentaire
                                        idCom={com.id}
                                        utilisateur={com.user.pseudo}
                                        id_utilisateur={com.user.id}
                                        icone={com.user.icone}
                                        commentaire={com.contenu}
                                        date={dateAff}
                                        key={com.id}
                                        tokenId={props.tokenId}
                                        refreshcom={props.refreshcom}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="ajoutCommentaire uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                            <input
                                className="uk-input"
                                type="text"
                                aria-label="Clickable icon"
                                onChange={handleCom}
                                value={com}
                                onKeyDown={async (e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        const envoiemess = await envoieCom(token, tokenId, props.idPostCom, com);
                                        setCom("");
                                        props.handleRefresh();
                                    }
                                }}
                            />
                        </div>
                    </div>

                </div>

                <span className="pointer uk-margin-small-right" uk-icon="close" onClick={props.hideOverlay}></span>

            </div>

            <div className="allUtiResponsive responsiveCommentaire" onClick={props.hideOverlay}>
                <div className="divCom">
                    {props.commentaires.length > 0 &&
                        props.commentaires.map((com, cpt) => {
                            const date = new Date(com.createdAt);
                            const now = new Date();
                            let  dateAff;

                            // Fonction utilitaire pour comparer les dates (sans l'heure)
                            const isSameDay = (d1, d2) =>
                                d1.getFullYear() === d2.getFullYear() &&
                                d1.getMonth() === d2.getMonth() &&
                                d1.getDate() === d2.getDate();

                            // Vérifie si c’est aujourd’hui
                            if (isSameDay(date, now)) {
                                dateAff = `Aujourd'hui, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                            }
                            // Vérifie si c’est hier
                            else {
                                const yesterday = new Date(now);
                                yesterday.setDate(now.getDate() - 1);

                                if (isSameDay(date, yesterday)) {
                                    dateAff = `Hier, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                                } else {
                                    // Format classique si ce n'est ni aujourd'hui ni hier
                                    const formatter = new Intl.DateTimeFormat('fr-FR', {
                                        day: '2-digit',
                                        month: 'long',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false,
                                    });

                                    const parts = formatter.formatToParts(date);
                                    const jour = parts.find(p => p.type === 'day').value;
                                    const mois = parts.find(p => p.type === 'month').value;
                                    const heure = parts.find(p => p.type === 'hour').value;
                                    const minute = parts.find(p => p.type === 'minute').value;

                                    dateAff = `${jour} ${mois}, ${heure}:${minute}`;
                                }
                            }

                            return (
                                <Commentaire
                                    idCom={com.id}
                                    utilisateur={com.user.pseudo}
                                    id_utilisateur={com.user.id}
                                    icone={com.user.icone}
                                    commentaire={com.contenu}
                                    date={dateAff}
                                    key={cpt}

                                    refreshcom={props.refreshcom}
                                />
                            );
                        })
                    }
                </div>

                <div className="ajoutCommentaire uk-margin">
                    <div className="uk-inline">
                        <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                        <input
                            className="uk-input"
                            type="text"
                            aria-label="Clickable icon"
                            onChange={handleCom}
                            value={com}
                            onKeyDown={async (e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    const envoiemess = await envoieCom(token, tokenId, props.idPostCom, com);
                                    setCom("");
                                    props.handleRefresh();
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
