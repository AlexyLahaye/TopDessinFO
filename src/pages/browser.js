import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";
import {Participation} from "./participation";
import {Posts} from "./posts";

export default function Browser() {


    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Utilisateur />} />
                    <Route path='/participation' element={<Participation />} />
                    <Route path='/post' element={<Posts />} />

                </Routes>
            </BrowserRouter>
        </>
    )

}