import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main>
            {/* Ultra-Modern Breadcrumb / Hero Area */}
            <div className="rts-about-breadcrumb-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="rts-about-breadcrumb-content">
                                <div className="last-updated-badge">Platform Security • Feb 2026</div>
                                <h1 className="policy-main-title rts-text-anime-style-1">Privacy & Data Governance</h1>
                                <p className="disc" style={{ fontSize: '20px', color: '#64748b', lineHeight: '1.6' }}>
                                    We believe data privacy is a fundamental human right. Our platform is built with transparency and security as the core foundation of everything we do.
                                </p>
                                <div className="breadcrumb-nav mt--30" style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 600 }}>
                                    <Link to="/" style={{ color: '#64748b' }}>Home</Link>
                                    <i className="fa-light fa-chevrons-right" style={{ fontSize: '12px', color: '#cbd5e1' }}></i>
                                    <span style={{ color: '#0F62FE' }}>Privacy Policy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rts-about-breadcrumb-image" style={{ position: 'relative' }}>
                                {/* Floating Gradient Glow */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '140%',
                                    height: '140%',
                                    background: 'radial-gradient(circle, rgba(15, 98, 254, 0.08) 0%, transparent 70%)',
                                    zIndex: -1
                                }}></div>
                                <img
                                    src="/assets/images/privacy-policy/privacy-policy.png"
                                    alt="privacy"
                                    style={{
                                        width: '100%',
                                        animation: 'floatImage 6s ease-in-out infinite',
                                        filter: 'drop-shadow(0 20px 40px rgba(15, 98, 254, 0.15))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="privacy-policy-wrapper">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="privacy-sidebar">
                                <h5 className="title mb--40" style={{ fontSize: '22px', fontWeight: 900, color: '#0c1c3d', letterSpacing: '-0.5px' }}>
                                    Compliance Hub
                                </h5>
                                <ul>
                                    <li><a href="#intro"><i className="fa-light fa-house-chimney"></i> Overview</a></li>
                                    <li><a href="#collect"><i className="fa-light fa-fingerprint"></i> Data Collection</a></li>
                                    <li><a href="#use"><i className="fa-light fa-chart-mixed"></i> Usage Protocols</a></li>
                                    <li><a href="#security"><i className="fa-light fa-shield-keyhole"></i> Security Standards</a></li>
                                    <li><a href="#contact"><i className="fa-light fa-envelope-open-text"></i> Support Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="privacy-content-card">

                                <div id="intro" className="policy-section">
                                    <div className="section-header">
                                        <i className="fa-light fa-paper-plane"></i>
                                        <h4 className="section-title">Introduction</h4>
                                    </div>
                                    <p className="disc">
                                        Welcome to NeuralTrix. As we innovate at the intersection of AI and human productivity, we recognize that your data is your most valuable asset. This policy details our rigorous commitment to safeguarding your information while delivering world-class intelligence.
                                    </p>
                                </div>

                                <div id="collect" className="policy-section">
                                    <div className="section-header">
                                        <i className="fa-light fa-id-badge"></i>
                                        <h4 className="section-title">1. Information Architecture</h4>
                                    </div>
                                    <p className="disc">
                                        We collect information to provide better services to all our users. From basic profile data to technical telemetrics, every piece of information is gathered with explicit consent and stored using state-of-the-art encryption protocols.
                                    </p>
                                </div>

                                <div id="use" className="policy-section">
                                    <div className="section-header">
                                        <i className="fa-light fa-microchip"></i>
                                        <h4 className="section-title">2. Usage Algorithms</h4>
                                    </div>
                                    <p className="disc">
                                        Your data is used solely to enhance the cognitive capabilities of your personalized NeuralTrix environment. We do not participate in data brokerage or unauthorized profiling. Our internal audits ensure that data usage always aligns with your specified preferences.
                                    </p>
                                </div>

                                <div id="security" className="policy-section">
                                    <div className="section-header">
                                        <i className="fa-light fa-vault"></i>
                                        <h4 className="section-title">3. Security Infrastructure</h4>
                                    </div>
                                    <p className="disc">
                                        Our security stack is comprised of multi-layer defense mechanisms, including end-to-end encryption (E2EE), zero-knowledge storage options, and real-time AI monitoring for anomaly detection. We protect your data as if it were our own.
                                    </p>
                                </div>

                                <div id="contact" className="policy-section" style={{ marginBottom: 0 }}>
                                    <div className="section-header">
                                        <i className="fa-light fa-comments-question"></i>
                                        <h4 className="section-title">4. Privacy Support</h4>
                                    </div>
                                    <p className="disc">
                                        Have questions regarding your data rights or GDPR compliance? Our dedicated Data Protection Office is available around the clock to assist you with any inquiries or data portability requests.
                                    </p>
                                    <div style={{
                                        marginTop: '40px',
                                        padding: '40px',
                                        borderRadius: '30px',
                                        background: 'linear-gradient(135deg, #0F62FE 0%, #0843ae 100%)',
                                        boxShadow: '0 20px 40px rgba(15, 98, 254, 0.3)',
                                        color: '#fff'
                                    }}>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginBottom: '5px' }}>Data Protection Office</p>
                                        <a href="mailto:support@neuraltrix.com" style={{ fontSize: '28px', color: '#fff', fontWeight: 800, textDecoration: 'none' }}>
                                            support@neuraltrix.com
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes floatImage {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
            `}</style>
        </main>
    );
};
