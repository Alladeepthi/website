import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const BlogDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogData.find(b => b.slug === slug);
    const [scrollContent, setScrollContent] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollContent(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!post) {
        return (
            <div style={{ padding: '150px 0', textAlign: 'center' }}>
                <h2>Article Not Found</h2>
                <Link to="/" className="rts-btn btn-primary mt-4">Back to Home</Link>
            </div>
        );
    }

    const relatedPosts = blogData.filter(b => b.id !== post.id).slice(0, 3);
    const primaryColor = '#3B82F6';
    const secondaryColor = '#64748B';
    const darkColor = '#0F172A';

    return (
        <main style={{ background: '#fff' }}>
            {/* Reading Progress Bar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollContent}%`,
                height: '4px',
                background: primaryColor,
                zIndex: 1000,
                transition: 'width 0.1s ease'
            }}></div>

            {/* Premium Header Section */}
            <div className="blog-hero-section" style={{
                padding: '120px 0 80px',
                background: `linear-gradient(135deg, ${darkColor} 0%, #1e293b 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Modern Tech Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.15,
                    backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            {/* Detailed Breadcrumbs */}
                            <div className="breadcrumb-nav" style={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                gap: '15px', 
                                marginBottom: '40px',
                                fontSize: '14px',
                                color: 'rgba(255,255,255,0.6)'
                            }}>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                                <span>/</span>
                                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</Link>
                                <span>/</span>
                                <span style={{ color: primaryColor, fontWeight: 600 }}>{post.category}</span>
                            </div>

                            <div className="text-center">
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{
                                        color: '#fff',
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        padding: '6px 16px',
                                        background: 'rgba(59, 130, 246, 0.15)',
                                        border: `1px solid ${primaryColor}`,
                                        borderRadius: '30px',
                                        backdropFilter: 'blur(5px)'
                                    }}>{post.category}</span>
                                </div>

                                <h1 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(28px, 6vw, 56px)',
                                    fontWeight: 900,
                                    lineHeight: '1.15',
                                    marginBottom: '40px',
                                    maxWidth: '1000px',
                                    margin: '0 auto 40px',
                                    letterSpacing: '-0.03em'
                                }}>{post.title}</h1>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '25px',
                                    padding: '15px 30px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '50px',
                                    width: 'fit-content',
                                    margin: '0 auto',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            background: primaryColor,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontWeight: 800,
                                            fontSize: '12px'
                                        }}>{post.author.charAt(0)}</div>
                                        <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>{post.author}</span>
                                    </div>
                                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}><i className="fa-regular fa-calendar" style={{ marginRight: '8px', color: primaryColor }}></i> {post.date}</span>
                                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}><i className="fa-regular fa-clock" style={{ marginRight: '8px', color: primaryColor }}></i> 5 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content-sidebar-container" style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="article-main">
                                <div style={{
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    marginBottom: '60px',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
                                    border: '8px solid #fff'
                                }}>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        style={{ width: '100%', height: 'auto', display: 'block' }} 
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000';
                                        }}
                                    />
                                </div>

                                <div className="article-prose" style={{
                                    fontSize: '19px',
                                    lineHeight: '1.9',
                                    color: '#475569',
                                    maxWidth: '740px',
                                    margin: '0 auto'
                                }}>
                                    <div 
                                        className="prose-content" 
                                        dangerouslySetInnerHTML={{ __html: post.content }} 
                                    />
                                    
                                    <div className="quote-box" style={{
                                        margin: '50px 0',
                                        padding: '50px',
                                        background: '#F8FAFC',
                                        borderRadius: '32px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        border: '1px solid #E2E8F0'
                                    }}>
                                        <i className="fa-solid fa-quote-left" style={{ 
                                            position: 'absolute', 
                                            top: '20px', 
                                            left: '30px', 
                                            fontSize: '40px', 
                                            color: '#3B82F6', 
                                            opacity: 0.1 
                                        }}></i>
                                        <p style={{
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            color: darkColor,
                                            fontStyle: 'italic',
                                            lineHeight: '1.5',
                                            margin: 0
                                        }}>
                                            "Engineering excellence is not just about writing code; it's about building systems that withstand the test of scale and time."
                                        </p>
                                    </div>

                                    {/* Author Bio Section */}
                                    <div className="author-section" style={{
                                        marginTop: '80px',
                                        paddingTop: '60px',
                                        borderTop: '2px solid #F1F5F9',
                                        display: 'flex',
                                        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                                        gap: '30px',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            background: `linear-gradient(135deg, ${primaryColor} 0%, #172554 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontSize: '48px',
                                            fontWeight: 900,
                                            flexShrink: 0,
                                            boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)'
                                        }}>{post.author.charAt(0)}</div>
                                        <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 800, color: primaryColor, textTransform: 'uppercase', letterSpacing: '1px' }}>About the Author</span>
                                            <h4 style={{ fontSize: '26px', fontWeight: 800, color: darkColor, margin: '5px 0 15px' }}>{post.author}</h4>
                                            <p style={{ margin: 0, fontSize: '16px' }}>
                                                Lead Engineer at NeuraltrixAI, focusing on high-throughput distributed systems and enterprise AI integration. 
                                                When not optimizing pipelines, {post.author.split(' ')[0]} contributes to open-source MLOps frameworks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <aside className="sticky-sidebar" style={{ position: 'sticky', top: '120px' }}>
                                {/* Related Reading */}
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '32px',
                                    padding: '40px',
                                    border: '1px solid #F1F5F9',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                    marginBottom: '40px'
                                }}>
                                    <h5 style={{ fontSize: '20px', fontWeight: 900, color: darkColor, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ width: '8px', height: '20px', background: primaryColor, borderRadius: '4px' }}></span>
                                        Related Hub
                                    </h5>
                                    <div style={{ display: 'grid', gap: '30px' }}>
                                        {relatedPosts.map((rel, i) => (
                                            <Link to={`/blog/${rel.slug}`} key={i} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }} className="related-link-group">
                                                <span style={{ fontSize: '11px', fontWeight: 800, color: primaryColor, textTransform: 'uppercase' }}>{rel.category}</span>
                                                <h6 style={{ 
                                                    fontSize: '17px', 
                                                    fontWeight: 700, 
                                                    color: darkColor, 
                                                    lineHeight: '1.4',
                                                    margin: 0,
                                                    transition: 'all 0.3s'
                                                }} className="rel-title">{rel.title}</h6>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: secondaryColor }}>
                                                    <i className="fa-regular fa-clock"></i> 5 min read
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Premium Support Box */}
                                <div style={{
                                    background: darkColor,
                                    borderRadius: '32px',
                                    padding: '50px 40px',
                                    textAlign: 'center',
                                    color: '#fff',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-50px',
                                        right: '-50px',
                                        width: '150px',
                                        height: '150px',
                                        background: 'rgba(59, 130, 246, 0.2)',
                                        borderRadius: '50%',
                                        filter: 'blur(30px)'
                                    }}></div>
                                    <h4 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '20px', position: 'relative' }}>Ready to Scale?</h4>
                                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', lineHeight: '1.6', position: 'relative' }}>
                                        Implement the architecture discussed in this article with our expert engineering team.
                                    </p>
                                    <Link to="/contact" className="rts-btn btn-primary" style={{
                                        width: '100%',
                                        padding: '18px',
                                        borderRadius: '16px',
                                        fontSize: '16px',
                                        fontWeight: 800
                                    }}>Get Started <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i></Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Style Block */}
            <style>{`
                .article-prose h3 {
                    font-size: 32px;
                    font-weight: 900;
                    color: ${darkColor};
                    margin: 60px 0 30px;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                }
                .article-prose h3:first-of-type {
                    margin-top: 0;
                }
                .related-link-group:hover .rel-title {
                    color: ${primaryColor} !important;
                    transform: translateX(5px);
                }
                .breadcrumb-nav a:hover {
                    color: ${primaryColor} !important;
                }
                @media (max-width: 991px) {
                    .article-prose {
                        padding: 0 15px;
                    }
                }
            `}</style>
        </main>
    );
};

export default BlogDetails;
