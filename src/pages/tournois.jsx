import React, { useEffect, useState } from "react";
import { Modal_Add_Tournoi } from "../component/modal/tournois/addTournois";
import "../css/tournois.css";
import TournoisCard from "../component/tournois/tournoisCard";
import CarouselTournois from "../component/tournois/carouselTournois";
import { NavbarHorizontal, NavbarVertical } from "../component/global/navbar";
import { showModal } from "../function/modal";
import { getID } from "../function/token";
import { getAllTournoisRoute } from "../route/tournois";

export default function TournoisPage() {
    const [topTournois, setTopTournois] = useState([]);
    const [officiel, setOfficiel] = useState([]);
    const [hasard, setHasard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTournois = async () => {
            const [status, data] = await getAllTournoisRoute();
            if (status === 200 && Array.isArray(data)) {
                // Prioriser les filtres : officiel > hasard > en feu
                const officielList = [];
                const hasardList = [];
                const enFeuList = [];

                data.forEach(tournoi => {
                    switch (tournoi.couleur) {
                        case "#5f71d4":
                            officielList.push(tournoi);
                            break;
                        case "#ba71c8":
                            hasardList.push(tournoi);
                            break;
                        case "#d44545":
                        default:
                            enFeuList.push(tournoi);
                            break;
                    }
                });

                setOfficiel(officielList.slice(0, 3));
                setHasard(hasardList.slice(0, 3));
                setTopTournois(enFeuList.slice(0, 6)); // ⚠️ ne pas mélanger avec les autres
            }
            setLoading(false);
        };

        fetchTournois();
    }, []);


    const fakeTournois = [
        {
            id: 1,
            mode: "COMPET",
            theme: "ARCANE",
            dateFin: "18/12/2024",
            place: 7,
            participants: 35,
            hashtags: ["Digital art", "Pink", "Eyes", "Face", "Skin", "Glow"],
            imagesTop: [
                "http://localhost:3333/uploads/1750496613333-602611.jpeg",
                "http://localhost:3333/uploads/1750496613366-609085.jpg",
                "http://localhost:3333/uploads/1750496613363-693681.jpg"
            ]
        },
        {
            id: 2,
            mode: "FUN",
            theme: "RETRO",
            dateFin: "22/01/2025",
            place: 2,
            participants: 18,
            hashtags: ["Pixel", "Retro", "Game"],
            imagesTop: [
                "http://localhost:3333/uploads/1750689105117-647335.jpg",
                "http://localhost:3333/uploads/1750496613333-602611.jpeg",
                "http://localhost:3333/uploads/1750496613333-602611.jpeg"
            ]
        }
    ];

    return (
        <>
            <div className="navBarHorizontale">
                <NavbarHorizontal />
            </div>
            <div className="navBarVertical">
                <NavbarVertical />
            </div>
            <div className="page-tournois">
                <div className="left-column">
                    <h1>Tournois classique</h1>
                    <div className="button-group">
                        <button
                            className="btn-gradient"
                            onClick={() => showModal("modalAjoutTournoi")}
                        >
                            Créer
                        </button>
                    </div>
                    <h3>MES TOURNOIS</h3>
                    <div className="mes-tournois-container">
                        {fakeTournois.map((tournoi) => (
                            <TournoisCard key={tournoi.id} tournoi={tournoi} />
                        ))}
                    </div>
                </div>

                <div className="right-column">
                    <div className="section-tournoi">
                        <h3><span role="img" aria-label="fire">🔥</span> EN FEU</h3>
                        <CarouselTournois data={topTournois} />
                    </div>

                    <div className="section-tournoi">
                        <h3><span role="img" aria-label="big boss">👑</span> OFFICIEL</h3>
                        <CarouselTournois data={officiel} />
                    </div>

                    <div className="section-tournoi">
                        <h3><span role="img" aria-label="cards">🃏</span> UN PEU DE HAZARD</h3>
                        <CarouselTournois data={hasard} />
                    </div>
                </div>
            </div>
            <Modal_Add_Tournoi idUtilisateur={getID()} />
        </>
    );
}
