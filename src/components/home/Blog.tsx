import React from 'react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
    return (
        <div className="rts-blog-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <div className="title-left-wrapper">
                                <h2 className="title rts-text-anime-style-1">Our Article</h2>
                                <p>our success is reflected in the satisfaction of our clients</p>
                            </div>
                            <div className="right-area">
                                <Link to="/blog" className="rts-btn btn-primary btn-border">View All Article</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt--10 g-5">
                    {[
                        { img: '13.webp', date: '2 October 2024', author: 'James Henry', title: 'With Context Windows Expanding So Rapidly, Is RAG Obsolete?' },
                        { img: '14.webp', date: '19 October 2024', author: 'James Henry', title: 'Custom Labeling and Quality Control With Free-Text Annotation' }
                    ].map((blog, i) => (
                        <div className="col-lg-6" key={i}>
                            <div className="rts-single-blog-card-m">
                                <Link to="/blog-details" className="thumbnail">
                                    <img src={`/assets/images/blog/${blog.img}`} alt="blog" />
                                </Link>
                                <div className="inner-content">
                                    <div className="tag-wrapper">
                                        <span className="tag">{blog.date}</span>
                                        <span className="tag">{blog.author}</span>
                                    </div>
                                    <Link to="/blog-details">
                                        <h3 className="title">{blog.title}</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
