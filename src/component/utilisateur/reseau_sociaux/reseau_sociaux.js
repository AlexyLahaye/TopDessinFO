import React, { useState, useEffect } from 'react';
import {showModal} from "../../../function/modal";

//pour ofnctionner ce composant à besoin
//
//
//  [] : un tableau  avec comme donnée
//  {
//         "instagram": "",
//         "twitter": "",
//         "discord": "",
//         "twitch": null,
//         "tiktok": "",
//         "etsy": null
//     }
//
// utiCourant : pour afficher ou pas le crayon
//
//


export function Reseau(props) {

    // initialisation
    const [reseaux, setReseaux] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setReseaux(props.reseaux);
    }, [props.reseaux])

    return (<>

            {reseaux !== undefined && (

                <>
                    <div className={reseaux[0]?.instagram === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                         <a href={`https://instagram.com/${reseaux[0]?.instagram}/`} className="uk-icon-button pointer" uk-icon="instagram" style={{ backgroundColor: "#201e34" }}
                            target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.instagram}
                      </span>
                    </div>

                    <div className={reseaux[0]?.twitter === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button " uk-icon="twitter" style={{ backgroundColor: "#201e34" }}
                           target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.twitter}
                      </span>
                    </div>

                    <div className={reseaux[0]?.tiktok === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="tiktok" style={{ backgroundColor: "#201e34" }}
                           target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.tiktok}
                      </span>
                    </div>

                    <div className={reseaux[0]?.discord === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="discord" style={{ backgroundColor: "#201e34" }}
                           target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.discord}
                      </span>
                    </div>

                    <div className={reseaux[0]?.twitch === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="twitch" style={{ backgroundColor: "#201e34" }}
                           target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.twitch}
                      </span>
                    </div>

                    <div className={reseaux[0]?.etsy === null ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="etsy" style={{ backgroundColor: "#201e34" }}
                           target="_blank" rel="noopener noreferrer"></a>
                          {reseaux[0]?.etsy}
                      </span>
                    </div>

                    <div className={props.utiCourant === true ? "uk-padding-small  " : "uk-hidden"} >

                        <span className="modification pointer" uk-icon="pencil" onClick={() =>{ showModal("modalModifReseaux")}}/>

                    </div>



                </>

            )}



        </>
    );
}