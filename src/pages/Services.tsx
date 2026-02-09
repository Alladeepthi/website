import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
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

    const serviceList = [
        { title: 'IT Consulting', icon: '/assets/images/feature/01.svg', tech: 'Tailored IT strategies to improve business efficiency.' },
        { title: 'Cloud Migration', icon: '/assets/images/feature/02.svg', tech: 'Helping businesses move their operations to the cloud.' },
        { title: 'Cyber security', icon: '/assets/images/feature/03.svg', tech: 'Protection against cyber threats with advanced security systems.' },
        { title: 'Software Development', icon: '/assets/images/feature/04.svg', tech: 'Custom software solutions for business needs.' },
        { title: 'Managed IT Services', icon: '/assets/images/feature/05.svg', tech: 'Complete IT support, from monitoring to maintenance.' },
        { title: 'IT Infrastructure Setup', icon: '/assets/images/feature/06.svg', tech: 'Building and managing the physical and virtual IT infrastructure' },
    ];

    return (
        <main>
            {/* rts about-breadcrumb-area-start */}
            <div className="rts-about-breadcrumb-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="rts-about-breadcrumb-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li className="active"><a href="#" className="active">Services</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Unlock the Potential of Advanced IT Services</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 pl--50 pl_md--10 pl_sm--10">
                            <div className="rts-about-breadcrumb-image">
                                <img src="/assets/images/about/05.webp" alt="services" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about-breadcrumb-area-end */}

            {/* rts feature area start */}
            <div className="rts-feature-area-three rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="feature-area-left-three">
                                <div className="title-left-wrapper">
                                    <span className="pre">Features</span>
                                    <h2 className="title rts-text-anime-style-1">Expert Solutions to Power Your Business Growth</h2>
                                </div>
                                <p className="disc mb--20">
                                    Fuel your business growth with our expert IT services. We provide innovative, cost-effective
                                    solutions that streamline your operations, enhance security, and boost overall productivity.
                                </p>
                                <a href="#" className="btn-line"><span>View All Service</span> <i className="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>
                        {serviceList.map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-feature-area-three">
                                    <div className="icon">
                                        <img src={service.icon} alt={service.title} />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{service.title}</h3>
                                        <p className="disc">{service.tech}</p>
                                        <Link to="/service-details" className="round-btn">
                                            <i className="fa-sharp-duotone fa-light fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* rts feature area end */}

            {/* rts why choose us start */}
            <div className="why-chooseus-area rts-section-gap bg-light-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="why-choose-left-content">
                                <div className="title-left-wrapper">
                                    <h2 className="title rts-text-anime-style-1">The Digix Business <br /> Agency Difference</h2>
                                </div>
                                <p className="disc">
                                    We provide a wide range of customized solutions designed to meet the unique challenges of
                                    your business. Whether you're looking to enhance your brand, streamline operations
                                </p>
                                <div className="reason-wrapper">
                                    {[
                                        { title: 'Expertise Team Member', icon: '/assets/images/why-choose/01.svg' },
                                        { title: 'Commitment to Excellence', icon: '/assets/images/why-choose/02.svg' },
                                        { title: '100% Client satisfaction', icon: '/assets/images/why-choose/03.svg' },
                                        { title: 'Dedicated Support', icon: '/assets/images/why-choose/04.svg' },
                                    ].map((reason, i) => (
                                        <div className="single-reason" key={i}>
                                            <div className="icon">
                                                <img src={reason.icon} alt="choose" />
                                            </div>
                                            <h5 className="title" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                                                {reason.title.split(' ').slice(0, 2).join(' ')} <br /> {reason.title.split(' ').slice(2).join(' ')}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-6 mt_sm--50 mt_md--50">
                            <div className="why-choose-iamge-two">
                                <img src="/assets/images/why-choose/01.jpg" alt="image" className="one" />
                                <img src="/assets/images/why-choose/02.jpg" alt="image" className="two" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts why choose us end */}

            {/* rts call to action area start */}
            <div className="rts-call-to-action-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">No long-term contracts. No catches. Simple.</h3>
                                <p className="disc">Start your 30-day free trial. Cancel anytime. View demo Start free trial</p>
                                <Link to="/contact" className="rts-btn btn-primary">Started for Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
