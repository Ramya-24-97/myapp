import React from 'react'
import { Container } from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <section className='contactus-section padding-t-120 padding-b-120'>
                <Container>
                    <div className='dis-flex justify-sb'>
                        <div className='left-box'>
                            <h2>Book Free Consultation</h2>
                            <p>Guaranteed response within 8 business hours.</p>
                            <div className='side-dash1 list-box'>
                                <h3>Fill up your details</h3>
                                <p>Get custom Solutions, Recommendations, Estimates.</p>
                            </div>
                            <div className='side-dash2 list-box ___web-inspector-hide-shortcut___'><h3>
                                What's next?
                            </h3><p>One of our Account Manager will contact you shortly</p>
                                <div className='dis-flex items-center award-logo'>
                                    <div className='logo-box'><picture><img loading='lazy' src='https://www.valuecoders.com/wp-content/themes/valuecoders/v3.0/images/footer-aw-01.svg' width='75'
                                        height='46'></img></picture></div>
                                    <div className='logo-box'>
                                        <picture><img loading='lazy' src='https://www.valuecoders.com/wp-content/themes/valuecoders/v3.0/images/footer-aw-02.svg'
                                            width='90' height='22'></img></picture>
                                    </div>
                                    <div className='logo-box'>
                                        <picture><img loading='lazy'
                                            src='https://www.valuecoders.com/wp-content/themes/valuecoders/v3.0/images/footer-aw-03.svg' width='114' height='35'>
                                        </img></picture>
                                    </div>
                                    <div className='logo-box'>
                                        <picture><img loading='lazy' src='https://www.valuecoders.com/wp-content/themes/valuecoders/v3.0/images/footer-aw-04.svg ' width='84' height='34'>
                                        </img>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Contact;