import React, { useEffect } from 'react';

export const About: React.FC = () => {
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

    return (
        <main>
            {/* rts about-breadcrumb-area-start */}
            <div className="rts-about-breadcrumb-area demo-4 bg-none rts-section-gapTop pb--100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="rts-about-breadcrumb-content">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li className="active"><a href="#">About</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Empowering Businesses through Innovative Software Solutions</h1>
                                <p className="disc">Since our inception, we have been committed to delivering cutting-edge software solutions that drive innovation and success. From small startups to global enterprises we have partnered with clients across industries, helping them navigate complexities of the digital world with custom, scalable technology.</p>
                                <div className="author-area">
                                    <div className="stars-main-wrapper">
                                        <div className="wrapper">
                                            <img src="/assets/images/others/stars-02.svg" alt="stars" />
                                            <img src="/assets/images/others/star-02.svg" alt="stars" />
                                        </div>
                                        <p className="disc1">TrustScore 4.8 2k reviews</p>
                                    </div>
                                    <div className="author-wrapper">
                                        <div className="image">
                                            <img src="/assets/images/others/04.svg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="sign"><img src="/assets/images/others/sign-2.svg" alt="" /></div>
                                            <p>CEO of Digix</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rts-about-breadcrumb-image">
                                <img src="/assets/images/banner/breadcrumb-01.webp" width="520" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about-breadcrumb-area-end */}

            {/* rts mission areas start */}
            <div className="rts-mission-area demo-4">
                <div className="container">
                    <div className="section-inner">
                        <h2 className="title rts-text-anime-style-1">Our Mission</h2>
                        <p className="disc">To enable businesses of all sizes to harness the full potential of technology by delivering reliable, efficient, and scalable software solutions that create meaningful value and lasting impact.</p>
                    </div>
                </div>
            </div>
            {/* rts mission areas end */}

            {/* rts story areas start */}
            <div className="rts-story-area demo-4">
                <div className="container">
                    <div className="image-area">
                        <img src="/assets/images/about/10.webp" alt="" />
                    </div>
                    <div className="section-inner">
                        <h2 className="title rts-text-anime-style-1">Our Story</h2>
                        <p className="disc">Founded in 2006, Digix was established with a clear vision: to help businesses navigate the digital landscape with confidence and ease. Over the years, we’ve grown from a small startup to a trusted partner for clients across various industries, from finance and healthcare to retail and education. Our journey has been one of continuous learning and adaptation, allowing us to stay at the forefront of indu stry trends and technological advancements.</p>
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
                                    <h2 className="counter title"><span className="odometer" data-count="25">00</span>+</h2>
                                    <p className="disc2">Year IT Experience</p>
                                </div>
                            </div>
                            <div className="single-funfacts-area-counter-up-mission">
                                <div className="icon">
                                    <img src="/assets/images/about/icons/10.svg" alt="icons" />
                                </div>
                                <div className="content">
                                    <h2 className="counter title"><span className="odometer" data-count="23">00</span>K</h2>
                                    <p className="disc2">Wonderful Client</p>
                                </div>
                            </div>
                            <div className="single-funfacts-area-counter-up-mission">
                                <div className="icon">
                                    <img src="/assets/images/about/icons/11.svg" alt="icons" />
                                </div>
                                <div className="content">
                                    <h2 className="counter title"><span className="odometer" data-count="5">00</span>M</h2>
                                    <p className="disc2">Project Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts story areas end */}

            {/* rts team members area start */}
            <div className="rts-team-members rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <div className="title-left-wrapper">
                                    <h2 className="title rts-text-anime-style-1">Leadership Team</h2>
                                </div>
                                <div className="right-area">
                                    <p className="disc">Our success is driven by a dedicated team of IT professionals who bring their expertise, creativity, and passion to every project.</p>
                                    <a href="#" className="btn-line"><span>We are hiring</span> <i className="fa-solid fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-lg-12">
                            <div className="team-swiper-area">
                                <div className="swiper mySwiper-team-one">
                                    <div className="swiper-wrapper">
                                        {[
                                            { name: 'Daniel Brown', role: 'Chief Executive Officer', img: '01.webp' },
                                            { name: 'Christopher Henry', role: 'Chief Executive Officer', img: '02.webp' },
                                            { name: 'Marketing Director', role: 'Senior Developer', img: '03.webp' },
                                            { name: 'John Smith', role: 'Senior Developer', img: '04.webp' },
                                        ].map((member, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div className="single-team-style-one">
                                                    <div className="thumbnail">
                                                        <img src={`/assets/images/team/${member.img}`} alt="team" />
                                                    </div>
                                                    <div className="inner-content">
                                                        <h5 className="title">{member.name}</h5>
                                                        <span className="designation">{member.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
                                <div className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts team members area end */}

            {/* rts cta area start */}
            <div className="rts-cta-area rts-section-gapBottom">
                <div className="container">
                    <div className="cta-inner">
                        <div className="content-area">
                            <div className="title-left-wrapper">
                                <h2 className="title rts-text-anime-style-1">Our Successes Case Study</h2>
                            </div>
                            <div className="button-area">
                                <a href="#" className="rts-btn btn-primary">Get a Demo</a>
                                <a href="#" className="rts-btn btn-primary btn-border">Get Started Free</a>
                            </div>
                        </div>
                        <div className="image-area">
                            <img src="/assets/images/cta/02.webp" width="306" alt="" />
                            <img src="/assets/images/cta/03.webp" width="238" alt="" className="float-image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* rts cta area end */}
        </main>
    );
};
