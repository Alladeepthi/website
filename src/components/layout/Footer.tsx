import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const footerClass = `rts-footer-one bg_dark`;

    return (
        <div className={footerClass} style={{ paddingTop: '30px', position: 'relative', zIndex: 50, backgroundColor: '#0F172A' }}>
            <div className="container" style={{ paddingBottom: '20px' }}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="left-wiget">
                            <Link className="logo" to="/">
                                <img src="/assets/images/logo/nlogo (1).png" alt="NeuraltrixAI" style={{ height: '32px', width: 'auto', marginBottom: '10px' }} />
                            </Link>
                            <p className="disc" style={{ marginBottom: '10px', fontSize: '13px', lineHeight: '1.4' }}>High-performance data platforms & automated workflows.</p>
                            <form action="#" className="footer-form" onClick={(e) => e.preventDefault()} style={{ marginTop: '0' }}>
                                <input type="text" placeholder="Email..." required style={{ height: '36px', fontSize: '13px', padding: '0 15px' }} />
                                <button className="rts-btn btn-primary" type="submit" style={{ padding: '0 15px', height: '36px', fontSize: '13px', lineHeight: '36px' }}>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-8 mt_md--20 mt_sm--20">
                        <div className="footer-wized-wrapper" style={{ gap: '30px' }}>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '10px', fontSize: '16px' }}>Company</h6>
                                <ul style={{ fontSize: '13px' }}>
                                    <li style={{ marginBottom: '6px' }}><Link to="/about">About Us</Link></li>
                                    <li style={{ marginBottom: '6px' }}><Link to="#">Careers</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '10px', fontSize: '16px' }}>Services</h6>
                                <ul style={{ fontSize: '13px' }}>
                                    <li style={{ marginBottom: '6px' }}><Link to="#">Mobile App</Link></li>
                                    <li style={{ marginBottom: '6px' }}><Link to="#">Web Dev</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="#">Software</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '10px', fontSize: '16px' }}>Resources</h6>
                                <ul style={{ fontSize: '13px' }}>
                                    <li style={{ marginBottom: '6px' }}><Link to="#">Support</Link></li>
                                    <li style={{ marginBottom: '6px' }}><Link to="/products#pricing-plan">Pricing</Link></li>
                                    <li style={{ marginBottom: '0' }}><Link to="#">Docs</Link></li>
                                </ul>
                            </div>
                            <div className="single">
                                <h6 className="title" style={{ marginBottom: '10px', fontSize: '16px' }}>Social</h6>
                                <ul style={{ fontSize: '13px' }}>
                                    <li style={{ marginBottom: '6px' }}><a href="#" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li style={{ marginBottom: '6px' }}><a href="#" target="_blank" rel="noreferrer">Twitter</a></li>
                                    <li style={{ marginBottom: '0' }}><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area" style={{ padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-1" style={{ paddingTop: '0', borderTop: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <p className="disc" style={{ fontSize: '12px', margin: 0 }}>© {new Date().getFullYear()} NeuraltrixAI.</p>
                                <ul style={{ margin: 0, gap: '20px' }}>
                                    <li><Link to="/privacy" style={{ fontSize: '12px' }}>Privacy</Link></li>
                                    <li><Link to="/terms" style={{ fontSize: '12px' }}>Terms</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

