import React from 'react';
import { Link } from 'react-router-dom';

export const HomeBlog: React.FC = () => {
    return (
        <div className="rts-blog-area" style={{ padding: '60px 0', background: '#FAFBFC' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between" style={{ marginBottom: '40px' }}>
                            <div className="title-left-wrapper">
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '42px',
                                    fontWeight: 800,
                                    marginBottom: '10px',
                                    color: '#0F172A'
                                }}>Engineering Insights</h2>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#64748B',
                                    margin: 0
                                }}>Latest thoughts on system architecture, data engineering, and automation.</p>
                            </div>
                            <div className="right-area">
                                <Link to="#" className="rts-btn btn-primary btn-border">View All Article</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="rts-single-blog-card-m" style={{
                            background: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.4s ease',
                            border: '1px solid #F1F5F9',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Link to="#" className="thumbnail" style={{
                                display: 'block',
                                height: '240px',
                                overflow: 'hidden',
                                position: 'relative',
                                background: '#F8FAFC',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src="/assets/images/blog/blog.png" alt="blog" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: 'transform 0.4s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <div className="inner-content" style={{ padding: '30px', flex: 1 }}>
                                <div className="tag-wrapper" style={{
                                    marginBottom: '15px',
                                    display: 'flex',
                                    gap: '15px',
                                    flexWrap: 'wrap'
                                }}>
                                    <span className="tag" style={{
                                        fontSize: '13px',
                                        color: '#64748B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <i className="fa-regular fa-calendar" style={{ fontSize: '12px' }}></i>
                                        2 October 2024
                                    </span>
                                    <span className="tag" style={{
                                        fontSize: '13px',
                                        color: '#64748B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <i className="fa-regular fa-user" style={{ fontSize: '12px' }}></i>
                                        James Henry
                                    </span>
                                </div>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <h3 className="title" style={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: '#0F172A',
                                        lineHeight: 1.4,
                                        margin: 0,
                                        transition: 'color 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                                    >Scaling Microservices: Best Practices for High Throughput</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rts-single-blog-card-m" style={{
                            background: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.4s ease',
                            border: '1px solid #F1F5F9',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Link to="#" className="thumbnail" style={{
                                display: 'block',
                                height: '240px',
                                overflow: 'hidden',
                                position: 'relative',
                                background: '#F8FAFC',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src="/assets/images/blog/webinar.png" alt="blog" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: 'transform 0.4s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <div className="inner-content" style={{ padding: '30px', flex: 1 }}>
                                <div className="tag-wrapper" style={{
                                    marginBottom: '15px',
                                    display: 'flex',
                                    gap: '15px',
                                    flexWrap: 'wrap'
                                }}>
                                    <span className="tag" style={{
                                        fontSize: '13px',
                                        color: '#64748B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <i className="fa-regular fa-calendar" style={{ fontSize: '12px' }}></i>
                                        19 October 2024
                                    </span>
                                    <span className="tag" style={{
                                        fontSize: '13px',
                                        color: '#64748B',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <i className="fa-regular fa-user" style={{ fontSize: '12px' }}></i>
                                        Engineering Team
                                    </span>
                                </div>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <h3 className="title" style={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: '#0F172A',
                                        lineHeight: 1.4,
                                        margin: 0,
                                        transition: 'color 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                                    >Architecting Resilient Data Pipelines for Real-Time Analytics</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
