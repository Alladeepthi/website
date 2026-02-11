import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isSticky, setIsSticky] = React.useState(false);

  const leftServices = servicesData.slice(0, 4);
  const rightServices = servicesData.slice(4, 8);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header--sticky');
      if (header) {
        if (window.scrollY > 150) {
          header.classList.add('sticky');
          setIsSticky(true);
        } else {
          header.classList.remove('sticky');
          setIsSticky(false);
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
                  <img
                    src={isHome && !isSticky ? "/assets/images/logo/neuraltrix-logo-white.svg" : "/assets/images/logo/neuraltrix-logo.svg"}
                    alt="NeuralTrix AI"
                    style={{ height: '55px', width: 'auto' }}
                  />
                </Link>
              </div>
              <div className="nav-area" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <ul className="" style={{ display: 'flex', flexWrap: 'nowrap', gap: '45px', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
                  {/* Services - With Dropdown */}
                  <li className="main-nav has-dropdown mega-menu">
                    <Link to="/service-details">Services</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav">
                                {leftServices.map((service) => (
                                  <li key={service.id}>
                                    <Link to="/service-details" state={{ service }}>
                                      <div className="single-service-menu">
                                        <div className="icon">
                                          <img src={`/assets/images/feature/${service.icon}`} alt={service.title} />
                                        </div>
                                        <div className="info">
                                          <h5 className="title">{service.title}</h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav">
                                {rightServices.map((service) => (
                                  <li key={service.id}>
                                    <Link to="/service-details" state={{ service }}>
                                      <div className="single-service-menu">
                                        <div className="icon">
                                          <img src={`/assets/images/feature/${service.icon}`} alt={service.title} />
                                        </div>
                                        <div className="info">
                                          <h5 className="title">{service.title}</h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
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
                  <li className="main-nav has-dropdown mega-menu">
                    <Link to="/platforms">Platforms</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-3">
                              <div className="menu-list">
                                <h4 className="title">Data & Storage</h4>
                                <ul>
                                  <li><Link to="/platforms">Cloud Data Warehouses</Link></li>
                                  <li><Link to="/platforms">Streaming & Ingestion</Link></li>
                                  <li><Link to="/platforms">Observability Tools</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="menu-list">
                                <h4 className="title">AI & RAG</h4>
                                <ul>
                                  <li><Link to="/platforms">Retrieval-Augmented Gen</Link></li>
                                  <li><Link to="/platforms">Orchestration Frameworks</Link></li>
                                  <li><Link to="/platforms">Document Pipelines</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="menu-list">
                                <h4 className="title">Vector & Search</h4>
                                <ul>
                                  <li><Link to="/platforms">Semantic Search Engines</Link></li>
                                  <li><Link to="/platforms">Vector Storage Systems</Link></li>
                                  <li><Link to="/platforms">Hybrid Search Solutions</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="menu-list">
                                <h4 className="title">Model Ecosystem</h4>
                                <ul>
                                  <li><Link to="/platforms">Large Language Models</Link></li>
                                  <li><Link to="/platforms">Open Source Models</Link></li>
                                  <li><Link to="/platforms">Multimodal Platforms</Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Industry */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/industry">Industry</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/industry#healthcare">Healthcare</Link></li>
                      <li><Link to="/industry#manufacturing">Manufacturing</Link></li>
                      <li><Link to="/industry#finance">Finance & Banking</Link></li>
                      <li><Link to="/industry#retail">Retail & E-commerce</Link></li>
                      <li><Link to="/industry#education">Education</Link></li>
                      <li><Link to="/industry#logistics">Logistics</Link></li>
                      <li><Link to="/industry#benefits">Benefits</Link></li>
                    </ul>
                  </li>



                  {/* About */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/about">About</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/team">Our Team</Link></li>
                      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                  </li>

                  {/* Products */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/products">Products</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/products">AI Platform</Link></li>
                      <li><Link to="/products">ML Studio</Link></li>
                      <li><Link to="/products">Data Analytics Suite</Link></li>
                      <li><Link to="/products">Automation Tools</Link></li>
                    </ul>
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
                <Link to="/contact" className="rts-btn btn-primary with-arrow">Let's Connect <i className="fa-regular fa-arrow-right"></i></Link>
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
    </header >
  );
};

