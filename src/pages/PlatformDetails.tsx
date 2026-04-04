import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';

export const PlatformDetails = () => {
    const { id } = useParams();
    const platform = platformsData.find(p => p.slug === id);
    const [activeFeature, setActiveFeature] = useState(-1);


    useEffect(() => {
        document.body.classList.add("demo-data-science");

        // Only inject main.js if it's not already there
        let script = document.getElementById('main-js') as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = 'main-js';
            script.src = "/assets/js/main.js";
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            document.body.classList.remove("demo-data-science");
        };
    }, []);

    if (!platform) {
        return <Navigate to="/" replace />;
    }

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#1e293b';
    const lightBg = '#F8FAFC';
    const textColor = '#475569';

    return (
        <>
            <style>{`
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes flowAnimation {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                }
                .metric-card {
                    animation: slideInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                .metric-card:nth-child(1) { animation-delay: 0.1s; }
                .metric-card:nth-child(2) { animation-delay: 0.2s; }
                .metric-card:nth-child(3) { animation-delay: 0.3s; }
                .metric-card:nth-child(4) { animation-delay: 0.4s; }
                
                .use-case-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .use-case-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
                }
                
                .tech-icon {
                    transition: all 0.3s ease;
                }
                .tech-icon:hover {
                    transform: scale(1.2) rotate(5deg);
                }
                
                .comparison-row {
                    transition: all 0.3s ease;
                }
                .comparison-row:hover {
                    background: #eff6ff !important;
                    transform: scale(1.02);
                }
                
                .custom-case-card {
                    background: #fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .custom-case-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .custom-case-card .case-image {
                    display: block;
                    border-bottom: 1px solid #f1f5f9;
                    overflow: hidden;
                }
                .custom-case-card img {
                    transition: transform 0.5s ease;
                }
                .custom-case-card:hover img {
                    transform: scale(1.05);
                }
            `}</style>

            {/* 1. Hero Section */}
            <div className="rts-about-breadcrumb-area py-32 md:py-48" style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%), url('/assets/images/banner/breadcrumb-01.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title text-4xl md:text-5xl lg:text-7xl" style={{ fontWeight: '800', marginBottom: '10px', color: '#fff' }}>
                                {platform.name}
                            </h1>
                            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0, fontSize: '16px', opacity: 0.8 }}>
                                <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '12px' }}></i></li>
                                <li><span style={{ color: primaryColor }}>{platform.name}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Intro Section with Stats */}
            <div className="rts-service-intro-area rts-section-gap" style={{ padding: '60px 0', position: 'relative', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--60 pr_md--15 pr_sm--15">
                            <div className="content-left">
                                <span style={{
                                    display: 'inline-block',
                                    color: primaryColor,
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '15px',
                                    fontSize: '14px'
                                }}>Enterprise Platform</span>
                                <h2 className="title text-3xl md:text-4xl lg:text-5xl" style={{
                                    fontWeight: '800',
                                    lineHeight: '1.2',
                                    marginBottom: '25px',
                                    color: darkColor
                                }}>
                                    {platform.hero.title || `${platform.name} Solutions`}
                                </h2>
                                <p className="disc" style={{ fontSize: '18px', color: textColor, lineHeight: '1.8', marginBottom: '30px' }}>
                                    {platform.hero.description}
                                </p>

                                {/* Quick Stats */}
                                <div className="row g-3 mb-4">
                                    {[
                                        { icon: 'fa-rocket', label: 'Fast Deploy', value: '< 24hrs' },
                                        { icon: 'fa-shield-halved', label: 'Security', value: '99.99%' },
                                        { icon: 'fa-chart-line', label: 'Performance', value: '10x' }
                                    ].map((stat, i) => (
                                        <div className="col-4" key={i}>
                                            <div style={{ textAlign: 'center', padding: '15px', background: lightBg, borderRadius: '10px' }}>
                                                <i className={`fa-solid ${stat.icon}`} style={{ color: primaryColor, fontSize: '24px', marginBottom: '8px' }}></i>
                                                <div style={{ fontSize: '20px', fontWeight: '800', color: darkColor }}>{stat.value}</div>
                                                <div style={{ fontSize: '12px', color: textColor }}>{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="rts-btn btn-primary" style={{
                                    background: primaryColor,
                                    color: '#fff',
                                    padding: '16px 36px',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Get Started <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="thumbnail-image" style={{ position: 'relative' }}>
                                <img
                                    loading="lazy"
                                    src={platform.hero.image || "/assets/images/banner/28.webp"}
                                    alt={platform.name}
                                    style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4. Data Architecture Flow */}
            <div className="rts-architecture-area rts-section-gap" style={{ background: lightBg, padding: '60px 0' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Architecture</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>
                                {platform.architecture?.title || `${platform.name} Architecture`}
                            </h2>
                            <p style={{ fontSize: '16px', color: textColor, marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
                                {platform.architecture?.description || `High-level data flow and integration capability of ${platform.name} within your enterprise stack.`}
                            </p>
                        </div>
                    </div>

                    {/* Visual Data Flow */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        padding: '60px 40px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        position: 'relative'
                    }}>
                        <div className="row g-4 align-items-center">
                            {[
                                { icon: 'fa-database', label: 'Data Sources', color: '#10b981' },
                                { icon: 'fa-arrow-right', label: '', color: '#94a3b8' },
                                { icon: 'fa-upload', label: 'Ingestion', color: '#f59e0b' },
                                { icon: 'fa-arrow-right', label: '', color: '#94a3b8' },
                                { icon: 'fa-layer-group', label: platform.name, color: primaryColor },
                                { icon: 'fa-arrow-right', label: '', color: '#94a3b8' },
                                { icon: 'fa-chart-line', label: 'Analytics', color: '#8b5cf6' },
                                { icon: 'fa-arrow-right', label: '', color: '#94a3b8' },
                                { icon: 'fa-users', label: 'End Users', color: '#ec4899' }
                            ].map((step, idx) => (
                                step.label ? (
                                    <div className="col text-center" key={idx}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: idx === 4 ? `linear-gradient(135deg, ${step.color} 0%, #1d4ed8 100%)` : `${step.color}15`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 15px',
                                            boxShadow: idx === 4 ? `0 10px 30px ${step.color}40` : 'none',
                                            transition: 'all 0.3s'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}>
                                            <i className={`fa-solid ${step.icon}`} style={{
                                                color: idx === 4 ? '#fff' : step.color,
                                                fontSize: '32px'
                                            }}></i>
                                        </div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: darkColor }}>{step.label}</div>
                                    </div>
                                ) : (
                                    <div className="col-auto" key={idx} style={{ padding: '0 5px' }}>
                                        <i className={`fa-solid ${step.icon}`} style={{ color: step.color, fontSize: '24px' }}></i>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Industry Use Cases with Icons */}
            {platform.industryUseCases && (
                <div className="rts-use-cases-area rts-section-gap" style={{ padding: '60px 0', background: '#fff' }}>
                    <div className="container">
                        <div className="row mb--60">
                            <div className="col-12 text-center">
                                <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Industries</span>
                                <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>{platform.industryUseCases.title}</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {platform.industryUseCases.items.map((useCase, idx) => (
                                <div className="col-lg-3 col-md-6" key={idx}>
                                    <div className="use-case-card" style={{
                                        background: '#fff',
                                        border: '2px solid #f1f5f9',
                                        borderRadius: '16px',
                                        padding: '40px 30px',
                                        textAlign: 'center',
                                        height: '100%'
                                    }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`,
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 20px',
                                            border: `2px solid ${primaryColor}20`
                                        }}>
                                            <i className={`fa-solid ${useCase.icon || 'fa-building'}`} style={{
                                                color: primaryColor,
                                                fontSize: '36px'
                                            }}></i>
                                        </div>
                                        <h4 style={{ fontSize: '20px', fontWeight: '700', color: darkColor, marginBottom: '12px' }}>
                                            {useCase.title}
                                        </h4>
                                        <p style={{ fontSize: '15px', color: textColor, margin: 0, lineHeight: '1.6' }}>
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* 6. Platform vs Traditional Comparison */}
            <div className="rts-comparison-area rts-section-gap" style={{ background: lightBg, padding: '60px 0' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Comparison</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>
                                {platform.name} vs Traditional Solutions
                            </h2>
                        </div>
                    </div>
                    <div className="row g-5 align-items-center">
                        {/* Comparison Table */}
                        <div className="col-lg-7">
                            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                                <div className="overflow-x-auto">
                                    <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ background: darkColor }}>
                                                <th style={{ padding: '20px', color: '#fff', fontSize: '16px', fontWeight: '700', textAlign: 'center', width: '80px' }}>S.No</th>
                                                <th style={{ padding: '20px', color: '#fff', fontSize: '16px', fontWeight: '700', textAlign: 'left' }}>Feature</th>
                                                <th style={{ padding: '20px', color: primaryColor, fontSize: '16px', fontWeight: '700', textAlign: 'center', background: '#1e3a5f' }}>{platform.name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { feature: 'Deployment Time', traditional: '3-6 months', modern: '< 24 hours' },
                                                { feature: 'Scalability', traditional: 'Manual', modern: 'Auto-scale' },
                                                { feature: 'Maintenance', traditional: 'High effort', modern: 'Fully managed' },
                                                { feature: 'Cost Model', traditional: 'Fixed CapEx', modern: 'Pay-as-you-go' },
                                                { feature: 'Performance', traditional: 'Limited', modern: 'Unlimited' },
                                                { feature: 'Security', traditional: 'Basic', modern: 'Enterprise Grade' }
                                            ].map((row, idx) => (
                                                <tr key={idx} className="comparison-row" style={{
                                                    background: idx % 2 === 0 ? '#fff' : '#f8fafc',
                                                    borderBottom: '1px solid #e2e8f0'
                                                }}>
                                                    <td style={{ padding: '20px', fontSize: '16px', fontWeight: '700', color: primaryColor, textAlign: 'center', fontFamily: 'monospace' }}>
                                                        {String(idx + 1).padStart(2, '0')}
                                                    </td>
                                                    <td style={{ padding: '20px', fontSize: '15px', fontWeight: '600', color: darkColor }}>{row.feature}</td>
                                                    <td style={{ padding: '20px', fontSize: '15px', color: '#ef4444', textAlign: 'center' }}>
                                                        <i className="fa-solid fa-xmark" style={{ marginRight: '8px' }}></i>
                                                        {row.traditional}
                                                    </td>
                                                    <td style={{ padding: '20px', fontSize: '15px', color: '#10b981', textAlign: 'center', fontWeight: '600' }}>
                                                        <i className="fa-solid fa-check" style={{ marginRight: '8px' }}></i>
                                                        {row.modern}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Side Image / Graphic */}
                        <div className="col-lg-5">
                            <div style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                height: '100%',
                                minHeight: '400px'
                            }}>
                                <img
                                    loading="lazy"
                                    src={platform.solutions?.image || platform.hero.image || "/assets/images/platform/App development-rafiki.png"}
                                    alt="Platform Comparison"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                />
                                {/* Overlay Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(30, 41, 59, 0.4) 0%, transparent 100%)'
                                }}></div>

                                {/* Floating Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '30px',
                                    background: 'rgba(255,255,255,0.95)',
                                    padding: '15px 25px',
                                    borderRadius: '12px',
                                    border: `1px solid ${primaryColor}30`,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <div style={{ fontSize: '12px', fontWeight: '600', color: textColor, marginBottom: '5px' }}>Performance Gain</div>
                                    <div style={{ fontSize: '24px', fontWeight: '800', color: darkColor }}>
                                        <span style={{ color: '#10b981' }}>10x</span> Faster
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Capabilities - Horizontal Accordion Cards */}
            <div className="rts-capabilities-area rts-section-gap" style={{ padding: '60px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Our Expertise</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>{platform.solutions.title}</h2>
                            <p style={{ fontSize: '16px', color: textColor, marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
                                Comprehensive capabilities to power your data platform
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {platform.solutions.items.map((solution, index) => {
                            const isActive = activeFeature === index;
                            return (
                                <div className="col-lg-6" key={index}>
                                    <div
                                        style={{
                                            background: '#fff',
                                            border: `2px solid ${isActive ? primaryColor : '#f1f5f9'}`,
                                            borderRadius: '16px',
                                            padding: '30px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: isActive ? '0 10px 40px rgba(59, 130, 246, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onClick={() => setActiveFeature(isActive ? -1 : index)}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.borderColor = '#cbd5e1';
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.borderColor = '#f1f5f9';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }
                                        }}
                                    >
                                        {/* Header Section */}
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: isActive ? '20px' : '0' }}>
                                            {/* Icon */}
                                            <div style={{
                                                minWidth: '56px',
                                                height: '56px',
                                                background: isActive ? `linear-gradient(135deg, ${primaryColor} 0%, #1d4ed8 100%)` : `${primaryColor}10`,
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s'
                                            }}>
                                                <i className="fa-solid fa-database" style={{
                                                    color: isActive ? '#fff' : primaryColor,
                                                    fontSize: '24px'
                                                }}></i>
                                            </div>

                                            {/* Title & Description */}
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{
                                                    fontSize: '20px',
                                                    fontWeight: '700',
                                                    color: darkColor,
                                                    marginBottom: '8px',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {solution.title}
                                                </h4>
                                                <p style={{
                                                    fontSize: '15px',
                                                    color: textColor,
                                                    lineHeight: '1.6',
                                                    margin: 0,
                                                    display: isActive ? 'block' : '-webkit-box',
                                                    WebkitLineClamp: isActive ? 'unset' : 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: isActive ? 'visible' : 'hidden'
                                                }}>
                                                    {solution.description}
                                                </p>
                                            </div>

                                            {/* Toggle Icon */}
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                background: isActive ? `${primaryColor}15` : '#f8fafc',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s',
                                                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}>
                                                <i className="fa-solid fa-chevron-down" style={{
                                                    color: isActive ? primaryColor : '#94a3b8',
                                                    fontSize: '14px'
                                                }}></i>
                                            </div>
                                        </div>

                                        {/* Expandable Content */}
                                        <div style={{
                                            maxHeight: isActive ? '300px' : '0',
                                            opacity: isActive ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease',
                                            paddingTop: isActive ? '20px' : '0',
                                            borderTop: isActive ? '1px solid #f1f5f9' : 'none'
                                        }}>
                                            <h5 style={{ fontSize: '15px', fontWeight: '700', color: darkColor, marginBottom: '15px' }}>
                                                Key Benefits
                                            </h5>
                                            <div className="row g-3">
                                                {['Enterprise Grade', 'Scalable', '24/7 Support', 'Secure'].map((benefit, i) => (
                                                    <div className="col-6" key={i}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            <div style={{
                                                                width: '20px',
                                                                height: '20px',
                                                                background: `${primaryColor}15`,
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0
                                                            }}>
                                                                <i className="fa-solid fa-check" style={{ color: primaryColor, fontSize: '10px' }}></i>
                                                            </div>
                                                            <span style={{ fontSize: '14px', color: textColor, fontWeight: '500' }}>{benefit}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 8. Tech Stack Integration */}
            <div className="rts-tech-stack-area" style={{ background: lightBg, padding: '50px 0' }}>
                <div className="container">
                    <div className="row mb--40">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Integrations</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>
                                Works With Your Tech Stack
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                                {['AWS', 'Azure', 'GCP', 'Tableau', 'PowerBI', 'Python', 'dbt', 'Airflow'].map((tech, idx) => (
                                    <div key={idx} className="tech-icon" style={{
                                        width: '100px',
                                        height: '100px',
                                        background: '#fff',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                        border: '2px solid #f1f5f9',
                                        cursor: 'pointer'
                                    }}>
                                        <span style={{ fontSize: '14px', fontWeight: '700', color: darkColor }}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 9. Why Choose Section */}
            <div className="rts-feature-area rts-section-gap" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Why Choose Us</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>{platform.whyChoose.title}</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {platform.whyChoose.items.map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                                <div style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                    border: '1px solid #f1f5f9',
                                    transition: 'all 0.3s',
                                    height: '100%'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.15)';
                                        e.currentTarget.style.borderColor = primaryColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = '#f1f5f9';
                                    }}>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{
                                            minWidth: '48px',
                                            height: '48px',
                                            background: '#eff6ff',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <i className="fa-solid fa-check" style={{ color: primaryColor, fontSize: '20px' }}></i>
                                        </div>
                                        <div>
                                            <h5 style={{ fontSize: '18px', fontWeight: '700', color: darkColor, marginBottom: '10px' }}>{item.title}</h5>
                                            <p style={{ fontSize: '15px', color: textColor, margin: 0, lineHeight: '1.6' }}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 10. Case Studies */}
            <div className="rts-case-area rts-section-gap" style={{ background: lightBg, padding: '60px 0' }}>
                <div className="container">
                    <div className="row mb--50 text-center">
                        <div className="col-12">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Success Stories</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>{platform.caseStudies.title}</h2>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {platform.caseStudies.items.map((study, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="case-study-card-premium" style={{
                                    background: '#fff',
                                    borderRadius: '24px',
                                    padding: '20px',
                                    height: '100%',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                                    border: '1px solid #E2E8F0',
                                    transition: 'all 0.4s ease',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {/* Image Container with Inset background to frame illustration */}
                                    <div style={{
                                        background: '#F1F5F9',
                                        borderRadius: '16px',
                                        height: '200px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        marginBottom: '20px'
                                    }}>
                                        <img
                                            src={study.image || `/assets/images/case/0${(i % 3) + 6}.webp`}
                                            alt={study.title}
                                            style={{
                                                maxWidth: '80%',
                                                maxHeight: '80%',
                                                objectFit: 'contain',
                                                transition: 'transform 0.5s ease'
                                            }}
                                            className="study-img"
                                        />
                                    </div>
                                    <div className="content" style={{ padding: '0 5px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ color: primaryColor, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>Use Case</span>
                                        <h4 className="title" style={{ fontSize: '20px', fontWeight: '800', color: darkColor, marginBottom: '12px' }}>{study.title}</h4>
                                        <p style={{
                                            color: '#64748B',
                                            lineHeight: '1.6',
                                            marginBottom: '20px',
                                            fontSize: '14px',
                                            flex: 1
                                        }}>{study.description}</p>
                                        <Link to={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`} style={{
                                            color: primaryColor,
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            textDecoration: 'none'
                                        }} className="study-link">
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <style>{`
                        .case-study-card-premium:hover {
                            transform: translateY(-10px);
                            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                            border-color: ${primaryColor};
                        }
                        .case-study-card-premium:hover .study-img {
                            transform: scale(1.08);
                        }
                        .case-study-card-premium:hover .study-link {
                            gap: 12px;
                        }
                    `}</style>
                </div>
            </div>

            {/* 11. Final CTA */}
            <div className="rts-call-to-action-area rts-section-gapBottom" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three" style={{
                                background: `linear-gradient(135deg, ${darkColor} 0%, #0f172a 100%)`,
                                borderRadius: '20px',
                                padding: '60px 40px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '400px',
                                    height: '400px',
                                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                                    animation: 'pulse 3s ease-in-out infinite'
                                }}></div>
                                <h3 className="title" style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '15px', position: 'relative', zIndex: 1 }}>
                                    Ready to Transform Your Data?
                                </h3>
                                <p className="disc" style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                                    Partner with NeuraltrixAI to unlock the full potential of {platform.name}.
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary" style={{
                                    background: primaryColor,
                                    color: '#fff',
                                    padding: '16px 40px',
                                    borderRadius: '6px',
                                    fontWeight: '700',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    Schedule Consultation <i className="fa-regular fa-arrow-up"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
