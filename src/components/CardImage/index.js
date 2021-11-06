import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AOS from "aos";
import './cardimage.css'

export const CardImage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Container className='p-5'>
            <Row className='mt-3' data-aos="fade-right" data-aos-duration="1500">
                <Col className='imgcard col col-sm-4' sm={4} />
                <Col className='col-sm-8 p-2' sm={8} >
                    <h2 className='text-center'>Paid Advertising on All Channels</h2>
                    <p className='text-justify px-3'>
                        To reach your potential buyers, you have to know who they are, where they spend their time online, and how
                        they make their buying decisions. Agents who use luxury real estate marketing services are able to identify
                        your niche market, then create paid ads on Facebook, Google, Instagram, and YouTube that reach those interested
                        in your property.
                    </p>
                    <p className='text-justify px-3'>
                        These paid ad campaigns are highly customized and targeted, ensuring you are not spending money marketing to
                        those who are not in the market for a property such as yours.
                     </p>

                </Col>
            </Row>
            <br />
            <Row className='mt-3 bg-light' data-aos="fade-left" data-aos-duration="1500">
                <Col className='col-sm-8 p-2' sm={8} >
                    <h2 className='text-center'>Effective Search Engine Optimization</h2>
                    <p className='text-justify px-3'>
                        Recent research has shown that 44% of buyers found the home they purchased on the internet. Many of them simply
                        googled the search terms that they wanted in a new home and started their search that way. For your home to show
                        up in these types of searches, your real estate agent needs to use the right terms in your online marketing.
                    </p>
                    <p className='text-justify px-3'>
                        The effective use of these terms is referred to as search engine optimization or SEO. The process of identifying
                        and correctly using the right terms is a bit of a science—one that the SEO experts at Luxury Presence have mastered.
                        When a potential buyer searches terms that match your home, your property will show up in the results and provide opportunities for the buyer to learn more.
                    </p>
                </Col>
                <Col className='imgcard1 col col-sm-4' sm={4} />
            </Row>
            <br />
            <Row className='mt-3' data-aos="fade-right" data-aos-duration="1500">
                <Col className='imgcard2 col col-sm-4' sm={4} />
                <Col className='col-sm-8 p-2' sm={8}>
                    <h2 className='text-center'>Social Media Marketing</h2>
                    <p className='text-justify px-3'>
                        If your real estate agent is an influencer on social media, he or she has access to thousands of
                        niche buyers who are ready to invest in property. To be an influencer, an agent either needs to
                        dedicate a large chunk of their time to social media or they need to partner with luxury real estate
                        marketing service providers who can put in the work for them.
                    </p>
                    <p className='text-justify px-3'>
                        Wouldn’t you rather your agent spent his or her time marketing your property and let an expert handle their
                        social media presence? At Luxury Presence, our dedicated success team utilizes an agent’s stories and feed
                        posts to help them go viral and become an authority in their industry. Once they’ve harnessed the power of
                        becoming an influencer, they can use their voice to advocate for your home and sell it more quickly than their competitors.
                    </p>
                </Col>
            </Row>
            <br />
            <Row className='mt-3 bg-light' data-aos="fade-left" data-aos-duration="1500" id='about'>
                <Col className='col-sm-8 p-2' sm={8} >
                    <h2 className='text-center'>Effective Search Engine Optimization</h2>
                    <p className='text-justify px-3'>
                        Recent research has shown that 44% of buyers found the home they purchased on the internet. Many of them simply
                        googled the search terms that they wanted in a new home and started their search that way. For your home to show
                        up in these types of searches, your real estate agent needs to use the right terms in your online marketing.
                    </p>
                    <p className='text-justify px-3'>
                        The effective use of these terms is referred to as search engine optimization or SEO. The process of identifying
                        and correctly using the right terms is a bit of a science—one that the SEO experts at Luxury Presence have mastered.
                        When a potential buyer searches terms that match your home, your property will show up in the results and provide opportunities for the buyer to learn more.
                    </p>
                </Col>
                <Col className='imgcard3 col col-sm-4' sm={4} />
            </Row>
            <br />
            <Row className='mt-3' data-aos="flip-up" data-aos-duration="1500">
                <Col className='p-2'>
                    <h2 className='text-center'>Immersive Property Experience</h2>
                    <p className='text-justify px-3'>
                        Every real estate agent’s success starts with their website. If an agent doesn’t have a responsive, user-friendly website that is easy to navigate and provides an immersive
                        experience for viewers who want to look at properties, they’ve already lost their advantage. Those agents who work with Luxury Presence have websites that are designed and
                        managed by seasoned professionals who know what property buyers want.
                    </p>
                    <p className='text-justify px-3'>
                        Their sites are designed to impress with virtual tour integration, HD video capabilities, and lead capture strategies that help agents sell your home. Agents are further supported
                        by analytics reporting, SEO optimization, third party integrations, and a reporting dashboard to help them easily utilize their site and maximize its potential. An agent who is backed
                        by a powerful website is one who can easily reach a niche audience, streamline the selling process, and ensure your home gets the best promotion possible.
                    </p>
                </Col>
            </Row>
        </Container >
    )
}
