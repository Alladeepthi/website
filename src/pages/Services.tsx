import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

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
                                <h1 className="title rts-text-anime-style-1">Engineering Digital Excellence</h1>
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
                        <div className="col-lg-12 mb--50">
                            <div className="feature-area-left-three text-center">
                                <div className="title-left-wrapper">
                                    <span className="pre">Our Expertise</span>
                                    <h2 className="title rts-text-anime-style-1">End-to-End Product Engineering</h2>
                                </div>
                                <p className="disc mb--20 mx-auto" style={{ maxWidth: '800px' }}>
                                    We deliver comprehensive technology solutions that span the entire digital lifecycle.
                                    From robust backend architectures to intuitive frontend experiences, our engineering teams build systems that scale.
                                </p>
                            </div>
                        </div>
                        {servicesData.map((service) => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="single-feature-area-three" style={{ height: '100%' }}>
                                    <div className="icon">
                                        <img src={`/assets/images/feature/${service.icon}`} alt={service.title} />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{service.title}</h3>
                                        <p className="disc" style={{ marginBottom: '15px' }}>{service.description}</p>
                                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                                            {service.subCategories.slice(0, 3).map((sub, i) => (
                                                <li key={i} style={{ fontSize: '14px', marginBottom: '5px', color: '#5D666F' }}>
                                                    <i className="fa-solid fa-check" style={{ marginRight: '8px', color: '#3A70FF' }}></i>
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/service-details" state={{ service }} className="round-btn">
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
                                    <h2 className="title rts-text-anime-style-1">The Neuraltrix Advantage</h2>
                                </div>
                                <p className="disc">
                                    We are more than just developers; we are strategic partners in your digital transformation.
                                    Our focus on engineering rigor and business outcomes ensures that every solution we build delivers real value.
                                </p>
                                <div className="reason-wrapper">
                                    {[
                                        { title: 'Industry Experts', icon: '/assets/images/why-choose/01.svg' },
                                        { title: 'Proven Methodology', icon: '/assets/images/why-choose/02.svg' },
                                        { title: 'Transparent Process', icon: '/assets/images/why-choose/03.svg' },
                                        { title: 'Long-term Support', icon: '/assets/images/why-choose/04.svg' },
                                    ].map((reason, i) => (
                                        <div className="single-reason" key={i}>
                                            <div className="icon">
                                                <img src={reason.icon} alt="choose" />
                                            </div>
                                            <h5 className="title" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                                                {reason.title}
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
                                <h3 className="title rts-text-anime-style-1">Ready to build something extraordinary?</h3>
                                <p className="disc">Partner with our engineering team to turn your vision into a scalable reality.</p>
                                <Link to="/contact" className="rts-btn btn-primary">Start Your Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
