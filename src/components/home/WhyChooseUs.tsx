import React from 'react';
import { Link } from 'react-router-dom';

export const WhyChooseUs: React.FC = () => {
    return (
        <div className="rts-why-choose-us-area-matchin rts-section-gap bg_image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="thumbnail-machine-choose-area">
                            <div className="left-thumbnail">
                                <img src="/assets/images/why-choose/new-robot-collab.png" alt="AI Collaboration" />
                            </div>
                            <div className="left-thumbnail last">
                                <img src="/assets/images/why-choose/new-man-suit.png" alt="Man in Suit" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 pl--60 pl_sm--10">
                        <div className="why-choose-us-right-area-machine">
                            <div className="title-left-wrapper">
                                <span className="pre">Why Choose Us</span>
                                <h2 className="title rts-text-anime-style-1">Advanced Machine Learning Solutions</h2>
                            </div>
                            <div className="single-why-choose-wrapper-machine">
                                <div className="signle-why-choose">
                                    <div className="icon">
                                        <img src="/assets/images/why-choose/06.svg" alt="why-choose" />
                                    </div>
                                    <div className="content-wrapper">
                                        <h5 className="title">Cutting-Edge Expertise</h5>
                                        <p className="disc">engineers are at the forefront of machine learning technology,</p>
                                    </div>
                                </div>
                                <div className="signle-why-choose">
                                    <div className="icon">
                                        <img src="/assets/images/why-choose/07.svg" alt="why-choose" />
                                    </div>
                                    <div className="content-wrapper">
                                        <h5 className="title">Support & Maintenance</h5>
                                        <p className="disc">we partner with you for long-term success</p>
                                    </div>
                                </div>
                                <Link to="/contact" className="rts-btn btn-primary">Start Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
