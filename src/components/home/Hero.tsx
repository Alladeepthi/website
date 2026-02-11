import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="rts-banner-area-start-machine bg_image rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 lg_order-change">
                        <div className="machine-learning-content-banner">
                            <span className="pre">Product Engineering & Intelligent Automation</span>
                            <h1 className="title">Building Scalable <span>Digital</span> Systems</h1>
                            <p className="disc" style={{ fontSize: '18px', maxWidth: '600px', marginBottom: '30px', color: '#5D666F' }}>
                                We engineer high-performance software, data platforms, and automated workflows that drive real business growth.
                            </p>
                            <div className="button-wrapper">
                                <a href="/contact" className="rts-btn btn-primary">Schedule a Consultation</a>
                                <div className="video-btn-area">
                                    <div className="vedio-icone">
                                        <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=vZE0j_WCRvI">
                                            <img src="/assets/images/banner/play.svg" alt="" />
                                        </a>
                                        <div className="video-overlay">
                                            <a href="#section1" className="video-overlay-close">×</a>
                                        </div>
                                    </div>
                                    <span>Watch Our Process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="hero-area">
                            <img src="/assets/images/banner/hero.webp" width="1132" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="marquee">
                <div className="marquee__item">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main--wrapper-tt">
                                {[
                                    "Product Engineering",
                                    "Cloud Architecture",
                                    "Intelligent Automation",
                                    "Data Platforms",
                                    "System Integration",
                                    "Product Engineering",
                                    "Cloud Architecture",
                                    "Intelligent Automation",
                                    "Data Platforms"
                                ].map((text, i) => (
                                    <div className="single-inner-marquree" key={i}>
                                        <h2>{text}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
