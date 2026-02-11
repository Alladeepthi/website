import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ServiceDetails: React.FC = () => {
    const location = useLocation();
    const service = location.state?.service || {
        title: 'Empowering Businesses through Innovative Software',
        subCategories: [
            'Initial Consultation & Needs Assessment',
            'Strategy Development & Roadmap Creation',
            'Implementation & Integration'
        ]
    };

    useEffect(() => {
        document.body.className = "radious-4 demo-machine-learning";
        return () => {
            document.body.className = "";
        };
    }, []);

    return (
        <main>
            {/* rts service-details-breadcrumb-area-start */}
            <div className="rts-service-details-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><a href="#" className="active">Service Details</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1" dangerouslySetInnerHTML={{ __html: service.title }}></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* service details video area start */}
            <div className="rts-service-details-video-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-video-wrapper">
                                <div className="service-details-video-image">
                                    <img src="/assets/images/service/23.webp" alt="service" />
                                </div>
                                <div className="vedio-icone">
                                    <a className="video-play-button play-video popup-video" href="https://www.youtube.com/watch?v=vZE0j_WCRvI">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service details video area end */}

            {/* rts work-process-area-start */}
            <div className="rts-work-process-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr--70 pr_md--10 pr_sm--10">
                            <div className="work-process-content">
                                <div className="title-left-wrapper">
                                    <span className="pre">Work Planning</span>
                                    <h2 className="title rts-text-anime-style-1">Strategic IT Consulting to <br /> Drive Innovation and <br /> Growth</h2>
                                </div>
                                <div className="thumbnail-plunning-service-detials mt--60">
                                    <img src="/assets/images/service/24.webp" alt="process" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="working-process-list-wrapper">
                                {service.subCategories.map((subCat: string, i: number) => (
                                    <div className="single-working-process-area" key={i}>
                                        <h5 className="title">{subCat}</h5>
                                        <p className="disc">Comprehensive solution designed to meet your business needs.</p>
                                        <div className="tag-area-wrapper">
                                            <span className="tag-area">Service</span>
                                            <span className="tag-area">Solution</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* faq area start */}
            <div className="rts-faq-area-inner rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content-one">
                                <div className="title-left-wrapper">
                                    <h2 className="title rts-text-anime-style-1">Our Service Process Frequently Asked Questions</h2>
                                </div>
                                <div className="faq-sccordion-area-wrapper">
                                    <p className="disc">We understand that every business is unique, which is why we offer flexible pricing options to meet your specific needs.</p>
                                    <div className="accordon-pricing-wrapper-three">
                                        <div className="accordion" id="pricingAccordion">
                                            {[
                                                { id: 'One', q: 'What types of IT consulting services do you offer?', active: true },
                                                { id: 'Two', q: 'Do I need to make an initial deposit?' },
                                                { id: 'Three', q: 'What types of accounts can I open online?' },
                                            ].map((faq, i) => (
                                                <div className="accordion-item" key={i}>
                                                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                        <button className={`accordion-button ${faq.active ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.active ? 'true' : 'false'} aria-controls={`collapse${faq.id}`}>
                                                            {faq.q}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#pricingAccordion">
                                                        <div className="accordion-body">
                                                            Each pricing plan offers a unique combination of services such as web design, SEO, social media management, content marketing, & more.
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="thumbnail-faq">
                                <img src="/assets/images/service/25.webp" alt="faq" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* rts pricing area start */}
            <div className="rts-pricing-area rts-section-gapTop">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pr--50 pr_md--10 pr_sm--10">
                            <div className="row g-50">
                                {[
                                    { title: 'Professional', price: '$29' },
                                    { title: 'Enterprise', price: '$129' },
                                ].map((plan, i) => (
                                    <div className="col-lg-6" key={i}>
                                        <div className="single-pricing-wrapper-three">
                                            <div className="top-area">
                                                <h5 className="title">{plan.title}</h5>
                                            </div>
                                            <div className="bottom-area">
                                                <div className="price-area">
                                                    <h5 className="title">{plan.price}</h5>
                                                    <span className="disc">Per Month</span>
                                                </div>
                                                <p className="disc mb--20">Business by {plan.title} Plan</p>
                                                <div className="button-area">
                                                    <a href="#" className="rts-btn btn-primary">Select Plan</a>
                                                </div>
                                                <div className="list-area">
                                                    <ul>
                                                        {['Everything in Basic Plan, plus:', '24/7 IT Support (Phone & Chat)', 'Data Backup (Weekly)', 'Cloud Storage (Up to 200GB)', 'Software Integration Support'].map((item, j) => (
                                                            <li key={j} className={j > 2 && i === 0 ? 'disabled' : ''}>
                                                                <i className="fa-solid fa-check"></i>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-5 mt_md--50 mt_sm--50">
                            <div className="title-left-wrapper">
                                <span className="pre">Pricing</span>
                                <h2 className="title rts-text-anime-style-1">Flexible Pricing, <br /> Tailored to You</h2>
                            </div>
                            <div className="accordon-pricing-wrapper-three">
                                <div className="accordion" id="pricingAccordionDetails">
                                    {[
                                        { id: 'Four', q: "What's included in each plan?", active: true },
                                        { id: 'Five', q: "Can I upgrade or downgrade my plan later?" },
                                        { id: 'Six', q: "What payment methods do you accept?" },
                                    ].map((faq, i) => (
                                        <div className="accordion-item" key={i}>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button className={`accordion-button ${faq.active ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.active ? 'true' : 'false'} aria-controls={`collapse${faq.id}`}>
                                                    {faq.q}
                                                </button>
                                            </h2>
                                            <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#pricingAccordionDetails">
                                                <div className="accordion-body">
                                                    Each plan is designed to offer a specific set of services tailored to different business needs.
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

            <div className="rts-call-to-action-area rts-section-gap demo-app-development">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">Book a Free Consulting</h3>
                                <p className="disc">Sign up now to improve your customer support with our tools and solutions.</p>
                                <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white">Try it Now <i className="fa-regular fa-arrow-up up-right"></i></Link>
                                <div className="round one"></div>
                                <div className="round two"></div>
                                <div className="round three"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
