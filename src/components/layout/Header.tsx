import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [hoverDisabled, setHoverDisabled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const leftServices = servicesData.slice(0, 4);
  const rightServices = servicesData.slice(4, 8);

  const handleLinkClick = () => {
    setHoverDisabled(true);
  };

  const handleMouseEnter = () => {
    setHoverDisabled(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header--sticky');
      if (window.scrollY > 100) {
        setIsSticky(true);
        if (header) header.classList.add('sticky');
      } else {
        setIsSticky(false);
        if (header) header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPlatformDetails = location.pathname.startsWith('/platform/');
  const headerClass = `header-one header--sticky ${!isHome ? 'header-relative' : ''} ${!isPlatformDetails ? 'machine-learning' : ''} ${hoverDisabled ? 'hover-disabled' : ''}`;

  const containerStyle = isPlatformDetails ? {} : { maxWidth: '1400px' };
  const wrapperStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'nowrap' as const };

  return (
    <header className={headerClass} style={{
      zIndex: 10000,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: (isSticky || !isHome) ? '#0b1121' : 'transparent',
      backdropFilter: (isSticky || !isHome) ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: (isSticky || !isHome) ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: isSticky ? '10px 0' : '15px 0'
    }}>
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-lg-12">
            <div className="header-wrapper-main" style={wrapperStyle}>
              <div className="logo-area" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/" onClick={handleLinkClick}>
                  <img src="/assets/images/logo/nlogo%20(1).png" alt="NeuraltrixAI" style={{ height: '55px', width: 'auto' }} />
                </Link>
              </div>
              <div className="nav-area hidden lg:flex" style={{ flex: 1, display: 'flex', justifyContent: 'center', whiteSpace: 'nowrap' }}>
                <ul className="" style={{ display: 'flex', flexWrap: 'nowrap', gap: '35px', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>

                  {/* About */}
                  <li className="main-nav has-dropdown" onMouseEnter={handleMouseEnter}>
                    <Link to="/about" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      About <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                    </Link>
                    <ul className="submenu parent-nav" onClick={handleLinkClick}>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/team">Our Team</Link></li>
                      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                  </li>

                  {/* Services - Updated to match Platforms layout */}
                  <li className="main-nav has-dropdown mega-menu services-parent" onMouseEnter={handleMouseEnter}>
                    <Link to="/service-details" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                    </Link>
                    <div className="modern-services-dropdown" style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(15px)',
                      width: '1000px',
                      maxWidth: '95vw',
                      background: '#fff',
                      borderRadius: '16px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                      border: '1px solid #e2e8f0',
                      padding: '25px 30px',
                      zIndex: 1000,
                      visibility: 'hidden',
                      opacity: 0,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      pointerEvents: 'none',
                      overflow: 'hidden'
                    }}>
                      <div className="services-grid-container" style={{
                        display: 'grid',
                        gridTemplateColumns: '1.1fr 1.1fr 0.8fr',
                        gap: '30px',
                        width: '100%',
                        margin: 0,
                        padding: 0
                      }}>
                        <div className="modern-dropdown-col" style={{
                          display: 'block',
                          width: '100%',
                          minWidth: 0,
                          borderRight: '1px solid #f1f5f9',
                          paddingRight: '20px'
                        }}>
                          <h6 style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#3B82F6',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '2px',
                            display: 'block'
                          }}>Core Engineering</h6>
                          <p style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '15px', lineHeight: '1.1', display: 'block' }}>Scalable backend & systems</p>

                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                          }}>
                            {leftServices.map((s, i) => (
                              <li key={s.id} style={{ display: 'block', width: '100%', margin: 0 }}>
                                <Link to="/service-details" state={{ service: s }} onClick={handleLinkClick} style={{ textDecoration: 'none', display: 'block', padding: 0 }}>
                                  <div className="service-nav-card" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '8px',
                                    borderRadius: '10px',
                                    transition: 'all 0.2s ease',
                                    background: '#f8fafc',
                                    border: '1px solid transparent'
                                  }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = '#fff';
                                      e.currentTarget.style.borderColor = '#e2e8f0';
                                      e.currentTarget.style.transform = 'translateY(-1px)';
                                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = '#f8fafc';
                                      e.currentTarget.style.borderColor = 'transparent';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                    <div className="icon-wrapper" style={{
                                      width: '32px',
                                      height: '32px',
                                      background: '#fff',
                                      borderRadius: '8px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#3B82F6',
                                      fontSize: '12px',
                                      flexShrink: 0,
                                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                    }}>
                                      <i className={`fa-solid ${i === 0 ? 'fa-plug' : i === 1 ? 'fa-building' : i === 2 ? 'fa-palette' : 'fa-chart-line'}`}></i>
                                    </div>
                                    <div className="content">
                                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#0f172a', marginBottom: '1px', lineHeight: 1.1 }}>{s.title}</div>
                                      <div style={{ fontSize: '9px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>{s.subtitle.split(' ').slice(0, 3).join(' ')}...</div>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="modern-dropdown-col" style={{
                          display: 'block',
                          width: '100%',
                          minWidth: 0,
                          borderRight: '1px solid #f1f5f9',
                          paddingRight: '20px'
                        }}>
                          <h6 style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#3B82F6',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '2px',
                            display: 'block'
                          }}>Experience & Intelligence</h6>
                          <p style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '15px', lineHeight: '1.1', display: 'block' }}>Design & AI solutions</p>

                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                          }}>
                            {rightServices.map((s, i) => (
                              <li key={s.id} style={{ display: 'block', width: '100%', margin: 0 }}>
                                <Link to="/service-details" state={{ service: s }} onClick={handleLinkClick} style={{ textDecoration: 'none', display: 'block', padding: 0 }}>
                                  <div className="service-nav-card" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '8px',
                                    borderRadius: '10px',
                                    transition: 'all 0.2s ease',
                                    background: '#f8fafc',
                                    border: '1px solid transparent'
                                  }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = '#fff';
                                      e.currentTarget.style.borderColor = '#e2e8f0';
                                      e.currentTarget.style.transform = 'translateY(-1px)';
                                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = '#f8fafc';
                                      e.currentTarget.style.borderColor = 'transparent';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                    <div className="icon-wrapper" style={{
                                      width: '32px',
                                      height: '32px',
                                      background: '#fff',
                                      borderRadius: '8px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#3B82F6',
                                      fontSize: '12px',
                                      flexShrink: 0,
                                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                    }}>
                                      <i className={`fa-solid ${i === 0 ? 'fa-mobile-screen' : i === 1 ? 'fa-brain' : i === 2 ? 'fa-database' : 'fa-rocket'}`}></i>
                                    </div>
                                    <div className="content">
                                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#0f172a', marginBottom: '1px', lineHeight: 1.1 }}>{s.title}</div>
                                      <div style={{ fontSize: '9px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>{s.subtitle.split(' ').slice(0, 3).join(' ')}...</div>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="modern-dropdown-col approach-col" style={{
                          display: 'block',
                          width: '100%',
                          minWidth: 0,
                          paddingLeft: '5px'
                        }}>
                          <h6 style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#3B82F6',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '2px',
                            display: 'block'
                          }}>Our Approach</h6>
                          <p style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '15px', lineHeight: '1.1', display: 'block' }}>Strategy & execution framework</p>
                          <ul className="approach-timeline" style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {/* Static Background Line */}
                            <div className="timeline-line-bg" style={{
                              position: 'absolute',
                              left: '12px',
                              top: '10px',
                              bottom: '10px',
                              width: '1px',
                              background: '#e2e8f0',
                              zIndex: 0
                            }}></div>
                            {/* Animated Life Line */}
                            <div className="timeline-line-active" style={{
                              position: 'absolute',
                              left: '12px',
                              top: '10px',
                              width: '1px',
                              background: '#3B82F6',
                              zIndex: 1,
                              height: '0'
                            }}></div>
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
                              <li key={idx} className="approach-step" style={{
                                fontSize: '11px',
                                padding: '5px 8px',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                color: '#475569',
                                position: 'relative',
                                zIndex: 1,
                                opacity: 0.7,
                                transform: 'translateX(0)'
                              }}>
                                <div className="step-icon" style={{
                                  width: '18px',
                                  height: '18px',
                                  background: '#fff',
                                  border: '1px solid #e2e8f0',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '8px',
                                  color: '#3B82F6',
                                  flexShrink: 0,
                                  transition: 'all 0.4s ease'
                                }}>
                                  <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <span style={{ fontWeight: 600 }}>{item.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>


                  {/* Platforms */}
                  <li className="main-nav has-dropdown mega-menu platforms-parent" onMouseEnter={handleMouseEnter}>
                    <Link to="#" onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Platforms <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                    </Link>
                    <div className="modern-platforms-dropdown" style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(15px)',
                      width: '1150px',
                      maxWidth: '95vw',
                      background: '#fff',
                      borderRadius: '16px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                      border: '1px solid #e2e8f0',
                      padding: '25px 15px',
                      zIndex: 1000,
                      visibility: 'hidden',
                      opacity: 0,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      pointerEvents: 'none'
                    }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '10px',
                        width: '100%',
                        margin: 0,
                        padding: 0
                      }}>
                        {[
                          {
                            title: "Data Fabric Systems",
                            subtitle: "Cloud storage & analytics",
                            items: [
                              { name: "Snowflake", link: "/platform/snowflake", desc: "Next-Gen Data Warehousing" },
                              { name: "RedShift", link: "/platform/redshift", desc: "AWS Managed Data Storage" },
                              { name: "Databricks", link: "/platform/databricks", desc: "Unified Analytics Platform" },
                              { name: "MongoDB", link: "/platform/mongodb", desc: "Document-Based NoSQL" },
                              { name: "Datadog", link: "/platform/datadog", desc: "Cloud Monitoring & Observability" }
                            ]
                          },
                          {
                            title: "Retrieval Architecture",
                            subtitle: "Intelligent RAG pipelines",
                            items: [
                              { name: "Unstructured", link: "/platform/unstructured", desc: "Raw Data for AI Ingestion" },
                              { name: "Airbyte", link: "/platform/airbyte", desc: "Automated Data Integration" },
                              { name: "LlamaIndex", link: "/platform/llamaindex", desc: "AI Data Framework" },
                              { name: "LangChain", link: "/platform/langchain", desc: "Agentic AI Orchestration" }
                            ]
                          },
                          {
                            title: "Semantic Vector Layer",
                            subtitle: "Neural search engines",
                            items: [
                              { name: "Pinecone", link: "/platform/pinecone", desc: "Pro Managed Vector Search" },
                              { name: "Weaviate", link: "/platform/weaviate", desc: "Neural Search System" },
                              { name: "Zilliz", link: "/platform/zilliz", desc: "High-Density Vector Cloud" },
                              { name: "Milvus", link: "/platform/milvus", desc: "Open Source Vector Database" },
                              { name: "Supabase", link: "/platform/supabase", desc: "Backend & Vector Layer" }
                            ]
                          },
                          {
                            title: "Intelligence Hub",
                            subtitle: "Foundational AI models",
                            items: [
                              { name: "OpenAI", link: "/platform/openai", desc: "Frontier GPT Models" },
                              { name: "Gemini", link: "/platform/gemini", desc: "Google Multimodal AI" },
                              { name: "Claude", link: "/platform/claude", desc: "Anthropic Safety Models" },
                              { name: "Mistral", link: "/platform/mistral", desc: "Open-Weight Reasoning LLMs" },
                              { name: "Llama 3.2", link: "/platform/llama-3.2", desc: "Meta Open Source Models" },
                              { name: "Hugging Face", link: "/platform/hugging-face", desc: "Global AI Repository" },
                              { name: "PaLM2", link: "/platform/palm2", desc: "Google Legacy LLM" },
                              { name: "BERT", link: "/platform/bert", desc: "Contextual NLP Hub" },
                              { name: "Orca", link: "/platform/orca", desc: "Microsoft Reasoning LLM" },
                              { name: "LaMDA", link: "/platform/lamda", desc: "Dialogue Applications" }
                            ]
                          }
                        ].map((group, idx) => (
                          <div key={idx} style={{
                            display: 'block',
                            minWidth: 0,
                            borderRight: idx < 3 ? '1px solid #f1f5f9' : 'none',
                            paddingRight: '12px'
                          }}>
                            <h6 style={{
                              fontSize: '11px',
                              fontWeight: 900,
                              color: '#3B82F6',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              marginBottom: '2px',
                              display: 'block'
                            }}>{group.title}</h6>
                            <p style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '15px', lineHeight: '1.1', display: 'block' }}>{group.subtitle}</p>

                            <ul className="custom-scrollbar" style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0,
                              display: 'block',
                              height: '245px', // Strict height to force scrollbars for everyone
                              overflowY: 'scroll',
                              paddingRight: '6px'
                            }}>
                              {group.items.map((item, i) => (
                                <li key={i} style={{ marginBottom: '6px', display: 'block', width: '100%' }}>
                                  <Link to={item.link} onClick={handleLinkClick} style={{ textDecoration: 'none', display: 'block', padding: 0 }}>
                                    <div className="platform-nav-card" style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      padding: '7px',
                                      borderRadius: '8px',
                                      transition: 'all 0.2s ease',
                                      background: '#f8fafc',
                                      border: '1px solid transparent'
                                    }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#f8fafc';
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                      }}>
                                      <div className="icon-wrapper" style={{
                                        width: '32px',
                                        height: '32px',
                                        background: '#fff',
                                        borderRadius: '6px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#3B82F6',
                                        fontSize: '12px',
                                        flexShrink: 0,
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                      }}>
                                        <i className={`fa-solid ${item.name.toLowerCase().includes('snowflake') ? 'fa-snowflake' :
                                          item.name.toLowerCase().includes('redshift') ? 'fa-database' :
                                            item.name.toLowerCase().includes('databricks') ? 'fa-cube' :
                                              item.name.toLowerCase().includes('mongodb') ? 'fa-leaf' :
                                                item.name.toLowerCase().includes('unstructured') ? 'fa-file-lines' :
                                                  item.name.toLowerCase().includes('airbyte') ? 'fa-shuttle-space' :
                                                    item.name.toLowerCase().includes('llamaindex') ? 'fa-brain' :
                                                      item.name.toLowerCase().includes('langchain') ? 'fa-link' :
                                                        item.name.toLowerCase().includes('pinecone') ? 'fa-tree' :
                                                          item.name.toLowerCase().includes('weaviate') ? 'fa-network-wired' :
                                                            item.name.toLowerCase().includes('supabase') ? 'fa-bolt' :
                                                              item.name.toLowerCase().includes('openai') ? 'fa-robot' :
                                                                item.name.toLowerCase().includes('gemini') ? 'fa-wand-magic-sparkles' :
                                                                  item.name.toLowerCase().includes('datadog') ? 'fa-shield-halved' :
                                                                    item.name.toLowerCase().includes('milvus') ? 'fa-microchip' :
                                                                      item.name.toLowerCase().includes('claude') ? 'fa-feather' :
                                                                        item.name.toLowerCase().includes('llama') ? 'fa-hippo' :
                                                                          'fa-microchip'
                                          }`}></i>
                                      </div>
                                      <div className="content">
                                        <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginBottom: '0px', lineHeight: 1.1 }}>{item.name}</div>
                                        <div style={{ fontSize: '9.5px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>{item.desc}</div>
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
                  </li>

                  {/* Industry */}
                  <li className="main-nav has-dropdown" onMouseEnter={handleMouseEnter}>
                    <Link to="#" onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Industry <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                    </Link>
                    <ul className="submenu parent-nav" onClick={handleLinkClick}>
                      <li><Link to="/industry/healthcare">Healthcare</Link></li>
                      <li><Link to="/industry/finance">Finance</Link></li>
                      <li><Link to="/industry/retail">Retail</Link></li>
                      <li><Link to="/industry/manufacturing">Manufacturing</Link></li>
                      <li><Link to="/industry/technology">Technology</Link></li>
                    </ul>
                  </li>

                  {/* Solutions */}
                  <li className="main-nav has-dropdown" onMouseEnter={handleMouseEnter}>
                    <Link to="/solutions" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Solutions <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
                    </Link>
                    <ul className="submenu parent-nav" onClick={handleLinkClick}>
                      <li><Link to="/solutions">Visual Monitoring</Link></li>
                      <li><Link to="/solutions">Knowledge Automation</Link></li>
                      <li><Link to="/solutions">Data Augmentation</Link></li>
                      <li><Link to="/solutions">Edge Intelligence</Link></li>
                    </ul>
                  </li>

                </ul>
              </div>
              <div className="button-wrapper-flex" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '25px', alignItems: 'center' }}>
                <Link to="/contact" className="rts-btn btn-primary" onClick={handleLinkClick} style={{
                  padding: '12px 28px',
                  borderRadius: '100px',
                  background: '#5c67ff',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 10px 20px rgba(92, 103, 255, 0.2)'
                }}>
                  Connect Now
                </Link>
                <div className="menu-btn-toggle white" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', background: 'transparent', border: 'none', padding: 0 }} onClick={() => {
                  document.getElementById('side-bar')?.classList.add('show');
                  document.getElementById('anywhere-home')?.classList.add('bgshow');
                }}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="2" fill="white" style={{ fill: 'white !important' }} />
                    <rect y="8" width="24" height="2" fill="white" style={{ fill: 'white !important' }} />
                    <rect y="16" width="24" height="2" fill="white" style={{ fill: 'white !important' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        /* Force close menus on link click by disabling hover state */
        .header-one.hover-disabled .rts-mega-menu,
        .header-one.hover-disabled .submenu,
        .header-one.hover-disabled .modern-platforms-dropdown,
        .header-one.hover-disabled .modern-services-dropdown {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }

        /* Modern Mega Menu Animation (Platforms & Services) */
        .main-nav.has-dropdown.mega-menu:hover .modern-platforms-dropdown,
        .main-nav.has-dropdown.mega-menu:hover .modern-services-dropdown {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(-50%) translateY(0) !important;
          pointer-events: auto !important;
        }

        .modern-platforms-dropdown,
        .modern-services-dropdown {
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateX(-50%) translateY(15px) !important;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
        }

        /* Custom Scrollbar for Mega Menu Columns */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }

        .main-nav.has-dropdown {
          position: relative;
          padding-bottom: 20px;
          margin-bottom: -20px;
        }

        /* Remove ALL redundant theme arrows/pseudo-elements from dropdowns */
        /* Note: Theme adds arrows both to 'li.has-dropdown' and 'a' tags */
        .header-one .main-nav.has-dropdown::after,
        .header-one .main-nav.has-dropdown::before,
        .header-one .main-nav.has-dropdown > a::after,
        .header-one .main-nav.has-dropdown > a::before,
        .header-one .main-nav.has-dropdown > a i:not(.fa-solid) {
          display: none !important;
          content: none !important;
        }

        /* Ensure visibility on dark backgrounds by keeping the white logo white */
        header.header-relative .logo-area img,
        header.sticky .logo-area img {
          filter: none;
          transition: filter 0.3s ease;
        }

        /* Nav link colors for ALL states (as they all have dark backgrounds now) */
        header .main-nav > a {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        header .main-nav > a:hover {
          color: #fff !important;
        }
        header .main-nav > a:hover i {
          color: #fff !important;
        }
        header .main-nav > a i {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        /* Services Mega Menu - Approach Animation */
        .services-parent:hover .timeline-line-active {
          animation: lineGrow 2.5s ease-out forwards;
        }

        .services-parent:hover .approach-step {
          animation: stepHighlight 0.5s ease-out forwards;
        }

        .services-parent:hover .approach-step:nth-child(3) { animation-delay: 0.1s; }
        .services-parent:hover .approach-step:nth-child(4) { animation-delay: 0.4s; }
        .services-parent:hover .approach-step:nth-child(5) { animation-delay: 0.7s; }
        .services-parent:hover .approach-step:nth-child(6) { animation-delay: 1.0s; }
        .services-parent:hover .approach-step:nth-child(7) { animation-delay: 1.3s; }
        .services-parent:hover .approach-step:nth-child(8) { animation-delay: 1.6s; }
        .services-parent:hover .approach-step:nth-child(9) { animation-delay: 1.9s; }
        .services-parent:hover .approach-step:nth-child(10) { animation-delay: 2.2s; }

        @keyframes lineGrow {
          0% { height: 0; }
          100% { height: calc(100% - 20px); }
        }

        @keyframes stepHighlight {
          0% { 
            opacity: 0.7;
            transform: translateX(0);
          }
          100% { 
            opacity: 1;
            transform: translateX(5px);
            color: #3B82F6;
          }
        }

        .services-parent:hover .approach-step .step-icon {
          animation: iconPop 0.5s ease-out forwards;
        }

        .services-parent:hover .approach-step:nth-child(3) .step-icon { animation-delay: 0.1s; }
        .services-parent:hover .approach-step:nth-child(4) .step-icon { animation-delay: 0.4s; }
        .services-parent:hover .approach-step:nth-child(5) .step-icon { animation-delay: 0.7s; }
        .services-parent:hover .approach-step:nth-child(6) .step-icon { animation-delay: 1.0s; }
        .services-parent:hover .approach-step:nth-child(7) .step-icon { animation-delay: 1.3s; }
        .services-parent:hover .approach-step:nth-child(8) .step-icon { animation-delay: 1.6s; }
        .services-parent:hover .approach-step:nth-child(9) .step-icon { animation-delay: 1.9s; }
        .services-parent:hover .approach-step:nth-child(10) .step-icon { animation-delay: 2.2s; }

        @keyframes iconPop {
          0% { 
            background: #fff;
            color: #3B82F6;
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% { 
            background: #3B82F6;
            color: #fff;
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
          }
        }
      `}</style>
    </header >
  );
};

