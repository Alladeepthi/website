import React from 'react';

export const WorkingProcess: React.FC = () => {
    return (
        <div className="rts-working-process-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper">
                            <span className="pre">How It Works</span>
                            <h2 className="title rts-text-anime-style-1">How We Innovate with <br /> Machine Learning</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--10 g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/consultation.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/design.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/development.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/deployment.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="working-process-three-main">
                            <div className="row g-5">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Consultation & Research</h5>
                                        <p className="disc">We start by thoroughly understanding your business needs, challenges</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Design & Prototyping</h5>
                                        <p className="disc">We start by thoroughly understanding your business needs, challenges</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Development & Testing</h5>
                                        <p className="disc">We start by thoroughly understanding your business needs, challenges</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Deployment & Support</h5>
                                        <p className="disc">We start by thoroughly understanding your business needs, challenges</p>
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
