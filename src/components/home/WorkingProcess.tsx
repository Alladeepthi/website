import React from 'react';

export const WorkingProcess: React.FC = () => {
    return (
        <div className="rts-working-process-area" style={{ padding: '60px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper" style={{ marginBottom: '50px' }}>
                            <span className="pre" style={{
                                color: '#3B82F6',
                                fontWeight: 700,
                                fontSize: '13px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '12px'
                            }}>How It Works</span>
                            <h2 className="title rts-text-anime-style-1" style={{
                                fontSize: '42px',
                                fontWeight: 800,
                                lineHeight: 1.2,
                                marginBottom: 0
                            }}>Our Engineering Lifecycle</h2>
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
                                    <div className="working-process-wrapper-three process-icon-1">
                                        <div className="animated-icon">
                                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                                        </div>
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '12px',
                                            color: '#0F172A'
                                        }}>Discovery & Strategy</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B'
                                        }}>We dive deep into your business requirements to define a clear technical roadmap.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three process-icon-2">
                                        <div className="animated-icon">
                                            <i className="fa-solid fa-pen-ruler"></i>
                                        </div>
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '12px',
                                            color: '#0F172A'
                                        }}>Architecture & Design</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B'
                                        }}>Blueprint your system for performance, security, and scalability before writing code.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three process-icon-3">
                                        <div className="animated-icon">
                                            <i className="fa-solid fa-code"></i>
                                        </div>
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '12px',
                                            color: '#0F172A'
                                        }}>Agile Development</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B'
                                        }}>Iterative development with rigorous testing ensures high-quality deliverables.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="working-process-wrapper-three process-icon-4">
                                        <div className="animated-icon">
                                            <i className="fa-solid fa-rocket"></i>
                                        </div>
                                        <h5 className="title" style={{
                                            fontSize: '20px',
                                            fontWeight: 700,
                                            marginBottom: '12px',
                                            color: '#0F172A'
                                        }}>Deployment & Scale</h5>
                                        <p className="disc" style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#64748B'
                                        }}>Seamless launch and ongoing optimization to grow with your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .working-process-wrapper-three.process-icon-1::before,
                .working-process-wrapper-three.process-icon-2::before,
                .working-process-wrapper-three.process-icon-3::before,
                .working-process-wrapper-three.process-icon-4::before {
                    display: none !important;
                }
                
                .working-process-wrapper-three .animated-icon {
                    position: absolute;
                    top: -10px;
                    left: -2px;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    border-radius: 50%;
                    box-shadow: 0 2px 10px rgba(59, 130, 246, 0.4);
                    animation: iconPulse 2s ease-in-out infinite;
                    z-index: 10;
                }
                
                .working-process-wrapper-three.process-icon-2 .animated-icon {
                    background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
                    box-shadow: 0 2px 10px rgba(139, 92, 246, 0.4);
                    animation-delay: 0.5s;
                }
                
                .working-process-wrapper-three.process-icon-3 .animated-icon {
                    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
                    animation-delay: 1s;
                }
                
                .working-process-wrapper-three.process-icon-4 .animated-icon {
                    background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
                    box-shadow: 0 2px 10px rgba(245, 158, 11, 0.4);
                    animation-delay: 1.5s;
                }
                
                .working-process-wrapper-three .animated-icon i {
                    color: #fff;
                    font-size: 11px;
                }
                
                @keyframes iconPulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 2px 10px rgba(59, 130, 246, 0.4);
                    }
                    50% {
                        transform: scale(1.2);
                        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.6);
                    }
                }
            `}} />
        </div>
    );
};
