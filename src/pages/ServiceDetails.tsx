import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { servicesData } from '../data/services';

export const ServiceDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    // Prioritize passed state (from Link clicks), then URL param, then default to first service
    const service = location.state?.service ||
        (id ? servicesData.find(s => s.id === parseInt(id)) : null) ||
        servicesData[0];

    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        document.body.classList.add("service-details-page");
        return () => {
            document.body.classList.remove("service-details-page");
        };
    }, []);

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#1e293b';
    const lightBg = '#F8FAFC';
    const textColor = '#475569';

    // FAQ State
    const [activeFAQ, setActiveFAQ] = React.useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const faqData = [
        {
            question: "What types of IT consulting services do you offer?",
            answer: "Each pricing plan offers a unique combination of services such as web design, SEO, social media management, content marketing, & more."
        },
        {
            question: "Do I need to make an initial deposit?",
            answer: "Yes, we typically require an initial deposit to start the project. The amount depends on the specific service and project scope."
        },
        {
            question: "What types of accounts can I open online?",
            answer: "You can open various types of accounts including savings, checking, and business accounts directly through our secure online portal."
        }
    ];

    return (
        <main style={{ overflowX: 'hidden' }}>
            {/* 1. Hero / Header Section */}
            <div className="rts-service-details-breadcrumb-area" style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.7) 100%), url('/assets/images/banner/breadcrumb-01.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                padding: '250px 0 140px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title" style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>Service</h1>
                            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0, fontSize: '16px', opacity: 0.8 }}>
                                <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '12px' }}></i></li>
                                <li><Link to="/services" style={{ color: '#fff' }}>Services</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '12px' }}></i></li>
                                <li><span style={{ color: primaryColor }}>{service.title}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Intro Section with Floating CTA */}
            <div className="rts-service-intro-area rts-section-gap" style={{ padding: '100px 0', position: 'relative' }}>
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
                                }}>Creative & Professional</span>
                                <h2 className="title" style={{
                                    fontSize: '42px',
                                    fontWeight: '800',
                                    lineHeight: '1.2',
                                    marginBottom: '25px',
                                    color: darkColor
                                }}>
                                    {service.subtitle || "Idea - Creativity, Better Business Solutions"}
                                </h2>
                                <p className="disc" style={{ fontSize: '18px', color: textColor, lineHeight: '1.8', marginBottom: '30px' }}>
                                    You can select us for your next project because we love to solve problems. {service.description}
                                </p>
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
                                    Learn more <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--30">
                            <div className="thumbnail-image" style={{ position: 'relative', width: '75%', margin: '0 auto' }}>
                                <img
                                    src={service.detailedFeatures?.[0]?.image ? service.detailedFeatures[0].image.replace(/ /g, '%20') : "/assets/images/service/13.webp"}
                                    alt="Service Intro"
                                    style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                />

                                {/* Floating CTA Card */}
                                <div className="cta-card" style={{
                                    position: 'absolute',
                                    bottom: '-40px',
                                    left: '-40px',
                                    background: darkColor,
                                    padding: '30px',
                                    borderRadius: '16px',
                                    color: '#fff',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    maxWidth: '300px',
                                    zIndex: 2
                                }}>
                                    <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px', fontWeight: '700' }}>Have a project in mind?</h4>
                                    <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>Just Dial: <a href="tel:01234567890" style={{ color: primaryColor, fontWeight: '700' }}>+123 456 7890</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Detailed Features Tab Section */}
            <div className="rts-service-area rts-section-gap" style={{ background: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Our Expertise</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Comprehensive Service <br /> Features</h2>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* Left: Interactive Feature List */}
                        <div className="col-lg-4 col-md-12">
                            <div className="service-menu-list shadow-sm" style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1px solid #f1f5f9' }}>
                                {(service.detailedFeatures || []).map((feature: any, index: number) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveFeature(index)}
                                        style={{
                                            padding: '20px 25px',
                                            borderBottom: index !== (service.detailedFeatures?.length || 0) - 1 ? '1px solid #f1f5f9' : 'none',
                                            cursor: 'pointer',
                                            background: activeFeature === index ? '#eff6ff' : 'transparent',
                                            borderLeft: activeFeature === index ? `4px solid ${primaryColor}` : '4px solid transparent',
                                            borderRadius: activeFeature === index ? '0 8px 8px 0' : '0',
                                            transition: 'all 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeFeature !== index) e.currentTarget.style.background = '#f8fafc';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeFeature !== index) e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        <i className={`fa-solid ${feature.icon}`} style={{
                                            color: activeFeature === index ? primaryColor : '#94a3b8',
                                            fontSize: '18px',
                                            width: '24px',
                                            textAlign: 'center',
                                            transition: 'color 0.3s'
                                        }}></i>
                                        <h6 style={{
                                            margin: 0,
                                            fontSize: '16px',
                                            fontWeight: activeFeature === index ? '700' : '500',
                                            color: activeFeature === index ? primaryColor : darkColor,
                                            transition: 'color 0.3s'
                                        }}>
                                            {feature.title}
                                        </h6>
                                        {activeFeature === index && <i className="fa-solid fa-chevron-right ms-auto" style={{ fontSize: '12px', color: primaryColor }}></i>}
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
                                key={activeFeature}
                                className="service-detail-content"
                                style={{
                                    background: `linear-gradient(145deg, #ffffff 0%, ${lightBg} 100%)`,
                                    borderRadius: '24px',
                                    padding: '50px',
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
                                    top: '30px',
                                    right: '30px',
                                    fontSize: '120px',
                                    opacity: '0.03',
                                    color: darkColor,
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }}>
                                    <i className={`fa-solid ${service.detailedFeatures?.[activeFeature]?.icon}`}></i>
                                </div>

                                <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                                    <div className="row align-items-center mb-4">
                                        <div className="col-md-5">
                                            <div className="service-img" style={{
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                                height: '240px',
                                                border: '4px solid #fff'
                                            }}>
                                                <img
                                                    src={service.detailedFeatures?.[activeFeature]?.image?.replace(/ /g, '%20') || "/assets/images/service/big-image-1.jpg"}
                                                    alt={service.detailedFeatures?.[activeFeature]?.title}
                                                    className="img-fluid"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h3 style={{ fontSize: '28px', fontWeight: '800', color: darkColor, marginBottom: '15px' }}>
                                                {service.detailedFeatures?.[activeFeature]?.title}
                                            </h3>
                                            <p style={{ fontSize: '16px', lineHeight: '1.7', color: textColor, marginBottom: '20px' }}>
                                                {service.detailedFeatures?.[activeFeature]?.description}
                                            </p>
                                        </div>
                                    </div>

                                    <hr style={{ borderColor: '#e2e8f0', margin: '30px 0', opacity: 0.5 }} />

                                    <div className="row g-3">
                                        {['Cost Effective', 'High Performance', '24/7 Support', 'Secure Architecture'].map((feat, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="d-flex align-items-center gap-3 p-3 rounded" style={{
                                                    background: '#fff',
                                                    border: '1px solid #f1f5f9',
                                                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                                    transition: 'transform 0.3s'
                                                }}>
                                                    <div className="icon-check" style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        background: `rgba(59, 130, 246, 0.1)`,
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '10px',
                                                        color: primaryColor
                                                    }}>
                                                        <i className="fa-solid fa-check"></i>
                                                    </div>
                                                    <span style={{ fontWeight: '600', color: darkColor, fontSize: '15px' }}>{feat}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Process Section */}
            <div className="rts-process-area" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="row mb--60 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Working Process</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Smooth & Creative <br /> Working Process</h2>
                        </div>
                    </div>
                    <div className="row g-5" style={{ position: 'relative' }}>

                        {[
                            { title: 'Finding Problems', icon: 'fa-magnifying-glass', num: '01' },
                            { title: 'Make Planning', icon: 'fa-chart-pie', num: '02' },
                            { title: 'Problem Solving', icon: 'fa-screwdriver-wrench', num: '03' },
                            { title: 'Finalize Solutions', icon: 'fa-check-to-slot', num: '04' }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="process-step-minimal" style={{
                                    textAlign: 'center',
                                    position: 'relative',
                                    marginTop: idx % 2 !== 0 ? '50px' : '0', // Zig-Zag Effect
                                    transition: 'all 0.3s'
                                }}>

                                    <div className="icon-circle" style={{
                                        width: '100px',
                                        height: '100px',
                                        border: `1px solid ${primaryColor}`,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 30px',
                                        color: primaryColor,
                                        fontSize: '32px',
                                        position: 'relative',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        background: '#fff',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = primaryColor;
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#fff';
                                            e.currentTarget.style.color = primaryColor;
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}>
                                        <i className={`fa-solid ${item.icon}`}></i>

                                        {/* Step Badge */}
                                        <span style={{
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            width: '30px',
                                            height: '30px',
                                            background: darkColor,
                                            color: '#fff',
                                            borderRadius: '50%',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '3px solid #fff'
                                        }}>{item.num}</span>
                                    </div>

                                    {/* Curved Arrow Connector */}
                                    {idx < 3 && (
                                        <div className="arrow-connector d-none d-lg-block" style={{
                                            position: 'absolute',
                                            top: idx % 2 === 0 ? '40px' : '-20px',
                                            right: '-90px',
                                            width: '100px',
                                            height: '60px',
                                            zIndex: 0,
                                            pointerEvents: 'none'
                                        }}>
                                            <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                                                <path
                                                    d={idx % 2 === 0
                                                        ? "M0,10 C40,10 60,50 100,50"
                                                        : "M0,50 C40,50 60,10 100,10"}
                                                    fill="none"
                                                    stroke="#cbd5e1"
                                                    strokeWidth="2"
                                                    strokeDasharray="6 4"
                                                />
                                                <polygon points={idx % 2 === 0 ? "95,45 100,50 95,55" : "95,5 100,10 95,15"} fill="#cbd5e1" />
                                            </svg>
                                        </div>
                                    )}

                                    <h4 className="title" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: darkColor }}>
                                        {item.title}
                                    </h4>
                                    <p className="disc" style={{ color: textColor, fontSize: '15px', lineHeight: '1.6', marginBottom: 0 }}>
                                        We analyze the core issues and develop a strategic roadmap for success.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* 6. Testimonials (Circular Layout Simulation) */}
            <div className="rts-testimonial-area" style={{ background: `linear-gradient(135deg, ${lightBg} 0%, #fff 100%)`, padding: '100px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Circular Animation Area */}
                            <div className="circle-animation-area" style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Central Hub */}
                                <div className="center-circle" style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(145deg, ${darkColor}, #0f172a)`,
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 10,
                                    boxShadow: '0 20px 50px rgba(30, 41, 59, 0.25)',
                                    border: '6px solid rgba(255,255,255,0.1)'
                                }}>
                                    <h2 style={{ fontSize: '36px', fontWeight: '800', margin: 0, lineHeight: 1 }}>318+</h2>
                                    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9, marginTop: '5px' }}>Happy Clients</span>
                                </div>

                                {/* Outer Orbit Ring (Clockwise) */}
                                <div className="orbit-ring-outer" style={{
                                    position: 'absolute', width: '380px', height: '380px',
                                    border: '1px dashed #cbd5e1', borderRadius: '50%',
                                    animation: 'spin-right-ring 30s linear infinite'
                                }}>
                                    {/* Item 1: Projects (Top) */}
                                    <div className="orbit-item" style={{ position: 'absolute', top: '0', left: '50%', animation: 'counter-spin-left 30s linear infinite' }}>
                                        <div className="glass-card">
                                            <span style={{ color: primaryColor, fontSize: '18px', fontWeight: '800' }}>295+</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', color: darkColor }}>Projects</span>
                                        </div>
                                    </div>
                                    {/* Item 2: Awards (Bottom) */}
                                    <div className="orbit-item" style={{ position: 'absolute', bottom: '0', left: '50%', animation: 'counter-spin-left 30s linear infinite' }}>
                                        <div className="glass-card">
                                            <span style={{ color: '#F59E0B', fontSize: '18px', fontWeight: '800' }}>70+</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', color: darkColor }}>Awards</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Inner Orbit Ring (Counter-Clockwise) */}
                                <div className="orbit-ring-inner" style={{
                                    position: 'absolute', width: '260px', height: '260px',
                                    border: '1px dashed #e2e8f0', borderRadius: '50%',
                                    animation: 'spin-left-ring 25s linear infinite'
                                }}>
                                    {/* Item 3: Experts (Left) */}
                                    <div className="orbit-item" style={{ position: 'absolute', top: '50%', left: '0', animation: 'counter-spin-right 25s linear infinite' }}>
                                        <div className="glass-card">
                                            <span style={{ color: '#10B981', fontSize: '16px', fontWeight: '800' }}>120+</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', color: darkColor }}>Experts</span>
                                        </div>
                                    </div>
                                    {/* Item 4: Years (Right) */}
                                    <div className="orbit-item" style={{ position: 'absolute', top: '50%', right: '0', animation: 'counter-spin-right 25s linear infinite' }}>
                                        <div className="glass-card">
                                            <span style={{ color: '#6366F1', fontSize: '16px', fontWeight: '800' }}>10+</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', color: darkColor }}>Years</span>
                                        </div>
                                    </div>
                                </div>

                                <style>{`
                                    .glass-card {
                                        background: rgba(255, 255, 255, 0.95);
                                        backdrop-filter: blur(8px);
                                        padding: 10px 20px;
                                        border-radius: 40px;
                                        box-shadow: 0 8px 20px rgba(0,0,0,0.06);
                                        border: 2px solid #fff;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        justify-content: center;
                                        min-width: 110px;
                                        white-space: nowrap;
                                        z-index: 5;
                                    }
                                    
                                    /* Ring Animations (No translate needed) */
                                    @keyframes spin-right-ring { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                                    @keyframes spin-left-ring { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                                    
                                    /* Item Animations (Must include translate to maintain centering) */
                                    @keyframes counter-spin-left { 
                                        from { transform: translate(-50%, -50%) rotate(0deg); } 
                                        to { transform: translate(-50%, -50%) rotate(-360deg); } 
                                    }
                                    @keyframes counter-spin-right { 
                                        from { transform: translate(-50%, -50%) rotate(0deg); } 
                                        to { transform: translate(-50%, -50%) rotate(360deg); } 
                                    }
                                `}</style>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="testimonial-content">
                                <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Testimonials</span>
                                <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor, marginBottom: '20px' }}>Our Happy Client's <br /> say about us</h2>
                                <p className="disc" style={{ fontSize: '18px', color: textColor, lineHeight: '1.8', fontStyle: 'italic' }}>
                                    "You can select us for your next project because we love to solve problems. Their regular typesetting, meaning us readable content in the layout."
                                </p>
                                <div className="author-info" style={{ marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '700', color: darkColor }}>David Miller</h5>
                                    <span style={{ color: primaryColor }}>CEO, TechGrow</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Brand Logos (Enhanced Marquee) */}
            <div className="rts-brand-area" style={{ padding: '80px 0', borderTop: '1px solid #f1f5f9', background: lightBg }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p style={{
                                marginBottom: '40px',
                                fontWeight: '700',
                                color: '#64748b',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontSize: '13px'
                            }}>Trusted by Industry Leaders</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="brand-marquee-wrapper" style={{
                                overflow: 'hidden',
                                position: 'relative',
                                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                            }}>
                                <div className="brand-track" style={{
                                    display: 'flex',
                                    width: 'max-content',
                                    animation: 'scroll 40s linear infinite',
                                    gap: '80px'
                                }}>
                                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
                                        <div key={i} className="brand-item" style={{
                                            flexShrink: 0,
                                            opacity: 0.5,
                                            filter: 'grayscale(100%)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity = '1';
                                                e.currentTarget.style.filter = 'grayscale(0%)';
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity = '0.5';
                                                e.currentTarget.style.filter = 'grayscale(100%)';
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}>
                                            <img
                                                src={`/assets/images/brand/0${num}.svg`}
                                                alt={`Brand ${num}`}
                                                style={{ height: '35px', width: 'auto' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>
            </div>

            {/* 8. FAQ Section */}
            <div className="rts-faq-area" style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: primaryColor,
                                    fontWeight: '700',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>Our Service Process</span>
                                <h2 className="title" style={{
                                    fontSize: '36px',
                                    fontWeight: '800',
                                    marginBottom: '20px',
                                    color: darkColor
                                }}>Frequently Asked Questions</h2>
                                <p className="disc" style={{
                                    fontSize: '16px',
                                    color: textColor,
                                    lineHeight: '1.6',
                                    marginBottom: '40px'
                                }}>
                                    We understand that every business is unique, which is why we offer flexible pricing options to meet your specific needs.
                                </p>

                                <div className="accordion-wrapper">
                                    {faqData.map((item, index) => (
                                        <div key={index} className="accordion-item" style={{
                                            borderBottom: '1px solid #e2e8f0',
                                            padding: '24px 0',
                                            cursor: 'pointer'
                                        }} onClick={() => toggleFAQ(index)}>
                                            <div className="accordion-header" style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <h5 style={{
                                                    margin: 0,
                                                    fontSize: '18px',
                                                    fontWeight: '700',
                                                    color: darkColor,
                                                    paddingRight: '20px'
                                                }}>{item.question}</h5>
                                                <span style={{
                                                    fontSize: '24px',
                                                    color: primaryColor,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    minWidth: '24px'
                                                }}>
                                                    <i className={`fa-solid ${activeFAQ === index ? 'fa-circle-minus' : 'fa-circle-plus'}`}></i>
                                                </span>
                                            </div>
                                            <div className="accordion-body" style={{
                                                maxHeight: activeFAQ === index ? '200px' : '0',
                                                overflow: 'hidden',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                marginTop: activeFAQ === index ? '15px' : '0',
                                                opacity: activeFAQ === index ? 1 : 0
                                            }}>
                                                <p style={{
                                                    margin: 0,
                                                    color: textColor,
                                                    fontSize: '16px',
                                                    lineHeight: '1.6'
                                                }}>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--50 pl_sm--15">
                            <div className="thumbnail-image" style={{ position: 'relative' }}>
                                <img src="/assets/images/faq/01.webp" alt="FAQ" style={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 9. Case Studies (Refined Card Styling) */}
            {service.caseStudies && service.caseStudies.length > 0 && (
                <div className="rts-case-study-area-bottom rts-section-gap" style={{ background: '#F8FAFC', padding: '100px 0' }}>
                    <div className="container">
                        <div className="row mb--50 text-center">
                            <div className="col-12">
                                <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Proven Results</span>
                                <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Related Success Stories</h2>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {service.caseStudies.map((study: any, index: number) => (
                                <div className="col-lg-4 col-md-6" key={index}>
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
                                                src={study.image}
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
                                        <div className="content" style={{ padding: '0 5px' }}>
                                            <h4 className="title" style={{
                                                fontSize: '20px',
                                                fontWeight: '800',
                                                color: darkColor,
                                                marginBottom: '12px'
                                            }}>{study.title}</h4>
                                            <p style={{
                                                color: '#64748B',
                                                lineHeight: '1.6',
                                                marginBottom: '20px',
                                                fontSize: '14px'
                                            }}>{study.description}</p>
                                            <Link to={study.link || `/case-studies/${study.title.toLowerCase().replace(/ /g, '-')}`} style={{
                                                color: primaryColor,
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                textDecoration: 'none'
                                            }} className="study-link">
                                                Read Case Study <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
            )}
        </main >
    );
};

export default ServiceDetails;
