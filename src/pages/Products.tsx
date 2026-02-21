import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { Pricing } from '../components/home/Pricing';

export const Products: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All Products');

    useEffect(() => {
        document.body.className = "demo-machine-learning";

        // Re-initialize main.js for animations and plugins
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    const primaryColor = '#3C72FC';
    const accentColor = '#6d28d9';

    // Functionality: Filtering logic
    const tabs = ['All Products', 'Vision AI', 'Natural Language', 'Infrastructure'];
    const filteredProducts = activeTab === 'All Products'
        ? productsData
        : productsData.filter(p => p.category === activeTab);

    return (
        <main style={{ backgroundColor: '#fff' }}>
            {/* Elegant Hero Section with Glassmorphism */}
            <section className="products-hero-section" style={{
                position: 'relative',
                padding: '160px 0 100px',
                background: `radial-gradient(circle at top right, ${primaryColor}15, transparent), radial-gradient(circle at bottom left, ${accentColor}10, transparent), #050505`,
                overflow: 'hidden',
                color: '#fff'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <div className="badge-wrapper mb--20" style={{
                                display: 'inline-block',
                                padding: '6px 16px',
                                borderRadius: '100px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: primaryColor }}>
                                    Enterprise AI Ecosystem
                                </span>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(32px, 8vw, 84px)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '24px',
                                letterSpacing: '-0.02em'
                            }}>
                                Tools Designed for <br />
                                <span style={{
                                    background: `linear-gradient(to right, ${primaryColor}, #818cf8)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Scale & Intelligence.</span>
                            </h1>
                            <p style={{
                                fontSize: '20px',
                                color: 'rgba(255,255,255,0.6)',
                                maxWidth: '700px',
                                margin: '0 auto 40px',
                                lineHeight: 1.6
                            }}>
                                Neuraltrix provides a complete suite of specialized products that empower developers and enterprises to build, deploy, and scale AI-driven workflows in record time.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="rts-btn btn-primary" style={{ padding: '14px 25px', borderRadius: '12px', minWidth: '160px' }}>Get Started Free</Link>
                                <a href="#products-list" className="rts-btn" style={{
                                    padding: '14px 25px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    minWidth: '160px'
                                }}>Explore Suite</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Product Grid - Envato Style */}
            <section id="products-list" style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-lg-12">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                                <div className="section-title-left">
                                    <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Core Innovation Suite</h2>
                                    <p style={{ color: '#64748b', fontSize: '16px' }}>Select a category to filter our high-performance engines.</p>
                                </div>
                                <div style={{
                                    padding: '8px',
                                    background: '#f8fafc',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    gap: '5px',
                                    border: '1px solid #f1f5f9',
                                    overflowX: 'auto',
                                    maxWidth: '100%',
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none'
                                }} className="no-scrollbar">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            style={{
                                                padding: '8px 18px',
                                                border: 'none',
                                                background: activeTab === tab ? '#fff' : 'transparent',
                                                boxShadow: activeTab === tab ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                                                borderRadius: '8px',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: activeTab === tab ? primaryColor : '#64748b',
                                                transition: 'all 0.3s ease',
                                                whiteSpace: 'nowrap'
                                            }}>{tab}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        {filteredProducts.map((product) => (
                            <div className="col-lg-4 col-md-6" key={product.id}>
                                <div className="product-card-evanto" style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: '#fff',
                                    borderRadius: '20px',
                                    border: '1px solid #f1f5f9',
                                    padding: '24px',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '180px', // Reduced from 220px to reduce card length
                                        background: '#f8fafc',
                                        borderRadius: '16px',
                                        marginBottom: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'transform 0.4s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <img src={product.image} alt={product.name} style={{
                                            maxHeight: '70%',
                                            maxWidth: '70%',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))',
                                            zIndex: 2
                                        }} />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-20px',
                                            right: '-20px',
                                            fontSize: '100px',
                                            opacity: 0.03,
                                            color: primaryColor,
                                            zIndex: 1
                                        }}>
                                            <i className={`fa-solid ${product.icon}`}></i>
                                        </div>
                                    </div>

                                    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div>
                                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#09090b', margin: 0 }}>{product.name}</h3>
                                                <span style={{ fontSize: '11px', color: primaryColor, fontWeight: 700, textTransform: 'uppercase' }}>{product.category}</span>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <span style={{ fontSize: '18px', fontWeight: 800, color: '#09090b', display: 'block' }}>{product.price.split('/')[0]}</span>
                                                <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>{product.price.split('/')[1] || 'Forever'}</span>
                                            </div>
                                        </div>

                                        <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.5, marginBottom: '20px' }}>{product.description}</p>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                                {product.features.slice(0, 2).map((f, i) => (
                                                    <span key={i} style={{
                                                        padding: '4px 10px',
                                                        background: '#f1f5f9',
                                                        borderRadius: '6px',
                                                        fontSize: '11px',
                                                        color: '#475569',
                                                        fontWeight: 500
                                                    }}>• {f}</span>
                                                ))}
                                            </div>
                                            <Link to="/contact" style={{
                                                width: '100%',
                                                padding: '12px',
                                                background: '#09090b',
                                                color: '#fff',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                fontWeight: 600,
                                                fontSize: '13px',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                                onMouseEnter={(e) => { e.currentTarget.style.background = primaryColor }}
                                                onMouseLeave={(e) => { e.currentTarget.style.background = '#09090b' }}
                                            >
                                                Subscribe Now
                                                <i className="fa-regular fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FULL WIDTH Pricing Plan Section */}
            <div id="pricing-plan" style={{ background: '#f8fafc', padding: '100px 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container-fluid" style={{ maxWidth: '100%', padding: '0 5%' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Pricing />
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Feature Comparison Grid */}
            <section style={{ padding: '120px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#09090b', marginBottom: '25px', lineHeight: 1.1 }}>One Platform. <br />Unlimited Possibilities.</h2>
                            <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px' }}>Unlike fragmented AI tools, Neuraltrix offers a cross-compatible ecosystem. Data flows seamlessly between Vision, Language, and Prediction engines.</p>

                            <div className="row g-4">
                                {[
                                    { title: 'API Integration', icon: 'fa-plug', desc: 'Plug into any stack with our universal SDKs.' },
                                    { title: 'Scale on Demand', icon: 'fa-layer-group', desc: 'Process millions of requests with zero latency.' },
                                    { title: 'Hybrid Cloud', icon: 'fa-cloud', desc: 'Deploy on-premise or on our specialized cloud.' },
                                    { title: 'Audit Ready', icon: 'fa-shield-check', desc: 'GDPR & SOC2 compliance built into the core.' }
                                ].map((item, i) => (
                                    <div className="col-sm-6" key={i}>
                                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                            <div style={{ color: primaryColor, fontSize: '24px', marginBottom: '15px' }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 10px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--60 pl_md--15 pl_sm--15">
                            <div style={{ position: 'relative' }}>
                                <img src="/assets/images/about/05.webp" alt="Dashboard Preview" style={{
                                    width: '100%',
                                    borderRadius: '24px',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                                    border: '8px solid #fff'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    background: primaryColor,
                                    padding: '24px',
                                    borderRadius: '20px',
                                    color: '#fff',
                                    boxShadow: '0 20px 40px rgba(60, 114, 252, 0.3)'
                                }}>
                                    <span style={{ fontSize: '32px', fontWeight: 800, display: 'block' }}>10x</span>
                                    <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>Faster Deployment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Styles for Interactive Effects */}
            <style>{`
                .product-card-evanto:hover {
                    border-color: ${primaryColor}40 !important;
                    box-shadow: 0 40px 80px rgba(0,0,0,0.08) !important;
                    transform: translateY(-8px);
                }
                .product-card-evanto:hover img {
                    transform: scale(1.05) translateY(-5px);
                }
                .rts-btn.btn-primary:hover {
                    box-shadow: 0 15px 30px rgba(60, 114, 252, 0.4);
                    transform: translateY(-2px);
                }
            `}</style>
        </main>
    );
};
