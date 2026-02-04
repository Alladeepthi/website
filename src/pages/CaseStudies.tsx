import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning inner-machine-case";
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
            {/* rts service-details-breadcrumb-area-start */}
            <div className="rts-service-details-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><a href="#" className="active">Case Studies</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Empowering Businesses through Innovative Software</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts product area start */}
            <div className="rts-product-area bg_light rts-section-gapBottom">
                <div className="container">
                    <div className="product-sticky-wrapper-main mt--60">
                        {/* product area start */}
                        <div className="product-wrapper">
                            <div className="inner one">
                                <div className="left-content">
                                    <h3 className="title">SaaS Platforms</h3>
                                    <p className="disc">Our SaaS (Software as a Service) Platforms provide businesses with scalable, cloud-based solutions that drive efficiency, flexibility, and growth.</p>
                                    <ul className="feature-list">
                                        <li><i className="fa-regular fa-check"></i>Cross-Platform Development</li>
                                        <li><i className="fa-regular fa-check"></i>Native App Development</li>
                                        <li><i className="fa-regular fa-check"></i>UI/UX Design</li>
                                    </ul>
                                    <ul className="tags">
                                        <li>Mobile Applications</li>
                                        <li>Design</li>
                                        <li>App Application</li>
                                    </ul>
                                </div>
                                <div className="image-area">
                                    <img src="/assets/images/project/13.webp" width="563" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* product area end */}
                        {/* product area start */}
                        <div className="product-wrapper">
                            <div className="inner two">
                                <div className="left-content">
                                    <h3 className="title">Enterprise Software</h3>
                                    <p className="disc">Feature-rich mobile apps designed for both Android and iOS to keep your business and customers connected on the go.</p>
                                    <ul className="feature-list">
                                        <li><i className="fa-regular fa-check"></i>Cross-Platform Development</li>
                                        <li><i className="fa-regular fa-check"></i>Native App Development</li>
                                        <li><i className="fa-regular fa-check"></i>UI/UX Design</li>
                                    </ul>
                                    <ul className="tags">
                                        <li>Mobile Applications</li>
                                        <li>Design</li>
                                        <li>App Application</li>
                                    </ul>
                                </div>
                                <div className="image-area">
                                    <img src="/assets/images/project/14.webp" width="563" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* product area end */}
                        {/* product area start */}
                        <div className="product-wrapper">
                            <div className="inner three">
                                <div className="left-content">
                                    <h3 className="title">Mobile Applications</h3>
                                    <p className="disc">Feature-rich mobile apps designed for both Android and iOS to keep your business and customers connected on the go.</p>
                                    <ul className="feature-list">
                                        <li><i className="fa-regular fa-check"></i>Cross-Platform Development</li>
                                        <li><i className="fa-regular fa-check"></i>Native App Development</li>
                                        <li><i className="fa-regular fa-check"></i>UI/UX Design</li>
                                    </ul>
                                    <ul className="tags">
                                        <li>Mobile Applications</li>
                                        <li>Design</li>
                                        <li>App Application</li>
                                    </ul>
                                </div>
                                <div className="image-area">
                                    <img src="/assets/images/project/15.webp" width="563" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* product area end */}
                    </div>
                </div>
            </div>
            {/* rts product area end */}

            <div className="rts-call-to-action-area rts-section-gapBottom demo-app-development">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">Book a Free Consulting</h3>
                                <p className="disc">Sign up now to improve your customer support with our tools and solutions.</p>
                                <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white">Try it Now <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                <div className="round one"></div>
                                <div className="round two"></div>
                                <div className="round three"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
