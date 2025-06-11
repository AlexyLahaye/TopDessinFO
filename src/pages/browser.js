import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";
import {Participation} from "./participation";
import {Posts} from "./posts";
import {Connexion} from "./connexion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAuth from "../hooks/useAuth";


export default function Browser() {

    const [token, setToken] = useState("");
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

    useAuth();

    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Utilisateur tokenManager={tokenManager} token={token} />  } />
                    <Route path='/participation' element={<Participation tokenManager={tokenManager} token={token} />} />
                    <Route path='/post' element={<Posts tokenManager={tokenManager}  token={token} />} />
                    <Route path='/connexion' element={<Connexion tokenManager={tokenManager} token={token} />} />

                </Routes>
            </BrowserRouter>
        </>
    )

}