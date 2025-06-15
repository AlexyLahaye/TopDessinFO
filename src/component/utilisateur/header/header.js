import React, { useState, useEffect } from "react";


//pour fonctionner ce composant à besoin
//
//
//  [] : un tableau  avec comme donnée
//  {
//         "instagram": "",
//         "twitter": "",
//
//     }
//
// utiCourant : pour afficher ou pas le crayon
//
//

export function Header(props) {

    const [userInfo, setUserInfo] = useState([]);
    const [badges, setBadges] = useState([]);

    useEffect( ()=>{
        setUserInfo(props.dataUser)
        console.log(userInfo);
        console.log('userInfo');
        setBadges(props.aquiredBadges)
    }, [props.dataUser, props.aquiredBadges])


    return(
        <div>
            <div className="uk-background-width-1-1 uk-background-muted">
                <img className="header_bg" src={"/img/" + userInfo?.banner} />
                <div className="grid-header">
                    <div className="item1">
                        <img className="header_user_logo" src={"/img/" + userInfo?.icone} />
                    </div>
                    <div className= "item2">
                       {userInfo?.pseudo}
                        <span className= "modification pointer " style={{ display: props.utiCourant === false ? 'none' : 'inline-block' }}
                              uk-icon="pencil" data-uk-toggle="target: #modifPseudo"/>

                    </div>
                    <div className="item3">{userInfo?.description}</div>
                    <div className="item4">
                        <div className="badge-header">


                            {props.aquiredBadges.length > 0 && props.aquiredBadges.map((badge, cpt) =>  {
                                //console.log("mes badges ",badge);
                                return(
                                    <div className="badgeUser">
                                        <img src={badge.img} />
                                    </div>
                                )
                            })}

                            <div data-uk-lightbox className="pointer">

                                <div data-uk-lightbox>
                                    <a className="show_all"
                                       href="http://localhost:3001/participation"
                                       data-type="iframe">Show all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}