import React from 'react';

export const AIPlatform: React.FC = () => {
    return (
        <div className="rts-ai-platform-area" style={{ padding: '60px 0', background: '#fff' }}>
            <div className="container">
                {/* Top Banner - More Compact */}
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div style={{
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            borderRadius: '20px',
                            padding: '50px 60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ maxWidth: '500px', zIndex: 2 }}>
                                <h3 style={{
                                    fontSize: '36px',
                                    marginBottom: '15px',
                                    lineHeight: 1.2,
                                    color: '#fff',
                                    fontWeight: 800
                                }}>The Universal AI Platform</h3>
                                <p style={{
                                    fontSize: '16px',
                                    marginBottom: '25px',
                                    lineHeight: 1.5,
                                    color: 'rgba(255,255,255,0.9)'
                                }}>Highlight integration with AWS, Azure, Google Cloud for scalable solutions.</p>
                                <a href="#" className="rts-btn btn-primary" style={{
                                    background: '#fff',
                                    color: '#1E3A8A',
                                    border: 'none'
                                }}>Explore Capability</a>
                            </div>
                            <div style={{
                                maxWidth: '280px',
                                zIndex: 2
                            }}>
                                <img src="/assets/images/why-choose/innovation.png" alt="" style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '200px',
                                    objectFit: 'contain'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards - Clean White Design */}
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.4s ease',
                            height: '100%',
                            border: '1px solid #F1F5F9'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                            }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                margin: '0 auto 30px',
                                background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E7FF 100%)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <img src="/assets/images/ai/cloud.png" alt="ai" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h5 style={{
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    color: '#0F172A',
                                    fontWeight: 700
                                }}>Machine Learning</h5>
                                <p style={{
                                    fontSize: '15px',
                                    marginBottom: '25px',
                                    lineHeight: 1.6,
                                    color: '#64748B'
                                }}>Build and evaluate advanced machine learning models using AutoML and the latest AI techniques.</p>
                                <a href="#" className="rts-btn btn-primary with-arrow" style={{
                                    fontSize: '14px',
                                    padding: '12px 28px'
                                }}>Explore Capability <i className="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.4s ease',
                            height: '100%',
                            border: '1px solid #F1F5F9'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                            }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                margin: '0 auto 30px',
                                background: 'linear-gradient(135deg, #EEF2FF 0%, #DDD6FE 100%)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <img src="/assets/images/ai/programming.png" alt="ai" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h5 style={{
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    color: '#0F172A',
                                    fontWeight: 700
                                }}>Data Preparation</h5>
                                <p style={{
                                    fontSize: '15px',
                                    marginBottom: '25px',
                                    lineHeight: 1.6,
                                    color: '#64748B'
                                }}>Connect, cleanse, and prepare data for data science, analytics, and AI projects at scale.</p>
                                <a href="#" className="rts-btn btn-primary with-arrow" style={{
                                    fontSize: '14px',
                                    padding: '12px 28px'
                                }}>Explore Capability <i className="fa-regular fa-arrow-up up-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
