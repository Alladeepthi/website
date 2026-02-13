import React from 'react';
import { Link } from 'react-router-dom';

export const HomeBlog: React.FC = () => {
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
                                <Link to="#" className="rts-btn btn-primary btn-border">View All Article</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt--10 g-5">
                    <div className="col-lg-6">
                        <div className="rts-single-blog-card-m">
                            <Link to="#" className="thumbnail">
                                <img src="/assets/images/blog/13.webp" alt="blog" />
                            </Link>
                            <div className="inner-content">
                                <div className="tag-wrapper">
                                    <span className="tag">2 October 2024</span>
                                    <span className="tag">James Henry</span>
                                </div>
                                <Link to="#">
                                    <h3 className="title">With Context Windows Expanding So Rapidly, Is RAG Obsolete?</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rts-single-blog-card-m">
                            <Link to="#" className="thumbnail">
                                <img src="/assets/images/blog/14.webp" alt="blog" />
                            </Link>
                            <div className="inner-content">
                                <div className="tag-wrapper">
                                    <span className="tag">19 October 2024</span>
                                    <span className="tag">James Henry</span>
                                </div>
                                <Link to="#">
                                    <h3 className="title">Custom Labeling and Quality Control With Free-Text Annotation</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
