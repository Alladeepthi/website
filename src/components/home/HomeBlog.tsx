import React from 'react';
import { Link } from 'react-router-dom';

import { blogData } from '../../data/blogData';

export const HomeBlog: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(3);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 1200) setItemsPerPage(2);
            else setItemsPerPage(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < blogData.length - itemsPerPage) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="rts-blog-area" style={{ padding: '80px 0', background: '#FAFBFC' }}>
            <div className="container">
                <div className="row mb-5 align-items-end">
                    <div className="col-lg-8">
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
                    </div>
                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    border: '1px solid #E2E8F0',
                                    background: currentIndex === 0 ? '#F1F5F9' : '#fff',
                                    color: currentIndex === 0 ? '#94A3B8' : '#3B82F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '18px'
                                }}
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= blogData.length - itemsPerPage}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    border: '1px solid #E2E8F0',
                                    background: currentIndex >= blogData.length - itemsPerPage ? '#F1F5F9' : '#fff',
                                    color: currentIndex >= blogData.length - itemsPerPage ? '#94A3B8' : '#3B82F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex >= blogData.length - itemsPerPage ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '18px'
                                }}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ overflow: 'hidden', margin: '-15px', padding: '15px' }}>
                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    }}>
                        {blogData.map((blog, idx) => (
                            <div key={idx} style={{
                                flex: `0 0 ${100 / itemsPerPage}%`,
                                padding: '0 15px',
                                boxSizing: 'border-box'
                            }}>
                                <div className="rts-single-blog-card-m" style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                    transition: 'all 0.4s ease',
                                    border: '1px solid #F1F5F9',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Link to={`/blog/${blog.slug}`} className="thumbnail" style={{
                                        display: 'block',
                                        height: '220px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        background: '#F8FAFC'
                                    }}>
                                        <img src={blog.image} alt="blog" style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            // Handle missing images gracefully
                                            onError={(e) => {
                                                e.currentTarget.src = "/assets/images/blog/blog.png";
                                            }}
                                        />
                                    </Link>
                                    <div className="inner-content" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="tag-wrapper" style={{
                                            marginBottom: '12px',
                                            display: 'flex',
                                            gap: '15px',
                                            flexWrap: 'wrap'
                                        }}>
                                            <span className="tag" style={{
                                                fontSize: '13px',
                                                color: '#64748B',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <i className="fa-regular fa-calendar" style={{ fontSize: '13px', color: '#94A3B8' }}></i>
                                                {blog.date}
                                            </span>
                                            <span className="tag" style={{
                                                fontSize: '13px',
                                                color: '#64748B',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <i className="fa-regular fa-user" style={{ fontSize: '13px', color: '#94A3B8' }}></i>
                                                {blog.author}
                                            </span>
                                        </div>
                                        <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none', marginBottom: 'auto' }}>
                                            <h3 className="title" style={{
                                                fontSize: '20px',
                                                fontWeight: 700,
                                                color: '#0F172A',
                                                lineHeight: 1.4,
                                                margin: 0,
                                                transition: 'color 0.3s ease'
                                            }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
                                            >{blog.title}</h3>
                                        </Link>
                                        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #F1F5F9' }}>
                                            <Link to={`/blog/${blog.slug}`} style={{
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                color: '#3B82F6',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                textDecoration: 'none'
                                            }}>
                                                Read Article <i className="fa-regular fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
