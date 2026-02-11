import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Industry: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        document.body.className = "demo-machine-learning";
        return () => {
            document.body.className = "";
        };
    }, []);

    // Handle hash navigation and smooth scroll
    useEffect(() => {
        if (location.hash) {
            // Remove the # from the hash
            const id = location.hash.substring(1);

            // Small delay to ensure the page has rendered
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);


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
                                <img src="/assets/images/industry/tailored-solutions1.png" alt="career" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-one-industry bg_light">
                <div id="healthcare" className="consultancy-bottom rts-section-gap career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                                <div className="thumbnail-consultancy">
                                    <img src="/assets/images/industry/patient-care1.png" alt="consultancy" />
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
                <div id="manufacturing" className="consultancy-bottom rts-section-gapBottom career-two-section">
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
                                    <img src="/assets/images/industry/smart-manufacturing1.png" alt="consultancy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="finance" className="consultancy-bottom rts-section-gap career-two-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                            <div className="thumbnail-consultancy">
                                <img src="/assets/images/industry/finance.svg" alt="Finance & Banking" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="career-right-two-wrapper">
                                <h2 className="title">Transforming Finance & Banking with AI</h2>
                                <p>Empower your financial institution with cutting-edge AI solutions for fraud detection,
                                    risk assessment, automated trading, and personalized customer experiences. Our secure,
                                    compliant systems help you stay ahead in the competitive fintech landscape.
                                </p>
                                <div className="check-wrapper-main">
                                    <div className="single-wrapper">
                                        <div className="check-wrapper">
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Fraud Detection & Prevention</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>AI-Powered Risk Assessment</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Automated Trading Systems</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Customer Analytics & Personalization</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Regulatory Compliance Automation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-one-industry bg_light">
                <div id="retail" className="consultancy-bottom rts-section-gap career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-right-two-wrapper">
                                    <h2 className="title">Revolutionizing Retail & E-commerce</h2>
                                    <p>Transform your retail business with intelligent inventory management, personalized
                                        recommendations, dynamic pricing, and seamless omnichannel experiences. Our AI-driven
                                        solutions help you understand customer behavior and optimize operations.
                                    </p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Smart Inventory Management</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Personalized Product Recommendations</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Dynamic Pricing Optimization</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Customer Behavior Analytics</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Omnichannel Integration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                                <div className="thumbnail-consultancy">
                                    <img src="/assets/images/industry/retail.svg" alt="Retail & E-commerce" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="education" className="consultancy-bottom rts-section-gap career-two-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                            <div className="thumbnail-consultancy">
                                <img src="/assets/images/industry/education.svg" alt="Education Technology" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="career-right-two-wrapper">
                                <h2 className="title">Advancing Education with Smart Technology</h2>
                                <p>Enhance learning outcomes with AI-powered adaptive learning platforms, automated grading,
                                    student performance analytics, and personalized education paths. Our solutions make quality
                                    education accessible and engaging for all learners.
                                </p>
                                <div className="check-wrapper-main">
                                    <div className="single-wrapper">
                                        <div className="check-wrapper">
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Adaptive Learning Platforms</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Automated Grading & Assessment</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Student Performance Analytics</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Personalized Learning Paths</p>
                                            </div>
                                            <div className="single-check">
                                                <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                <p>Virtual Classroom Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-one-industry bg_light">
                <div id="logistics" className="consultancy-bottom rts-section-gapBottom career-two-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-right-two-wrapper">
                                    <h2 className="title">Optimizing Logistics & Supply Chain</h2>
                                    <p>Streamline your supply chain with AI-driven route optimization, predictive maintenance,
                                        demand forecasting, and real-time tracking. Our intelligent logistics solutions reduce
                                        costs, improve delivery times, and enhance customer satisfaction.
                                    </p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Route Optimization & Planning</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Predictive Maintenance</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Demand Forecasting</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Real-Time Shipment Tracking</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="/assets/images/why-choose/05.svg" alt="service" />
                                                    <p>Warehouse Automation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                                <div className="thumbnail-consultancy">
                                    <img src="/assets/images/industry/logistics.svg" alt="Logistics & Transportation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="benefits" className="consultancy-bottom rts-section-gap career-two-section">
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
                                    <img src="/assets/images/industry/industrial-benefits1.png" alt="consultancy" />
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
