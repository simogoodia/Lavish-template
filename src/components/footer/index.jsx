import React from 'react';
import "./style.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <h2 className='heading mb-4'>Join our exclusive membership to receive the latest news and trends</h2>
                    <h3 className='mb-4'>You can unsubscribe at any time.</h3>
                    <div className="input">
                        <input type="email" className='me-2' placeholder='Your Email' />
                        <button>Subscribe</button>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md">
                            <h2>About Us</h2>
                            <ul>
                                <li>How it works</li>
                                <li>Testimonials</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Contact</li>
                                <li>Support</li>
                                <li>Destinations</li>
                                <li>Sponsorship</li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h2>Videos</h2>
                            <ul>
                                <li>Submit Video</li>
                                <li>Ambassadors</li>
                                <li>Agency</li>
                                <li>Influencer</li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h2>Social Media</h2>
                            <ul>
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>Youtube</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <div className="end">
                        <a href='index.html'><i className="fa-solid fa-fingerprint me-2"></i>LAVISH</a>
                        <span>LAVISH &copy; 2020</span>
                        <div className="icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;