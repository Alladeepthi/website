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
                                <img src="/assets/images/project/healthcare-predictive.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Revolutionizing Healthcare with Predictive Analytics</h3>
                                <p className="disc">Our machine learning models are used to detect anomalies in medical images, predict disease progression, and personalize treatment plans.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i>Data-Driven Decision Making</li>
                                    <li><i className="fa-regular fa-check"></i>Optimize your website</li>
                                    <li><i className="fa-regular fa-check"></i>Customer Support Channels</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <div className="inner two">
                            <div className="image-area">
                                <img src="/assets/images/project/fraud-detection.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Enhancing Fraud Detection for Financial Institutions</h3>
                                <p className="disc">Machine learning helps banks and financial institutions identify fraudulent transactions in real-time and automate risk assessments.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i>Algorithmic trading</li>
                                    <li><i className="fa-regular fa-check"></i>Personalized financial advice</li>
                                    <li><i className="fa-regular fa-check"></i>Fraud prevention</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <div className="inner three">
                            <div className="image-area">
                                <img src="/assets/images/project/fraud-detection.png" width="521" alt="" />
                            </div>
                            <div className="left-content">
                                <h3 className="title">Enhancing Fraud Detection for Financial Institutions</h3>
                                <p className="disc">Our machine learning solutions predict equipment failure before it happens, reducing downtime and repair costs. Quality control automation, predictive maintenance.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-regular fa-check"></i> Quality control automation</li>
                                    <li><i className="fa-regular fa-check"></i>Predictive Maintenance</li>
                                    <li><i className="fa-regular fa-check"></i>Supply Chain Optimization</li>
                                </ul>
                                <Link to="/case-studies" className="rts-btn btn-primary">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
