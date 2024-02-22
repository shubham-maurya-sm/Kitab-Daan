import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div id="footer" className="container-fluid">
                <footer className="footer-area pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <div className="footer-logo">
                                       
                                        <h3>About Us</h3>
                                        <p>This site is set up by people who want to come out of their comfort zone and
                                            utilize their resources for the betterment of the nation's underpriviliged children.</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i> @KitabDaanPRYJ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>  @KitabDaanPRYJ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.youtube.com/" target="_blank">
                                                <i className="icofont-youtube-play"></i>  @Kitab_Daan_PRYJ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>  @KitaabDanPRYJ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <div className="footer-links">
                                        <h3>Quick links</h3>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <i className="icofont-simple-right"></i>
                                                    Home
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link to="/">
                                                    <i className="icofont-simple-right"></i>
                                                    Vision
                                                </Link>
                                            </li> */}

                                            <li>
                                                <Link to="/SignUp">
                                                    <i className="icofont-simple-right"></i>
                                                    Sign Up
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Login">
                                                    <i className="icofont-simple-right"></i>
                                                    Log In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ContactUs">
                                                    <i className="icofont-simple-right"></i>
                                                    Contact Us
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link to="/">
                                                    <i className="icofont-simple-right"></i>
                                                    Find Donation Centre
                                                </Link>
                                            </li> */}
                                            {/* <li>
                                                <Link to="/">
                                                    <i className="icofont-simple-right"></i>
                                                    Donate Now 🤍
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item">
                                    <div className="footer-contact">
                                        <h3>Contact info</h3>
                                        <div className="contact-inner">
                                            <ul>
                                                <li>
                                                    <i className="icofont-location-pin"></i>
                                                    <Link to=""></Link>
                                                    <Link to="https://www.google.com/maps/place/Centre+of+Computer+Education/@25.459141,81.852607,17z/data=!4m6!3m5!1s0x399acabd766de9d7:0x2089c68b5ea3e296!8m2!3d25.4591414!4d81.8526071!16s%2Fg%2F1tv3m2hx?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer">CCE Building, Institute of Professional Studies, Science-Faculty,
                                                        University of Allahabad, Prayagraj 211002</Link>
                                                </li>
                                                <li>
                                                    <i className="icofont-ui-call"></i>
                                                    <Link to="tel:+91 81XXXXXX48">+91 81XXXXXX48</Link>
                                                </li>
                                                <li>
                                                    <i className="icofont-email"></i>
                                                    <Link to="mailto:info@kitabdan.in">info@kitabdaan.in</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-item"></div>
                                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.1562265458058!2d81.85261380666176!3d25.459370005300254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acabd766de9d7%3A0x2089c68b5ea3e296!2sCentre%20of%20Computer%20Education!5e0!3m2!1sen!2sin!4v1696471568892!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false" tabindex="0" title="Google Maps Location">
                                   
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area" >
                        <p>
                            Copyright © 2023-24 KitabDaan.in. Developed and Designed By <Link to="https://www.linkedin.com/in/shubham-maurya-b7a303270/" target="_blank">Shubham Maurya</Link>
                        </p>
                    </div>
                    {/* </div> */}
                </footer>
            </div>
        </div>
    )
}
