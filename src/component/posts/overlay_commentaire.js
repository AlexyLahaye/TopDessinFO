import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultipleImage } from "./multiple_image";
import { Commentaire } from "../global/commentaire";

export function Overlay_Commentaire(props) {

    const BASE_URL = "http://localhost:3333/uploads/";

    const images = props.infoPost?.images?.map(img => `${BASE_URL}${img}`) || [];

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

                <div className="commentaire uk-width-1-2" onClick={props.hideOverlay}>
                    {props.commentaires.length > 0 &&
                        props.commentaires.map((com, cpt) => (
                            <Commentaire
                                key={cpt}
                                utilisateur={com.nom_utilisateur}
                                icone={com.icone_uti}
                                commentaire={com.commentaire}
                                date={com.date}
                            />
                        ))
                    }

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                            <input className="uk-input" type="text" aria-label="Clickable icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="allUtiResponsive responsiveCommentaire" onClick={props.hideOverlay}>
                <div className="commentaire">
                    {props.commentaires.length > 0 &&
                        props.commentaires.map((com, cpt) => (
                            <Commentaire
                                key={cpt}
                                utilisateur={com.nom_utilisateur}
                                icone={com.icone_uti}
                                commentaire={com.commentaire}
                                date={com.date}
                            />
                        ))
                    }
                </div>

                <div className="uk-margin">
                    <div className="uk-inline">
                        <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                        <input className="uk-input" type="text" aria-label="Clickable icon" />
                    </div>
                </div>
            </div>
        </>
    );
}
