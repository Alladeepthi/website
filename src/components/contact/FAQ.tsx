import React from 'react';

export const FAQ: React.FC = () => {
    return (
        <div className="rts-faq-area-start rts-section-gapBottom">
            <div className="container mb--50">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="title rts-text-anime-style-1">Frequently Asked Questions</h2>
                    </div>
                </div>
            </div>
            <div className="container-faq">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="accordon-pricing-wrapper-three full-width">
                            <div className="accordion" id="pricingAccordion">
                                {[
                                    { q: "What's included in each plan?", a: "Each plan is designed to offer a specific set of services tailored to different business needs.", id: "One", show: true },
                                    { q: "Can I upgrade or downgrade my plan later?", a: "Each plan is designed to offer a specific set of services tailored to different business needs.", id: "Two", show: false },
                                    { q: "What payment methods do you accept?", a: "Each plan is designed to offer a specific set of services tailored to different business needs.", id: "Three", show: false }
                                ].map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button
                                                className={`accordion-button ${!item.show ? 'collapsed' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                aria-expanded={item.show}
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {item.q}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${item.id}`}
                                            className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
                                            aria-labelledby={`heading${item.id}`}
                                            data-bs-parent="#pricingAccordion"
                                        >
                                            <div className="accordion-body">
                                                {item.a}
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
    );
};
