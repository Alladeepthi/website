
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';

export const Platforms: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-cybersecurity";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    const categories = [
        { type: 'DataLake', title: 'Data Lakes & Storage', icon: '08.svg', description: 'Enterprise-grade data orchestration and storage solutions for modern workloads.' },
        { type: 'RAG', title: 'AI & RAG Tools', icon: '09.svg', description: 'Advanced frameworks for connecting your private data to powerful LLMs.' },
        { type: 'VectorDB', title: 'Vector Databases', icon: '10.svg', description: 'High-performance storage and retrieval systems optimized for semantic search.' },
        { type: 'Model', title: 'Model Ecosystem', icon: '11.svg', description: 'Deploy and scale the latest generative AI and large language models.' }
    ];

    const featuredPlatforms = [
        platformsData.find(p => p.slug === 'snowflake'),
        platformsData.find(p => p.slug === 'llamaindex'),
        platformsData.find(p => p.slug === 'pinecone'),
        platformsData.find(p => p.slug === 'openai')
    ].filter(Boolean);

    return (
        <main className="platforms-cyber-wrapper">
            {/* Banner Area (index-seven style) */}
            <div className="banner-area-cyber-security rts-section-gap bg_image">
                <div className="container" style={{ paddingTop: '80px' }}>
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="banner-content-cyber-security text-start">
                                <h1 className="title rts-text-anime-style-1" style={{ fontSize: '3.8rem', lineHeight: '1.1' }}>
                                    Enterprise <br /> AI Platforms <br /> & Data Fabric
                                </h1>
                                <p className="disc">
                                    We integrate world-class AI and data platforms to build a secure, scalable, and intelligent future for your business infrastructure.
                                </p>
                                <div className="button-wrapper d-flex gap-4">
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow">Get Started <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                    <a href="#solutions" className="rts-btn btn-primary with-arrow btn-white btn-border">Explore Suite <i className="fa-regular fa-arrow-up up-right"></i></a>
                                </div>
                                <div className="brand-area-bottom mt--50">
                                    <p className="disc">Collaborated with globally <br /> recognized AI & Data partners</p>
                                    <div className="brand-banner-7">
                                        <div className="d-flex gap-5 opacity-50 grayscale">
                                            <img src="/assets/images/brand/01.svg" alt="" style={{ height: '30px' }} />
                                            <img src="/assets/images/brand/02.svg" alt="" style={{ height: '30px' }} />
                                            <img src="/assets/images/brand/03.svg" alt="" style={{ height: '30px' }} />
                                            <img src="/assets/images/brand/04.svg" alt="" style={{ height: '30px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-lg-change mt_md--50 mt_sm--50">
                            <div className="thumbnail-security-area-right">
                                <div className="thumbnail">
                                    <img src="/assets/images/banner/14.webp" alt="banner" className="rounded-4" />
                                </div>
                                <div className="right-top-area" style={{ background: '#3B82F6' }}>
                                    <div className="thumb-img">
                                        <img src="/assets/images/banner/10.svg" alt="banner" />
                                    </div>
                                    <p className="disc text-white">
                                        <span className="text-white">500+</span> Enterprise Deployments
                                    </p>
                                    <img src="/assets/images/banner/16.webp" alt="" className="bottom" />
                                </div>
                                <div className="left-bottom">
                                    <img src="/assets/images/banner/17.webp" alt="" />
                                    <div className="vedio-icone">
                                        <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=vZE0j_WCRvI">
                                            <span></span>
                                        </a>
                                        <span className="text">Watch Work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics/About Area (index-seven style) */}
            <div className="rts-about-area rts-section-gap bg_light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="cyber-security-about-left">
                                <img className="top" src="/assets/images/about/text-01.png" alt="" />
                                <div className="bottom-iamge" style={{ background: '#3B82F6' }}>
                                    <img src="/assets/images/about/13.webp" alt="" />
                                    <div className="content">
                                        <h3 className="title text-white">15+</h3>
                                        <p className="text-white">AI Engineering Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 pl--50 pl_lg--20 pl_md--10 pl_sm--10 text-start">
                            <div className="about-cybar-mid">
                                <div className="title-left-wrapper">
                                    <span className="pre">Platform Ecosystem</span>
                                    <h2 className="title rts-text-anime-style-1">Powering Your Data <br /> Intelligence</h2>
                                    <p className="disc">
                                        Our platform integration framework is designed to orchestrate complex AI workloads across diverse environments. We help you build a resilient, future-ready data foundation that scales effortlessly with your business needs.
                                    </p>
                                    <div className="button-wrapper d-flex align-items-center gap-4 mt--40">
                                        <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white btn-border">Get Started <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                        <div className="user-thumb text-start d-flex align-items-center gap-3">
                                            <img src="/assets/images/about/15.webp" alt="" style={{ width: '120px' }} />
                                            <p className="mb-0" style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.2 }}>Trusted by <br /> 2500+ Leads</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="thumbnail-right-about-cyber" style={{ background: '#0F172A' }}>
                                <img src="/assets/images/about/14.webp" alt="" />
                                <div className="content">
                                    <h3 className="title text-white">200+</h3>
                                    <p className="text-white">Active AI <br /> Models Deployed</p>
                                    <img src="/assets/images/about/02.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Area Categories (index-seven style swiper-like grid) */}
            <div id="solutions" className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between text-start align-items-end">
                                <div className="title-left-wrapper">
                                    <span className="pre">Technical Suite</span>
                                    <h2 className="title rts-text-anime-style-1">Advanced Technology <br /> Orchestration</h2>
                                </div>
                                <div className="right-area mb--10">
                                    <Link to="/contact" className="btn-line"><span>Explore All Solutions</span> <i className="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--40">
                        {categories.map((cat, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="single-service-security active h-100 text-start">
                                    <div className="icon">
                                        <img src={`/assets/images/service/${cat.icon}`} alt="service" />
                                    </div>
                                    <h5 className="title">{cat.title}</h5>
                                    <p className="disc">
                                        {cat.description}
                                    </p>
                                    <a href={`#${cat.type}`} className="rts-btn btn-primary with-arrow btn-white btn-border"><i className="fa-regular fa-arrow-up up-right"></i> Learn More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Studies / Featured Platforms Accordion (index-seven style) */}
            <div className="rts-case-studies rts-section-gap bg_light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between text-start">
                                <div className="title-left-wrapper">
                                    <span className="pre">Featured Partners</span>
                                    <h2 className="title rts-text-anime-style-1">Best-in-Class <br /> Platform Expertise</h2>
                                </div>
                                <div className="right-area">
                                    <p className="disc">
                                        We maintain gold-standard partnerships with the industry's leading AI and data providers to ensure your implementation is backed by official expertise.
                                    </p>
                                    <Link to="/case-studies" className="btn-line"><span>View Success Stories</span><i className="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--70">
                        <div className="col-lg-12">
                            <div className="accordion-faq-one in-working-process in-case-cyber">
                                <div className="accordion" id="platformsAccordion">
                                    {featuredPlatforms.map((platform, i) => (
                                        <div className="accordion-item" key={platform!.slug}>
                                            <h2 className="accordion-header">
                                                <button className={`accordion-button ${i === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}>
                                                    <span>{i + 1}. </span> {platform!.name} Integration & Engineering
                                                </button>
                                            </h2>
                                            <div id={`collapse${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#platformsAccordion">
                                                <div className="accordion-body text-start d-flex gap-5 align-items-center flex-wrap flex-md-nowrap">
                                                    <img src={platform!.hero.image || "/assets/images/case/05.webp"} alt={platform!.name} style={{ width: '300px', borderRadius: '15px' }} />
                                                    <div>
                                                        <h4 className="mb-3">{platform!.name} Overview</h4>
                                                        <p className="disc mb-4">{platform!.hero.description}</p>
                                                        <Link to={`/platform/${platform!.slug}`} className="rts-btn btn-primary with-arrow">View Case Study <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Integration / Pricing List variant (index-seven style) */}
            {/* Integration Packs / Pricing (Replaced with White Background for Contrast) */}
            <div className="rs-pricing-area rts-section-gap pricing-cyber-page" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between text-start align-items-end mb--50">
                                <div className="title-left-wrapper">
                                    <span className="pre" style={{ color: '#3B82F6', border: '1px solid #3B82F6' }}>Integration Packs</span>
                                    <h2 className="title rts-text-anime-style-1" style={{ color: '#0F172A' }}>Transparent Plans for <br /> Platform Excellence</h2>
                                </div>
                                <div className="right-area">
                                    <p className="disc" style={{ color: '#475569', maxWidth: '500px' }}>
                                        Accelerate your time-to-market with our pre-engineered integration blueprints tailored for enterprise scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-pricing-list-area active mb--30">
                                <span className="package">Core Suite</span>
                                <div className="left-area">
                                    <h4 className="title">Capabilities</h4>
                                    <ul>
                                        <li>Multi-Platform Connectivity</li>
                                        <li>Standard Security Guardrails</li>
                                        <li>Performance Monitoring</li>
                                    </ul>
                                </div>
                                <div className="right-area">
                                    <h3 className="price">Consultative</h3>
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow">Inquire Now <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                </div>
                            </div>
                            <div className="single-pricing-list-area active">
                                <span className="package">Advanced Fabric</span>
                                <div className="left-area">
                                    <h4 className="title">Capabilities</h4>
                                    <ul>
                                        <li>Automated Scaling Eng.</li>
                                        <li>Custom RAG Architecture</li>
                                        <li>24/7 Managed Operations</li>
                                    </ul>
                                </div>
                                <div className="right-area">
                                    <h3 className="price">Enterprise</h3>
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white btn-border">Book Architecture Review <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials removed as per user request */}

            {/* Premium Cyber Security CTA */}
            <div className="rts-cta-area-cyber" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-cyber-wrapper" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <div className="icon mb--30" style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(59,130,246,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    color: '#3B82F6',
                                    fontSize: '32px'
                                }}>
                                    <i className="fa-regular fa-rocket-launch"></i>
                                </div>
                                <h2 className="title text-white mb--20" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Ready to Scale Your<br /><span style={{ color: '#3B82F6' }}>Enterprise Data Fabric?</span></h2>
                                <p className="disc mb--40" style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
                                    Accelerate your transformation with our battle-tested AI infrastructure blueprints. Secure, scalable, and production-ready.
                                </p>
                                <div className="button-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow">
                                        Start Your Transformation <i className="fa-regular fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/case-studies" className="rts-btn btn-white btn-border">
                                        View Success Stories
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
