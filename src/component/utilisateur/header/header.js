import React, { useState, useEffect } from "react";
import {showModal} from "../../../function/modal";
import {isFriend, addFriend, deleteFriend} from "../../../function/utilisateur/follows";
import {getID, getToken} from "../../../function/token";
import {setVar} from "../../../function/utilisateur/reseaux";


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
// utiCourant : pour afficher ou pas le crayon (true/false)
//
// idUtilisateur : pour récupérer l'id de l'utilisateur de la page
//

export function Header(props) {

    const [userInfo, setUserInfo] = useState([]);
    const [badges, setBadges] = useState([]);

    const [ami, setAmi] = useState(false);


    const token = getToken();
    const idToken = getID();

    useEffect( ()=>{
        setUserInfo(props.dataUser)
        setBadges(props.aquiredBadges)
    }, [props.dataUser, props.aquiredBadges])


    useEffect(()=>{
        const setVariable = async () =>{

           const estUnAmi =   await  isFriend(token , props.idUtilisateur, idToken, ami, setAmi );
        }

        setVariable() ;


    }, [props.idUtilisateur])


    return(
        <div>
            {userInfo && (
            <div className="uk-background-width-1-1 uk-background-muted">
                <img className="header_bg" src={"/img/" + userInfo?.banner} />
                <div className="grid-header">
                    <div className="item1">
                        <img className="header_user_logo" src={"/img/" + userInfo?.icone} />
                    </div>
                    <div className= "item2">
                       {userInfo?.pseudo}
                        <span className= "modification pointer uk-margin-left" style={{ display: props.utiCourant === false ? 'none' : 'inline-block' }}
                              uk-icon="pencil" onClick={() =>{ showModal("modalModifProfil")}}/>

                        <span className="pointer uk-margin-left uk-label" style={{ display: ami  || props.utiCourant ? 'none' : 'inline-block' }}
                                onClick={()=>{
                                    addFriend(token , props.idUtilisateur, idToken, ami, setAmi)
                                }} >Suivre</span>
                        <span className="pointer uk-margin-left uk-label uk-label-danger"  style={{ display: !ami || props.utiCourant ? 'none' : 'inline-block' }}
                              onClick={()=>{
                                  deleteFriend(token , props.idUtilisateur, idToken, ami, setAmi)
                              }} >Supprimer</span>

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
            )}
        </div>
    );
}