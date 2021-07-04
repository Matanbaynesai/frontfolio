import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Skills from '../pages/Skills'
import {BrowserRouter as Router , Route ,Switch ,Link } from 'react-router-dom';
import './sideBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar , Nav, NavDropdown} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { useContext } from 'react'
import { themeContext} from '../../context'






export default function Sidebar() {

    const{theme,isTrue}=useContext(themeContext);
    return (
        <Router >
            
            <div style={isTrue?theme.dark:theme.light} id="container-navBar" >
            <Navbar bg="myColor" varian="dark" fixed="top" expend="lg">
                <Navbar.Brand>
            </Navbar.Brand>            
            <Navbar.Toggle/>
            <NavbarCollapse>
            <Nav>
                <Nav.Link to="/"><Link to="/"><p>Home</p></Link></Nav.Link>
                <Nav.Link to="/Contact"><Link  to="/Contact"><p>Contact</p></Link></Nav.Link>
                <Nav.Link to="/Portfolio"><Link to="/Portfolio"><p>Portfolio</p></Link></Nav.Link>
                <Nav.Link to="/Skills"><Link  to="/Skills"><p>Skills</p></Link></Nav.Link>
                <NavDropdown title="more">
            <NavDropdown.Item href="more/github">github</NavDropdown.Item>
            <NavDropdown.Item href="more/facebook">facebook</NavDropdown.Item>
            <NavDropdown.Item href="more/instgram">instgram</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </NavbarCollapse>
            </Navbar>
    
            <Switch>
                <Route exact path="/">
                    <Home />
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
            </div>
        </Router>
    )
}
