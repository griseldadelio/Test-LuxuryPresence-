import React from 'react'
import { Footer, NavBar, Main, StartImage, CardImage, AboutUs } from '../../components';
import './home.css'
import { Container } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
            <NavBar />
            <div style={{ overflowY: "scroll" }} id='home'></div>
            <StartImage />
            <Main>
                <Container fluid className='bg-dark text-white p-5' data-aos="zoom-in-up">
                    <h2 className='text-center p-4'>Why you should hire an agent who has partnered with a luxury real estate marketing company.</h2>
                    <p className='d-flex justify-content-center aligne-center'>
                        One of the biggest perks of working with a real estate agent is their ability to market your property to the
                        right target audience. A professional agent with the right experience will be able to identify who will
                        be interested in your property and implement effective strategies to reach them via their website,
                        paid advertising, social media, and other means. When you work with an agent who has partnered with Luxury Presence,
                        you benefit from the many different types of marketing capabilities the company offers.
                    </p>
                    <h5 className='text-center'>Here is how:</h5>
                </Container>
                <CardImage />
                <AboutUs />
            </Main>
            <Footer />
        </>
    )
}
