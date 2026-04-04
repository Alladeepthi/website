import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';

export const IndustryDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const industry = industriesData.find(i => i.slug === id);
    const [activeChallenge, setActiveChallenge] = useState<number>(0); // Default to first item active


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!industry) {
        return <Navigate to="/industry" replace />;
    }

    // Theme Colors (Matches ServiceDetails)
    const primaryColor = '#3B82F6';
    const darkColor = '#1e293b';
    const textColor = '#475569';
    const lightBg = '#F8FAFC';


    const illustrationMap: Record<string, string> = {
        'healthcare': '/assets/images/feature/07.webp',
        'finance': '/assets/images/feature/08.webp',
        'retail': '/assets/images/feature/09.webp',
        'manufacturing': '/assets/images/feature/10.webp',
        'technology': '/assets/images/feature/11.webp',
    };
    const overviewImage = illustrationMap[industry.slug] || '/assets/images/feature/06.webp';


    return (
        <main style={{ overflowX: 'hidden' }}>
            {/* 1. Hero / Header Section - Consistent with ServiceDetails */}
            <div className="rts-service-details-breadcrumb-area" style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%), url(${industry.hero.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                padding: '160px 0 100px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title text-4xl md:text-6xl lg:text-7xl" style={{ fontWeight: '800', marginBottom: '15px', color: '#fff', letterSpacing: '-1px' }}>{industry.name}</h1>
                            <p style={{ maxWidth: '700px', margin: '0 auto 20px', fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>{industry.hero.description}</p>
                            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0, fontSize: '15px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '10px' }}></i></li>
                                <li><Link to="/industry" style={{ color: '#fff', textDecoration: 'none' }}>Industries</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '10px' }}></i></li>
                                <li><span style={{ color: primaryColor, fontWeight: 'bold' }}>{industry.name}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Intro Section with Floating CTA (Overview) */}
            <div className="rts-service-intro-area rts-section-gap" style={{ padding: '60px 0', position: 'relative', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--60 pr_md--15 pr_sm--15">
                            <div className="content-left">
                                <span style={{ display: 'inline-block', color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', fontSize: '14px' }}>
                                    Industry Overview
                                </span>
                                <h2 className="title text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: '800', lineHeight: '1.2', marginBottom: '25px', color: darkColor }}>
                                    {industry.overview.heading}
                                </h2>
                                <p className="disc" style={{ fontSize: '18px', color: textColor, lineHeight: '1.8', marginBottom: '30px' }}>
                                    {industry.overview.content}
                                </p>

                                <div className="row g-3 mb-4">
                                    {industry.benefits.items.slice(0, 4).map((benefit, idx) => (
                                        <div className="col-md-6" key={idx}>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="fa-solid fa-circle-check" style={{ color: primaryColor }}></i>
                                                <span style={{ fontWeight: 600, color: darkColor }}>{benefit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="rts-btn btn-primary" style={{ background: primaryColor, color: '#fff', padding: '16px 36px', borderRadius: '6px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                                    Schedule Consultation <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--30">
                            <div className="thumbnail-image" style={{ position: 'relative', width: '85%', margin: '0 auto' }}>
                                <img
                                    src={overviewImage}
                                    alt="Overview"
                                    style={{ width: '100%', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                                />
                                {/* Floating Gradient Card */}
                                <div className="cta-card absolute bottom-0 left-0 md:-bottom-8 md:-left-8" style={{
                                    background: `linear-gradient(135deg, ${darkColor}, #0f172a)`,
                                    padding: '25px',
                                    borderRadius: '16px',
                                    color: '#fff',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                                    maxWidth: '280px',
                                    zIndex: 2,
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%' }}>
                                            <i className="fa-solid fa-chart-line text-white"></i>
                                        </div>
                                        <div>
                                            <h5 style={{ color: '#fff', fontSize: '18px', margin: 0, fontWeight: '700' }}>Success Rate</h5>
                                            <span style={{ color: primaryColor, fontWeight: 'bold' }}>98.5%</span>
                                        </div>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Proven track record in {industry.name}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Challenges Section - Compacted Layout */}
            <div className="rts-challenges-area rts-section-gap" style={{ background: '#F8FAFC', padding: '40px 0' }}>
                <div className="container">
                    <div className="row mb--40">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Challenges Solved</span>
                            <h2 className="title" style={{ fontSize: '32px', fontWeight: '800', color: darkColor }}>Addressing Key <br /> Industry Pain Points</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Left: Interactive Challenge List */}
                        <div className="col-lg-4 col-md-12">
                            <div className="challenge-menu-list shadow-sm" style={{ background: '#fff', borderRadius: '16px', padding: '15px', border: '1px solid #f1f5f9' }}>
                                {industry.challenges.items.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveChallenge(index)}
                                        style={{
                                            padding: '18px 20px',
                                            borderBottom: index !== industry.challenges.items.length - 1 ? '1px solid #f1f5f9' : 'none',
                                            cursor: 'pointer',
                                            background: activeChallenge === index ? '#eff6ff' : 'transparent',
                                            borderLeft: activeChallenge === index ? `4px solid ${primaryColor}` : '4px solid transparent',
                                            borderRadius: activeChallenge === index ? '0 8px 8px 0' : '0',
                                            transition: 'all 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeChallenge !== index) e.currentTarget.style.background = '#f8fafc';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeChallenge !== index) e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        <i className="fa-solid fa-triangle-exclamation" style={{
                                            color: activeChallenge === index ? primaryColor : '#94a3b8',
                                            fontSize: '16px',
                                            width: '20px',
                                            textAlign: 'center',
                                            transition: 'color 0.3s'
                                        }}></i>
                                        <h6 style={{
                                            margin: 0,
                                            fontSize: '15px',
                                            fontWeight: activeChallenge === index ? '700' : '500',
                                            color: activeChallenge === index ? primaryColor : darkColor,
                                            transition: 'color 0.3s'
                                        }}>
                                            {item.title}
                                        </h6>
                                        {activeChallenge === index && <i className="fa-solid fa-chevron-right ms-auto" style={{ fontSize: '10px', color: primaryColor }}></i>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Detailed Content Area */}
                        <div className="col-lg-8 col-md-12">
                            <style>
                                {`
                                    @keyframes fadeEffect {
                                        from { opacity: 0; transform: translateY(10px); }
                                        to { opacity: 1; transform: translateY(0); }
                                    }
                                `}
                            </style>
                            <div
                                key={activeChallenge}
                                className="challenge-detail-content"
                                style={{
                                    background: `linear-gradient(145deg, #ffffff 0%, ${lightBg} 100%)`,
                                    borderRadius: '20px',
                                    padding: '35px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
                                    border: '1px solid #fff',
                                    height: '100%',
                                    position: 'relative',
                                    animation: 'fadeEffect 0.5s ease-out'
                                }}
                            >
                                {/* Decorative BG Icon */}
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    fontSize: '100px',
                                    opacity: '0.03',
                                    color: darkColor,
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }}>
                                    <i className="fa-solid fa-triangle-exclamation"></i>
                                </div>

                                <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                                    {/* Challenge Header */}
                                    <div className="mb-4">
                                        <span style={{
                                            background: '#fee2e2',
                                            color: '#dc2626',
                                            padding: '6px 14px',
                                            borderRadius: '30px',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            display: 'inline-block',
                                            marginBottom: '15px'
                                        }}>
                                            The Challenge
                                        </span>
                                        <h3 style={{ fontSize: '24px', fontWeight: '800', color: darkColor, marginBottom: '12px' }}>
                                            {industry.challenges.items[activeChallenge].title}
                                        </h3>
                                        <p style={{ fontSize: '15px', lineHeight: '1.7', color: textColor, marginBottom: '15px' }}>
                                            {industry.challenges.items[activeChallenge].description}
                                        </p>
                                    </div>

                                    <hr style={{ borderColor: '#e2e8f0', margin: '25px 0', opacity: 0.5 }} />

                                    {/* Solution Section */}
                                    <div style={{
                                        padding: '25px',
                                        background: `linear-gradient(135deg, ${darkColor} 0%, #0f172a 100%)`,
                                        borderRadius: '12px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decoration */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '120px',
                                            height: '120px',
                                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                                            pointerEvents: 'none'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    background: 'rgba(255,255,255,0.1)',
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <i className="fa-solid fa-lightbulb" style={{ color: primaryColor, fontSize: '20px' }}></i>
                                                </div>
                                                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', margin: 0 }}>
                                                    Our Strategic Approach
                                                </h4>
                                            </div>
                                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255,255,255,0.95)', margin: 0 }}>
                                                {industry.challenges.items[activeChallenge].solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Solutions Grid - Enhanced Design */}
            <div className="rts-process-area" style={{
                padding: '60px 0',
                background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
                position: 'relative'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row mb--60 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span style={{
                                color: primaryColor,
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                display: 'block',
                                marginBottom: '15px',
                                fontSize: '13px'
                            }}>Our Solutions</span>
                            <h2 className="title" style={{
                                fontSize: '42px',
                                fontWeight: '800',
                                color: darkColor,
                                marginBottom: '20px',
                                lineHeight: '1.2'
                            }}>Delivering Real Value</h2>
                            <p style={{
                                fontSize: '18px',
                                color: textColor,
                                lineHeight: '1.7',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Comprehensive capabilities designed to drive growth and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {industry.solutions.items.map((sol, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div
                                    className="solution-card h-100 transition-all"
                                    style={{
                                        background: '#fff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
                                        e.currentTarget.style.borderColor = primaryColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                    }}
                                >
                                    {/* Gradient Background on Hover */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '100px',
                                        height: '100px',
                                        background: `radial-gradient(circle, ${primaryColor}10 0%, transparent 70%)`,
                                        opacity: 0.5,
                                        pointerEvents: 'none'
                                    }}></div>

                                    {/* Icon */}
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`,
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '25px',
                                        position: 'relative',
                                        border: `2px solid ${primaryColor}20`
                                    }}>
                                        <i
                                            className={`fa-solid ${['fa-lightbulb', 'fa-shield-halved', 'fa-rocket', 'fa-chart-pie'][index % 4]}`}
                                            style={{
                                                color: primaryColor,
                                                fontSize: '28px'
                                            }}
                                        ></i>
                                    </div>

                                    {/* Title */}
                                    <h4 style={{
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        color: darkColor,
                                        marginBottom: '15px',
                                        lineHeight: '1.3'
                                    }}>
                                        {sol.title}
                                    </h4>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '15px',
                                        color: textColor,
                                        lineHeight: '1.7',
                                        margin: 0
                                    }}>
                                        {sol.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Process / How It Works Section (New Addition) */}
            <div className="rts-process-area rts-section-gap" style={{ padding: '50px 0 70px', background: '#fff' }}>
                <div className="container">
                    <div className="row mb--40">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', display: 'block', marginBottom: '10px' }}>
                                Implementation Process
                            </span>
                            <h2 className="title" style={{ fontSize: '36px', fontWeight: '800', color: darkColor }}>
                                How We Drive Results
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { step: '01', title: 'Assessment', desc: 'We analyze your current infrastructure and identify AI opportunities.' },
                            { step: '02', title: 'Strategy', desc: 'Developing a tailored roadmap aligned with your business goals.' },
                            { step: '03', title: 'Integration', desc: 'Seamless implementation of AI solutions into your workflows.' },
                            { step: '04', title: 'Optimization', desc: 'Continuous monitoring and refinement for maximum performance.' }
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div style={{ textAlign: 'center', padding: '30px 20px', position: 'relative' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: index % 2 === 0 ? '#EFF6FF' : '#F5F3FF',
                                        color: index % 2 === 0 ? primaryColor : '#8B5CF6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        fontWeight: '800',
                                        margin: '0 auto 20px',
                                        border: `1px solid ${index % 2 === 0 ? '#DBEAFE' : '#EDE9FE'}`
                                    }}>
                                        {item.step}
                                    </div>
                                    <h4 style={{ fontSize: '20px', fontWeight: '700', color: darkColor, marginBottom: '10px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '15px', color: textColor, lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. CTA Gradient Section (Boxed & Premium) */}
            <div className="rts-cta-gradient" style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div
                        style={{
                            background: `linear-gradient(135deg, ${primaryColor} 0%, #8B5CF6 100%)`,
                            borderRadius: '30px',
                            padding: '100px 60px',
                            position: 'relative',
                            overflow: 'hidden',
                            textAlign: 'center',
                            boxShadow: '0 30px 60px -20px rgba(59, 130, 246, 0.4)'
                        }}
                    >
                        {/* Abstract Background Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-20%',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-50%',
                            left: '-20%',
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ color: '#fff', fontSize: '48px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                                Ready to Transform?
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '20px', marginBottom: '45px', maxWidth: '700px', margin: '0 auto 45px' }}>
                                Let's build a future-proof strategy for your {industry.name} business together.
                            </p>

                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <Link to="/contact">
                                    <button
                                        style={{
                                            padding: '18px 45px',
                                            background: '#fff',
                                            color: primaryColor,
                                            borderRadius: '50px',
                                            fontWeight: '700',
                                            fontSize: '18px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                            minWidth: '220px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        Get Started Now <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </Link>
                                <Link to="/contact">
                                    <button
                                        style={{
                                            padding: '18px 45px',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            borderRadius: '50px',
                                            fontWeight: '700',
                                            fontSize: '18px',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            cursor: 'pointer',
                                            minWidth: '200px'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    >
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hover-lift { transition: transform 0.3s, box-shadow 0.3s; }
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1); border-color: ${primaryColor} !important; }
                @keyframes fadeEffect {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fadeEffect 0.5s ease-out; }
            `}</style>
        </main>
    );
};
