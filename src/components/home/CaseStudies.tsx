import React from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: React.FC = () => {
    return (
        <div className="rts-product-area bg_light rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="stok-text">
                            <h2 className="title">Case Studies</h2>
                        </div>
                    </div>
                </div>
                <div className="product-sticky-wrapper-main mt--60">
                    <div className="product-wrapper">
                        <div className="inner one">
                            <div className="image-area">
                                <img src="/assets/images/project/Laboratory-pana.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Scaling Fintech Infrastructure for High-Volume Trading</h3>
                                <p className="disc">We re-architected a legacy trading platform into a microservices-based system, handling 10x transaction volume with sub-millisecond latency.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i>99.99% System Uptime</li>
                                    <li><i className="fa-regular fa-check"></i>Real-time Data Processing</li>
                                    <li><i className="fa-regular fa-check"></i>Automated Compliance Reporting</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Read Case Study</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <div className="inner two">
                            <div className="image-area">
                                <img src="/assets/images/project/Emails-amico.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Automating Healthcare Operations</h3>
                                <p className="disc">Developed an intelligent patient management system that reduced administrative overhead by 40% through automated scheduling and billing workflows.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i>HIPAA Compliant Architecture</li>
                                    <li><i className="fa-regular fa-check"></i>Seamless EMR Integration</li>
                                    <li><i className="fa-regular fa-check"></i>Predictive Staffing Models</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Read Case Study</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <div className="inner three">
                            <div className="image-area">
                                <img src="/assets/images/project/Tax-bro.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Supply Chain Optimization for Retail Giant</h3>
                                <p className="disc">Implemented a predictive inventory management system using AI to forecast demand, reducing overstock costs by 25% within the first year.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i>Demand Forecasting</li>
                                    <li><i className="fa-regular fa-check"></i>Route Optimization</li>
                                    <li><i className="fa-regular fa-check"></i>Vendor Portal Integration</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Read Case Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
