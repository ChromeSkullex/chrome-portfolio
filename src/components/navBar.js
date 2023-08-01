import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom"; // Import the Gallery component

function NavBar(){
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className="me-auto">  <NavLink  as={Link}  to="/chrome-portfolio">CHROME • SKULLEX</NavLink> </Navbar.Brand>
                <Nav className="p-2 px-5 mx-1">
                    <Nav.Link  as={Link} to="/chrome-portfolio/gallery">GALLERY</Nav.Link>
                    <Nav.Link  as={Link}  to="/chrome-portfolio/about">ABOUT</Nav.Link>
                    <Nav.Link  as={Link}  to="/chrome-portfolio/contact">CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;