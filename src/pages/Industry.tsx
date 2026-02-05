import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Industry: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
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
            {/* Banner Area Start */}
            <div className="rts-career-banner-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="career-banner-wrapper">
                                <h1 className="title">
                                    Tailored Solutions for Every Industry
                                </h1>
                                <p className="disc">
                                    We understand that each industry has unique challenges and opportunities. That’s why we
                                    offer customized solutions designed to meet the specific needs of businesses across various
                                    sectors. Explore how we bring value to industries worldwide.
                                </p>
                                <Link to="/services" className="rts-btn btn-primary btn-bold">Discover Our Services</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--30 mt_sm--30">
                            <div className="thumbnail-top">
                                <img src="/assets/images/industry/01.webp" alt="career" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-one-industry bg_light">
                <div className="consultancy-bottom rts-section-gap career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                                <div className="thumbnail-consultancy">
                                    <img src="/assets/images/industry/02.webp" alt="consultancy" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="career-right-two-wrapper">
                                    <h2 className="title">Revolutionizing Patient Care with Technology</h2>
                                    <p>We offer tailored IT consulting and advisory services designed to help businesses thrive
                                        in an ever-evolving digital landscape. Whether you're modernizing your infrastructure,
                                        optimizing processes.</p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p> IT Strategy Development</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Digital Transformation Consulting</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Infrastructure Optimization</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Cybersecurity & Risk Management</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Enhancing Data-Driven Decisions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultancy-bottom rts-section-gapBottom career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-right-two-wrapper">
                                    <h2 className="title">Empowering Smart Manufacturing Advanced Technology</h2>
                                    <p>In the fast-evolving manufacturing sector, businesses must embrace digital transformation
                                        to stay competitive. Our IT solutions are designed to optimize processes, enhance
                                        productivity
                                    </p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p> IT Strategy Development</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Digital Transformation Consulting</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Infrastructure Optimization</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Cybersecurity & Risk Management</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Enhancing Data-Driven Decisions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                                <div className="thumbnail-consultancy">
                                    <img src="/assets/images/industry/03.webp" alt="consultancy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="consultancy-bottom rts-section-gap career-two-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="career-right-two-wrapper">
                                <h2 className="title">Benefits of Our Industrial IT Services</h2>
                                <p>Our industrial IT services are designed to empower businesses with tailored solutions that
                                    address unique challenges
                                </p>
                                <div className="check-wrapper-main">
                                    <div className="single-wrapper">
                                        <div className="check-wrapper">
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p> IT Strategy Development</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Digital Transformation Consulting</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Infrastructure Optimization</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Cybersecurity & Risk Management</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                            <div className="thumbnail-consultancy-bottom">
                                <div className="single-consultancyimage-0top one">
                                    <img src="/assets/images/industry/06.webp" alt="consultancy" />
                                </div>
                                <div className="single-consultancyimage-0top two">
                                    <img src="/assets/images/industry/07.webp" alt="consultancy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Area */}
            <div className="rts-call-to-action-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title">
                                    No long-term contracts. No catches. Simple.
                                </h3>
                                <p className="disc">
                                    Start your 30-day free trial. Cancel anytime. View demo Start free trial
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary">Started for Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
