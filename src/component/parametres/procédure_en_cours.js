import React, {useEffect, useState} from "react";
import {getInfoNonSensible} from "../../function/utilisateur/info";
import {getInfoReseaux} from "../../function/utilisateur/reseaux";
import {
    aprouvPost,
    recupMesReclamation,
    recupRéclamationt, recupRéclamationtPost, recupSignalementPost,
    sendMess,
    suppPost
} from "../../function/parametre/signalement";
import {getID, getToken} from "../../function/token";
import {Link} from "react-router-dom";
import {CardSingle} from "../posts/card_single";


export function Procedure_en_Cours(props) {

    //Initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [loading, setLoading] = useState(true);
    const [signalementData, setSignalementData] = useState(null);
    const [plusLongueDescription, setPlusLongueDescription] = useState("");
    const [raisons, setRaisons] = useState([]);
    const [tropDeRaisons, setTropDeRaisons] = useState(false);
    const [reclamation, setReclamation] = useState([]);
    const [messages, setMessages] = useState([]);

    const [writeMess, setWriteMess] = useState([]);


    const token = getToken();
    const idToken = getID();

    useEffect(() => {
        async function fetchSignalements() {

            const reclamation = await recupMesReclamation(token, idToken)
            setReclamation(reclamation)

        }

        fetchSignalements();
    }, [ props.token, props.refresh]);


    //La fonction appelée quand on clique sur un item
    const handleClick = async (postId) => {

        const response = await recupSignalementPost(token, postId);

        if (response && response.signalements) {
            const descriptions = response.signalements.map(s => s.description);
            const longue = descriptions.reduce((a, b) => a.length > b.length ? a : b, "");
            const raisonsUniques = [...new Set(response.signalements.map(s => s.raison.libelle))];

            setSignalementData(response);
            setPlusLongueDescription(longue);
            setRaisons(raisonsUniques);
            setTropDeRaisons(raisonsUniques.length > 3);
        }
        setLoading(false);


        const message = await recupRéclamationtPost(token, postId);
        setMessages(message)
        setWriteMess("")

    };

    const handleRefresh = async () => {

        const reclamation = await recupRéclamationt(token, idToken)
        setReclamation(reclamation)

    };

    const handleWriteMess = (event) => {
        setWriteMess(event.target.value);
    };


    return (<>

            <div className={reclamation.length === 0 ? "" : "uk-hidden"}>
                Aucune réclamation.
            </div>

            <ul data-uk-accordion>
                {reclamation.length > 0 &&
                    reclamation.map((recla, cpt) => (
                        <li key={`recla-${recla.postId}-${cpt}`}>
                            <a
                                className="aAccordion uk-accordion-title"
                                href="#"
                                onClick={() => handleClick(recla.postId)}
                            >
                                {recla.etat} sur le post #{recla.postId}
                            </a>

                            <div className="uk-container uk-margin-top uk-accordion-content">
                                <div className="messagerieReclamation uk-card uk-card-default uk-card-body uk-margin messagerie-container">
                                    <div className="uk-flex uk-flex-right uk-margin-small">
                                        <div className="">
                                            {props.posts.length > 0 &&
                                                props.posts
                                                    .filter(post => post.id === recla.postId)
                                                    .map(post => (
                                                        <CardSingle
                                                            key={`post-${post.id}`}
                                                            id={post.id}
                                                            like={post.nb_like}
                                                            com={post.nb_com}
                                                            description={post.description}
                                                            images={post.images}
                                                            nbImage={post.images.length}
                                                            type={post.type}
                                                            note={4 /* post.note */}
                                                            isLike={false /* post.is_like */}
                                                            classement={0 /* post.classement */}
                                                            tokenId={idToken}
                                                            token={token}
                                                            context={"procédure_en_cours"}
                                                        />
                                                    ))}
                                        </div>
                                    </div>

                                    {messages.length > 0 &&
                                        messages.map((mess, idx) => {
                                            const date = new Date(mess.date);
                                            const now = new Date();
                                            let dateAff;

                                            const isSameDay = (d1, d2) =>
                                                d1.getFullYear() === d2.getFullYear() &&
                                                d1.getMonth() === d2.getMonth() &&
                                                d1.getDate() === d2.getDate();

                                            if (isSameDay(date, now)) {
                                                dateAff = `Aujourd'hui, ${date.getHours().toString().padStart(2, '0')}:${date
                                                    .getMinutes()
                                                    .toString()
                                                    .padStart(2, '0')}`;
                                            } else {
                                                const yesterday = new Date(now);
                                                yesterday.setDate(now.getDate() - 1);

                                                if (isSameDay(date, yesterday)) {
                                                    dateAff = `Hier, ${date.getHours().toString().padStart(2, '0')}:${date
                                                        .getMinutes()
                                                        .toString()
                                                        .padStart(2, '0')}`;
                                                } else {
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
                                                <React.Fragment key={`mess-${mess.id || idx}`}>
                                                    <div className={mess.type === 1 ? "uk-flex uk-flex-left uk-margin-small" : "uk-hidden"}>
                                                        <div className="bubble uk-background-muted uk-padding-small uk-border-rounded">
                                                            {mess.commentaire}
                                                            <div className="timestamp uk-text-meta uk-margin-small-top">
                                                                Modérateur – {dateAff}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={mess.type === 0 ? "uk-flex uk-flex-right uk-margin-small" : "uk-hidden"}>
                                                        <div className="bubble uk-background-primary uk-light uk-padding-small uk-border-rounded">
                                                            {mess.commentaire}
                                                            <div className="timestamp uk-text-meta uk-margin-small-top uk-text-right">{dateAff}</div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            );
                                        })}
                                </div>

                                <div className="uk-margin">
                                    <textarea
                                        className="uk-textarea"
                                        rows="3"
                                        placeholder="Écrivez votre message ici..."
                                        onChange={handleWriteMess}
                                        value={writeMess}
                                    ></textarea>
                                </div>

                                <button
                                    type=""
                                    className="uk-button uk-button-primary uk-align-right"
                                    onClick={async () => {
                                        const message = await sendMess(
                                            token,
                                            idToken,
                                            recla.postId,
                                            writeMess,
                                            0,
                                            setError,
                                            setMessError
                                        );
                                        handleClick(recla.postId);
                                    }}
                                >
                                    Envoyer
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>

        </>
        )

}