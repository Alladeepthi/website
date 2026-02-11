import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';

export const Industry: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main>
            {/* Banner Area Start */}
            <div className="rts-career-banner-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="career-banner-wrapper">
                                <span className="pre" style={{ display: 'block', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, color: '#3A70FF' }}>
                                    Industry Expertise
                                </span>
                                <h1 className="title">
                                    Engineering Solutions for Critical Sectors
                                </h1>
                                <p className="disc">
                                    We bring deep domain expertise to the world's most demanding industries.
                                    Our engineering teams build compliant, secure, and scalable software that powers healthcare, finance, retail, and manufacturing.
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary btn-bold">Discuss Your Project</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--30 mt_sm--30">
                            <div className="thumbnail-top">
                                <img src="/assets/images/industry/tailored-solutions1.png" alt="Industry Solutions" style={{ borderRadius: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industries Grid */}
            <div className="rts-service-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper text-center mb--50">
                                <span className="pre">Sectors We Serve</span>
                                <h2 className="title rts-text-anime-style-1">Tailored Engineering <br /> for Your Industry</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {industriesData.map((industry) => (
                            <div key={industry.id} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-style-two" style={{
                                    background: 'white',
                                    padding: '40px',
                                    borderRadius: '16px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: '1px solid #EAEAEA'
                                }}>
                                    <h3 className="title" style={{ fontSize: '24px', marginBottom: '15px', fontWeight: 700 }}>{industry.name}</h3>
                                    <p className="disc" style={{ marginBottom: '25px', flex: 1, fontSize: '16px', lineHeight: '1.7', color: '#5D666F' }}>
                                        {industry.hero.description}
                                    </p>
                                    <Link to={`/industry/${industry.slug}`} className="btn-line" style={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                                        Explore Solutions <i className="fa-regular fa-arrow-right ml--10" style={{ marginLeft: '10px' }}></i>
                                    </Link>
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
                                    Don't see your industry?
                                </h3>
                                <p className="disc">
                                    Our core engineering principles apply to any sector.
                                    Contact us to discuss how we can solve your specific technical challenges.
                                </p>
                                <Link to="/contact" className="rts-btn btn-primary">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
