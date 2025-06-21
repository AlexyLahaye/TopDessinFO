import React, { useEffect, useState } from 'react';
import {recupRéclamationt, recupRéclamationtPost, recupSignalementPost} from '../../function/parametre/signalement';
import {Link} from "react-router-dom";
import {logout} from "../../function/connexion";
import {suppUser} from "../../function/parametre/profil";
import {getID, getToken} from "../../function/token";
import {Card} from "../utilisateur/dernier_post/card";

export default function ReclamationMessagerie(props) {
    const [loading, setLoading] = useState(true);
    const [signalementData, setSignalementData] = useState(null);
    const [plusLongueDescription, setPlusLongueDescription] = useState("");
    const [raisons, setRaisons] = useState([]);
    const [tropDeRaisons, setTropDeRaisons] = useState(false);
    const [reclamation, setReclamation] = useState([]);
    const [messages, setMessages] = useState([]);


    const token = getToken();
    const idToken = getID();

    useEffect(() => {
        async function fetchSignalements() {

            const reclamation = await recupRéclamationt(token, idToken)
            setReclamation(reclamation)

        }

        fetchSignalements();
    }, [props.postId, props.token]);



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

    };

    return (
        <ul data-uk-accordion>

            {reclamation.length > 0 &&
                reclamation.map((recla, cpt) => {

                    return (
                        <>
                            <li>
                                <a className="aAccordion uk-accordion-title" href="#"   onClick={() => handleClick(recla.postId)} >{recla.etat} sur le post #{recla.id}</a>
                                <div className="uk-container uk-margin-top uk-accordion-content">
                                    <div className="uk-card u uk-card-body uk-margin">
                                        <h4 className="uk-card-title">Résumé des signalements</h4>
                                        <p><strong>Nombre total :</strong> {signalementData?.total}</p>
                                        <p><strong>Raisons :</strong> {tropDeRaisons ? `${raisons.length} raisons différentes` : raisons.join(", ")}</p>
                                        <p><strong>Description la plus détaillée :</strong><br />"{plusLongueDescription}"</p>
                                        <p>
                                            <strong>
                                                Auteur du post :

                                                <Link to={`/utilisateur/${signalementData?.auteurDuPost.pseudo}`+`#${signalementData?.auteurDuPost.id}`} className="uk-margin-left">
                                                    {signalementData?.auteurDuPost.pseudo}
                                                </Link>
                                            </strong>
                                        </p>

                                        <hr className="uk-divider-icon"/>
                                        <div className="uk-flex uk-flex-around">
                                            <button className="uk-button uk-button-primary" onClick={()=>{}}> Approuver</button>
                                            <button className="uk-button uk-button-danger"  onClick={()=>{  }}>Supprimer le post</button>
                                        </div>
                                    </div>

                                    <div className="messagerieReclamation uk-card uk-card-default uk-card-body uk-margin messagerie-container">


                                        {messages.length > 0 &&
                                            messages.map((mess, cpt) => {

                                                const date = new Date(mess.date);
                                                const formatter = new Intl.DateTimeFormat('fr-FR', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: false,
                                                });

                                                // Exemple de résultat : "18 juin à 09:02"
                                                const parts = formatter.formatToParts(date);
                                                const jour = parts.find(p => p.type === 'day').value;
                                                const mois = parts.find(p => p.type === 'month').value;
                                                const heure = parts.find(p => p.type === 'hour').value;
                                                const minute = parts.find(p => p.type === 'minute').value;

                                                const dateAff = `${jour} ${mois}, ${heure}:${minute}`;

                                                return (<>
                                                    <div className={mess.type === 0 ? "uk-flex uk-flex-left uk-margin-small" : "uk-hidden"}>
                                                        <div className="bubble uk-background-muted uk-padding-small uk-border-rounded">
                                                            {mess.commentaire}
                                                            <div className="timestamp uk-text-meta uk-margin-small-top">
                                                                <Link to={`/utilisateur/${mess?.utilisateur.pseudo}`+`#${mess?.utilisateur.id}`}  className="uk-margin-small-right">
                                                                    {mess?.utilisateur.pseudo}
                                                                </Link>
                                                                  – {dateAff}
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className={mess.type === 1 ? "uk-flex uk-flex-right uk-margin-small" : "uk-hidden"}>
                                                        <div className="bubble uk-background-primary uk-light uk-padding-small uk-border-rounded">
                                                            {mess.commentaire} {mess.postId}
                                                            <div className="timestamp uk-text-meta uk-margin-small-top uk-text-right">
                                                                <Link to={`/utilisateur/${mess?.utilisateur.pseudo}`+`#${mess?.utilisateur.id}`}  className="uk-margin-small-right">
                                                                    {mess?.utilisateur.pseudo}
                                                                </Link>
                                                                – {dateAff}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </>
                                                )
                                            })
                                        }


                                    </div>

                                    <form className="uk-margin-top reponse-form">
                                        <div className="uk-margin">
                                            <textarea className="uk-textarea" rows="3" placeholder="Écrivez votre message ici..."></textarea>
                                        </div>
                                        <button type="submit" className="uk-button uk-button-primary uk-align-right">Envoyer</button>
                                    </form>
                                </div>
                            </li>

                        </>
                    )
                })
            }

        </ul>
    );
}
