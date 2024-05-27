import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./Other/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact"; 
import { Help } from "./Components/Help"; 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-dark" id="navdiv">
        <Container>
          <Navbar.Brand as={Link} to="/" id="colsy">P-O-R-T-F-O-L-I-O</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="togg"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/Home" id="home">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/About" style={{color:'white'}}>About</Nav.Link>
              <Nav.Link as={Link} to="/Contact" style={{color:'white'}}>Contact</Nav.Link>
             {/*<NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>*/} 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Navigate replace to="/Help" />} /> {/* Redirect from root to /Home */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;