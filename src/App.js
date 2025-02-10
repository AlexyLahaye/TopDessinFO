import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import UIkit from 'uikit';

function App() {



    return (
      <div className="uk-container">
        <h1 className="uk-heading-line uk-text-center">
          <span>Welcome to UIkit with React</span>
        </h1>

        <ul data-uk-accordion>
          <li className="uk-open">
            <a className="uk-accordion-title">Item 1</a>
            <div className="uk-accordion-content">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title">Item 2</a>
            <div className="uk-accordion-content">
              <p>Ut enim ad minim veniam.</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title">Item 3</a>
            <div className="uk-accordion-content">
              <p>Duis aute irure dolor in reprehenderit.</p>
            </div>
          </li>
        </ul>

        <div className="uk-inline" >
          <button className="uk-button uk-button-default" type="button">Hover, Click</button>
          <div className="uk-card uk-card-body uk-card-default" data-uk-drop>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.
          </div>
        </div>


          <div data-uk-lightbox>
              <a className="uk-button uk-button-default" href="./champi.jpg" data-caption="CHampipii">Open
                  Lightbox</a>
          </div>


      </div>
  );
}

export default App;
