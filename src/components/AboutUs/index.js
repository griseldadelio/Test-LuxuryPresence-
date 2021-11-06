import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './aboutus.css'

export const AboutUs = () => {
    return (
        <div className="bg-image-about w-100 vh-100 d-flex justify-content-center align-items-center">
            <Container>
                <Card>
                    <Card.Body>
                        <h1 className="text-white text-center pb-4">
                            <b>A Powerful Network of Referral Partners and Fellow Agents</b>
                        </h1>
                        <b>
                            <p>
                                No matter how many powerful tools your real estate agent has at his or her disposal, sometimes word-of-mouth
                                marketing is still the best way to sell a property. Agents who work with luxury real estate marketing services
                                are connected with referral partners and a community of agents who can help them find the perfect buyer for your property.
                                </p>
                            <p>
                                They can market your home specifically to individuals they’ve identified through their sources to be ready to purchase a home just like yours.
                                This allows them to bypass traditional listings, saving both of you time, money, and unnecessary frustration. 17 of the world’s top 100 agents
                                work with Luxury Presence, putting your agent in elite company that elevates them in both professionalism and influence.
                                </p>
                            <p>
                                Choosing the right real estate agent is the most important decision you will make when you’re ready to sell your home. When you work with an agent
                                who has partnered with Luxury Presence, you will be hiring one who has a powerful marketing team at his or her side.
                            </p>
                        </b>
                    </Card.Body>
                </Card >
            </Container>
        </div >
    )
}
