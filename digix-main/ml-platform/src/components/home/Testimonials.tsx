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
                                        <span>Testimonials</span>
                                        <h2 className="title">Our Clients Speak</h2>
                                    </div>
                                    <div className="body">
                                        <img src="/assets/images/testimonials/quote2.svg" alt="" />
                                        <p className="disc">
                                            Partnering with Digix has completely transformed how we handle our data. Their machine learning solutions helped us uncover actionable insights we never thought possible, boosting our efficiency by 30%.
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
        </div>
    );
};
