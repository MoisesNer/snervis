import React from 'react'
import { Button } from '../buttons/Button'
import './footer.css'
import { Link } from 'react-router-dom'
import logosmall from '../../assets/sebastianervis_small.png'

function Footer() {
    return (
        <div className='footer'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join to my Adventure newsletter to receive info from my travels and join me!
                </p>
                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum?
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name='email' placeholder='Type your email' className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subcribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/sign-up'>Comming soon</Link>
                        <Link to='/'>Other pages</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Me</h2>
                        <Link to='/sign-up'>Comming soon</Link>
                        <Link to='/'>Other pages</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Me</h2>
                        <Link to='/sign-up'>Comming soon</Link>
                        <Link to='/'>Other pages</Link>
                    </div>
                    {/* <div className="footer-link-items">
                            <h2>Support Me</h2>
                            <Link to='/sign-up'>Comming soon</Link>
                            <Link to='/'>Comming soon</Link>
                            <Link to='/'>Comming soon</Link>
                            <Link to='/'>Other pages</Link>
                    </div> */}
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img src={logosmall} alt="sebi nervis logo" className='footer-img' />
                        </div>
                    </div>
                    <small className="website-rights">2021 by Moises Nervis Quevedo</small>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="sidebarIcon fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.pinterest.com/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-pinterest-square"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
