import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OFFERING_MENU_COLUMNS, ALL_SERVICE_OFFERINGS } from '../../data/services';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../constants/brand';

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
    const [openCategory, setOpenDropdown] = useState<string | null>(null);
    const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

    const closeMenu = () => {
        document.getElementById('side-bar')?.classList.remove('show');
        document.getElementById('anywhere-home')?.classList.remove('bgshow');
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(prev => (prev === name ? null : name));
        setOpenSubCategory(null);
    };

    const toggleSubCategory = (name: string) => {
        setOpenSubCategory(prev => (prev === name ? null : name));
    };

    const accordionSectionStyle = {
        listStyle: 'none',
        padding: '0 0 0 15px',
        margin: '5px 0 15px 0',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '6px',
        overflow: 'hidden'
    };

    const accordionLinkStyle = {
        display: 'block',
        color: '#ffffff',
        fontSize: '14px',
        padding: '10px 0',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'all 0.2s'
    };

    return (
        <>
            <div id="side-bar" className="side-bar header-two">
                <div className="rts-sidebar-menu-desktop">
                    <div className="logo-area">
                        <Link className="logo" to="/"><img src={BRAND_LOGO_SRC} alt={BRAND_LOGO_ALT} style={{ height: '40px', width: 'auto' }} /></Link>
                        <button className="close-icon-menu" aria-label="footer_Button" onClick={closeMenu}><i className="far fa-times"></i></button>
                    </div>
                </div>

                <div className="mobile-menu-main block lg:hidden" style={{ padding: '20px' }}>
                    <nav className="nav-main mainmenu-nav">
                        <ul className="mainmenu" style={{ listStyle: 'none', padding: 0, margin: 0 }}>

                            {/* Services */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleDropdown('services')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                    background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 600,
                                    padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'
                                }}>
                                    Services <span>{openCategory === 'services' ? '−' : '+'}</span>
                                </button>
                                {openCategory === 'services' && (
                                    <ul style={accordionSectionStyle}>
                                        {OFFERING_MENU_COLUMNS.map((col) => (
                                            <li key={col.title}>
                                                <button onClick={() => toggleSubCategory(col.title)} style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                                    background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px',
                                                    padding: '10px 0', cursor: 'pointer', textAlign: 'left'
                                                }}>
                                                    {col.title} <span style={{ fontSize: '10px' }}>{openSubCategory === col.title ? '▲' : '▼'}</span>
                                                </button>
                                                {openSubCategory === col.title && (
                                                    <ul style={{ listStyle: 'none', padding: '0 0 10px 15px', margin: 0 }}>
                                                        {col.items.map((item) => {
                                                            const offering = ALL_SERVICE_OFFERINGS.find(o => o.slug === item.slug);
                                                            return (
                                                                <li key={item.slug}>
                                                                    <Link to="/service-details" state={{ service: offering }} onClick={closeMenu} style={{ ...accordionLinkStyle, fontSize: '13px', opacity: 0.7 }}>
                                                                        › {item.title}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            {/* Platforms */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleDropdown('platforms')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                    background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 600,
                                    padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'
                                }}>
                                    Platforms <span>{openCategory === 'platforms' ? '−' : '+'}</span>
                                </button>
                                {openCategory === 'platforms' && (
                                    <ul style={accordionSectionStyle}>
                                        {platformCategories.map((cat) => (
                                            <li key={cat.name}>
                                                <button onClick={() => toggleSubCategory(cat.name)} style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                                    background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px',
                                                    padding: '10px 0', cursor: 'pointer', textAlign: 'left'
                                                }}>
                                                    {cat.name} <span style={{ fontSize: '10px' }}>{openSubCategory === cat.name ? '▲' : '▼'}</span>
                                                </button>
                                                {openSubCategory === cat.name && (
                                                    <ul style={{ listStyle: 'none', padding: '0 0 10px 15px', margin: 0 }}>
                                                        {cat.platforms.map((p) => (
                                                            <li key={p.path}>
                                                                <Link to={p.path} onClick={closeMenu} style={{ ...accordionLinkStyle, fontSize: '13px', opacity: 0.7 }}>
                                                                    › {p.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            {/* Industry */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleDropdown('industry')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                    background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 600,
                                    padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'
                                }}>
                                    Industry <span>{openCategory === 'industry' ? '−' : '+'}</span>
                                </button>
                                {openCategory === 'industry' && (
                                    <ul style={accordionSectionStyle}>
                                        {['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Technology'].map((ind) => (
                                            <li key={ind}>
                                                <Link to={`/industry/${ind.toLowerCase()}`} onClick={closeMenu} style={accordionLinkStyle}>
                                                    {ind}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            {/* About */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleDropdown('about')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                    background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 600,
                                    padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'
                                }}>
                                    About <span>{openCategory === 'about' ? '−' : '+'}</span>
                                </button>
                                {openCategory === 'about' && (
                                    <ul style={accordionSectionStyle}>
                                        <li><Link to="/about" onClick={closeMenu} style={accordionLinkStyle}>About Us</Link></li>
                                        <li><Link to="/team" onClick={closeMenu} style={accordionLinkStyle}>Our Team</Link></li>
                                        <li><Link to="/privacy-policy" onClick={closeMenu} style={accordionLinkStyle}>Privacy Policy</Link></li>
                                    </ul>
                                )}
                            </li>

                            {/* Solutions */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleDropdown('solutions')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                    background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', fontWeight: 600,
                                    padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'
                                }}>
                                    Solutions <span>{openCategory === 'solutions' ? '−' : '+'}</span>
                                </button>
                                {openCategory === 'solutions' && (
                                    <ul style={accordionSectionStyle}>
                                        {['Visual Monitoring', 'Knowledge Automation', 'Data Augmentation', 'Edge Intelligence'].map((sol) => (
                                            <li key={sol}>
                                                <Link to="/solutions" onClick={closeMenu} style={accordionLinkStyle}>{sol}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div id="anywhere-home" onClick={closeMenu}></div>
        </>
    );
};
