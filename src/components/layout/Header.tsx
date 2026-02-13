import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const leftServices = servicesData.slice(0, 4);
  const rightServices = servicesData.slice(4, 8);

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
                <ul className="" style={{ display: 'flex', flexWrap: 'nowrap', gap: '45px', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
                  {/* Services - With Dropdown */}
                  <li className="main-nav has-dropdown mega-menu">
                    <Link to="/service-details">Services</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav" style={{ padding: 0, margin: 0 }}>
                                {leftServices.map((service, idx) => (
                                  <li key={service.id} style={{ marginBottom: '4px' }}>
                                    <Link to="/service-details" state={{ service }} style={{ textDecoration: 'none' }}>
                                      <div className="single-service-menu-compact" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        background: 'transparent'
                                      }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#EFF6FF';
                                          const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                          if (title) title.style.color = '#3B82F6';
                                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                                          if (icon) icon.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'transparent';
                                          const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                          if (title) title.style.color = '#0F172A';
                                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                                          if (icon) icon.style.transform = 'scale(1)';
                                        }}>
                                        <div className="nav-icon" style={{
                                          width: '32px',
                                          height: '32px',
                                          background: '#EFF6FF',
                                          borderRadius: '6px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#3B82F6',
                                          fontSize: '14px',
                                          transition: 'all 0.3s ease'
                                        }}>
                                          <i className={idx === 0 ? 'fa-solid fa-plug' : idx === 1 ? 'fa-solid fa-building' : idx === 2 ? 'fa-solid fa-palette' : 'fa-solid fa-chart-line'}></i>
                                        </div>
                                        <div className="info">
                                          <h5 className="title" style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            margin: 0,
                                            color: '#0F172A',
                                            transition: 'color 0.3s ease'
                                          }}>{service.title}</h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="mega-menu-item parent-nav" style={{ padding: 0, margin: 0 }}>
                                {rightServices.map((service, idx) => (
                                  <li key={service.id} style={{ marginBottom: '4px' }}>
                                    <Link to="/service-details" state={{ service }} style={{ textDecoration: 'none' }}>
                                      <div className="single-service-menu-compact" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        background: 'transparent'
                                      }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#EFF6FF';
                                          const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                          if (title) title.style.color = '#3B82F6';
                                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                                          if (icon) icon.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'transparent';
                                          const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                          if (title) title.style.color = '#0F172A';
                                          const icon = e.currentTarget.querySelector('.nav-icon') as HTMLElement;
                                          if (icon) icon.style.transform = 'scale(1)';
                                        }}>
                                        <div className="nav-icon" style={{
                                          width: '32px',
                                          height: '32px',
                                          background: '#EFF6FF',
                                          borderRadius: '6px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#3B82F6',
                                          fontSize: '14px',
                                          transition: 'all 0.3s ease'
                                        }}>
                                          <i className={idx === 0 ? 'fa-solid fa-mobile-screen' : idx === 1 ? 'fa-solid fa-brain' : idx === 2 ? 'fa-solid fa-database' : 'fa-solid fa-rocket'}></i>
                                        </div>
                                        <div className="info">
                                          <h5 className="title" style={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            margin: 0,
                                            color: '#0F172A',
                                            transition: 'color 0.3s ease'
                                          }}>{service.title}</h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="col-lg-4">
                              <div className="menu-list">
                                <h4 style={{
                                  fontSize: '16px',
                                  fontWeight: 700,
                                  marginBottom: '15px',
                                  color: '#0F172A'
                                }}>Our Approach</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                  {[
                                    { title: 'Discovery & Analysis', icon: 'fa-magnifying-glass' },
                                    { title: 'Strategy Development', icon: 'fa-lightbulb' },
                                    { title: 'Solution Design', icon: 'fa-pen-ruler' },
                                    { title: 'Implementation', icon: 'fa-code' },
                                    { title: 'Testing & Validation', icon: 'fa-flask' },
                                    { title: 'Deployment', icon: 'fa-rocket' },
                                    { title: 'Ongoing Support', icon: 'fa-headset' },
                                    { title: 'Optimization', icon: 'fa-chart-line' }
                                  ].map((item, idx) => (
                                    <li key={idx} style={{
                                      fontSize: '14px',
                                      padding: '8px 12px',
                                      marginBottom: '4px',
                                      borderRadius: '6px',
                                      transition: 'all 0.3s ease',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      color: '#64748B'
                                    }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#EFF6FF';
                                        e.currentTarget.style.color = '#3B82F6';
                                        e.currentTarget.style.paddingLeft = '16px';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#64748B';
                                        e.currentTarget.style.paddingLeft = '12px';
                                      }}>
                                      <i className={`fa-solid ${item.icon}`} style={{ fontSize: '12px', width: '16px' }}></i>
                                      {item.title}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Platforms */}
                  <li className="main-nav has-dropdown mega-menu platforms-parent">
                    <Link to="/platforms">Platforms</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            <div className="col-lg-3">
                              <h4 className="title mb--20">DataLakes</h4>
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/platform/snowflake">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Snowflake</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/redshift">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">RedShift</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/databricks">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Databricks</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/mongodb">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">MongoDB</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/datadog">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Datadog</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <h4 className="title mb--20">RAG Tools</h4>
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/platform/unstructured">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Unstructured</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/airbyte">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Airbyte</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/llamaindex">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">LlamaIndex</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/langchain">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">LangChain</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <h4 className="title mb--20">Vector Database</h4>
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/platform/pinecone">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Pinecone</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/weaviate">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Weaviate</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/zilliz">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Zilliz</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/milvus">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Milvus</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/supabase">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Supabase</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3">
                              <h4 className="title mb--20">Model Ecosystem</h4>
                              <ul className="mega-menu-item parent-nav">
                                <li>
                                  <Link to="/platform/openai">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">OpenAI</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/gemini">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Gemini</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/llama-3.2">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Llama 3.2</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/bert">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">BERT</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/lamda">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">LaMDA</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/orca">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Orca</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/mistral">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Mistral</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/palm2">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">PaLM2</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/claude">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Claude</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/platform/hugging-face">
                                    <div className="single-service-menu">
                                      <div className="info">
                                        <h5 className="title">Hugging Face</h5>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
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
                      <li><Link to="/industry/healthcare">Healthcare</Link></li>
                      <li><Link to="/industry/finance">Finance</Link></li>
                      <li><Link to="/industry/retail">Retail</Link></li>
                      <li><Link to="/industry/manufacturing">Manufacturing</Link></li>
                      <li><Link to="/industry/technology">Technology</Link></li>
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

