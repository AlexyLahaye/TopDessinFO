import React, { useState, useEffect } from 'react';
import {Participation_Conteneur} from "../component/utilisateur/participation_en_cours/participation_en_cours";

export function Utilisateur(props) {

    //initialisation
    const [participation, setParticipation] = useState([]);

    return (<>
                <Participation_Conteneur />
        </>
    );
}

function getDaysinCalendars(year, month) {


}