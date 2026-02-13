import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const Services: React.FC = () => {
    return (
        <div className="rts-service-area" style={{
            background: '#FAFBFC',
            padding: '80px 0'
        }}>
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
                            }}>Our Capabilities</span>
                            <h2 className="title rts-text-anime-style-1" style={{
                                fontSize: '42px',
                                fontWeight: 800,
                                color: '#0F172A',
                                lineHeight: 1.2,
                                marginBottom: '15px'
                            }}>Full-Cycle Product Engineering</h2>
                            <p style={{
                                fontSize: '16px',
                                color: '#64748B',
                                maxWidth: '650px',
                                margin: '0 auto',
                                lineHeight: 1.5
                            }}>
                                End-to-end solutions from ideation to deployment, powered by cutting-edge technology
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {servicesData.map((service, index) => (
                        <div
                            className="col-lg-3 col-md-6"
                            key={service.id}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className="single-service-wrapper-machine">
                                <Link to="/service-details" state={{ service }} className="thumbnail">
                                    <div className="icon-wrapper" style={{
                                        height: '240px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '12px 12px 0 0',
                                        overflow: 'hidden',
                                        padding: '10px',
                                        transition: 'all 0.4s ease'
                                    }}>
                                        <img
                                            src={`/assets/images/service/${service.icon}`}
                                            alt={service.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                transition: 'transform 0.5s ease'
                                            }}
                                            className="service-img"
                                        />
                                    </div>
                                </Link>
                                <div className="content">
                                    <h5 className="title">
                                        <Link to="/service-details" state={{ service }}>{service.title}</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .single-service-wrapper-machine:hover .service-img {
                    transform: scale(1.1);
                }
                .single-service-wrapper-machine {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .single-service-wrapper-machine:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </div>
    );
};
