import React, { useState, useEffect } from 'react';

export function Modal_Modif_Pseudo(props) {

    // initialisation
    const [idUtilisateur, setId_Utilisateur] = useState(1);

    //UseEffect
    useEffect( ()=>{
        setId_Utilisateur(props.reseaux);
    }, [props.reseaux])

    return (<>

            {idUtilisateur !== "" && (

                <>

                    <div id="modifPseudo" data-uk-modal>
                        <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" data-uk-close></button>
                            <div className="uk-modal-header">
                                <h2 className="uk-modal-title">Modification Profil</h2>
                                <p className="uk-text-meta ">  <span className="modification pointer" uk-icon="info" data-uk-toggle="target: #modifReseau"/> Pour modifier votre avatar aller dans votre gallerie.</p>
                            </div>
                            <div className=" testModal  uk-modal-body ">

                                <div className="">

                                    <div className="uk-margin">
                                        <input className="uk-input inputModif" type="text" placeholder="Pseudo" aria-label="Input" maxlength="12"/>
                                    </div>

                                    <div className="uk-margin">
                                        <textarea className="uk-textarea inputModif" rows="5" placeholder="Description" maxlength="100"
                                                  aria-label="Textarea"></textarea>
                                    </div>

                                </div>


                                <img className= "ImageModal"  src="/img/tache_encre3.png" />

                            </div>
                            <div className="uk-modal-footer uk-text-right">
                                <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel
                                </button>
                                <button className="uk-button uk-button-primary" type="button">Save</button>
                            </div>
                        </div>
                    </div>



                </>

            )}



        </>
    );
}