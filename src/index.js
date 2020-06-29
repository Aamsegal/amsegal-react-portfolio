import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, 
    document.getElementById('root')
);

{/*This sets up the browser router function for the app. Encompases the entire
project in the BrowserRouter component, allowing the use of Link and similer components
within everything inside of <App /> 

<Route 
                exact path='/'
                component= {App}
            />

*/}