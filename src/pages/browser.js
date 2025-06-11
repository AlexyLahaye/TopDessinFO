import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";
import {Participation} from "./participation";
import {Posts} from "./posts";
import {Connexion} from "./connexion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Browser() {


    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Utilisateur />} />
                    <Route path='/utilisateur/:id' element={<Utilisateur />} />
                    <Route path='/participation' element={<Participation />} />
                    <Route path='/post' element={<Posts />} />
                    <Route path='/connexion' element={<Connexion />} />

                </Routes>
            </BrowserRouter>
        </>
    )

}