import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NotationEtoile(props) {

    // initialisation
    const [nbStarEntier, setNbStarEntier] = useState(0);
    const [nbEtoileSeule, setNbEtoileSeule] = useState(0);
    const [demiEtoile, setdemiEtoile] = useState(0);

    //UseEffect
    useEffect( ()=>{
        if(!isNaN(props.note)){
            let etoilePleine = Math.floor(props.note); // Nombre d'étoiles pleines
            let demiEtoile = props.note % 1 !== 0; // Vérifie s'il y a une demi-étoile on fait un modulo en gros
            if(demiEtoile > 0 ){
                demiEtoile = 1;
            }
            let emptyStars = 5 - etoilePleine - demiEtoile; // Étoiles vides restantes

            console.log("MA note " + props.note)
            console.log("mes setoiles" +etoilePleine)
            console.log("Demi etoile : " +demiEtoile)
            setNbStarEntier(etoilePleine);
            setNbEtoileSeule(emptyStars)
            setdemiEtoile(demiEtoile);

        }

    }, [props.note])


    return (<>
            <div className="etoile">
                {/* Affichage des étoiles pleines */}
                {[...Array(nbStarEntier)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon="fa-solid fa-star"  size="lg" style={{ color: "#ffce38" }} />
                ))}
                {/* Affichage de la demi-étoile si nécessaire */}
                {demiEtoile > 0 ? <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" size="lg" style={{ color: "#ffce38" }} /> : null}

                {/* Affichage des étoiles vides */}
                {[...Array(nbEtoileSeule)].map((_, index) => (
                    <FontAwesomeIcon key={`empty-${index}`} icon="fa-regular fa-star" size="lg" style={{ color: "#ffce38" }} />
                ))}

            </div>



        </>
    );
}

