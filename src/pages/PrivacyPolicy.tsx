import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#0F172A';
    const lightBg = '#F8FAFC';
    const textColor = '#334155';

    return (
        <main style={{ background: lightBg, minHeight: '100vh', paddingBottom: '80px' }}>
            {/* Header / Title Section */}
            <div style={{ background: darkColor, padding: '100px 0 140px', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <span style={{
                        color: primaryColor,
                        fontWeight: '700',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        display: 'block',
                        marginBottom: '15px'
                    }}>
                        Legal Center
                    </span>
                    <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px' }}>Privacy Policy</h1>
                    <p style={{ opacity: 0.8, fontSize: '18px' }}>Last updated: February 20, 2026</p>
                </div>
            </div>

            {/* Document Container - Overlapping the Header */}
            <div className="container" style={{ marginTop: '-80px' }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            background: '#fff',
                            padding: '60px 80px',
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            border: '1px solid #E2E8F0'
                        }}>
                            {/* Document Intro */}
                            <div style={{ marginBottom: '50px', borderBottom: '1px solid #E2E8F0', paddingBottom: '30px' }}>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: textColor }}>
                                    Your privacy is important to us. It is NeuraltrixAI's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '20px' }}>1. Information We Collect</h3>
                                <p style={{ lineHeight: '1.7', color: textColor, marginBottom: '20px' }}>
                                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                                </p>
                                <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${primaryColor}` }}>
                                    <strong style={{ color: darkColor }}>What we collect:</strong>
                                    <ul style={{ margin: '10px 0 0', paddingLeft: '20px', color: textColor }}>
                                        <li style={{ marginBottom: '5px' }}><strong>Log Data:</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser.</li>
                                        <li style={{ marginBottom: '5px' }}><strong>Device Data:</strong> We may also collect data about the device you’re using to access our website.</li>
                                        <li><strong>Personal Information:</strong> We may ask for personal information, such as your name, email, address, and payment details.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '20px' }}>2. How We Use Your Information</h3>
                                <p style={{ lineHeight: '1.7', color: textColor, marginBottom: '15px' }}>
                                    We use the information we collect in various ways, including to:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    {[
                                        'Provide, operate, and maintain our website',
                                        'Improve, personalize, and expand our website',
                                        'Understand and analyze how you use our website',
                                        'Develop new products, services, features, and functionality',
                                        'Communicate with you regarding updates',
                                        'Send you emails',
                                        'Find and prevent fraud'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', color: textColor, fontSize: '15px' }}>
                                            <i className="fa-solid fa-check-circle" style={{ color: primaryColor, marginRight: '10px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '20px' }}>3. Data Retention</h3>
                                <p style={{ lineHeight: '1.7', color: textColor }}>
                                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '20px' }}>4. Sharing of Information</h3>
                                <p style={{ lineHeight: '1.7', color: textColor }}>
                                    We do not share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div style={{ marginBottom: '50px' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: darkColor, marginBottom: '20px' }}>5. User Rights</h3>
                                <p style={{ lineHeight: '1.7', color: textColor, marginBottom: '20px' }}>
                                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.
                                </p>
                            </div>

                            {/* Contact Box */}
                            <div style={{
                                background: darkColor,
                                borderRadius: '12px',
                                padding: '40px',
                                color: '#fff',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px' }}>Still have questions?</h4>
                                <p style={{ opacity: 0.8, marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
                                    If you have any questions about how we handle user data and personal information, feel free to contact us.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                    <a href="mailto:privacy@neuraltrix.com" style={{
                                        padding: '12px 30px',
                                        background: '#fff',
                                        color: darkColor,
                                        borderRadius: '50px',
                                        fontWeight: '600',
                                        textDecoration: 'none'
                                    }}>
                                        Email Us
                                    </a>
                                    <Link to="/contact" style={{
                                        padding: '12px 30px',
                                        background: `rgba(255,255,255,0.1)`,
                                        color: '#fff',
                                        borderRadius: '50px',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}>
                                        Contact Support
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .container > .row > .col-lg-10 > div {
                        padding: 40px 20px !important;
                    }
                    ul { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
};
