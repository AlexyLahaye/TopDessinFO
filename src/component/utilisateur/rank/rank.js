import React, { useState, useEffect } from 'react';
export function Rank(props) {

    // initialisation
    const [ranks, setRanks] = useState([]);

    //UseEffect
    useEffect( ()=>{
        setRanks(props.ranks);
    }, [props.ranks])

    return (<>


            <div className="uk-grid-column-small uk-grid-row-large uk-child-width-expand@s uk-text-center " data-uk-grid>


                <div>
                    <div className="cardRank uk-card uk-card-body uk-flex">
                        <div className="positionImage uk-width-1-3">
                            <img src="img/trophee.png" alt=""  className="radius-Small imgRank"/>
                        </div>
                        <div className="uk-width-2-3 ">

                            <div className="uk-flex uk-flex-middle">
                                <h4 className="uk-margin-remove ">RANK GLOBAL</h4>
                            </div>
                            <h4 className="noRank uk-margin-remove">#{ranks.length > 0 && ranks[0].classe}</h4>

                        </div>

                    </div>
                </div>

                <div>
                    <div className="cardRank uk-card uk-card-body uk-flex">
                        <div className="positionImage uk-width-1-3">
                            <img src="img/pen.png" alt=""  className="radius-Small imgRank"/>
                        </div>
                        <div className="uk-width-2-3 ">

                            <div className="uk-flex uk-flex-middle">
                                <h4 className="uk-margin-remove ">RANK BLITZ</h4>
                            </div>
                            <h4 className="noRank uk-margin-remove">#{ranks.length > 0 && ranks[1].classe}</h4>

                        </div>

                    </div>
                </div>
                <div>
                    <div className="cardRank uk-card uk-card-body uk-flex">
                        <div className="positionImage uk-width-1-3">
                            <img src="img/couronne.png" alt=""  className="radius-Small imgRank"/>
                        </div>
                        <div className="uk-width-2-3 ">

                            <div className="uk-flex uk-flex-middle">
                                <h4 className="uk-margin-remove ">RANK PARTICIPATIF</h4>
                            </div>
                            <h4 className="noRank uk-margin-remove">#{ranks.length > 0 && ranks[2].classe}</h4>

                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}