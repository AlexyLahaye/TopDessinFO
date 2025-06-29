import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";
import {Participation} from "./participation";
import TimelineLogs from "./timelineLogs";
import {Posts} from "./posts";
import {Connexion} from "./connexion";
import TournoisPage from "./tournois";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getID} from "../function/token";
import SecuredRoute from "./securedRoute";
import {Parametre} from "./parametre";
import Accueil from "./accueil";
import {Info_Tournois} from "./info_tournois";



export default function Browser() {


    const idUtilisateurCourant = getID();

    const [token, setToken] = useState("");
    const [idUtilisateur, setIdUtilisateur]= useState(idUtilisateurCourant);
    const [showedPosts, setShowedPosts]= useState("");

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        setToken(storedToken);
        setIdUtilisateur(getID());
    }, []);

    const tokenManager = (jwtToken) => {
        setToken(jwtToken);
        sessionStorage.setItem("token", jwtToken);
        setIdUtilisateur(getID());
    };

    return (<>
            <BrowserRouter>
                <Routes>
                    {/* Page publique */}
                    <Route path='/connexion' element={
                        <Connexion tokenManager={tokenManager} token={token} />
                    } />

                    {/* Routes protégées */}
                    <Route path='/' element={
                        <SecuredRoute>
                            <Accueil tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path="/utilisateur/:userId" element={
                        <SecuredRoute token={token}>
                            <Utilisateur idCurrentUser={idUtilisateurCourant} setShowedPosts={setShowedPosts}/>
                        </SecuredRoute>
                    } />

                    <Route path='/participation' element={
                        <SecuredRoute>
                            <Participation tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/post' element={
                        <SecuredRoute>
                            <Posts tokenManager={tokenManager} token={token} showedPosts={showedPosts} />
                        </SecuredRoute>
                    } />

                    <Route path='/parametres' element={
                        <SecuredRoute>
                            <Parametre tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/logs' element={
                        <SecuredRoute>
                            <TimelineLogs tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/tournois' element={
                        <SecuredRoute>
                            <TournoisPage tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/tournois/:id' element={
                        <SecuredRoute>
                            <Info_Tournois token={token} />
                        </SecuredRoute>
                    } />




                </Routes>
            </BrowserRouter>
        </>
    )

}