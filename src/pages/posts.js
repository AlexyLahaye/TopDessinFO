import React, { useState, useEffect } from 'react';
import "../css/post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CardSingle} from "../component/posts/card_single";


export function Posts(props) {

    // initialisation
    const [posts, setPosts] = useState([]);

    //UseEffect
    useEffect( ()=>{
        let tab = getInfotest()
        setPosts(tab);

    }, [])

    return (<>
            <div className="conteneurPost uk-container-expend  uk-padding-remove-top uk-flex uk-flex-wrap uk-flex-auto ">

                {posts.length > 0 &&
                    posts.map((post, cpt) => {
                        return (
                            <CardSingle like={post.nbLike} com={post.nbCom} images={post.image}  nbImage={post.nbImage} type={post.type} note={post.note} isLike={post.is_like} classement={post.classement}/>
                        )
                    })
                }

            </div>

        </>
    );
}

function getInfotest() {

    var tab = [{
        "id": 1,
        "nbImage": 1,
        "nbLike": 78,
        "nbCom": 30,
        "Description": "31/12",
        "date_création": "31/12",
        "type": "post",
        "image": ["img/levre2.jpg"],
        "note" : 0,
        "is_like" : 1,
        "classement" : 0,
    },
        {
            "id": 1,
            "nbImage": 3,
            "nbLike": 156,
            "nbCom": 9,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "tutoriel",
            "image": ["img/fee.jpg", "img/oeil.jpg", "img/levre.jpg"],
            "note" : 0,
            "is_like" : 0,
            "classement" : 0,
        },
        {
            "id": 1,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "rank",
            "image": ["img/boucle.jpg"],
            "note" : 3.5,
            "is_like" : 1,
            "classement" : 1,
        },
        {
            "id": 1,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "rank",
            "image": ["img/ange.jpg"],
            "note" : 1,
            "is_like" : 0,
            "classement" : 3,
        },
       {
            "id": 1,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "post",
            "image": ["img/vintage.jpg"],
           "is_like" : 0,
           "classement" : 0,
        },
        {
            "id": 1,
            "nbImage": 1,
            "nbLike": 78,
            "nbCom": 30,
            "Description": "31/12",
            "date_création": "31/12",
            "type": "post",
            "image": ["img/fleur.jpg"],
            "is_like" : 0,
            "classement" : 0,
        }]

    return tab;


}
