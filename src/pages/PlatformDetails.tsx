import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';

export const PlatformDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const platform = platformsData.find(p => p.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!platform) {
        return <Navigate to="/platforms" replace />;
    }

    return (
        <div className="platform-details-page">
            {/* Hero Section */}
            <div className="rts-breadcrumb-area breadcrumb-bg bg_image" style={platform.hero.image ? { backgroundImage: `url(${platform.hero.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 breadcrumb-1 text-center">
                            <div className="bread-tag" style={{ justifyContent: 'center', marginBottom: '20px', display: 'flex', gap: '5px' }}>
                                <Link to="/">Home</Link>
                                <span> / </span>
                                <span className={platform.hero.title ? "" : "active"}>Platforms</span>
                                <span> / </span>
                                <span className="active">{platform.name}</span>
                            </div>
                            <h1 className="title" style={{ marginBottom: '20px' }}>{platform.hero.title}</h1>
                            <p className="disc mx-auto" style={{ fontSize: '18px', maxWidth: '800px', marginBottom: '30px' }}>
                                {platform.hero.description}
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Platform Overview */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail">
                                <img
                                    src={platform.overview.image || "https://placehold.co/600x400?text=Platform+Overview"}
                                    alt={platform.name}
                                    style={{ borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="about-inner-two">
                                <div className="title-area-one-left">
                                    <h2 className="title">{platform.overview.heading}</h2>
                                    <p className="disc">
                                        {platform.overview.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="rts-service-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="title mb--50">{platform.solutions.title || `Our ${platform.name} Solutions`}</h2>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="service-list-wrapper">
                                {platform.solutions.items.map((item, index) => (
                                    <div key={index} className="service-item mb--30" style={{ padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                        <h4 className="title">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="thumbnail text-center">
                                <img
                                    src={platform.solutions.image || "https://placehold.co/800x500?text=Solutions"}
                                    alt="Solutions"
                                    style={{ borderRadius: '10px', maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Studies */}
            {platform.caseStudies.items.length > 0 && (
                <div className="rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="title mb--40">{platform.caseStudies.title}</h2>
                            </div>
                        </div>
                        <div className="row g-5">
                            {platform.caseStudies.items.map((item, index) => (
                                <div key={index} className="col-lg-6">
                                    <div className="case-study-item" style={{ border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden' }}>
                                        <div className="thumbnail">
                                            <img src={item.image || "https://placehold.co/600x300"} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="content" style={{ padding: '30px' }}>
                                            <h4 className="title">{item.title}</h4>
                                            <p>{item.description}</p>
                                            <Link to="/case-studies" className="rts-btn btn-border mt--20">Read Case Study</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Why Choose Us */}
            <div className="rts-section-gap bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="title mb--40">{platform.whyChoose.title || `Why Choose Us for ${platform.name}?`}</h2>
                            <div className="row g-4">
                                {platform.whyChoose.items.map((item, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="feature-item" style={{ background: 'white', padding: '25px', borderRadius: '10px' }}>
                                            <h5 className="title">{item.title}</h5>
                                            <p className="mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="thumbnail pl--30">
                                <img src="/assets/images/platform/Innovation-rafiki.png" alt="Why Choose Us" style={{ borderRadius: '15px', width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials (Static for now, can be dynamic later) */}
            {/* ... */}

            {/* FAQ Section */}
            {platform.faq.length > 0 && (
                <div className="rts-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="title mb--50">{platform.name} Platform FAQs</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="accordion-wrapper">
                                    {platform.faq.map((item, index) => (
                                        <div key={index} className="accordion-item mb--20" style={{ borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                            <h5 className="title mb--10">{item.question}</h5>
                                            <p>{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
