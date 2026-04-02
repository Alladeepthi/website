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

  const isPlatformDetails = location.pathname.startsWith('/platform/');
  const headerClass = `header-one header--sticky ${!isHome ? 'header-relative' : ''} ${!isPlatformDetails ? 'machine-learning' : ''}`;

  const containerStyle = isPlatformDetails ? {} : { maxWidth: '1400px' };
  const wrapperStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'nowrap' as const };

  return (
    <header className={headerClass} style={{ zIndex: 999, position: 'relative' }}>
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrapper-main" style={wrapperStyle}>
              <div className="logo-area" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/">
                  <img src="/assets/images/logo/nlogo%20(1).png" alt="NeuraltrixAI" style={{ height: '55px', width: 'auto' }} />
                </Link>
              </div>
              <div className="nav-area hidden lg:flex" style={{ flex: 0, justifyContent: 'center', whiteSpace: 'nowrap' }}>
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
                    <Link to="#" onClick={(e) => e.preventDefault()}>Platforms</Link>
                    <div className="rts-mega-menu service-mega-menu-style">
                      <div className="wrapper">
                        <div className="container">
                          <div className="row g-5">
                            {[
                              {
                                title: "DataLakes",
                                items: [
                                  { name: "Snowflake", link: "/platform/snowflake" },
                                  { name: "RedShift", link: "/platform/redshift" },
                                  { name: "Databricks", link: "/platform/databricks" },
                                  { name: "MongoDB", link: "/platform/mongodb" },
                                  { name: "Datadog", link: "/platform/datadog" }
                                ]
                              },
                              {
                                title: "RAG Tools",
                                items: [
                                  { name: "Unstructured", link: "/platform/unstructured" },
                                  { name: "Airbyte", link: "/platform/airbyte" },
                                  { name: "LlamaIndex", link: "/platform/llamaindex" },
                                  { name: "LangChain", link: "/platform/langchain" }
                                ]
                              },
                              {
                                title: "Vector Database",
                                items: [
                                  { name: "Pinecone", link: "/platform/pinecone" },
                                  { name: "Weaviate", link: "/platform/weaviate" },
                                  { name: "Zilliz", link: "/platform/zilliz" },
                                  { name: "Milvus", link: "/platform/milvus" },
                                  { name: "Supabase", link: "/platform/supabase" }
                                ]
                              },
                              {
                                title: "Model Ecosystem",
                                items: [
                                  { name: "OpenAI", link: "/platform/openai" },
                                  { name: "Gemini", link: "/platform/gemini" },
                                  { name: "Llama 3.2", link: "/platform/llama-3.2" },
                                  { name: "BERT", link: "/platform/bert" },
                                  { name: "LaMDA", link: "/platform/lamda" },
                                  { name: "Orca", link: "/platform/orca" },
                                  { name: "Mistral", link: "/platform/mistral" },
                                  { name: "PaLM2", link: "/platform/palm2" },
                                  { name: "Claude", link: "/platform/claude" },
                                  { name: "Hugging Face", link: "/platform/hugging-face" }
                                ]
                              }
                            ].map((category, idx) => (
                              <div className="col-lg-3" key={idx}>
                                <h4 className="title mb--20">{category.title}</h4>
                                <ul className="mega-menu-item parent-nav">
                                  {category.items.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '5px', width: '100%' }}>
                                      <Link to={item.link} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                                        <div className="single-service-menu" style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                          padding: '8px 12px',
                                          borderRadius: '8px',
                                          transition: 'all 0.3s ease',
                                          cursor: 'pointer',
                                          width: '100%'
                                        }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#EFF6FF';
                                            const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                            if (title) title.style.color = '#3B82F6';
                                            const icon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                                            if (icon) {
                                              icon.style.opacity = '1';
                                              icon.style.transform = 'translateX(0)';
                                            }
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            const title = e.currentTarget.querySelector('.title') as HTMLElement;
                                            if (title) title.style.color = '#1e293b'; // Default clear text color
                                            const icon = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                                            if (icon) {
                                              icon.style.opacity = '0';
                                              icon.style.transform = 'translateX(-5px)';
                                            }
                                          }}>
                                          <div className="info" style={{ flex: 1 }}>
                                            <h5 className="title" style={{
                                              fontSize: '14px',
                                              fontWeight: 500,
                                              margin: 0,
                                              color: '#1e293b',
                                              transition: 'color 0.3s ease'
                                            }}>{item.name}</h5>
                                          </div>
                                          <div className="arrow-icon" style={{
                                            color: '#3B82F6',
                                            opacity: 0,
                                            transform: 'translateX(-5px)',
                                            transition: 'all 0.3s ease',
                                            fontSize: '12px',
                                            marginLeft: '10px' // Added some spacing margin just in case
                                          }}>
                                            <i className="fa-solid fa-arrow-right"></i>
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

                  {/* Industry */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Industry</Link>
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

                  {/* Solutions */}
                  <li className="main-nav has-dropdown project-a-after">
                    <Link to="/solutions">Solutions</Link>
                    <ul className="submenu parent-nav">
                      <li><Link to="/solutions">Visual Monitoring</Link></li>
                      <li><Link to="/solutions">Knowledge Automation</Link></li>
                      <li><Link to="/solutions">Data Augmentation</Link></li>
                      <li><Link to="/solutions">Edge Intelligence</Link></li>
                    </ul>
                  </li>


                </ul>
              </div>
              <div className="button-wrapper-flex" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>

                <Link to="/contact" className="rts-btn btn-primary hidden lg:flex">Connect Now</Link>
                <div className="menu-btn-toggle white lg:hidden" onClick={() => {
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
      <style>{`
        /* Ensure visibility on white backgrounds (Inner Pages) by turning the white logo black */
        header.header-relative .logo-area img {
          filter: brightness(0);
          transition: filter 0.3s ease;
        }
      `}</style>
    </header >
  );
};

