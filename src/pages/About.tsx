import React, { useEffect } from 'react';

export const About: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";


        // Add modern styles
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }

            main {
                background: radial-gradient(circle at 10% 20%, rgba(0, 50, 100, 0.03) 0%, transparent 40%),
                            radial-gradient(circle at 90% 80%, rgba(100, 0, 100, 0.03) 0%, transparent 40%);
                position: relative;
            }

            .modern-container { perspective: 1000px; }
            
            .modern-card {
                background: rgba(255, 255, 255, 0.02);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-top: 1px solid rgba(255, 255, 255, 0.15);
                border-left: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 32px;
                padding: 40px;
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                position: relative;
                overflow: hidden;
                animation: fadeInUp 1s ease-out forwards;
            }

            .modern-card:hover {
                transform: translateY(-8px);
                background: rgba(255, 255, 255, 0.05);
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
                border-color: rgba(255, 255, 255, 0.2);
            }

            /* Image Height Fix & Modern Styling */
            .modern-image-wrapper {
                border-radius: 24px;
                overflow: hidden;
                height: 400px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                transition: transform 0.5s ease;
            }
            .modern-image-wrapper img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.8s ease;
            }
            .modern-image-wrapper:hover {
                transform: translateY(-5px);
            }
            .modern-image-wrapper:hover img {
                transform: scale(1.05);
            }

            /* Stats Cards */
            .stat-card {
                background: rgba(255, 255, 255, 0.04);
                padding: 40px 30px;
                border-radius: 24px;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0.05);
                transition: all 0.4s ease;
                backdrop-filter: blur(10px);
            }
            .stat-card:hover {
                background: rgba(255, 255, 255, 0.08);
                transform: translateY(-5px) scale(1.03);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }

            .team-card {
                padding: 0;
                border-radius: 28px;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .team-card:hover {
                transform: translateY(-12px);
                box-shadow: 0 40px 80px rgba(0,0,0,0.25);
                border-color: rgba(255,255,255,0.2);
            }

            .team-card .thumbnail {
                overflow: hidden;
                border-radius: 28px 28px 0 0;
                position: relative;
            }
            
            .team-card .thumbnail::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                opacity: 0.6;
                transition: opacity 0.3s;
            }
            
            .team-card:hover .thumbnail::after {
                opacity: 0.8;
            }

            .team-card img {
                transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                width: 100%;
                display: block;
            }

            .team-card:hover img {
                transform: scale(1.15);
            }

            .team-card .inner-content {
                padding: 25px;
                text-align: center;
                background: rgba(255,255,255,0.02);
                backdrop-filter: blur(10px);
                border-top: 1px solid rgba(255,255,255,0.05);
            }
            
            .team-card .title {
                background: linear-gradient(to right, #ffffff, #a8b2d1);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 800;
                font-size: 1.25rem;
                margin-bottom: 8px;
            }
            
            .team-card .designation {
                font-size: 0.9rem;
                opacity: 0.8;
                color: #ccc;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.body.className = "";

            document.head.removeChild(style);
        };
    }, []);

    return (
        <main>
            {/* rts about-breadcrumb-area-start */}
            <div className="rts-about-breadcrumb-area demo-4 bg-none rts-section-gapTop pb--100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="rts-about-breadcrumb-content modern-container">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li className="active"><a href="#">About</a></li>
                                </ul>
                                <div className="modern-card">
                                    <h1 className="title rts-text-anime-style-1">NeuralTrix AI - Pioneering the Future of Intelligence</h1>
                                    <p className="disc">
                                        NeuralTrix AI - IT Corporation Private Limited is a premier AI solutions provider, incorporated in 2026.
                                        We specialize in delivering end-to-end AI ecosystems, LLM solutions, and engineering automation.
                                        Our mission is to democratize advanced AI for businesses of all sizes, ensuring ethical and intuitive technology that enhances human potential.
                                    </p>
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
                                                <p>Founder & CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rts-about-breadcrumb-image">
                                <img src="/assets/images/about/storyset_hero.svg" width="520" alt="NeuralTrix AI Innovation" style={{ maxWidth: '350px', width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about-breadcrumb-area-end */}

            {/* rts mission areas start */}
            <div className="rts-mission-area demo-4">
                <div className="container">
                    <div className="section-inner modern-card">
                        <h2 className="title rts-text-anime-style-1">Our Mission</h2>
                        <p className="disc">To enable businesses of all sizes to harness the full potential of technology by delivering reliable, efficient, and scalable software solutions that create meaningful value and lasting impact. We strive to build next-generation AI systems that empower organizations through actionable insights.</p>
                    </div>
                </div>
            </div>
            {/* rts mission areas end */}

            {/* rts story areas start */}
            <div className="rts-story-area demo-4">
                <div className="container">
                    <div className="image-area">
                        <img src="/assets/images/about/storyset_story.svg" alt="Company Timeline" style={{ maxWidth: '500px', width: '100%', height: 'auto', margin: '0 auto', display: 'block' }} />
                    </div>
                    <div className="section-inner modern-card">
                        <h2 className="title rts-text-anime-style-1">Our Story</h2>
                        <p className="disc">
                            Established in 2026 in Andhra Pradesh, India, NeuralTrix AI was founded with a clear vision: to bridge the gap between complex AI technologies and practical business applications.
                            From our headquarters, we serve a global clientele, offering cutting-edge services in AI & LLM Solutions, Engineering & Automation, and Data & Cloud Services.
                            Our philosophy is rooted in creating ethical, intuitive AI that drives decision-making and innovation.
                        </p>
                    </div>
                    <div className="bottom-image-area">
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="modern-image-wrapper">
                                    <img src="/assets/images/about/storyset_impact.svg" alt="Business Impact" style={{ maxWidth: '280px', width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="modern-image-wrapper">
                                    <img src="/assets/images/about/storyset_team.svg" alt="Team Collaboration" style={{ maxWidth: '450px', width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-inner bottom">
                        <h2 className="title rts-text-anime-style-1 mb--40">Impact in Numbers</h2>
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="stat-card">
                                    <h2 className="counter title"><span className="odometer" data-count="25">00</span>+</h2>
                                    <p className="disc2">Years Combined Exp.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="stat-card">
                                    <h2 className="counter title"><span className="odometer" data-count="23">00</span>K</h2>
                                    <p className="disc2">Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="stat-card">
                                    <h2 className="counter title"><span className="odometer" data-count="5">00</span>M</h2>
                                    <p className="disc2">Solutions Delivered</p>
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
                        {[
                            { name: 'Dr. Deepak Chowdary Edara', role: 'Founder & CEO', img: '01.webp' },
                            { name: 'Dr. K V Krishna Kishore', role: 'President & Managing Director', img: '02.webp' },
                            { name: 'Dr. V Phani Kumar S.', role: 'Vice President & CTO', img: '03.webp' },
                            { name: 'Mr. Venkatesh Addagadda', role: 'Client Solutions & Delivery Manager', img: '04.webp' },
                        ].map((member, i) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                <div className="single-team-style-one modern-card team-card">
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

