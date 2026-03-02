import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    const blogPosts = [
        { id: 1, title: 'Scaling Microservices: Best Practices for High Throughput', category: 'Infrastructure', img: '/assets/images/blog/blog.png', author: 'James Henry', date: '2 October 2024' },
        { id: 2, title: 'Architecting Resilient Data Pipelines for Real-Time Analytics', category: 'Data Engineering', img: '/assets/images/blog/webinar.png', author: 'Engineering Team', date: '19 October 2024' },
        { id: 3, title: 'Automating MLOps: From Experimentation to Production', category: 'Machine Learning', img: '/assets/images/blog/blog-03.jpg', author: 'AI Research', date: '25 October 2024' },
        { id: 4, title: 'The Future of GenAI: Integrating LLMs into Enterprise Workflows', category: 'Generative AI', img: '/assets/images/blog/blog-04.jpg', author: 'Sarah Jenkins', date: '1 November 2024' },
    ];

    return (
        <main style={{ backgroundColor: '#F9FAFB' }}>
            {/* Premium Breadcrumb Area */}
            <div className="rts-breadcrumb-area breadcrumb-bg-1 bg_image" style={{ 
                padding: '120px 0 80px',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area-inner text-center">
                                <span className="pre" style={{
                                    color: '#3B82F6',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    display: 'block',
                                    marginBottom: '15px'
                                }}>Knowledge Hub</span>
                                <h1 className="title" style={{ 
                                    color: '#FFFFFF', 
                                    fontSize: '56px', 
                                    fontWeight: 800,
                                    marginBottom: '20px',
                                    lineHeight: '1.1'
                                }}>Engineering <span style={{ color: '#3B82F6' }}>Insights</span></h1>
                                <ul style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    gap: '15px', 
                                    listStyle: 'none', 
                                    padding: 0,
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '15px'
                                }}>
                                    <li><Link to="/" style={{ color: 'inherit' }}>Home</Link></li>
                                    <li><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', marginTop: '4px' }}></i></li>
                                    <li style={{ color: '#3B82F6', fontWeight: 600 }}>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="rts-blog-list-area rts-section-gapBottom" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-8 col-lg-8">
                            <div className="rts-blog-list-wrapper" style={{ display: 'grid', gap: '40px' }}>
                                {blogPosts.map((post) => (
                                    <div className="blog-card-premium" key={post.id} style={{
                                        background: '#FFFFFF',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                        border: '1px solid #F1F5F9',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        display: 'flex',
                                        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                                    }}>
                                        <div className="thumbnail-area" style={{ 
                                            flex: '0 0 320px', 
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: window.innerWidth < 768 ? '240px' : 'auto'
                                        }}>
                                            <Link to="/blog">
                                                <img src={post.img} alt={post.title} style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.6s ease'
                                                }} className="card-img" />
                                            </Link>
                                            <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: '20px',
                                                background: '#3B82F6',
                                                color: '#FFFFFF',
                                                padding: '6px 14px',
                                                borderRadius: '30px',
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                zIndex: 2
                                            }}>
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="content-area" style={{ padding: '35px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', color: '#64748B', fontSize: '13px' }}>
                                                <span><i className="fa-regular fa-user" style={{ color: '#3B82F6', marginRight: '6px' }}></i> {post.author}</span>
                                                <span><i className="fa-regular fa-calendar" style={{ color: '#3B82F6', marginRight: '6px' }}></i> {post.date}</span>
                                            </div>
                                            <Link to="/blog" style={{ textDecoration: 'none' }}>
                                                <h3 style={{
                                                    fontSize: '24px',
                                                    fontWeight: 700,
                                                    color: '#0F172A',
                                                    lineHeight: '1.4',
                                                    marginBottom: '15px',
                                                    transition: 'color 0.3s ease'
                                                }} className="post-title-hover">
                                                    {post.title}
                                                </h3>
                                            </Link>
                                            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                                                Explore our in-depth analysis of {post.title.toLowerCase()} and discover how modern organizations are leveraging these technologies...
                                            </p>
                                            <Link to="/blog" className="read-more-btn" style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                color: '#0F172A',
                                                fontWeight: 700,
                                                fontSize: '14px',
                                                textDecoration: 'none',
                                                transition: 'gap 0.3s ease'
                                            }}>
                                                Read Full Article <i className="fa-solid fa-arrow-right" style={{ color: '#3B82F6' }}></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div style={{ position: 'sticky', top: '100px' }}>
                                {/* Search */}
                                <div style={{ 
                                    background: '#FFFFFF', 
                                    padding: '30px', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    marginBottom: '30px',
                                    border: '1px solid #F1F5F9'
                                }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#0F172A' }}>Search</h4>
                                    <div style={{ position: 'relative' }}>
                                        <input type="text" placeholder="Type keywords..." style={{
                                            width: '100%',
                                            padding: '14px 20px',
                                            borderRadius: '12px',
                                            border: '1px solid #E2E8F0',
                                            fontSize: '14px',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease'
                                        }} className="sidebar-input" />
                                        <button style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: '#3B82F6',
                                            color: '#fff',
                                            border: 'none',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        }}>
                                            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '13px' }}></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Categories */}
                                <div style={{ 
                                    background: '#FFFFFF', 
                                    padding: '30px', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    marginBottom: '30px',
                                    border: '1px solid #F1F5F9'
                                }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#0F172A' }}>Categories</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {['Cloud Computing', 'Data Engineering', 'Machine Learning', 'AI Research', 'Cybersecurity'].map((cat, i) => (
                                            <Link key={i} to="/blog" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '12px 16px',
                                                background: '#F8FAFC',
                                                borderRadius: '12px',
                                                color: '#475569',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                transition: 'all 0.3s ease'
                                            }} className="category-link">
                                                {cat}
                                                <span style={{ 
                                                    background: '#E2E8F0', 
                                                    color: '#64748B', 
                                                    fontSize: '11px', 
                                                    padding: '2px 8px', 
                                                    borderRadius: '20px'
                                                }}>{Math.floor(Math.random() * 15) + 5}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular tags */}
                                <div style={{ 
                                    background: '#FFFFFF', 
                                    padding: '30px', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    border: '1px solid #F1F5F9'
                                }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: '#0F172A' }}>Popular Tags</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {['Kubernetes', 'Python', 'DevOps', 'LLM', 'Snowflake', 'DVC', 'Docker', 'MLOps'].map((tag, i) => (
                                            <Link key={i} to="/blog" style={{
                                                padding: '8px 16px',
                                                background: '#F1F5F9',
                                                borderRadius: '30px',
                                                fontSize: '13px',
                                                color: '#64748B',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }} className="tag-link">
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .blog-card-premium:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
                    transform: translateY(-5px);
                }
                .blog-card-premium:hover .card-img {
                    transform: scale(1.1);
                }
                .post-title-hover:hover {
                    color: #3B82F6 !important;
                }
                .read-more-btn:hover {
                    gap: 15px !important;
                    color: #3B82F6 !important;
                }
                .sidebar-input:focus {
                    border-color: #3B82F6 !important;
                }
                .category-link:hover {
                    background: #3B82F6 !important;
                    color: #FFFFFF !important;
                }
                .category-link:hover span {
                    background: rgba(255,255,255,0.2) !important;
                    color: #FFFFFF !important;
                }
                .tag-link:hover {
                    background: #3B82F6 !important;
                    color: #FFFFFF !important;
                }
            `}</style>
        </main>
    );
};
