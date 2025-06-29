import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import Browser from "./pages/browser";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Charger les icônes
UIkit.use(Icons);


// Fontawesome
library.add(fas, far)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Browser />
    </React.StrictMode>
);
// Corrige l'erreur ResizeObserver en bloquant l'erreur globale
window.addEventListener("error", (e) => {
    if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
        const overlay = document.getElementById('webpack-dev-server-client-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
        e.stopImmediatePropagation();
    }
});


// Ignore ResizeObserver loop errors (Chrome/Edge quirk)
const ignoreResizeObserverError = () => {
    const resizeObserverErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    if (window.console && (typeof window.console.warn === 'function')) {
        const originalWarn = console.warn;
        console.warn = function (...args) {
            if (typeof args[0] === 'string' && args[0].includes('ResizeObserver')) return;
            originalWarn.apply(console, args);
        };
    }
};
ignoreResizeObserverError();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
