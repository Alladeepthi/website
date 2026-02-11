import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

export const Services: React.FC = () => {
    return (
        <div className="rts-service-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper">
                            <span className="pre">Our Capabilities</span>
                            <h2 className="title rts-text-anime-style-1">Full-Cycle Product <br /> Engineering</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {servicesData.map((service) => (
                        <div className="col-lg-3 col-md-6" key={service.id}>
                            <div className="single-service-wrapper-machine">
                                <Link to="/service-details" state={{ service }} className="thumbnail">
                                    <div className="icon-wrapper" style={{
                                        height: '200px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#F6F7F9',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        padding: '10px'
                                    }}>
                                        <img src={`/assets/images/service/${service.icon}`} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                </Link>
                                <div className="content">
                                    <h5 className="title">
                                        <Link to="/service-details" state={{ service }}>{service.title}</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
