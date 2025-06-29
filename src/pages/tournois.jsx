import React from "react";
import "../css/tournois.css";
import TournoisCard from "../component/tournois/tournoisCard";
import CarouselTournois from "../component/tournois/carouselTournois";

export default function TournoisPage() {
    const mesTournois = [
        {
            id: 1,
            mode: "COMPET",
            theme: "ARCANE",
            dateFin: "18/12/2024",
            place: 7,
            participants: 35,
            hashtags: ["Digital art", "Pink", "Eyes", "Face", "Skin", "Glow"],
            images: [
                "/images/top1.jpg",
                "/images/top2.jpg",
                "/images/top3.jpg"
            ]
        }
        // d'autres tournois simulés ici si besoin
    ];

    // Simulation de données de tournoi
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
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750496613333-602611.jpeg",
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750496613366-609085.jpg",
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750496613363-693681.jpg"
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
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750689105117-647335.jpg",
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750496613333-602611.jpeg",
                "https://60fa-92-184-112-13.ngrok-free.app/uploads/1750496613333-602611.jpeg"
            ]
        }
    ];

    const topTournois = [
        {
            id: 10,
            titre: "LA VIE EN ROSE",
            tags: ["Digital ART"],
            recompense: 12000,
            color: "#d44545"
        },
        {
            id: 11,
            titre: "FAIS MOI PEUR !",
            tags: ["Réalisme"],
            recompense: 10000,
            color: "#d44545"
        }
    ];

    const officiel = [
        {
            id: 20,
            titre: "PARTICIPE À UNE ..",
            tags: ["Digital ART"],
            recompense: 12000,
            color: "#5f71d4"
        }
    ];

    const hasard = [
        {
            id: 30,
            titre: "AVOIR UN POSTE ...",
            tags: ["Digital ART"],
            recompense: 100,
            color: "#ba71c8"
        }
    ];

    return (
        <div className="page-tournois">
            <div className="left-column">
                <h1>Tournois classique</h1>
                <div className="button-group">
                    <button className="btn-gradient">Rechercher</button>
                    <button className="btn-gradient">Créer</button>
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
    );
}
