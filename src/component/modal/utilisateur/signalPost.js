import React, { useState, useEffect , useRef} from 'react';

import {setVar, updateInfoReseaux} from "../../../function/utilisateur/reseaux";
import {getToken} from "../../../function/token";

import {hideModal} from "../../../function/modal";
import {reportPost} from "../../../function/parametre/signalement";
import {recupAllRaison} from "../../../function/post/signalement";
import {recupCom} from "../../../function/post/commentaire";

// POur fonctionner ce composant à besoin d'être appelé par la fonction :
//
//
//                          showModal("modalSignalPost")
//
//          idSignalPost =  id du post
//          token        =  {token}
//          tokenId      =  {id_utilisateur}

export function Modal_Signalement_Post(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState("");

    const [raisons, setRaison] = useState([]);
    const [selectedRaison, setSelectedRaison] = useState(0);
    const [description, setDescription] = useState('');

    const token = sessionStorage.getItem("token");


    //récupération des commentaire d'un post lors du click
    useEffect( ()=>{

        const fetchData = async () => {

            if(props.idSignalPost !== undefined){
                const  raisons = await recupAllRaison(token );
                setRaison(raisons);
            }

        }
        fetchData();
        setSelectedRaison(0)
        setDescription("")


    }, [props.idSignalPost])

    return (<>

            {!success && (

                <>


                    <div  className="overlay " id="modalSignalPost">

                        <div className="overlayModal">

                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title"> Signalement du post</h2>
                            </div>
                            <div className="contentModal uk-modal-body">

                                <div className={error ? "uk-alert-danger uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href="#" className="uk-alert-close" data-uk-close></a>
                                    <p>{messError}</p>
                                </div>
                                <div className={success ? "uk-alert-success uk-margin" : "uk-hidden"} data-uk-alert="">
                                    <a href="#" className="uk-alert-close" data-uk-close></a>
                                    <p>{messSuccess}</p>
                                </div>

                                <div className="">


                                    <div className="uk-form-controls">
                                        <select
                                            className="uk-select"
                                            id="form-horizontal-select"
                                            value={selectedRaison}
                                            onChange={(e) => setSelectedRaison(e.target.value)}
                                        >
                                            <option value='0'>-- Sélectionnez une raison --</option>
                                            {raisons.map((raison) => (
                                                <option key={raison.id} value={raison.id}>
                                                    {raison.libelle}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="textAreaGrand uk-margin">
                                        <textarea
                                            className="uk-textarea inputModif"
                                            rows="7"
                                            placeholder="Description"
                                            aria-label="Description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>

                                </div>

                                <img className="ImageModal" src="/img/tache_encre.png" />
                            </div>

                            <div className="uk-modal-footer uk-text-right">
                                <button
                                    className="uk-button uk-button-default uk-modal-close"
                                    type="button"
                                    onClick={() => {
                                        hideModal("modalSignalPost")
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="uk-button uk-button-danger"
                                    type="button"
                                    onClick={ async () => {
                                        const signal = await reportPost(props.token, props.tokenId , props.idSignalPost, description , selectedRaison);
                                        hideModal("modalSignalPost")

                                        setDescription("");
                                        setSelectedRaison(0);
                                        }}
                                >
                                    Signaler
                                </button>
                            </div>
                        </div>
                    </div>

                </>

            )}



        </>
    );
}