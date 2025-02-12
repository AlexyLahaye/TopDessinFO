import React from "react";

export function Badges_header() {
    // TODO: Recupérer depuis la BDD dans badgesArray les badges obtenu par l'utilisateur.
    const badgesArray = [];

    // Générer les badges avec `.map()`
    const badges = badgesArray.map((_, index) => (
        <div key={index} className="badgeUser">
            <img src="image_du_badge.png" alt={`Badge ${index + 1}`} />
        </div>
    ));

    return (
        <div className="badge-header">
            {/* badges */}
            <div  className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png" />
            </div>
            <div className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png"/>
            </div>
            <div  className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png" />
            </div>
            <div  className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png" />
            </div>
            <div  className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png" />
            </div>
            <div  className="badgeUser">
                <img src="/test_malau/badge_first_blitz_win.png" />
            </div>
            <div data-uk-lightbox className="pointer">

                <div data-uk-lightbox>
                    <a className="show_all"
                       href="http://localhost:3001/participation"
                       data-type="iframe">Show all</a>
                </div>
            </div>
        </div>
    );
}
