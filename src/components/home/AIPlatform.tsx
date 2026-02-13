import React, { useEffect, useRef } from 'react';

export const AIPlatform: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('.ai-reveal-item');
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('reveal');
                        }, index * 200); // Staggered delay
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="rts-ai-platform-area" ref={sectionRef} style={{ padding: '80px 0', background: '#fff' }}>
            <div className="container">
                {/* Top Banner - Sequential Reveal */}
                <div className="row mb-5 ai-reveal-item">
                    <div className="col-lg-12">
                        <div style={{
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            borderRadius: '24px',
                            padding: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 20px 50px rgba(59, 130, 246, 0.15)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ maxWidth: '550px', zIndex: 2 }}>
                                <h3 style={{
                                    fontSize: '42px',
                                    marginBottom: '20px',
                                    lineHeight: 1.1,
                                    color: '#fff',
                                    fontWeight: 800
                                }}>The Universal AI Platform</h3>
                                <p style={{
                                    fontSize: '18px',
                                    marginBottom: '30px',
                                    lineHeight: 1.6,
                                    color: 'rgba(255,255,255,0.9)'
                                }}>Enterprise-grade infrastructure for scaling machine learning and data engineering workloads across multi-cloud environments.</p>
                                <a href="#" className="rts-btn btn-primary" style={{
                                    background: '#fff',
                                    color: '#1E3A8A',
                                    border: 'none',
                                    fontWeight: 700,
                                    padding: '15px 35px'
                                }}>Explore Capability</a>
                            </div>
                            <div style={{
                                maxWidth: '320px',
                                zIndex: 2
                            }} className="banner-visual">
                                <img src="/assets/images/why-choose/innovation.png" alt="" style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards - Staggered Reveal */}
                <div className="row g-5">
                    <div className="col-lg-6 ai-reveal-item">
                        <div className="ai-platform-card" style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '50px 40px',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                            transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                            height: '100%',
                            border: '1px solid #F1F5F9',
                            textAlign: 'center'
                        }}>
                            <div className="icon-badge" style={{
                                width: '130px',
                                height: '130px',
                                margin: '0 auto 35px',
                                background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E7FF 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '25px',
                                transition: 'all 0.5s ease'
                            }}>
                                <img src="/assets/images/ai/cloud.png" alt="ai" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }} />
                            </div>
                            <h5 style={{
                                fontSize: '28px',
                                marginBottom: '18px',
                                color: '#0F172A',
                                fontWeight: 800
                            }}>Machine Learning</h5>
                            <p style={{
                                fontSize: '16px',
                                marginBottom: '30px',
                                lineHeight: 1.7,
                                color: '#64748B'
                            }}>Build and evaluate advanced machine learning models using AutoML and the latest AI techniques with zero infrastructure management.</p>
                            <a href="#" className="rts-btn btn-primary with-arrow">Explore Capability <i className="fa-regular fa-arrow-up up-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 ai-reveal-item">
                        <div className="ai-platform-card" style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '50px 40px',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                            transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                            height: '100%',
                            border: '1px solid #F1F5F9',
                            textAlign: 'center'
                        }}>
                            <div className="icon-badge" style={{
                                width: '130px',
                                height: '130px',
                                margin: '0 auto 35px',
                                background: 'linear-gradient(135deg, #EEF2FF 0%, #DDD6FE 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '25px',
                                transition: 'all 0.5s ease'
                            }}>
                                <img src="/assets/images/ai/programming.png" alt="ai" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }} />
                            </div>
                            <h5 style={{
                                fontSize: '28px',
                                marginBottom: '18px',
                                color: '#0F172A',
                                fontWeight: 800
                            }}>Data Preparation</h5>
                            <p style={{
                                fontSize: '16px',
                                marginBottom: '30px',
                                lineHeight: 1.7,
                                color: '#64748B'
                            }}>Professional data pipelines to connect, cleanse, and prepare enterprise data for predictive analytics and generative AI projects.</p>
                            <a href="#" className="rts-btn btn-primary with-arrow">Explore Capability <i className="fa-regular fa-arrow-up up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ai-reveal-item {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .ai-reveal-item.reveal {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .ai-platform-card:hover {
                    transform: translateY(-12px) !important;
                    box-shadow: 0 30px 60px rgba(59, 130, 246, 0.15) !important;
                    border-color: #3B82F6 !important;
                }
                
                .ai-platform-card:hover .icon-badge {
                    transform: scale(1.1) rotate(3deg);
                    background: #EEF2FF !important;
                }
                
                .banner-visual img {
                    animation: floatBanner 4s ease-in-out infinite;
                }
                
                @keyframes floatBanner {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                @media (max-width: 991px) {
                    .ai-reveal-item .row > div {
                        padding: 40px !important;
                    }
                    .ai-reveal-item h3 {
                        font-size: 32px !important;
                    }
                }
            ` }} />
        </div>
    );
};
