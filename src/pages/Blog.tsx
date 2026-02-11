import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        return () => {
            document.body.className = "";
        };
    }, []);

    const blogPosts = [
        { id: 1, title: 'WordPress vs Storyblok: Which is the best CMS for fast-growing companies?', category: 'Development', img: '/assets/images/blog/01.webp' },
        { id: 2, title: 'WordPress vs Storyblok: Which is the best CMS for fast-growing companies?', category: 'Development', img: '/assets/images/blog/02.webp' },
        { id: 3, title: 'WordPress vs Storyblok: Which is the best CMS for fast-growing companies?', category: 'Development', img: '/assets/images/blog/03.webp' },
        { id: 4, title: 'WordPress vs Storyblok: Which is the best CMS for fast-growing companies?', category: 'Development', img: '/assets/images/blog/04.webp' },
    ];

    return (
        <main>
            {/* rts service-details-breadcrumb-area-start */}
            <div className="rts-service-details-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><a href="#" className="active">Blog</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Blog</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts blog list area start */}
            <div className="rts-blog-list-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="rts-blog-list-wrapper">
                                {blogPosts.map((post) => (
                                    <div className="single-blog-style-one" key={post.id}>
                                        <a href="#" className="thumbnail-blog">
                                            <img src={post.img} alt="blog" />
                                        </a>
                                        <div className="inner-content-blog">
                                            <span>{post.category}</span>
                                            <a href="#">
                                                <h5 className="title">{post.title}</h5>
                                            </a>
                                            <a href="#" className="btn-line"><span>Learn More</span> <i className="fa-solid fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12 pl--50 pl_md--10 pl_sm--10 mt_md--50 mt_sm--50">
                            {/* search */}
                            <div className="rts-single-wized search">
                                <div className="wized-header"><h5 className="title">Search Here</h5></div>
                                <div className="wized-body">
                                    <div className="rts-search-wrapper">
                                        <input className="Search" type="text" placeholder="Enter Keyword" />
                                        <button><i className="fal fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* categories */}
                            <div className="rts-single-wized Categories">
                                <div className="wized-header"><h5 className="title">Categories</h5></div>
                                <div className="wized-body">
                                    {['Business Solution', 'Strategy Growth', 'Finance Solution', 'Investment Policy', 'Tax Managment'].map((cat, i) => (
                                        <ul className="single-categories" key={i}>
                                            <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                            {/* recent posts */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
                                <div className="wized-body">
                                    {[1, 2, 3].map((post, i) => (
                                        <div className="recent-post-single" key={i}>
                                            <div className="thumbnail">
                                                <a href="#"><img src={`/assets/images/blog/sm/0${post}.jpg`} alt="Blog_post" /></a>
                                            </div>
                                            <div className="content-area">
                                                <div className="user"><i className="fal fa-clock"></i><span>15 Jan, 2023</span></div>
                                                <a className="post-title" href="#"><h6 className="title">We would love to share a similar experience</h6></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* tags */}
                            <div className="rts-single-wized">
                                <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        {['Services', 'Business', 'Growth', 'Finance', 'UI/UX Design', 'Solution', 'Speed', 'Strategy', 'Technology'].map((tag, i) => (
                                            <a href="#" key={i}>{tag}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
