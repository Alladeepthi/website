import { useParams, Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';
import { useEffect, useState } from 'react';

export const PlatformDetails = () => {
    const { id } = useParams<{ id: string }>();
    const platform = platformsData.find(p => p.id === id);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (platform?.testimonials) {
            const interval = setInterval(() => {
                setCurrentTestimonial((prev) =>
                    (prev + 1) % platform.testimonials!.items.length
                );
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [platform]);

    if (!platform) {
        return (
            <div className="rts-section-gap" style={{ textAlign: 'center', padding: '100px 20px' }}>
                <div className="container">
                    <h1>Platform not found</h1>
                    <Link to="/" className="rts-btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Banner/Hero Section */}
            <div className="banner-area-cyber-security bg_image" style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                paddingTop: '180px',
                marginTop: '-120px',
                paddingBottom: '60px'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="banner-content-cyber-security">
                                <div className="pre-title">
                                    <span className="pre">Home / Platforms / {platform.name}</span>
                                </div>
                                <h1 className="title rts-text-anime-style-1" style={{
                                    fontSize: '4rem',
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    marginBottom: '24px',
                                    letterSpacing: '-0.02em',
                                    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    {platform.hero.title}
                                </h1>
                                <p className="disc" style={{
                                    fontSize: '1.5rem',
                                    color: '#475569',
                                    lineHeight: 1.75,
                                    marginBottom: '36px',
                                    maxWidth: '750px'
                                }}>
                                    {platform.hero.description}
                                </p>
                                <div className="button-group">
                                    <Link to="/contact" className="rts-btn btn-primary with-arrow">
                                        Get Started <i className="fa-regular fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail-security-area-right" style={{
                                position: 'relative',
                                paddingLeft: '40px',
                                paddingTop: '50px'
                            }}>
                                <img
                                    src={platform.hero.image || '/assets/images/platform/Operating system-bro.png'}
                                    alt={platform.name}
                                    style={{
                                        width: '85%',
                                        height: 'auto',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Platform Overview Section */}
            <div className="rts-about-area rts-section-gap bg_light" style={{ padding: '30px 0 60px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                            }}>
                                <img
                                    src="/assets/images/platform/App development-rafiki.png"
                                    alt="Data Platform"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="title-center-wrapper text-center">
                                <span className="pre">{platform.overview.heading}</span>
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 800,
                                    marginTop: '20px'
                                }}>
                                    Intelligent Data Cloud Solutions
                                </h2>
                                <p className="disc" style={{
                                    fontSize: '1.375rem',
                                    color: '#475569',
                                    lineHeight: 1.8,
                                    maxWidth: '900px',
                                    margin: '24px auto 0'
                                }}>
                                    {platform.overview.content}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                            }}>
                                <img
                                    src="/assets/images/platform/Online world-bro.png"
                                    alt="Cloud Solutions"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions/Services Section */}
            <div className="rts-service-area rts-section-gap" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper text-center">
                                <span className="pre">Our Solutions</span>
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 800,
                                    marginTop: '20px'
                                }}>
                                    {platform.solutions.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {platform.solutions.items.map((solution, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div
                                    className="single-service-security"
                                    style={{
                                        background: 'white',
                                        borderRadius: '24px',
                                        padding: '40px',
                                        border: '1px solid #e2e8f0',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
                                        e.currentTarget.style.borderColor = '#3B82F6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                    }}
                                >
                                    <div className="icon" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                                        marginBottom: '32px',
                                        color: '#3B82F6',
                                        fontSize: '2.5rem',
                                        transition: 'transform 0.4s ease'
                                    }}>
                                        <i className={solution.icon}></i>
                                    </div>
                                    <h5 className="title" style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        marginBottom: '16px',
                                        color: '#0f172a',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {solution.title}
                                    </h5>
                                    <p className="disc" style={{
                                        fontSize: '1.25rem',
                                        color: '#475569',
                                        lineHeight: 1.7
                                    }}>
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Studies - Dark Section */}
            {/* Key Features (prev. Case Studies) - Dark Section */}
            <div className="rts-keyfeature-area" style={{ padding: '80px 0', background: '#000000' }}>
                <div className="container-full-bg-dark" style={{ background: 'transparent' }}>
                    <div className="row rts-section-gap" style={{ padding: '0' }}>
                        <div className="col-lg-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="title-center-wrapper text-center">
                                            <span className="pre" style={{ color: '#94a3b8' }}>Key Features</span>
                                            <h2 className="title rts-text-anime-style-1" style={{
                                                fontSize: '3.5rem',
                                                fontWeight: 800,
                                                marginTop: '20px',
                                                color: 'white'
                                            }}>
                                                <span style={{
                                                    background: 'linear-gradient(135deg, #3B82F6 0%, #A78BFA 50%, #E957E7 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}>
                                                    {platform.whyChoose.title}
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-5 mt--40">
                                    {platform.whyChoose.items.map((item, index) => (
                                        <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="single-service-security" style={{
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: '24px',
                                                padding: '40px',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(10px)',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                height: '100%',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                            }}>
                                                <h5 className="title" style={{
                                                    fontSize: '1.875rem',
                                                    fontWeight: 700,
                                                    marginBottom: '18px',
                                                    color: 'white',
                                                    letterSpacing: '-0.01em'
                                                }}>
                                                    {item.title}
                                                </h5>
                                                <p className="disc" style={{
                                                    fontSize: '1.5rem',
                                                    color: '#a8a8a8',
                                                    lineHeight: 1.7
                                                }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Studies (prev. Why Choose Us) - Light Accordion Section */}
            <div className="rts-case-studies rts-section-gap" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <div className="title-left-wrapper">
                                    <span className="pre">Case Studies</span>
                                    <h2 className="title rts-text-anime-style-1" style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 800,
                                        marginTop: '10px'
                                    }}>
                                        Real-World Success <br /> Stories
                                    </h2>
                                </div>
                                <div className="right-area">
                                    <p className="disc" style={{ maxWidth: '400px', color: '#475569', fontSize: '1.125rem' }}>
                                        We deliver results. Our success is measured by the impact we create for our clients across industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--70">
                        <div className="col-lg-12">
                            <div className="accordion-faq-one in-working-process in-case-cyber">
                                <div className="accordion" id="caseStudiesAccordion">
                                    {platform.caseStudies.items.map((study, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`caseHeading${index}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#caseCollapse${index}`}
                                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                                    aria-controls={`caseCollapse${index}`}
                                                >
                                                    <span>{2021 + index}. </span> {study.title}
                                                </button>
                                            </h2>
                                            <div
                                                id={`caseCollapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`caseHeading${index}`}
                                                data-bs-parent="#caseStudiesAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p className="disc" style={{ fontSize: '1.25rem', color: '#475569' }}>
                                                        {study.description}
                                                    </p>
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


            {/* Testimonials Section */}
            {
                platform.testimonials && (
                    <div className="rts-service-area rts-section-gap" style={{
                        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                        padding: '60px 0'
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-center-wrapper text-center">
                                        <span className="pre">Testimonials</span>
                                        <h2 className="title rts-text-anime-style-1" style={{
                                            fontSize: '2.75rem',
                                            fontWeight: 800,
                                            marginTop: '20px'
                                        }}>
                                            {platform.testimonials.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--60">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="single-service-security" style={{
                                        background: 'white',
                                        borderRadius: '24px',
                                        padding: '60px',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                        border: '1px solid #e2e8f0',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            fontSize: '5rem',
                                            color: '#3B82F6',
                                            opacity: 0.15,
                                            position: 'absolute',
                                            top: '30px',
                                            left: '40px',
                                            fontFamily: 'Georgia, serif',
                                            lineHeight: 1
                                        }}>"</div>
                                        <p style={{
                                            fontSize: '1.625rem',
                                            color: '#1e293b',
                                            lineHeight: 1.85,
                                            marginBottom: '36px',
                                            fontStyle: 'italic'
                                        }}>
                                            {platform.testimonials.items[currentTestimonial].quote}
                                        </p>
                                        <div>
                                            <h5 style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                                color: '#0f172a',
                                                marginBottom: '6px'
                                            }}>
                                                {platform.testimonials.items[currentTestimonial].author}
                                            </h5>
                                            <p style={{
                                                fontSize: '1.375rem',
                                                color: '#64748b',
                                                fontWeight: 500
                                            }}>
                                                {platform.testimonials.items[currentTestimonial].role}, {platform.testimonials.items[currentTestimonial].company}
                                            </p>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: '14px',
                                            marginTop: '40px'
                                        }}>
                                            {platform.testimonials.items.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentTestimonial(index)}
                                                    style={{
                                                        width: currentTestimonial === index ? '36px' : '12px',
                                                        height: '12px',
                                                        borderRadius: currentTestimonial === index ? '6px' : '50%',
                                                        background: currentTestimonial === index ? '#3B82F6' : '#cbd5e1',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Resources/Blog Section */}
            {
                platform.resources && (
                    <div className="rts-service-area rts-section-gap bg_light" style={{ padding: '60px 0' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-center-wrapper text-center">
                                        <span className="pre">Resources</span>
                                        <h2 className="title rts-text-anime-style-1" style={{
                                            fontSize: '2.75rem',
                                            fontWeight: 800,
                                            marginTop: '20px'
                                        }}>
                                            {platform.resources.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-5 mt--40">
                                {platform.resources.items.map((resource, index) => (
                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="single-service-security" style={{
                                            background: 'white',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            height: '100%'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                                height: '220px',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            }}>
                                                <img
                                                    src={`/assets/images/platform/${index === 0 ? 'Video files-rafiki.png' :
                                                        index === 1 ? 'Social tree-rafiki.png' :
                                                            'Computer login-rafiki.png'
                                                        }`}
                                                    alt={resource.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.4s ease'
                                                    }}
                                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                            </div>
                                            <div style={{ padding: '36px' }}>
                                                <h5 className="title" style={{
                                                    fontSize: '1.625rem',
                                                    fontWeight: 700,
                                                    color: '#0f172a',
                                                    marginBottom: '14px',
                                                    lineHeight: 1.4
                                                }}>
                                                    {resource.title}
                                                </h5>
                                                <p className="disc" style={{
                                                    fontSize: '1.5rem',
                                                    color: '#475569',
                                                    lineHeight: 1.7,
                                                    marginBottom: '24px'
                                                }}>
                                                    {resource.excerpt}
                                                </p>
                                                <a href={resource.link || '#'} className="rts-btn btn-primary with-arrow btn-white btn-border">
                                                    Continue Reading <i className="fa-regular fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }

            {/* FAQ Section */}
            <div className="rts-service-area rts-section-gap" style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                padding: '80px 0'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper text-center">
                                <span className="pre" style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    color: '#3B82F6',
                                    fontWeight: 600
                                }}>FAQ</span>
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 800,
                                    marginTop: '10px'
                                }}>
                                    Your Questions, Answered
                                </h2>
                                <p style={{
                                    fontSize: '1.375rem',
                                    color: '#475569',
                                    marginTop: '15px',
                                    maxWidth: '700px',
                                    margin: '15px auto 0'
                                }}>
                                    Everything you need to know about our Snowflake implementation process.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--40 align-items-start">
                        {/* Left Column - Sticky Contact Card */}
                        <div className="col-lg-4">
                            <div style={{
                                position: 'sticky',
                                top: '100px',
                                background: '#1e293b',
                                borderRadius: '24px',
                                padding: '40px',
                                color: 'white',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '20px', color: '#60a5fa' }}>
                                    <i className="fa-light fa-comments-question-check"></i>
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '15px', color: 'white' }}>
                                    Need more help?
                                </h3>
                                <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '30px', lineHeight: 1.6 }}>
                                    Can't find the answer you're looking for? Our team is here to help you get started.
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Contact Support <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Accordion */}
                        <div className="col-lg-8">
                            <div className="accordion-wrapper">
                                {platform.faq.map((item, index) => (
                                    <div
                                        key={index}
                                        className="faq-item"
                                        style={{
                                            background: 'white',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '16px',
                                            marginBottom: '16px',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            boxShadow: activeFaq === index ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
                                        }}
                                    >
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '24px 30px',
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '20px'
                                            }}
                                        >
                                            <span style={{
                                                fontSize: '1.25rem',
                                                fontWeight: 700,
                                                color: activeFaq === index ? '#3B82F6' : '#1e293b',
                                                transition: 'color 0.3s'
                                            }}>
                                                {item.question}
                                            </span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: activeFaq === index ? '#3B82F6' : '#f1f5f9',
                                                color: activeFaq === index ? 'white' : '#64748b',
                                                transition: 'all 0.3s'
                                            }}>
                                                <i className={`fa-regular fa-${activeFaq === index ? 'minus' : 'plus'}`}></i>
                                            </span>
                                        </button>
                                        <div style={{
                                            maxHeight: activeFaq === index ? '500px' : '0',
                                            opacity: activeFaq === index ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}>
                                            <div style={{
                                                padding: '0 30px 30px',
                                                fontSize: '1.125rem',
                                                color: '#475569',
                                                lineHeight: 1.7,
                                                borderTop: '1px solid #f1f5f9',
                                                marginTop: '10px',
                                                paddingTop: '20px'
                                            }}>
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="rts-service-area rts-section-gap" style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #4F46E5 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper text-center">
                                <h2 className="title rts-text-anime-style-1" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 800,
                                    color: 'white',
                                    marginBottom: '20px'
                                }}>
                                    Ready to Transform Your Data?
                                </h2>
                                <p style={{
                                    fontSize: '1.375rem',
                                    color: 'rgba(255, 255, 255, 0.95)',
                                    marginBottom: '40px',
                                    maxWidth: '700px',
                                    margin: '0 auto 40px'
                                }}>
                                    Let's discuss how NeuralTrix AI can help you leverage Snowflake for intelligent data solutions.
                                </p>
                                <Link
                                    to="/contact"
                                    className="rts-btn btn-primary"
                                    style={{
                                        background: 'white',
                                        color: '#3B82F6',
                                        padding: '20px 44px',
                                        borderRadius: '50px',
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    Get Started Today <i className="fa-regular fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
