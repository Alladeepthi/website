import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';

export const IndustryDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const industry = industriesData.find(i => i.slug === id);
    const [activeChallenge, setActiveChallenge] = useState(0);
    const [activeSolution, setActiveSolution] = useState<number | null>(null);


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
                padding: '200px 0 120px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title" style={{ fontSize: '56px', fontWeight: '800', marginBottom: '15px', color: '#fff', letterSpacing: '-1px' }}>{industry.name}</h1>
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
            <div className="rts-service-intro-area rts-section-gap" style={{ padding: '100px 0', position: 'relative', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--60 pr_md--15 pr_sm--15">
                            <div className="content-left">
                                <span style={{ display: 'inline-block', color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', fontSize: '14px' }}>
                                    Industry Overview
                                </span>
                                <h2 className="title" style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '25px', color: darkColor }}>
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
                                <div className="cta-card" style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: '-30px',
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

            {/* 3. Interactive Challenges Section - Vertical Timeline */}
            <div className="rts-challenges-area rts-section-gap" style={{ background: '#fff', padding: '100px 0' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Challenges Solved</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Addressing Key <br /> Industry Pain Points</h2>
                        </div>
                    </div>

                    {/* Vertical Timeline */}
                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: 'flex', gap: '30px', position: 'relative' }}>
                                {/* Timeline Container - Shifts when panel opens */}
                                <div style={{
                                    flex: activeSolution !== null ? '0 0 60%' : '1',
                                    transition: 'all 0.4s ease',
                                    maxWidth: activeSolution !== null ? '60%' : '850px',
                                    margin: '0 auto'
                                }}>
                                    <div style={{ position: 'relative' }}>
                                        {/* Vertical Line Connector */}
                                        <div style={{
                                            position: 'absolute',
                                            left: '30px',
                                            top: '40px',
                                            bottom: '40px',
                                            width: '3px',
                                            background: `linear-gradient(180deg, ${primaryColor} 0%, #cbd5e1 100%)`,
                                            zIndex: 0
                                        }}></div>

                                        {/* Challenge Cards */}
                                        {industry.challenges.items.map((item, index) => {
                                            const isActive = activeChallenge === index;
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setActiveChallenge(isActive ? -1 : index)}
                                                    style={{
                                                        position: 'relative',
                                                        marginBottom: index !== industry.challenges.items.length - 1 ? '30px' : '0',
                                                        cursor: 'pointer',
                                                        zIndex: 1
                                                    }}
                                                >
                                                    {/* Timeline Node */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        top: '30px',
                                                        width: '60px',
                                                        height: '60px',
                                                        background: isActive ? `linear-gradient(135deg, ${primaryColor} 0%, #1d4ed8 100%)` : '#fff',
                                                        border: `3px solid ${isActive ? primaryColor : '#e2e8f0'}`,
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '20px',
                                                        fontWeight: '800',
                                                        color: isActive ? '#fff' : textColor,
                                                        boxShadow: isActive ? '0 10px 30px rgba(59, 130, 246, 0.3)' : '0 4px 10px rgba(0,0,0,0.05)',
                                                        transition: 'all 0.3s ease',
                                                        zIndex: 2
                                                    }}>
                                                        {index + 1}
                                                    </div>

                                                    {/* Card Content */}
                                                    <div style={{
                                                        marginLeft: '90px',
                                                        background: isActive ? `linear-gradient(135deg, #eff6ff 0%, #fff 100%)` : '#fff',
                                                        border: `2px solid ${isActive ? primaryColor : '#f1f5f9'}`,
                                                        borderRadius: '16px',
                                                        padding: '30px',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: isActive ? '0 15px 40px rgba(59, 130, 246, 0.15)' : '0 4px 10px rgba(0,0,0,0.05)'
                                                    }}
                                                        onMouseEnter={(e) => {
                                                            if (!isActive) {
                                                                e.currentTarget.style.borderColor = '#cbd5e1';
                                                                e.currentTarget.style.transform = 'translateX(5px)';
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            if (!isActive) {
                                                                e.currentTarget.style.borderColor = '#f1f5f9';
                                                                e.currentTarget.style.transform = 'translateX(0)';
                                                            }
                                                        }}>
                                                        {/* Header */}
                                                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: isActive ? '20px' : '0' }}>
                                                            <div style={{ flex: 1 }}>
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                                                    <span style={{
                                                                        color: '#ef4444',
                                                                        fontWeight: 'bold',
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '1px',
                                                                        fontSize: '11px',
                                                                        background: '#fee2e2',
                                                                        padding: '4px 10px',
                                                                        borderRadius: '4px'
                                                                    }}>Challenge</span>
                                                                </div>
                                                                <h4 style={{
                                                                    fontSize: '22px',
                                                                    fontWeight: '700',
                                                                    color: darkColor,
                                                                    margin: 0,
                                                                    lineHeight: '1.3'
                                                                }}>
                                                                    {item.title}
                                                                </h4>
                                                            </div>

                                                            {/* Toggle Icon */}
                                                            <div style={{
                                                                width: '36px',
                                                                height: '36px',
                                                                background: isActive ? `${primaryColor}15` : '#f8fafc',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                transition: 'all 0.3s',
                                                                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                flexShrink: 0
                                                            }}>
                                                                <i className="fa-solid fa-chevron-down" style={{
                                                                    color: isActive ? primaryColor : '#94a3b8',
                                                                    fontSize: '14px'
                                                                }}></i>
                                                            </div>
                                                        </div>

                                                        {/* Expandable Content */}
                                                        <div style={{
                                                            maxHeight: isActive ? '500px' : '0',
                                                            opacity: isActive ? 1 : 0,
                                                            overflow: 'hidden',
                                                            transition: 'all 0.4s ease'
                                                        }}>
                                                            <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                                                <p style={{
                                                                    fontSize: '16px',
                                                                    lineHeight: '1.8',
                                                                    color: textColor,
                                                                    marginBottom: '25px'
                                                                }}>
                                                                    {item.description}
                                                                </p>

                                                                {/* View Approach Button */}
                                                                {item.solution && (
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setActiveSolution(activeSolution === index ? null : index);
                                                                        }}
                                                                        style={{
                                                                            background: activeSolution === index
                                                                                ? `linear-gradient(135deg, ${primaryColor} 0%, #1d4ed8 100%)`
                                                                                : '#fff',
                                                                            color: activeSolution === index ? '#fff' : primaryColor,
                                                                            border: `2px solid ${primaryColor}`,
                                                                            padding: '12px 24px',
                                                                            borderRadius: '8px',
                                                                            fontWeight: '600',
                                                                            fontSize: '14px',
                                                                            cursor: 'pointer',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '8px',
                                                                            transition: 'all 0.3s ease',
                                                                            boxShadow: activeSolution === index
                                                                                ? '0 4px 12px rgba(59, 130, 246, 0.3)'
                                                                                : '0 2px 6px rgba(0,0,0,0.05)',
                                                                            width: 'fit-content'
                                                                        }}
                                                                        onMouseEnter={(e) => {
                                                                            if (activeSolution !== index) {
                                                                                e.currentTarget.style.background = `${primaryColor}10`;
                                                                            }
                                                                        }}
                                                                        onMouseLeave={(e) => {
                                                                            if (activeSolution !== index) {
                                                                                e.currentTarget.style.background = '#fff';
                                                                            }
                                                                        }}
                                                                    >
                                                                        <i className="fa-solid fa-lightbulb"></i>
                                                                        <span>{activeSolution === index ? 'Hide' : 'View'} Our Approach</span>
                                                                        <i className={`fa-solid fa-arrow-${activeSolution === index ? 'left' : 'right'}`}></i>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Slide-out Solution Panel */}
                                {activeSolution !== null && industry.challenges.items[activeSolution]?.solution && (
                                    <div style={{
                                        flex: '0 0 38%',
                                        background: `linear-gradient(135deg, ${darkColor} 0%, #0f172a 100%)`,
                                        borderRadius: '20px',
                                        padding: '40px',
                                        color: '#fff',
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                        position: 'sticky',
                                        top: '20px',
                                        maxHeight: '600px',
                                        overflowY: 'auto'
                                    }}>
                                        <button
                                            onClick={() => setActiveSolution(null)}
                                            style={{
                                                position: 'absolute',
                                                top: '20px',
                                                right: '20px',
                                                background: 'rgba(255,255,255,0.1)',
                                                border: 'none',
                                                color: '#fff',
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            background: `linear-gradient(135deg, ${primaryColor} 0%, #1d4ed8 100%)`,
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '24px',
                                            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)'
                                        }}>
                                            <i className="fa-solid fa-lightbulb" style={{ fontSize: '28px', color: '#fff' }}></i>
                                        </div>
                                        <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#fff' }}>
                                            Our Strategic Approach
                                        </h3>
                                        <p style={{ fontSize: '14px', color: primaryColor, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                                            Solution for: {industry.challenges.items[activeSolution].title}
                                        </p>
                                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '24px' }}></div>
                                        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                                            {industry.challenges.items[activeSolution].solution}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Solutions Grid - Enhanced Design */}
            <div className="rts-process-area" style={{
                padding: '100px 0',
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

            {/* 5. CTA Section (Dark) */}
            <div className="rts-cta-area" style={{ background: '#0f172a', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
                {/* Abstract Shapes */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 20%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>Ready to Transform?</h2>
                            <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px', fontWeight: '300' }}>
                                Let's build a future-proof strategy for your {industry.name} business together.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Link to="/contact" className="rts-btn btn-primary" style={{ background: primaryColor, border: 'none', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold' }}>
                                    Get Started Now
                                </Link>
                                <Link to="/contact" className="rts-btn btn-light" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold' }}>
                                    Contact Sales
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
