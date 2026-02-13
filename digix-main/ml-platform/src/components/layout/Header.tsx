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
                            {[
                              [
                                {
                                  id: 1,
                                  img: '19.webp',
                                  title: 'API & Integration Services',
                                  desc: 'Telephony, Messaging, Payment & more.',
                                  subCategories: [
                                    'Telephony APIs (Telecalling, IVR, Voice Bots)',
                                    'Messaging APIs (WhatsApp, SMS, Email)',
                                    'Payment & Billing APIs',
                                    'Authentication & Identity APIs',
                                    'Analytics & Webhook APIs',
                                    'Third-Party System Integrations',
                                    'Secure REST & GraphQL Services'
                                  ]
                                },
                                {
                                  id: 2,
                                  img: '20.webp',
                                  title: 'Enterprise Product Solutions',
                                  desc: 'CRM, ERP, HRMS & Automation.',
                                  subCategories: [
                                    'CRM Platforms',
                                    'ERP Systems',
                                    'HRMS & Payroll Systems',
                                    'Workflow & Process Automation',
                                    'Learning & Training Platforms (LMS)',
                                    'Admin & Control Dashboards',
                                    'Multi-Tenant SaaS Platforms'
                                  ]
                                },
                                {
                                  id: 3,
                                  img: '21.webp',
                                  title: 'Digital Experience Studio',
                                  desc: 'UI/UX, Website & Brand Design.',
                                  subCategories: [
                                    'UI/UX Design Systems',
                                    'Corporate Website Design',
                                    'Product & Brand Identity',
                                    'Landing Page Design',
                                    'SEO-Optimized Web Builds',
                                    'Performance & Accessibility Optimization',
                                    'Interaction & Motion Design'
                                  ]
                                },
                                {
                                  id: 4,
                                  img: '22.webp',
                                  title: 'Growth & Automation',
                                  desc: 'Marketing Automation & Growth.',
                                  subCategories: [
                                    'Marketing Automation Workflows',
                                    'Lead Scoring & Segmentation',
                                    'Campaign Management Systems',
                                    'CRM-Driven Growth Funnels',
                                    'Customer Journey Automation',
                                    'Conversion & ROI Analytics',
                                    'Forecasted Growth Systems'
                                  ]
                                }
                              ],
                              [
                                {
                                  id: 5,
                                  img: '19.webp',
                                  title: 'Mobile & App Engineering',
                                  desc: 'iOS, Android & Cross-Platform Apps.',
                                  subCategories: [
                                    'Android App Development',
                                    'iOS App Development',
                                    'Cross-Platform Apps (Flutter / React Native)',
                                    'Enterprise Mobile Apps',
                                    'Backend & API Integration',
                                    'App Analytics & Deployment',
                                    'Mobile App UI/UX Engineering'
                                  ]
                                },
                                {
                                  id: 6,
                                  img: '20.webp',
                                  title: 'AI & Machine Intelligence',
                                  desc: 'ML Models, AI & Automation.',
                                  subCategories: [
                                    'Predictive Intelligence Models',
                                    'Recommendation Engines',
                                    'Anomaly & Risk Detection',
                                    'Custom ML Model Development',
                                    'Model Deployment & MLOps',
                                    'Explainable & Trusted AI',
                                    'AI Automation'
                                  ]
                                },
                                {
                                  id: 7,
                                  img: '21.webp',
                                  title: 'Data & Insight Services',
                                  desc: 'Data Engineering & Analytics.',
                                  subCategories: [
                                    'Data Engineering & Preparation',
                                    'Exploratory Data Analysis',
                                    'Statistical & Business Modeling',
                                    'BI Dashboards & Reports',
                                    'Decision Intelligence Systems',
                                    'Executive Analytics',
                                    'Predictive Analytics'
                                  ]
                                },
                                {
                                  id: 8,
                                  img: '22.webp',
                                  title: 'SaaS Demo & Launch Systems',
                                  desc: 'SaaS Design & Product Demos.',
                                  subCategories: [
                                    'SaaS Landing Page Design',
                                    'Interactive Product Demos',
                                    'Feature & Pricing Pages',
                                    'Trial & Onboarding Flows',
                                    'Conversion-Focused UI',
                                    'Hosting & Deployment Support',
                                    'SEO & Content'
                                  ]
                                }
                              ]
                            ].map((column, colIndex) => (
                              <div className="col-lg-6" key={colIndex}>
                                <ul className="mega-menu-item parent-nav">
                                  {column.map((service) => (
                                    <li key={service.id}>
                                      <Link to="/service-details" state={{ service }}>
                                        <div className="single-service-menu">
                                          <div className="icon">
                                            <img src={`/assets/images/feature/0${(service.id % 6) + 1}.svg`} alt="service" />
                                          </div>
                                          <div className="info">
                                            <h5 className="title">{service.title}</h5>
                                            <p className="details">{service.desc}</p>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
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
