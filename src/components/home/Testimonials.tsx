import React from 'react';

export const Testimonials: React.FC = () => {
    return (
        <div className="rts-testimonials-area" style={{ paddingBottom: '60px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-area-machine-wrapper">
                            <div className="single-testimonials-area" style={{
                                display: 'flex',
                                gap: '50px',
                                alignItems: 'center',
                                background: '#fff',
                                padding: '50px',
                                borderRadius: '20px',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)'
                            }}>
                                <div className="thumbnail" style={{
                                    flexShrink: 0,
                                    width: '280px',
                                    height: '350px',
                                    overflow: 'hidden',
                                    borderRadius: '16px'
                                }}>
                                    <img src="/assets/images/testimonials/10.webp" alt="testimonials" style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} />
                                </div>
                                <div className="content" style={{ flex: 1 }}>
                                    <div className="top-head" style={{ marginBottom: '25px' }}>
                                        <span style={{
                                            color: '#3B82F6',
                                            fontWeight: 700,
                                            fontSize: '13px',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            marginBottom: '12px'
                                        }}>Client Success</span>
                                        <h2 className="title" style={{
                                            fontSize: '38px',
                                            fontWeight: 800,
                                            lineHeight: 1.2,
                                            color: '#0F172A',
                                            marginBottom: 0
                                        }}>Trusted by Industry Leaders</h2>
                                    </div>
                                    <div className="body">
                                        <img src="/assets/images/testimonials/quote2.svg" alt="" style={{
                                            width: '50px',
                                            height: '50px',
                                            marginBottom: '20px',
                                            opacity: 0.3
                                        }} />
                                        <p className="disc" style={{
                                            fontSize: '18px',
                                            lineHeight: 1.7,
                                            color: '#475569',
                                            marginBottom: '30px',
                                            fontStyle: 'italic'
                                        }}>
                                            "NeuraltrixAI didn't just build us a platform; they re-engineered our entire data strategy. The predictive models they deployed have optimized our supply chain, reducing waste by 25% in the first quarter."
                                        </p>
                                        <div className="autohr-area">
                                            <div className="avatar-area" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px'
                                            }}>
                                                <img src="/assets/images/testimonials/11.webp" alt="avatar" style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover'
                                                }} />
                                                <div className="inner">
                                                    <h5 className="title" style={{
                                                        fontSize: '18px',
                                                        fontWeight: 700,
                                                        color: '#0F172A',
                                                        marginBottom: '4px'
                                                    }}>John Smith</h5>
                                                    <p style={{
                                                        fontSize: '14px',
                                                        color: '#64748B',
                                                        margin: 0
                                                    }}>CEO of Tech Innovations Inc.</p>
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
