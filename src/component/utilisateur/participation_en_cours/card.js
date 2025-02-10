import React, { useState, useEffect } from 'react';

export function Card(props) {

    return (<>

            <div>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">

                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.</p>
                    </div>
                </div>
            </div>

        </>
    );
}