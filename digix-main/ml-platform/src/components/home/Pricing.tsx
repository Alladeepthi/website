import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
    return (
        <div className="rts-pricing-area-machine rts-section-gap bg_image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper">
                            <span className="pre">Pricing Plan</span>
                            <h2 className="title rts-text-anime-style-1">Pricing Options for <br /> Every Business</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-wrapper-machine">
                            <div className="top-area">
                                <div className="price">
                                    <h2 className="title">$199</h2>
                                    <span>/ Per month</span>
                                </div>
                                <p>Perfect for Startups and Small Businesses</p>
                            </div>
                            <Link to="/pricing" className="rts-btn btn-primary btn-border">Select Plan</Link>
                            <div className="body">
                                <div className="check-wrapper">
                                    {['Pre-built machine learning models', 'Data preprocessing and analysis', 'Social Media Profile Setup', 'Monthly reports'].map((item, i) => (
                                        <div className="single-check" key={i}>
                                            <i className="fa-solid fa-check"></i>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-wrapper-machine active">
                            <span className="badge">Starter Package</span>
                            <div className="top-area">
                                <div className="price">
                                    <h2 className="title">$299</h2>
                                    <span>/ Per month</span>
                                </div>
                                <p>Perfect for Startups and Small Businesses</p>
                            </div>
                            <Link to="/pricing" className="rts-btn btn-primary btn-border">Select Plan</Link>
                            <div className="body">
                                <div className="check-wrapper">
                                    {['Pre-built machine learning models', 'Data preprocessing and analysis', 'Social Media Profile Setup', 'Monthly reports'].map((item, i) => (
                                        <div className="single-check" key={i}>
                                            <i className="fa-solid fa-check"></i>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-wrapper-machine">
                            <div className="top-area">
                                <div className="price">
                                    <h2 className="title">$399</h2>
                                    <span>/ Per month</span>
                                </div>
                                <p>Perfect for Startups and Small Businesses</p>
                            </div>
                            <Link to="/pricing" className="rts-btn btn-primary btn-border">Select Plan</Link>
                            <div className="body">
                                <div className="check-wrapper">
                                    {['Pre-built machine learning models', 'Data preprocessing and analysis', 'Social Media Profile Setup', 'Monthly reports'].map((item, i) => (
                                        <div className="single-check" key={i}>
                                            <i className="fa-solid fa-check"></i>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
