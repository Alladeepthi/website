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
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrapper-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'nowrap' }}>
              <div className="logo-area">
                <Link to="/">
                  <img src="/assets/images/logo/neuraltrix-logo-white.svg" alt="NeuralTrix AI" style={{ height: '55px', width: 'auto' }} />
                </Link>
              </div>
              <div className="nav-area" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <ul className="" style={{ display: 'flex', flexWrap: 'nowrap', gap: '35px', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
                  {/* Services - With Dropdown */}
                  <li className="main-nav has-dropdown mega-menu">
                    <Link to="/service-details">Services</Link>
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
                                        <img src="/assets/images/feature/01.svg" alt="AI Solutions" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">AI Solutions</h5>
                                        <p className="details">Advanced artificial intelligence solutions for your business.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/02.svg" alt="Machine Learning" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Machine Learning</h5>
                                        <p className="details">Intelligent ML models for predictive analytics and automation.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/03.svg" alt="Data Science" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Data Science</h5>
                                        <p className="details">Transform data into actionable insights and decisions.</p>
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
                                        <img src="/assets/images/feature/04.svg" alt="Cloud Solutions" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Cloud Solutions</h5>
                                        <p className="details">Scalable cloud infrastructure and migration services.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/05.svg" alt="Consulting" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">AI Consulting</h5>
                                        <p className="details">Expert guidance for your AI transformation journey.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    <div className="single-service-menu">
                                      <div className="icon">
                                        <img src="/assets/images/feature/06.svg" alt="Automation" />
                                      </div>
                                      <div className="info">
                                        <h5 className="title">Process Automation</h5>
                                        <p className="details">Streamline operations with intelligent automation.</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <div className="menu-list">
                                <h4>Our Approach</h4>
                                <ul>
                                  <li>Discovery & Analysis</li>
                                  <li>Strategy Development</li>
                                  <li>Solution Design</li>
                                  <li>Implementation</li>
                                  <li>Testing & Validation</li>
                                  <li>Deployment</li>
                                  <li>Ongoing Support</li>
                                  <li>Optimization</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Platforms */}
                  <li className="main-nav">
                    <Link to="/pricing">Platforms</Link>
                  </li>

                  {/* Industry */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/industry">Industry</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/industry#healthcare">Healthcare</Link></li>
                      <li><Link to="/industry#finance">Finance</Link></li>
                      <li><Link to="/industry#retail">Retail</Link></li>
                      <li><Link to="/industry#manufacturing">Manufacturing</Link></li>
                      <li><Link to="/industry#technology">Technology</Link></li>
                    </ul>
                  </li>

                  {/* Our Work */}
                  <li className="main-nav">
                    <Link to="/case-studies">Our Work</Link>
                  </li>

                  {/* About */}
                  <li className="main-nav">
                    <Link to="/about">About</Link>
                  </li>

                  {/* Products */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="#">Products</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/pricing">AI Platform</Link></li>
                      <li><Link to="/pricing">ML Studio</Link></li>
                      <li><Link to="/pricing">Data Analytics Suite</Link></li>
                      <li><Link to="/pricing">Automation Tools</Link></li>
                    </ul>
                  </li>

                  {/* Contact Us */}
                  <li className="main-nav">
                    <Link to="/contact">Contact Us</Link>
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
                <Link to="/contact" className="rts-btn btn-primary with-arrow">Let's Connect <i className="fa-regular fa-arrow-up up-right"></i></Link>
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

