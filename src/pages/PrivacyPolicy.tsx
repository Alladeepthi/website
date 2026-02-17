import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#1e293b';
    const lightBg = '#F8FAFC';
    const textColor = '#475569';

    const sections = [
        { id: 'intro', title: 'Introduction', icon: 'fa-paper-plane' },
        { id: 'collection', title: 'Data Collection', icon: 'fa-database' },
        { id: 'usage', title: 'Usage Protocols', icon: 'fa-chart-pie' },
        { id: 'security', title: 'Security Standards', icon: 'fa-shield-halved' },
        { id: 'cookies', title: 'Cookies & Tracking', icon: 'fa-cookie-bite' },
        { id: 'rights', title: 'Your Rights', icon: 'fa-user-shield' },
        { id: 'contact', title: 'Contact Us', icon: 'fa-envelope' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main style={{ overflowX: 'hidden' }}>
            {/* 1. Hero / Header Section */}
            <div className="rts-privacy-breadcrumb-area" style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%), url('/assets/images/banner/breadcrumb-01.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                padding: '200px 0 120px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title" style={{ fontSize: '56px', fontWeight: '800', marginBottom: '15px', color: '#fff', letterSpacing: '-1px' }}>Privacy Policy</h1>
                            <p style={{ maxWidth: '700px', margin: '0 auto 20px', fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>
                                Transparency, security, and trust. We are committed to protecting your personal data.
                            </p>
                            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0, fontSize: '15px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '10px' }}></i></li>
                                <li><span style={{ color: primaryColor, fontWeight: 'bold' }}>Privacy</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Content Area */}
            <div className="rts-privacy-area" style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row g-5">
                        {/* Sidebar Navigation */}
                        <div className="col-lg-4">
                            <div className="sticky-sidebar" style={{ position: 'sticky', top: '100px' }}>
                                <div className="service-menu-list shadow-sm" style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1px solid #f1f5f9' }}>
                                    <h5 style={{ padding: '0 20px 20px', borderBottom: '1px solid #f1f5f9', fontWeight: '800', color: darkColor }}>Table of Contents</h5>
                                    {sections.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => scrollToSection(item.id)}
                                            style={{
                                                padding: '15px 20px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px',
                                                color: textColor,
                                                fontWeight: '500',
                                                borderBottom: index !== sections.length - 1 ? '1px solid #f8fafc' : 'none'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = primaryColor;
                                                e.currentTarget.style.background = '#f8fafc';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = textColor;
                                                e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            <i className={`fa-solid ${item.icon}`} style={{ width: '20px' }}></i>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>

                                <div className="contact-widget mt-4 rounded-4 p-4 text-center" style={{ background: darkColor, color: '#fff' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '24px' }}>
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    <h5 style={{ color: '#fff', fontWeight: '700' }}>Need Help?</h5>
                                    <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '20px' }}>Contact our data protection team for any privacy concerns.</p>
                                    <Link to="/contact" className="btn btn-primary w-100 fw-bold" style={{ borderRadius: '6px' }}>Contact Support</Link>
                                </div>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="col-lg-8">
                            <div className="privacy-content">
                                <div id="intro" className="content-block mb-5">
                                    <h2 style={{ fontWeight: '800', color: darkColor, marginBottom: '20px' }}>Introduction</h2>
                                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: textColor, marginBottom: '20px' }}>
                                        Welcome to NeuraltrixAI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                    </p>
                                    <div className="p-4 rounded-3 border-start border-4 border-primary" style={{ background: '#eff6ff' }}>
                                        <p className="m-0 text-dark fw-bold">Last Updated: February 2026</p>
                                    </div>
                                </div>

                                <div id="collection" className="content-block mb-5">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>1. Data We Collect</h3>
                                    <p style={{ color: textColor, lineHeight: '1.7', marginBottom: '15px' }}>
                                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                    </p>
                                    <ul className="list-unstyled">
                                        {[
                                            'Identity Data: includes first name, last name, username or similar identifier.',
                                            'Contact Data: includes billing address, delivery address, email address and telephone numbers.',
                                            'Technical Data: includes internet protocol (IP) address, your login data, browser type and version.',
                                            'Usage Data: includes information about how you use our website, products and services.'
                                        ].map((item, i) => (
                                            <li key={i} className="mb-3 d-flex gap-3">
                                                <i className="fa-solid fa-check text-primary mt-1"></i>
                                                <span style={{ color: textColor }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="usage" className="content-block mb-5">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>2. How We Use Your Data</h3>
                                    <p style={{ color: textColor, lineHeight: '1.7' }}>
                                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                    </p>
                                    <div className="row g-3 mt-2">
                                        {[
                                            { title: 'Service Delivery', desc: 'To provide and maintain our Service.' },
                                            { title: 'Communication', desc: 'To contact you with newsletters and marketing.' },
                                            { title: 'Optimization', desc: 'To improved and customize the user experience.' }
                                        ].map((card, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="p-4 border rounded-3 h-100" style={{ background: '#fff' }}>
                                                    <h6 style={{ fontWeight: '700', color: darkColor }}>{card.title}</h6>
                                                    <p style={{ margin: 0, fontSize: '14px', color: textColor }}>{card.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div id="security" className="content-block mb-5">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>3. Data Security</h3>
                                    <p style={{ color: textColor, lineHeight: '1.7' }}>
                                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                    </p>
                                </div>

                                <div id="cookies" className="content-block mb-5">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>4. Cookies Policy</h3>
                                    <p style={{ color: textColor, lineHeight: '1.7' }}>
                                        Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                                    </p>
                                </div>

                                <div id="rights" className="content-block mb-5">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>5. Your Legal Rights</h3>
                                    <div className="p-4 rounded-4" style={{ background: darkColor, color: '#fff' }}>
                                        <p style={{ marginBottom: '15px' }}>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2 opacity-75">• Request access to your personal data.</li>
                                            <li className="mb-2 opacity-75">• Request correction of your personal data.</li>
                                            <li className="mb-2 opacity-75">• Request erasure of your personal data.</li>
                                            <li className="opacity-75">• Object to processing of your personal data.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="contact" className="content-block">
                                    <h3 style={{ fontWeight: '700', color: darkColor, marginBottom: '20px' }}>6. Contact Us</h3>
                                    <p style={{ color: textColor, lineHeight: '1.7' }}>
                                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                    </p>
                                    <div className="d-flex align-items-center gap-3 mt-4">
                                        <a href="mailto:privacy@neuraltrix.com" className="btn btn-outline-primary fw-bold px-4 py-2">
                                            <i className="fa-regular fa-envelope me-2"></i> privacy@neuraltrix.com
                                        </a>
                                        <Link to="/contact" className="btn btn-primary fw-bold px-4 py-2" style={{ background: primaryColor, border: 'none' }}>
                                            Contact Form
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
