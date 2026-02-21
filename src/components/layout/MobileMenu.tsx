import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

const platformCategories = [
    {
        name: 'DataLakes',
        platforms: [
            { label: 'Snowflake', path: '/platform/snowflake' },
            { label: 'RedShift', path: '/platform/redshift' },
            { label: 'Databricks', path: '/platform/databricks' },
            { label: 'MongoDB', path: '/platform/mongodb' },
            { label: 'Datadog', path: '/platform/datadog' },
        ],
    },
    {
        name: 'RAG Tools',
        platforms: [
            { label: 'Unstructured', path: '/platform/unstructured' },
            { label: 'Airbyte', path: '/platform/airbyte' },
            { label: 'LlamaIndex', path: '/platform/llamaindex' },
            { label: 'LangChain', path: '/platform/langchain' },
        ],
    },
    {
        name: 'Vector Database',
        platforms: [
            { label: 'Pinecone', path: '/platform/pinecone' },
            { label: 'Weaviate', path: '/platform/weaviate' },
            { label: 'Zilliz', path: '/platform/zilliz' },
            { label: 'Milvus', path: '/platform/milvus' },
            { label: 'Supabase', path: '/platform/supabase' },
        ],
    },
    {
        name: 'Model Ecosystem',
        platforms: [
            { label: 'OpenAI', path: '/platform/openai' },
            { label: 'Gemini', path: '/platform/gemini' },
            { label: 'Llama 3.2', path: '/platform/llama-3.2' },
            { label: 'BERT', path: '/platform/bert' },
            { label: 'LaMDA', path: '/platform/lamda' },
            { label: 'Orca', path: '/platform/orca' },
            { label: 'Mistral', path: '/platform/mistral' },
            { label: 'PaLM2', path: '/platform/palm2' },
            { label: 'Claude', path: '/platform/claude' },
            { label: 'Hugging Face', path: '/platform/hugging-face' },
        ],
    },
];

export const MobileMenu: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const closeMenu = () => {
        document.getElementById('side-bar')?.classList.remove('show');
        document.getElementById('anywhere-home')?.classList.remove('bgshow');
    };

    const toggleCategory = (name: string) => {
        setOpenCategory(prev => (prev === name ? null : name));
    };

    return (
        <>
            <div id="side-bar" className="side-bar header-two">
                <div className="rts-sidebar-menu-desktop">
                    <div className="logo-area">
                        <Link className="logo" to="/"><img src="/assets/images/logo/nlogo (1).png" alt="NeuraltrixAI" style={{ height: '45px', width: 'auto' }} /></Link>
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
                                <li><Link to="/products#pricing-plan" onClick={closeMenu}>Pricing</Link></li>
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
                <div className="mobile-menu-main block lg:hidden">
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

                            {/* ---- PLATFORMS: React-controlled accordion, no jQuery dependency ---- */}
                            <li className="has-droupdown">
                                <Link to="#" className="main" onClick={(e) => e.preventDefault()}>Platforms</Link>
                                <ul className="submenu mm-collapse">
                                    {platformCategories.map((cat) => (
                                        <li key={cat.name} style={{ borderBottom: 'none', margin: 0, padding: 0 }}>
                                            {/* Category header — acts as toggle */}
                                            <button
                                                onClick={() => toggleCategory(cat.name)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    width: '100%',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                                                    color: 'rgba(255,255,255,0.75)',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    padding: '10px 0',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    fontFamily: 'inherit',
                                                }}
                                            >
                                                {cat.name}
                                                <span style={{ fontSize: '11px', marginLeft: '8px' }}>
                                                    {openCategory === cat.name ? '▲' : '▼'}
                                                </span>
                                            </button>

                                            {/* Platform links — shown/hidden by React state */}
                                            {openCategory === cat.name && (
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: '4px 0 4px 16px',
                                                    margin: 0,
                                                    background: 'rgba(255,255,255,0.03)',
                                                    borderRadius: '4px',
                                                }}>
                                                    {cat.platforms.map((p) => (
                                                        <li key={p.path} style={{ margin: 0, padding: 0, border: 'none' }}>
                                                            <Link
                                                                to={p.path}
                                                                onClick={closeMenu}
                                                                style={{
                                                                    display: 'block',
                                                                    color: '#ffffff',
                                                                    fontSize: '13px',
                                                                    padding: '7px 8px',
                                                                    textDecoration: 'none',
                                                                    borderBottom: 'none',
                                                                    opacity: 0.85,
                                                                    transition: 'opacity 0.2s, padding-left 0.2s',
                                                                }}
                                                                onMouseEnter={e => {
                                                                    (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                                                                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '14px';
                                                                    (e.currentTarget as HTMLAnchorElement).style.color = '#0F62FE';
                                                                }}
                                                                onMouseLeave={e => {
                                                                    (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
                                                                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft = '8px';
                                                                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                                                                }}
                                                            >
                                                                › {p.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>

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

                            <li className="has-droupdown">
                                <Link to="#" className="main">About</Link>
                                <ul className="submenu mm-collapse">
                                    <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                                    <li><Link to="/team" onClick={closeMenu}>Our Team</Link></li>
                                    <li><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <Link to="#" className="main">Products</Link>
                                <ul className="submenu mm-collapse">
                                    <li><Link to="/products" onClick={closeMenu}>AI Platform</Link></li>
                                    <li><Link to="/products" onClick={closeMenu}>ML Studio</Link></li>
                                    <li><Link to="/products" onClick={closeMenu}>Data Analytics Suite</Link></li>
                                    <li><Link to="/products" onClick={closeMenu}>Automation Tools</Link></li>
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
