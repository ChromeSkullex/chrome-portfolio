import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-bootstrap";

function App() {
    return (

        <BrowserRouter>

            <NavBar />

            <Routes>
                <Route path="/chrome-portfolio" element={<Home />} />
                <Route path="/chrome-portfolio/gallery" element={<Gallery />} />
                <Route path="/chrome-portfolio/about" element={<About />} />
                <Route path="/chrome-portfolio/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>


    );
}

export default App;