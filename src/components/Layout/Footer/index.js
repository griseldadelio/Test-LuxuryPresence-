import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Logo } from '../Logo'
import * as Icon from 'react-bootstrap-icons'
import './footer.css'

export const Footer = () => {
    return (
        <footer className='bg-dark' id='contact' >
            <Container className='main-footer'>
                <Row className='py-5 '>
                    <Col><Logo /></Col>
                    <Col className='pr-5'>
                        <Icon.Envelope />
                        &nbsp;gatien.salaun@cbrealty.com
                        <br />
                        <br />
                        <Icon.GeoAlt />
                        &nbsp;1682 JEFFERSON AVE., #103 MIAMI BEACH, FL 33139
                    </Col>
                    <Col>
                        <Icon.Telephone />
                        &nbsp; (561) 414-3565
                        <br />
                        <br />
                        <Icon.Clock />
                        &nbsp; MONDAY - SUNDAY, 9 AM - 7 PM
                    </Col>
                </Row>
            </Container>
            <div className='social-media-links'>
                <a className='link' href="/">
                    <Icon.Instagram className='Icon' />
                </a>
                <a className='link' href="/" >
                    <Icon.Twitter className='Icon' />
                </a>
                <a className='link' href="/">
                    <Icon.Youtube className='Icon' />
                </a>
                <a className='link' href="/">
                    <Icon.Linkedin className='Icon' />
                </a>
            </div>
        </footer>
    )
}
