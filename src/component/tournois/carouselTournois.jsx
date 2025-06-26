import React from "react";
import TournoisMiniCard from "./tournoisMiniCard";
import "../../css/tournois.css";

export default function CarouselTournois({ data }) {
    return (
        <div className="carousel-container">
            {data.map((tournoi) => (
                <TournoisMiniCard key={tournoi.id} tournoi={tournoi} />
            ))}
        </div>
    );
}
