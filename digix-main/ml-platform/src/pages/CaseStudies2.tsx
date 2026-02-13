import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies2: React.FC = () => {
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

    const caseStudies = [
        { id: 'One', year: '2021', title: 'Financial Sector – Preventing a Ransomware Attack', challenge: 'A mid-sized financial institution faced a growing threat of ransomware attacks, with sensitive customer data at risk.', img: '/assets/images/case/05.webp' },
        { id: 'Two', year: '2022', title: 'E-commerce Business – Enhancing Cloud Security', challenge: 'A mid-sized financial institution faced a growing threat of ransomware attacks, with sensitive customer data at risk.', img: '/assets/images/case/05.webp' },
        { id: 'Three', year: '2023', title: 'Financial Sector – Preventing a Ransomware Attack', challenge: 'A mid-sized financial institution faced a growing threat of ransomware attacks, with sensitive customer data at risk.', img: '/assets/images/case/05.webp' },
        { id: 'Four', year: '2024', title: 'Government Agency – Comprehensive Cybersecurity Overhaul', challenge: 'A mid-sized financial institution faced a growing threat of ransomware attacks, with sensitive customer data at risk.', img: '/assets/images/case/05.webp' },
    ];

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
                                    <li><a href="#" className="active">Case Study</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Real-World Success Stories in Cybersecurity</h1>
                                <p className="disc mt--30">
                                    we deliver results. Our success is measured by the protection we provide to our clients, across industries and around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts case studies area start */}
            <div className="rts-case-studies rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordion-faq-one in-working-process in-case-cyber">
                                <div className="accordion" id="accordionExample">
                                    {caseStudies.map((item, index) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${item.id}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse${item.id}`}
                                                >
                                                    <span>{item.year}. </span> {item.title}
                                                </button>
                                            </h2>
                                            <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <img src={item.img} alt="case-study" />
                                                    <p className="disc">Challenge: {item.challenge}</p>
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
        </main>
    );
};
