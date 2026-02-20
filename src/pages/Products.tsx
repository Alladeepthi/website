import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

export const Products: React.FC = () => {
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

    const primaryColor = '#3C72FC'; // Using the primary blue from other pages
    const darkColor = '#0F0F11';
    const textColor = '#5D666F';

    return (
        <main>
            {/* Hero Section */}
            <div className="rts-breadcrumb-area breadcrumb-bg-1 bg_image" style={{ background: 'linear-gradient(180deg, #091533 0%, #172445 100%)', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1-left">
                            <h1 className="title" style={{ color: '#fff', fontSize: '60px', lineHeight: '1.2', marginBottom: '15px' }}>Our Products</h1>
                            <div className="bread-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Link to="/" style={{ color: '#fff', fontSize: '16px', fontWeight: '500' }}>Home</Link>
                                <span style={{ color: 'rgba(255,255,255,0.6)' }}> / </span>
                                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid Section - Clean Professional Cards */}
            <div className="rts-service-area" style={{ background: '#fff', padding: '60px 0' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <span className="pre" style={{
                                color: primaryColor,
                                fontWeight: 700,
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                Innovation Suite
                            </span>
                            <h2 className="title" style={{ fontSize: '42px', fontWeight: 800, color: darkColor, marginBottom: '15px' }}>
                                Powerful Tools for AI-Driven Growth
                            </h2>
                            <p className="disc" style={{ maxWidth: '700px', margin: '0 auto', color: textColor, fontSize: '18px', lineHeight: '1.6' }}>
                                Discover our range of specialized products designed to accelerate your data journey.
                            </p>
                        </div>
                    </div>

                    <div className="row g-5">
                        {productsData.map((product) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                                <div className="product-card-simple" style={{
                                    border: '1px solid #EAF0FF',
                                    borderRadius: '20px',
                                    padding: '30px',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: '#F9FAFF'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = primaryColor;
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#EAF0FF';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>

                                    {/* Image Top */}
                                    <div className="thumbnail" style={{
                                        marginBottom: '25px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        height: '200px',
                                        background: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid #F1F5F9'
                                    }}>
                                        <img src={product.image} alt={product.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                                    </div>

                                    {/* Content */}
                                    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                            <div className="icon" style={{
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                                background: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: primaryColor,
                                                fontSize: '18px',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                            }}>
                                                <i className={`fa-solid ${product.icon}`}></i>
                                            </div>
                                            <span style={{ fontSize: '12px', fontWeight: '700', color: primaryColor, background: '#ECF2FF', padding: '4px 12px', borderRadius: '15px' }}>
                                                {product.category}
                                            </span>
                                        </div>

                                        <h3 className="title" style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '10px' }}>
                                            {product.name}
                                        </h3>
                                        <p style={{ fontSize: '16px', color: textColor, lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                                            {product.description}
                                        </p>

                                        <div className="footer" style={{ marginTop: 'auto' }}>
                                            <Link to="/contact" className="rts-btn btn-primary" style={{ padding: '10px 25px', fontSize: '14px', width: '100%', textAlign: 'center' }}>
                                                View Product
                                                <i className="fa-regular fa-arrow-right ml--5"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Build With Us Section */}
            <div className="rts-why-choose-us-area rts-section-gap" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-left-content">
                                <span className="pre-title" style={{ color: primaryColor, textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
                                    Enterprise Grade
                                </span>
                                <h2 className="title" style={{ fontSize: '36px', fontWeight: '800', color: darkColor, marginBottom: '20px' }}>
                                    Why Build with NeuralTrix?
                                </h2>
                                <p className="disc" style={{ fontSize: '16px', color: textColor, lineHeight: '1.7', marginBottom: '30px' }}>
                                    Our stack is optimized for performance, scalability, and ease of use.
                                    We don't just provide tools; we provide a complete ecosystem for your AI initiatives.
                                </p>
                                <div className="row g-4">
                                    {[
                                        { title: 'Bank-Grade Security', desc: 'SOC2 Compliant infrastructure with end-to-end encryption.', icon: 'fa-shield-halved' },
                                        { title: 'Infinite Scalability', desc: 'Auto-scaling architecture that grows with your user base.', icon: 'fa-layer-group' },
                                        { title: '24/7 Expert Support', desc: 'Direct access to ML engineers, not just support tickets.', icon: 'fa-headset' },
                                        { title: 'Seamless Integration', desc: 'Plug-and-play APIs for all major languages and frameworks.', icon: 'fa-plug' },
                                    ].map((item, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="single-reason" style={{ display: 'flex', gap: '15px' }}>
                                                <div className="icon" style={{
                                                    minWidth: '50px',
                                                    height: '50px',
                                                    background: '#F0F6FF',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: primaryColor,
                                                    fontSize: '20px'
                                                }}>
                                                    <i className={`fa-solid ${item.icon}`}></i>
                                                </div>
                                                <div className="content">
                                                    <h5 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px', color: darkColor }}>{item.title}</h5>
                                                    <p style={{ fontSize: '14px', color: textColor, lineHeight: '1.5' }}>{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--50 pl_md--15 pl_sm--15">
                            <div className="why-choose-image" style={{ position: 'relative' }}>
                                <img src="/assets/images/about/05.webp" alt="why-choose" style={{ borderRadius: '20px', width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
                                <div className="card-floating" style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: '-30px',
                                    background: '#fff',
                                    padding: '25px',
                                    borderRadius: '15px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                    maxWidth: '220px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '32px', fontWeight: '800', color: primaryColor }}>99.9%</span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: darkColor }}>Uptime Guarantee on all Enterprise Plans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="rts-call-to-action-area" style={{ background: '#0F0F11', padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="cta-inner">
                                <h3 className="title" style={{ color: '#fff', fontSize: '48px', fontWeight: '800', marginBottom: '20px' }}>
                                    Ready to start building?
                                </h3>
                                <p className="disc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                                    Get started with our free tier or contact sales for enterprise options tailored to your needs.
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
