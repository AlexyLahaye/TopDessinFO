import React, { useState, useEffect } from 'react';
import {getInfoNonSensible, updateInfoUser} from "../../../function/utilisateur/info";
import {getToken} from "../../../function/token";
import {hideALert, hideModal} from "../../../function/modal";

export function Modal_Modif_Pseudo(props) {

    // initialisation
    const [error, setError] = useState(false);
    const [messError, setMessError] = useState("");

    const [success, setSuccess] = useState(false);
    const [messSuccess, setMessSuccess] = useState();

    const [pseudo, setPseudo] = useState("");
    const [desc, setDesc] = useState("");

    const token = getToken();

    const handleChangePseudo = (event) => {
        setPseudo(event.target.value);
    };

    const handleChangeDesc = (event) => {
        setDesc(event.target.value);
    };

    //UseEffect
    useEffect( ()=>{
        const setVariable = async () =>{

            await getInfoNonSensible(
                setPseudo,
                setDesc,
                props.idUtilisateur
            );

        }

        setVariable() ;
    }, [props.idUtilisateur,  props.rechargePage])

    return (<>

            {props.idUtilisateur !== undefined && (

                <>


                    <div  className="overlay " id="modalModifProfil">

                        <div className="overlayModal">

                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title">Modification Profil</h2>
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


                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80 ">
                                            <input
                                                className="uk-input inputModif"
                                                type="text"
                                                placeholder={"Pseudo"}
                                                value={pseudo}
                                                onChange={handleChangePseudo}
                                                maxLength="10"

                                            />
                                        </div>
                                    </div>

                                    <div className="uk-margin centrer-contenu">
                                        <div className="uk-inline perso-longeur-80">
                                            <input
                                                className="uk-input inputModif"
                                                type="text"
                                                placeholder={"Description"}
                                                value={desc}
                                                onChange={handleChangeDesc}
                                                maxLength="110"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <img className="ImageModal" src="/img/tache_encre.png" />
                            </div>

                            <div className="uk-modal-footer uk-text-right">
                                <button
                                    className="uk-button uk-button-default uk-modal-close"
                                    type="button"
                                    onClick={() => {

                                        hideALert(setError, setMessError, setSuccess, setMessSuccess,);
                                        hideModal("modalModifProfil");
                                    }}
                                >
                                    retour
                                </button>

                                <button
                                    className="uk-button uk-button-primary"
                                    type="button"
                                    onClick={ () => {
                                        console.log("je click");
                                        updateInfoUser(token, props.idUtilisateur, pseudo, desc,
                                            setError, setMessError, setSuccess, setMessSuccess, props.setRechargePage , props.rechargePage);}}
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>

                </>

            )}



        </>
    );
}