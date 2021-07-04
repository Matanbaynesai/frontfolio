import React from 'react';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import {BrowserRouter as Router , Route ,Switch ,Link } from 'react-router-dom';

export default function Routing() {
    return (
        <Router>
            <ul >
                <Link to="/"><li>Home</li></Link>
                <Link  to="/Contact"><li>Contact</li></Link>
                <Link to="/Portfolio"><li>Portfolio</li></Link>
                <Link  to="/Skills"><li>Skills</li></Link>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Contact">
                    <Contact/>
                </Route>
                <Route path="/Portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/Skills">
                    <Skills/>
                </Route>
            </Switch>
        </Router>
    )
}
 