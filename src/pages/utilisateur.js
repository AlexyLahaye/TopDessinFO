import React, { useState, useEffect } from 'react';
import {Participation_Conteneur} from "../component/utilisateur/participation_en_cours/participation_en_cours";
import {Header} from "../component/utilisateur/header/header";

export function Utilisateur(props) {

    //initialisation
    const [participation, setParticipation] = useState([]);

    return (<>
                <Header />
        </>
    );
}

function getDaysinCalendars(year, month) {


}