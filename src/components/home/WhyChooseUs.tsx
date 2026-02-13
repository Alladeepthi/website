import React from 'react';
import { Link } from 'react-router-dom';

export const WhyChooseUs: React.FC = () => {
    return (
        <div className="rts-why-choose-us-area-matchin bg_image" style={{ padding: '60px 0' }}>
            <div className="container">
                <div className="row align-items-center">
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
                            <div className="title-left-wrapper" style={{ marginBottom: '35px' }}>
                                <span className="pre" style={{
                                    color: '#3B82F6',
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '12px'
                                }}>Why Partner With NeuraltrixAI</span>
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '38px',
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    marginBottom: 0
                                }}>Engineering Excellence Meets Business Strategy</h2>
                            </div>
                            <div className="single-why-choose-wrapper-machine">
                                <div className="signle-why-choose" style={{
                                    marginBottom: '25px',
                                    display: 'flex',
                                    gap: '20px'
                                }}>
                                    <div className="icon" style={{
                                        flexShrink: 0,
                                        width: '50px',
                                        height: '50px'
                                    }}>
                                        <img src="/assets/images/why-choose/06.svg" alt="why-choose" style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }} />
                                    </div>
                                    <div className="content-wrapper">
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '8px',
                                            color: '#0F172A'
                                        }}>Proven Technical Expertise</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B',
                                            margin: 0
                                        }}>A team of senior engineers and architects dedicated to building robust, scalable systems.</p>
                                    </div>
                                </div>
                                <div className="signle-why-choose" style={{
                                    marginBottom: '30px',
                                    display: 'flex',
                                    gap: '20px'
                                }}>
                                    <div className="icon" style={{
                                        flexShrink: 0,
                                        width: '50px',
                                        height: '50px'
                                    }}>
                                        <img src="/assets/images/why-choose/07.svg" alt="why-choose" />
                                    </div>
                                    <div className="content-wrapper">
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '8px',
                                            color: '#0F172A'
                                        }}>ROI-Driven Approach</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B',
                                            margin: 0
                                        }}>We focus on technology investments that deliver measurable business value and efficiency.</p>
                                    </div>
                                </div>
                                <Link to="/contact" className="rts-btn btn-primary">Start Your Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
