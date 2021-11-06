import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Logo } from '../Logo'

export const NavBar = () => {
    const [colorChange, setColorChange] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'}
                collapseOnSelect expand="lg" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="#services"><h4>Services</h4></Nav.Link>
                            <Nav.Link className='text-white' href="#about"><h4>About Us</h4></Nav.Link>
                            <Nav.Link className='text-white' href="#contact"><h4>Contact</h4></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
