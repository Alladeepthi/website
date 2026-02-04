import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header--sticky');
      if (header) {
        if (window.scrollY > 150) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-one machine-learning header--sticky ${!isHome ? 'header-relative' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrapper-main">
              <div className="logo-area">
                <Link to="/">
                  <img src="/assets/images/logo/04.svg" alt="logo" />
                </Link>
              </div>
              <div className="nav-area">
                <ul className="">
                  <li className="main-nav has-dropdown mega-menu project-a-after">
                    <Link to="/">Home</Link>
                    <div className="rts-mega-menu with-home-demos">
                      <div className="wrapper">
                        <div className="container p-0">
                          <div className="row g-0">
                            <div className="col-lg-6">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li className="hega-menu-head-wrapper">
                                  <p className="hega-menu-head">
                                    <i className="fa-regular fa-folder-open"></i> Demo
                                  </p>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> IT Services
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> IT Agency
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> IT Solutions
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Software company
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Digital Agency
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> App Company
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li className="hega-menu-head-wrapper">
                                  <p className="hega-menu-head">
                                    <i className="fa-regular fa-folder-open"></i> Demo
                                  </p>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Cybersecurity Company
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Machine Learning
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Data Science
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Marketing Automation <span className="new-badge">New</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Saas Landing <span className="new-badge">New</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-nav">
                    <Link to="/about">About</Link>
                  </li>

                  <li className="main-nav has-dropdown mega-menu project-a-after">
                    <Link to="#">Pages</Link>
                    <div className="rts-mega-menu">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-0">
                            <div className="col-lg-3">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>About Company
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/services">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Service
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Service Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/case-studies">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Project Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Why Choose Us
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li>
                                  <Link to="/team">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Team
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/team">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i> Team Single
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/blog">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/blog">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Blog Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Partner
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Industry
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/faq">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>FAQ'S
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/contact">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Contact
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Career
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <ul className="mega-menu-item with-list parent-nav">
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Career Single
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Award
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/contact">
                                    <i className="fa-sharp fa-regular fa-chevron-right"></i>Consultation
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-nav has-dropdown mega-menu">
                    <Link to="/services">Service</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/01.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">IT Consulting</h5>
                                        <p className="details">Once planning is complete, site preparation begins.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/02.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Cloud Migration</h5>
                                        <p className="details">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/03.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Cyber Security</h5>
                                        <p className="details">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/04.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Software Development</h5>
                                        <p className="details">We provide best IT solutions for any type of business.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/05.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Managed IT Services</h5>
                                        <p className="details">We provide best IT solutions for any type of business as.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/06.svg" alt="service" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">IT Infrastructure Setup</h5>
                                        <p className="details">We provide best IT solutions for any type of business as.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <div className="menu-list">
                                <h4>Working Process</h4>
                                <ul>
                                  <li>Initial Consultation</li>
                                  <li>Developing & strategy</li>
                                  <li>Implementation</li>
                                  <li>Ongoing Monitoring</li>
                                  <li>Assessment</li>
                                  <li>Planning</li>
                                  <li>Implementation</li>
                                  <li>Support</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/blog">Blog</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/blog">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li className="main-nav">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="button-wrapper-flex">
                <div className="select-area language">
                  <ul>
                    <li className="main-nav has-dropdown project-a-after">
                      <img src="/assets/images/header/01.svg" alt="lang" />
                      <Link to="#">EN</Link>
                      <ul className="submenu parent-nav">
                        <li><Link to="#">EN</Link></li>
                        <li><Link to="#">BN</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="rts-btn btn-primary with-arrow">Get Started <i className="fa-regular fa-arrow-up up-right"></i></Link>
                <div className="menu-btn-toggle white" onClick={() => {
                  document.getElementById('side-bar')?.classList.add('show');
                  document.getElementById('anywhere-home')?.classList.add('bgshow');
                }}>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" width="12" height="2" fill="white" />
                    <rect y="6" width="18" height="2" fill="white" />
                    <rect x="6" y="12" width="12" height="2" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
