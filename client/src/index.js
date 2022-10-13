import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createRoot } from 'react-dom/client';
// import { domainToASCII } from 'url';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

