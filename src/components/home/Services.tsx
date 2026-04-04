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
                    {servicesData.map((service, index) => {
                        const palettes = [
                            { color: '#2563EB', bg: '#EFF6FF' }, // Royal Blue
                            { color: '#334155', bg: '#F8FAFC' }, // Charcoal Slate
                            { color: '#6366F1', bg: '#EEF2FF' }, // Electric Indigo
                            { color: '#10B981', bg: '#ECFDF5' }, // Emerald Green
                            { color: '#0891B2', bg: '#ECFEFF' }, // Cyan
                            { color: '#8B5CF6', bg: '#F5F3FF' }, // Deep Purple
                            { color: '#0EA5E9', bg: '#F0F9FF' }, // Ocean Cerulean
                            { color: '#F97316', bg: '#FFF7ED' }  // Sunset Orange
                        ];
                        const palette = palettes[index % palettes.length];

                        return (
                            <div
                                className="col-lg-3 col-md-6"
                                key={service.id}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="single-service-wrapper-machine" style={{
                                    background: '#FFFFFF',
                                    borderRadius: '24px',
                                    border: '1px solid #F1F5F9',
                                    borderTop: `4px solid ${palette.color}`, // Signature Accent
                                    padding: '15px',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <Link to="/service-details" state={{ service }} className="thumbnail" style={{ display: 'block' }}>
                                        <div className="icon-wrapper" style={{
                                            height: '220px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#F8FAFC',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            padding: '20px',
                                            transition: 'all 0.4s ease'
                                        }}>
                                            <img
                                                src={`/assets/images/service/${service.icon}`}
                                                alt={service.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                                                }}
                                                className="service-img"
                                            />
                                        </div>
                                    </Link>
                                    <div className="content" style={{ padding: '20px 5px 10px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h5 className="title" style={{ marginBottom: '10px' }}>
                                            <Link to="/service-details" state={{ service }} style={{
                                                fontSize: '18.5px',
                                                fontWeight: 700,
                                                color: '#0F172A',
                                                lineHeight: 1.3,
                                                transition: 'color 0.3s ease'
                                            }} className="service-title-link">{service.title}</Link>
                                        </h5>
                                        <p style={{
                                            fontSize: '13px',
                                            color: '#64748B',
                                            lineHeight: 1.5,
                                            marginBottom: '20px',
                                            flexGrow: 1
                                        }}>{service.subtitle}</p>
                                        <Link
                                            to="/service-details"
                                            state={{ service }}
                                            className="learn-more-link"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '13px',
                                                fontWeight: 700,
                                                color: palette.color, // Signature color
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            View Solution <i className="fa-solid fa-arrow-right-long" style={{ fontSize: '12px' }}></i>
                                        </Link>
                                    </div>
                                    <style>{`
                                        .single-service-wrapper-machine:hover {
                                            transform: translateY(-10px) !important;
                                            box-shadow: 0 30px 60px ${palette.color}15 !important;
                                            border-color: ${palette.color}30 !important;
                                        }
                                        .single-service-wrapper-machine:hover .icon-wrapper {
                                            background-color: ${palette.bg} !important;
                                        }
                                        .single-service-wrapper-machine:hover .service-img {
                                            transform: scale(1.1) !important;
                                        }
                                        .single-service-wrapper-machine:hover .service-title-link {
                                            color: ${palette.color} !important;
                                        }
                                        .single-service-wrapper-machine:hover .learn-more-link {
                                            gap: 15px !important;
                                        }
                                    `}</style>
                                </div>
                            </div>
                        );
                    })}
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
            `}</style>
        </div>
    );
};
