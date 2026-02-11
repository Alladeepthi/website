import React from 'react';

export const Testimonials: React.FC = () => {
    return (
        <div className="rts-testimonials-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-area-machine-wrapper">
                            <div className="single-testimonials-area">
                                <div className="thumbnail">
                                    <img src="/assets/images/testimonials/10.webp" alt="testimonaials" />
                                </div>
                                <div className="content">
                                    <div className="top-head">
                                        <span>Client Success</span>
                                        <h2 className="title">Trusted by Industry Leaders</h2>
                                    </div>
                                    <div className="body">
                                        <img src="/assets/images/testimonials/quote2.svg" alt="" />
                                        <p className="disc">
                                            "NeuraltrixAI didn't just build us a platform; they re-engineered our entire data strategy. The predictive models they deployed have optimized our supply chain, reducing waste by 25% in the first quarter."
                                        </p>
                                        <div className="autohr-area">
                                            <div className="avatar-area">
                                                <img src="/assets/images/testimonials/11.webp" alt="avatar" />
                                                <div className="inner">
                                                    <h5 className="title">John Smith</h5>
                                                    <p>CEO of Tech Innovations Inc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
