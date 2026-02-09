import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const MobileMenu: React.FC = () => {
    const closeMenu = () => {
        document.getElementById('side-bar')?.classList.remove('show');
        document.getElementById('anywhere-home')?.classList.remove('bgshow');
    };

    return (
        <>
            <div id="side-bar" className="side-bar header-two">
                <div className="rts-sidebar-menu-desktop">
                    <div className="logo-area">
                        <Link className="logo" to="/"><img src="/assets/images/logo/neuraltrix-logo-white.svg" alt="NeuralTrix AI" style={{ height: '45px', width: 'auto' }} /></Link>
                        <button className="close-icon-menu" aria-label="footer_Button" onClick={closeMenu}><i className="far fa-times"></i></button>
                    </div>
                    <div className="body d-none d-xl-block">
                        <div className="about-us">
                            <h4>About Us</h4>
                            <p>
                                We must explain to you how all seds this mistakens idea denouncing pleasures and praising account.
                                All seds this mistakens idea denouncing pleasures.
                            </p>
                        </div>
                        <div className="menu-list">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to="/about" onClick={closeMenu}>About Company</Link></li>
                                <li><Link to="/service-details" onClick={closeMenu}>Service</Link></li>
                                <li><Link to="/case-studies" onClick={closeMenu}>Project Details</Link></li>
                                <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
                                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="get-in-touch">
                            <h4>Get In Touch</h4>
                            <div className="wrapper">
                                <div className="single">
                                    <i className="fas fa-phone-alt"></i>
                                    <a href="#">+8801234566789</a>
                                </div>
                                <div className="single">
                                    <i className="fas fa-envelope"></i>
                                    <a href="#">example@gmail.com</a>
                                </div>
                                <div className="single">
                                    <i className="fas fa-globe"></i>
                                    <a href="#">www.webexample.com</a>
                                </div>
                                <div className="single">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <a href="#">13/A, New Pro State, NYC</a>
                                </div>
                            </div>
                            <div className="social-wrapper-two menu">
                                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#" aria-label="linkdin"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-main d-block d-xl-none">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu metismenu" id="mobile-menu-active">
                            <li className="has-droupdown">
                                <Link to="#" className="main">Services</Link>
                                <ul className="submenu mm-collapse">
                                    {servicesData.map((service) => (
                                        <li key={service.id}>
                                            <Link to="/service-details" state={{ service }} onClick={closeMenu}>
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li><Link to="/pricing" className="main" onClick={closeMenu}>Platforms</Link></li>
                            <li className="has-droupdown">
                                <Link to="/industry" className="main">Industry</Link>
                                <ul className="submenu mm-collapse">
                                    <li><Link to="/industry#healthcare" onClick={closeMenu}>Healthcare</Link></li>
                                    <li><Link to="/industry#finance" onClick={closeMenu}>Finance</Link></li>
                                    <li><Link to="/industry#retail" onClick={closeMenu}>Retail</Link></li>
                                    <li><Link to="/industry#manufacturing" onClick={closeMenu}>Manufacturing</Link></li>
                                    <li><Link to="/industry#technology" onClick={closeMenu}>Technology</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/about" className="main" onClick={closeMenu}>About</Link></li>
                            <li className="has-droupdown">
                                <Link to="#" className="main">Products</Link>
                                <ul className="submenu mm-collapse">
                                    <li><Link to="/pricing" onClick={closeMenu}>AI Platform</Link></li>
                                    <li><Link to="/pricing" onClick={closeMenu}>ML Studio</Link></li>
                                    <li><Link to="/pricing" onClick={closeMenu}>Data Analytics Suite</Link></li>
                                    <li><Link to="/pricing" onClick={closeMenu}>Automation Tools</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div id="anywhere-home" onClick={() => {
                document.getElementById('side-bar')?.classList.remove('show');
                document.getElementById('anywhere-home')?.classList.remove('bgshow');
            }}></div>
        </>
    );
};

