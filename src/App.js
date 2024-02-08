import React from "react";
import {Link, Route, Routes} from 'react-router-dom';
import  Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Home from './compount/Home'
import About from './compount/About'
import Menu from './compount/Menu'
import Contact from './compount/Contact'
import './App.css' ;

function App(){
    return(
        <div>
<Navbar expand='lg' className="fixed-top bg-body-tertiary shadow" >
    <Container>
        <Navbar.Brand>
            <Link to="/" className="navbar-brand text-primary fw-bold" >Nayanitha Restaurant</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls ='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className="me-auto justify-content-end w-100">
                <Nav.Link href="/" className="active text-uppercase">Home</Nav.Link>
                <Nav.Link href="/about" className="text-uppercase">About</Nav.Link>
                <Nav.Link href="/menu" className="text-uppercase">Menu</Nav.Link>
                <Nav.Link href="/contact" className="text-uppercase">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

<Routes  >
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>

<footer className=" bg-body-tertiary">
    <p className="p-3 m-0 text-center"> copyright @ made by Nayanitha</p>
</footer>
        </div>
    );
}

export default App;
