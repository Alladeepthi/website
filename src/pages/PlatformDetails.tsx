
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';
import { Testimonials } from '../components/home/Testimonials';
import { CTA } from '../components/home/CTA';

export const PlatformDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const platform = platformsData.find(p => p.slug === id);

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
    }, [id]);

    if (!platform) {
        return <Navigate to="/platforms" replace />;
    }

    return (
        <main className="platform-details-cyber-wrapper">
            {/* 1. Cyber Style Breadcrumb & Title */}
            <div className="rts-service-details-breadcrumb-area" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '160px 0 100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area text-start">
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px', fontSize: '14px', marginBottom: '20px' }}>
                                    <li><Link to="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link></li>
                                    <li><i className="fa-regular fa-chevron-right" style={{ fontSize: '10px', color: '#445161', marginTop: '4px' }}></i></li>
                                    <li><Link to="/platforms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Platforms</Link></li>
                                    <li><i className="fa-regular fa-chevron-right" style={{ fontSize: '10px', color: '#445161', marginTop: '4px' }}></i></li>
                                    <li><a href="#" className="active" style={{ color: '#3B82F6', textDecoration: 'none' }}>{platform.name}</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1 text-white" style={{ fontSize: '4rem', fontWeight: 800, maxWidth: '800px' }}>
                                    {platform.name} <span style={{ color: '#3B82F6' }}>Enterprise</span> AI Implementation
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Video/Image Overview (Cyber Style) */}
            <div className="rts-service-details-video-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="service-details-video-wrapper" style={{ position: 'relative' }}>
                                <img src={platform.hero.image || "/assets/images/service/16.webp"} alt={platform.name} style={{ borderRadius: '30px', width: '100%', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }} />
                                <div className="vedio-icone">
                                    <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=vZE0j_WCRvI">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5 text-start mt_md--50 mt_sm--50">
                            <span className="pre" style={{ color: '#3B82F6', fontWeight: 700, letterSpacing: '2px' }}>PLATFORM OVERVIEW</span>
                            <h2 className="title mb--30" style={{ fontSize: '2.8rem', fontWeight: 800 }}>{platform.overview.heading}</h2>
                            <p className="disc mb--40" style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                                {platform.overview.content}
                            </p>
                            <div className="button-wrapper">
                                <Link to="/contact" className="rts-btn btn-primary with-arrow">Request Solution Blueprint <i className="fa-regular fa-arrow-up up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Engineering Planning (Cyber Style Work Process) */}
            <div className="rts-work-process-area rts-section-gap bg_light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr--70 pr_md--10 pr_sm--10 text-start">
                            <div className="work-process-content">
                                <div className="title-left-wrapper">
                                    <span className="pre">Work Planning</span>
                                    <h2 className="title rts-text-anime-style-1" style={{ fontSize: '3rem', fontWeight: 800 }}>Strategic {platform.name} Engineering Roadmap</h2>
                                </div>
                                <div className="thumbnail-plunning-service-detials mt--60">
                                    <img src="/assets/images/service/17.webp" alt="process" style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 text-start">
                            <div className="working-process-list-wrapper">
                                {[
                                    { title: 'In-Depth Platform Audit', desc: 'Comprehensive assessment of your current data maturity and integration readiness for ' + platform.name + '.', tags: ['Audit', 'Assessment'] },
                                    { title: 'Architecture & Scalability Blueprint', desc: 'Developing a security-first, high-performance architecture tailored to your enterprise data fabric.', tags: ['Architecture', 'Scaling'] },
                                    { title: 'Production Deployment & Ops', desc: 'CI/CD-driven implementation with automated monitoring, guardrails, and ongoing support.', tags: ['Deployment', 'Operations'] }
                                ].map((process, i) => (
                                    <div className="single-working-process-area mb--40" key={i}>
                                        <h5 className="title" style={{ fontWeight: 800, fontSize: '1.4rem' }}>{process.title}</h5>
                                        <p className="disc" style={{ color: '#64748B' }}>{process.desc}</p>
                                        <div className="tag-area-wrapper d-flex gap-2 mt--20">
                                            {process.tags.map(tag => (
                                                <span className="tag-area" key={tag} style={{ background: '#fff', padding: '6px 15px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, border: '1px solid #E2E8F0', color: '#1E293B' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Service Offerings (Cyber Style Solutions) */}
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 text-center mb--60">
                            <span className="pre" style={{ color: '#3B82F6', fontWeight: 700 }}>OUR SOLUTIONS</span>
                            <h2 className="title" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Specialized {platform.name} Services</h2>
                        </div>
                        {platform.solutions.items.map((solution, i) => (
                            <div className="col-xl-4 col-lg-6" key={i}>
                                <div className="single-service-security active h-100 text-start" style={{ padding: '45px', borderRadius: '28px' }}>
                                    <div className="icon mb--30" style={{ background: 'rgba(59,130,246,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                                        <i className={`fa-solid ${['fa-cubes', 'fa-shield-halved', 'fa-chart-line', 'fa-gear', 'fa-microchip', 'fa-database'][i % 6]}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h4 className="title" style={{ fontWeight: 800, fontSize: '1.6rem' }}>{solution.title}</h4>
                                    <p className="disc mt--20" style={{ color: '#64748B', lineHeight: 1.7 }}>{solution.description}</p>
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white btn-border mt--30"><i className="fa-regular fa-arrow-up up-right"></i> More Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. FAQs (Cyber Style Split Layout) */}
            <div className="rts-faq-area-inner rts-section-gap bg_light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-start">
                            <div className="faq-content-one">
                                <div className="title-left-wrapper">
                                    <span className="pre">Platform FAQ</span>
                                    <h2 className="title rts-text-anime-style-1" style={{ fontSize: '2.8rem', fontWeight: 800 }}>Platform Engineering Expert Insights</h2>
                                </div>
                                <div className="faq-sccordion-area-wrapper mt--40">
                                    <p className="disc mb--40">
                                        Transitioning to a modern data platform involves complex technical decisions. We've compiled the most frequent architectural questions to help guide your journey.
                                    </p>
                                    <div className="accordon-pricing-wrapper-three">
                                        <div className="accordion" id="platformFaqAccordion">
                                            {platform.faq.map((faq, i) => (
                                                <div className="accordion-item mb--20" key={i} style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', background: '#fff' }}>
                                                    <h2 className="accordion-header">
                                                        <button className={`accordion-button ${i === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`} style={{ background: '#fff', fontWeight: 700, color: '#1E293B', padding: '25px', boxShadow: 'none' }}>
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div id={`faq${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#platformFaqAccordion">
                                                        <div className="accordion-body" style={{ padding: '0 25px 30px', color: '#64748B', lineHeight: '1.7' }}>
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 text-center">
                            <div className="thumbnail-faq">
                                <img src="/assets/images/service/18.webp" alt="faq" style={{ borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Case Study / Success Stories (Using the Cyber style breadcrumb/card mix) */}
            {platform.caseStudies && platform.caseStudies.items.length > 0 && (
                <div className="rts-case-area rts-section-gap">
                    <div className="container">
                        <div className="row mb--60">
                            <div className="col-lg-12 text-start">
                                <span className="pre">Expertise in Action</span>
                                <h2 className="title" style={{ fontWeight: 800, fontSize: '3rem' }}>Successful {platform.name} Implementations</h2>
                            </div>
                        </div>
                        <div className="row g-5">
                            {platform.caseStudies.items.map((study, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="single-service-security active text-start h-100" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px' }}>
                                        <img src={study.image || `/assets/images/case/0${5 + (i % 2)}.webp`} alt="case" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                                        <div style={{ padding: '35px' }}>
                                            <span style={{ color: '#3B82F6', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>CASE STUDY</span>
                                            <h4 className="title mt--10 mb--20" style={{ fontWeight: 800, fontSize: '1.4rem' }}>{study.title}</h4>
                                            <Link to="/case-studies" className="text-primary fw-bold" style={{ textDecoration: 'none' }}>View Methodology <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <CTA />
        </main>
    );
};
