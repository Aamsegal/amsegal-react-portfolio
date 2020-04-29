import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProjectExplanations from './ProjectExplanations/ProjectExplanations'
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter>

        <Route 
            exact path='/'
            component= {App}
        />

        <Route 
            path = '/projectTest'
            component = {ProjectExplanations}
        />

    </BrowserRouter>, 
    document.getElementById('root')
);

{/*This sets up the browser router function for the app. Encompases the entire
project in the BrowserRouter component, allowing the use of Link and similer components
within everything inside of <App /> */}