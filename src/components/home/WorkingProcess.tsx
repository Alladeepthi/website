import React from 'react';

export const WorkingProcess: React.FC = () => {
    return (
        <div className="rts-working-process-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper">
                            <span className="pre">How It Works</span>
                            <h2 className="title rts-text-anime-style-1">Our Engineering <br /> Lifecycle</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--10 g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/Research.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/online.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/testing.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-style-machine">
                            <div className="thumbnail">
                                <img src="/assets/images/process/Support.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="working-process-three-main">
                            <div className="row g-5">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Discovery & Strategy</h5>
                                        <p className="disc">We dive deep into your business requirements to define a clear technical roadmap.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Architecture & Design</h5>
                                        <p className="disc">Blueprint your system for performance, security, and scalability before writing code.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Agile Development</h5>
                                        <p className="disc">Iterative development with rigorous testing ensures high-quality deliverables.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three">
                                        <h5 className="title">Deployment & Scale</h5>
                                        <p className="disc">Seamless launch and ongoing optimization to grow with your business.</p>
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
