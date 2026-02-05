import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <div className="rts-footer-one pt--100 bg_dark">
            <div className="container pb--80 ">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="left-wiget">
                            <Link className="logo" to="/">
                                <img src="/assets/images/logo/neuraltrix-logo-white.svg" alt="NeuralTrix AI" style={{ height: '45px', width: 'auto' }} />
                            </Link>
                            <p className="disc">Subscribe our newsletter to get the latest news and updates!</p>
                            <form action="#" className="footer-form" onClick={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Enter your email..." required />
                                <button className="rts-btn btn-primary" type="submit">Send Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-8 mt_md--50 mt_sm--50">
                        <div className="footer-wized-wrapper">
                            <div className="single">
                                <h6 className="title">Company</h6>
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Our Client</Link></li>
                                    <li><Link to="#">News</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title">Services</h6>
                                <ul>
                                    <li><Link to="#">Mobile App</Link></li>
                                    <li><Link to="#">UI/UX Design</Link></li>
                                    <li><Link to="#">Web Development</Link></li>
                                    <li><Link to="#">Software</Link></li>
                                    <li><Link to="#">IT Services</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title">Resources</h6>
                                <ul>
                                    <li><Link to="#">Support Center</Link></li>
                                    <li><Link to="#">Documentation</Link></li>
                                    <li><Link to="#">Community</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="#">Help Center</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title">Social Media</h6>
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://www.github.com/" target="_blank" rel="noreferrer">GitHub </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-1">
                                <p className="disc">Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
                                <ul>
                                    <li><Link to="/about">About Company</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

