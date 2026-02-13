import React from 'react';

export const Story: React.FC = () => {
    return (
        <div className="rts-story-area demo-4">
            <div className="container">
                <div className="image-area">
                    <img src="/assets/images/about/10.webp" alt="" />
                </div>
                <div className="section-inner">
                    <h2 className="title rts-text-anime-style-1">Our Story</h2>
                    <p className="disc">
                        Founded in 2006, Digix was established with a clear vision: to help businesses navigate the digital landscape with confidence and ease. Over the years, we’ve grown from a small startup to a trusted partner for clients across various industries, from finance and healthcare to retail and education. Our journey has been one of continuous learning and adaptation, allowing us to stay at the forefront of industry trends and technological advancements.
                    </p>
                </div>
                <div className="bottom-image-area">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="image-one"><img src="/assets/images/about/11.webp" alt="" /></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="image-two"><img src="/assets/images/about/12.webp" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="section-inner bottom">
                    <h2 className="title rts-text-anime-style-1">Number</h2>
                    <div className="funfacts-area-counter-up-mission">
                        <div className="single-funfacts-area-counter-up-mission">
                            <div className="icon">
                                <img src="/assets/images/about/icons/09.svg" alt="icons" />
                            </div>
                            <div className="content">
                                <h2 className="counter title"><span className="odometer" data-count="25">25</span>+</h2>
                                <p className="disc2">Year IT Experience</p>
                            </div>
                        </div>
                        <div className="single-funfacts-area-counter-up-mission">
                            <div className="icon">
                                <img src="/assets/images/about/icons/10.svg" alt="icons" />
                            </div>
                            <div className="content">
                                <h2 className="counter title"><span className="odometer" data-count="23">23</span>K</h2>
                                <p className="disc2">Wonderful Client</p>
                            </div>
                        </div>
                        <div className="single-funfacts-area-counter-up-mission">
                            <div className="icon">
                                <img src="/assets/images/about/icons/11.svg" alt="icons" />
                            </div>
                            <div className="content">
                                <h2 className="counter title"><span className="odometer" data-count="5">5</span>M</h2>
                                <p className="disc2">Project Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
