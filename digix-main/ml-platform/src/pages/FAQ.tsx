import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FAQ: React.FC = () => {
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

    const faqs = [
        { id: 'One', question: "What's included in each plan?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
        { id: 'Two', question: "Can I upgrade or downgrade my plan later?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
        { id: 'Three', question: "What payment methods do you accept?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
        { id: 'Four', question: "What's included in each plan?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
        { id: 'Five', question: "Can I upgrade or downgrade my plan later?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
        { id: 'Six', question: "What payment methods do you accept?", answer: "Each plan is designed to offer a specific set of services tailored to different business needs." },
    ];

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
                                    <li><a href="#" className="active">FAQ'S</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Frequently Asked Questions</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts faq area start */}
            <div className="rts-faq-area-start rts-section-gapBottom">
                <div className="container-faq" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordon-pricing-wrapper-three full-width">
                                <div className="accordion" id="pricingAccordion">
                                    {faqs.map((faq, index) => (
                                        <div className="accordion-item" key={faq.id}>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${faq.id}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse${faq.id}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#pricingAccordion">
                                                <div className="accordion-body">
                                                    {faq.answer}
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

            {/* rts call to action area start */}
            <div className="rts-call-to-action-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">No long-term contracts. No catches. Simple.</h3>
                                <p className="disc">Start your 30-day free trial. Cancel anytime. View demo Start free trial</p>
                                <Link to="/contact" className="rts-btn btn-primary">Started for Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
