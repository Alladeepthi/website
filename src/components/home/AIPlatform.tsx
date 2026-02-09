import React from 'react';

export const AIPlatform: React.FC = () => {
    return (
        <div className="rts-section-gap rts-ai-platform-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ai-platform-wrapper">
                            <div className="left-wrapper">
                                <h3 className="title">The Universal AI Platform</h3>
                                <p className="disc">Highlight integration with AWS, Azure, Google Cloud for scalable solutions.</p>
                                <a href="#" className="rts-btn btn-primary">Explore Capability </a>
                            </div>
                            <div className="right-img">
                                <img src="/assets/images/why-choose/08.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--0">
                    <div className="col-lg-6">
                        <div className="ai-platform-single-card">
                            <a href="#" className="thumbnail">
                                <img src="/assets/images/ai/machine-learning-card.png" alt="ai" />
                            </a>
                            <div className="inner">
                                <h5 className="title">Machine Learning</h5>
                                <p className="disc">Build and evaluate advanced machine learning models using AutoML and the latest AI techniques.</p>
                                <a href="#" className="rts-btn btn-primary">Explore Capability</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ai-platform-single-card primary">
                            <a href="#" className="thumbnail">
                                <img src="/assets/images/ai/data-preparation-card.png" alt="ai" />
                            </a>
                            <div className="inner">
                                <h5 className="title">Data preparation</h5>
                                <p className="disc">Connect, cleanse, and prepare data for data science, analytics, and AI projects at scale.</p>
                                <a href="#" className="rts-btn btn-primary">Explore Capability</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
