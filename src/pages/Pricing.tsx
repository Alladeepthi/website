import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning machine-pricing";
        return () => {
            document.body.className = "";
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
                                    <li><a href="#" className="active">Pricing</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Transparent Pricing for Top-Tier Cybersecurity</h1>
                                <p className="disc mt--30">we deliver results. Our success is measured by the protection we provide to our clients, across industries and around the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts Pricing area start */}
            <div className="rts-pricing-area-machines rts-section-gapBottom bg_image">
                <div className="container">
                    <div className="row g-5 mt--10">
                        {[
                            { price: '$199', active: false },
                            { price: '$299', active: true, badge: 'Starter Package' },
                            { price: '$399', active: false },
                        ].map((plan, i) => (
                            <div className="col-lg-4" key={i}>
                                <div className={`pricing-wrapper-machine ${plan.active ? 'active' : ''}`}>
                                    {plan.badge && <span className="badge">{plan.badge}</span>}
                                    <div className="top-area">
                                        <div className="price">
                                            <h2 className="title">{plan.price}</h2>
                                            <span>/ Per month</span>
                                        </div>
                                        <p>Perfect for Startups and Small Businesses</p>
                                    </div>
                                    <a href="#" className="rts-btn btn-primary btn-border">Select Plan</a>
                                    <div className="body">
                                        <div className="check-wrapper">
                                            {['Pre-built machine learning models', 'Data preprocessing and analysis', 'Social Media Profile Setup', 'Monthly reports'].map((check, j) => (
                                                <div className="single-check" key={j}>
                                                    <i className="fa-solid fa-check"></i>
                                                    <p>{check}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* rts Pricing area end */}

            {/* rts faq area start */}
            <div className="rts-faq-area-start rts-section-gapBottom">
                <div className="container-faq">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper">
                                <span className="pre">FAQ</span>
                                <h2 className="title rts-text-anime-style-1">Get the Answers to Your <br /> Security Concerns</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40">
                        <div className="col-lg-12">
                            <div className="accordon-pricing-wrapper-three full-width">
                                <div className="accordion" id="pricingAccordion">
                                    {[
                                        { id: 'One', q: "What's included in each plan?", active: true },
                                        { id: 'Two', q: "Can I upgrade or downgrade my plan later?" },
                                        { id: 'Three', q: "What payment methods do you accept?" },
                                        { id: 'Four', q: "What's included in each plan?" },
                                        { id: 'Five', q: "Can I upgrade or downgrade my plan later?" },
                                        { id: 'Six', q: "What payment methods do you accept?" },
                                    ].map((faq, i) => (
                                        <div className="accordion-item" key={i}>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button className={`accordion-button ${faq.active ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.active ? 'true' : 'false'} aria-controls={`collapse${faq.id}`}>
                                                    {faq.q}
                                                </button>
                                            </h2>
                                            <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#pricingAccordion">
                                                <div className="accordion-body">
                                                    Each plan is designed to offer a specific set of services tailored to different business needs.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq area end */}
        </main>
    );
};
