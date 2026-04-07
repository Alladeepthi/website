import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../constants/brand';

export const Footer: React.FC = () => {
    const footerClass = `rts-footer-one nt-footer-light`;

    return (
        <div
            className={footerClass}
            style={{
                paddingTop: '40px',
                position: 'relative',
                zIndex: 100,
                isolation: 'isolate',
                backgroundColor: '#ffffff',
                width: '100%',
                borderTop: '1px solid #f1f5f9'
            }}
        >
            <div className="container" style={{ paddingBottom: '30px' }}>
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="left-wiget">
                            <Link className="logo" to="/">
                                <img
                                    src={BRAND_LOGO_SRC}
                                    alt={BRAND_LOGO_ALT}
                                    style={{
                                        height: 'auto',
                                        maxHeight: 48,
                                        width: 'auto',
                                        maxWidth: 'min(260px, 85vw)',
                                        marginBottom: '15px',
                                        display: 'block',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Link>
                            <p className="disc" style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6', color: '#3B82F6', fontWeight: 500 }}>
                                High-performance data platforms & automated workflows.
                            </p>
                            <div className="footer-form-wrapper" style={{ maxWidth: '240px' }}>
                                <form action="#" className="footer-form" onClick={(e) => e.preventDefault()} style={{ marginTop: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <input type="text" placeholder="Email..." required style={{
                                        height: '42px',
                                        fontSize: '14px',
                                        padding: '0 15px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '4px',
                                        color: '#0F172A'
                                    }} />
                                    <button className="rts-btn btn-primary" type="submit" style={{
                                        padding: '0 20px',
                                        height: '42px',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        borderRadius: '6px',
                                        backgroundColor: '#3B82F6',
                                        color: '#fff',
                                        border: 'none',
                                        width: 'fit-content'
                                    }}>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 offset-lg-1 mt_md--30 mt_sm--30">
                        <div className="footer-wized-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Company</h6>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '12px' }}><Link to="/about" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>About Us</Link></li>
                                    <li style={{ marginBottom: '12px' }}><Link to="/team" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Careers / Team</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="/contact" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Services</h6>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '12px' }}><Link to="/services" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Mobile App</Link></li>
                                    <li style={{ marginBottom: '12px' }}><Link to="/services" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Web Dev</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="/services" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Software</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Resources</h6>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '12px' }}><Link to="/case-studies" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Case Studies</Link></li>
                                    <li style={{ marginBottom: '12px' }}><Link to="/blog" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Blog</Link></li>
                                    <li style={{ marginBottom: '12px' }}><Link to="/faq" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>FAQ</Link></li>
                                    <li style={{ marginBottom: '12px' }}><Link to="/pricing" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Pricing</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="/contact" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Support</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Social</h6>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '12px' }}><a href="#" target="_blank" rel="noreferrer" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Facebook</a></li>
                                    <li style={{ marginBottom: '12px' }}><a href="#" target="_blank" rel="noreferrer" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>Twitter</a></li>
                                    <li style={{ marginBottom: '0' }}><a href="#" target="_blank" rel="noreferrer" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 500 }}>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="copyright-area" style={{ padding: '15px 0', borderTop: '1px solid #f1f5f9', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p style={{ fontSize: '13px', margin: 0, color: '#64748B', fontWeight: 500 }}>
                                © {new Date().getFullYear()} NeuraltrixAI.
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div style={{ display: 'inline-flex', gap: '25px' }}>
                                <Link to="/privacy-policy" style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>Privacy</Link>
                                <Link to="/terms" style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
