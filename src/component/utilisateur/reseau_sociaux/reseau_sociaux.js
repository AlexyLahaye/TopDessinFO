import React, { useState, useEffect } from 'react';

export function Reseau(props) {

    // initialisation
    const [reseaux, setReseaux] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setReseaux(props.reseaux);
    }, [props.reseaux])

    return (<>

            {reseaux[0] && (

                <>
                    <div className={reseaux[0].instagram === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                         <a href={`https://instagram.com/${reseaux[0].instagram}/`} className="uk-icon-button pointer" uk-icon="instagram" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].instagram}
                      </span>
                    </div>

                    <div className={reseaux[0].twitter === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button " uk-icon="twitter" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].twitter}
                      </span>
                    </div>

                    <div className={reseaux[0].tiktok === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="tiktok" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].tiktok}
                      </span>
                    </div>

                    <div className={reseaux[0].discord === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="discord" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].discord}
                      </span>
                    </div>

                    <div className={reseaux[0].twitch === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="twitch" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].twitch}
                      </span>
                    </div>

                    <div className={reseaux[0].etsy === "" ? "uk-hidden" : "uk-padding-small"}>
                      <span className="uk-padding-small">
                        <a href="" className="uk-icon-button" uk-icon="etsy" style={{ backgroundColor: "#201e34" }}></a> {reseaux[0].etsy}
                      </span>
                    </div>

                    <div className="uk-padding-small  ">

                        <span className="modification pointer" uk-icon="pencil" data-uk-toggle="target: #modifReseau"/>

                    </div>



                </>

            )}



        </>
    );
}