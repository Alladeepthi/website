import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';

export const IndustryDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const industry = industriesData.find(i => i.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!industry) {
        return <Navigate to="/industry" replace />;
    }

    return (
        <div className="industry-details-page">
            {/* Hero Section */}
            <div className="rts-breadcrumb-area breadcrumb-bg bg_image" style={{ backgroundImage: `url(${industry.hero.image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-12 breadcrumb-1 text-center">
                            <div className="bread-tag" style={{ justifyContent: 'center', marginBottom: '20px', display: 'flex', gap: '5px' }}>
                                <Link to="/" style={{ color: '#ddd' }}>Home</Link>
                                <span style={{ color: '#ddd' }}> / </span>
                                <Link to="/industry" style={{ color: '#ddd' }}>Industry</Link>
                                <span style={{ color: '#ddd' }}> / </span>
                                <span className="active" style={{ color: 'white' }}>{industry.name}</span>
                            </div>
                            <h1 className="title" style={{ marginBottom: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{industry.hero.title}</h1>
                            <p className="disc mx-auto" style={{ fontSize: '18px', maxWidth: '800px', marginBottom: '30px', color: '#f0f0f0', lineHeight: '1.6' }}>
                                {industry.hero.description}
                            </p>
                            <Link to="/contact" className="rts-btn btn-primary">Schedule a Strategy Session</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail">
                                <img src={industry.overview.image} alt={industry.name} style={{ borderRadius: '15px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--40 mt_sm--40">
                            <div className="title-area-left-style pl--30 pl_sm--0 pl_md--0">
                                <span className="pre">Industry Insights</span>
                                <h2 className="title">{industry.overview.heading}</h2>
                                <p className="disc">
                                    {industry.overview.content}
                                </p>

                                <div className="row mt--30">
                                    {industry.benefits.items.map((benefit, index) => (
                                        <div key={index} className="col-md-6 mb--15">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-circle-check" style={{ color: '#3A70FF', marginRight: '10px', fontSize: '18px' }}></i>
                                                <span style={{ fontWeight: 600, color: '#1F2937' }}>{benefit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className="rts-service-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="title mb--50">{industry.challenges.title}</h2>
                        </div>
                    </div>
                    <div className="row g-5">
                        {industry.challenges.items.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="service-style-two" style={{ background: 'white', padding: '40px', borderRadius: '12px', height: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                    <div className="icon mb--20">
                                        <i className="fa-regular fa-triangle-exclamation" style={{ fontSize: '32px', color: '#FF9F43' }}></i>
                                    </div>
                                    <h4 className="title" style={{ fontSize: '20px' }}>{item.title}</h4>
                                    <p className="disc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="title mb--50">{industry.solutions.title}</h2>
                        </div>
                    </div>
                    <div className="row g-5">
                        {industry.solutions.items.map((sol, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="solution-item d-flex align-items-start" style={{
                                    padding: '30px',
                                    border: '1px solid #EAEAEA',
                                    borderRadius: '12px',
                                    height: '100%',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="icon" style={{ minWidth: '60px', marginRight: '20px' }}>
                                        <img src={sol.icon || "/assets/images/why-choose/05.svg"} alt={sol.title} style={{ width: '50px' }} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title" style={{ fontSize: '22px', marginBottom: '10px' }}>{sol.title}</h4>
                                        <p style={{ margin: 0 }}>{sol.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Area */}
            <div className="rts-call-to-action-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">
                                    Engineering Solutions for {industry.name}
                                </h3>
                                <p className="disc">
                                    Ready to modernize your infrastructure and build competitive advantage?
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary">Start Your Transformation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
