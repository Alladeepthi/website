import React from 'react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
    return (
        <div className="rts-service-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-wrapper">
                            <span className="pre">What We Offer</span>
                            <h2 className="title rts-text-anime-style-1">Advanced Machine <br /> Learning Solutions</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {[
                        { img: '19.webp', title: 'Comprehensive AI Solutions' },
                        { img: '20.webp', title: 'Custom Machine <br> Learning Models' },
                        { img: '21.webp', title: 'Cloud-Based <br> AI Platforms' },
                        { img: '22.webp', title: 'Real-Time Data Processing' },
                    ].map((service, i) => (
                        <div className="col-lg-3 col-md-6" key={i}>
                            <div className="single-service-wrapper-machine">
                                <Link to="/service-details" className="thumbnail">
                                    <img src={`/assets/images/service/${service.img}`} alt="service" />
                                </Link>
                                <div className="content">
                                    <h5 className="title" dangerouslySetInnerHTML={{ __html: service.title }}></h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
