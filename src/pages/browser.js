import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";
import {Participation} from "./participation";
import {Posts} from "./posts";
import {Connexion} from "./connexion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getID} from "../function/token";
import SecuredRoute from "./securedRoute";
import {Parametre} from "./parametre";


export default function Browser() {


    const idUtilisateurCourant = getID();

    const [token, setToken] = useState("");
    const [idUtilisateur, setIdUtilisateur]= useState(idUtilisateurCourant);
    console.log(idUtilisateur)

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const tokenManager = (jwtToken) => {
        setToken(jwtToken);
        sessionStorage.setItem("token", jwtToken);
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
                            <Utilisateur tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/utilisateur/:id' element={
                        <SecuredRoute>
                            <Utilisateur idUtilisateur={idUtilisateur} setIdUtilisateur={setIdUtilisateur} />
                        </SecuredRoute>
                    } />

                    <Route path='/participation' element={
                        <SecuredRoute>
                            <Participation tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/post' element={
                        <SecuredRoute>
                            <Posts tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />

                    <Route path='/parametres' element={
                        <SecuredRoute>
                            <Parametre tokenManager={tokenManager} token={token} />
                        </SecuredRoute>
                    } />





                </Routes>
            </BrowserRouter>
        </>
    )

}