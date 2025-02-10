import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Utilisateur} from "./utilisateur";

export default function Browser() {


    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Utilisateur />} />

                </Routes>
            </BrowserRouter>
        </>
    )

}