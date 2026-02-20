import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, type CaseStudy } from '../data/services';

const CaseStudyDetails = () => {
    const { id } = useParams();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [relatedService, setRelatedService] = useState<any>(null);

    useEffect(() => {
        // Find the case study based on the URL slug
        // The link in data is like "/case-studies/slug", so we match against that
        if (id) {
            const searchLink = `/case-studies/${id}`;
            let found = null;
            let parentService = null;

            for (const service of servicesData) {
                if (service.caseStudies) {
                    found = service.caseStudies.find(study => study.link === searchLink);
                    if (found) {
                        parentService = service;
                        break;
                    }
                }
            }

            if (found) {
                setCaseStudy(found);
                setRelatedService(parentService);
            }
        }
    }, [id]);

    if (!caseStudy) {
        return (
            <div className="rts-section-gap" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container text-center">
                    <h2>Case Study Not Found</h2>
                    <p>The case study you are looking for does not exist or has been moved.</p>
                    <Link to="/" className="rts-btn btn-primary">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main>
            {/* Hero Section */}
            <div className="rts-breadcrumb-area breadcrumb-bg-1 bg_image" style={{ background: `url(${caseStudy.image}) no-repeat center center / cover`, position: 'relative' }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1-left">
                            <h1 className="title" style={{ color: '#fff', fontSize: '48px', lineHeight: '1.2' }}>{caseStudy.title}</h1>
                            <div className="bread-tag">
                                <Link to="/" style={{ color: '#fff' }}>Home</Link>
                                <span> / </span>
                                <Link to="#" style={{ color: '#fff' }}>Case Studies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="rts-project-details-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="project-details-content">
                                <div className="overview">
                                    <h3 className="title animated fadeIn">Project Overview</h3>
                                    <p className="disc">
                                        {caseStudy.description}
                                    </p>
                                    <p className="disc">
                                        This project represents a significant milestone in our partnership with the client.
                                        By leveraging our expertise in <strong>{relatedService?.title || 'technology'}</strong>,
                                        we were able to identify core bottlenecks and implement a solution that not only solved
                                        the immediate problem but also laid the groundwork for future scalability.
                                    </p>
                                </div>

                                <div className="challenge-solution-section mt--50">
                                    <div className="row g-5">
                                        <div className="col-lg-6">
                                            <div className="service-details-card" style={{ padding: '30px', background: '#f8fafc', borderRadius: '8px' }}>
                                                <h4 className="title" style={{ marginBottom: '20px' }}>The Challenge</h4>
                                                <p>
                                                    The client was facing significant operational hurdles that limited their ability to scale.
                                                    Manual processes were causing delays, and data silos were preventing real-time
                                                    decision-making. They needed a robust, automated solution to modernize their infrastructure
                                                    without disrupting ongoing business operations.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="service-details-card" style={{ padding: '30px', background: '#f8fafc', borderRadius: '8px' }}>
                                                <h4 className="title" style={{ marginBottom: '20px' }}>Our Solution</h4>
                                                <p>
                                                    We implemented a comprehensive strategy focused on automation and integration.
                                                    Our team designed a custom architecture that addressed specific pain points,
                                                    ensuring seamless data flow and high availability. The solution was deployed
                                                    in phases to minimize risk and ensure user adoption.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="results-section mt--50">
                                    <h3 className="title">Key Results & Impact</h3>
                                    <p className="disc mb--30">
                                        The implementation delivered immediate and measurable value to the business.
                                        Key performance indicators showed significant improvement within the first quarter of deployment.
                                    </p>
                                    <div className="row g-5">
                                        {caseStudy.features.map((feature, index) => (
                                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                <div className="rts-single-wized" style={{
                                                    padding: '25px',
                                                    border: '1px solid #eee',
                                                    borderRadius: '8px',
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease'
                                                }}>
                                                    <div className="icon" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        background: 'var(--color-primary)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px auto',
                                                        color: '#fff'
                                                    }}>
                                                        <i className="fa-regular fa-check-circle" style={{ fontSize: '24px' }}></i>
                                                    </div>
                                                    <h5 className="title" style={{ fontSize: '18px', marginBottom: '0' }}>{feature}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 mt_md--50 mt_sm--50">
                            <div className="project-details-sidebar">
                                <div className="rts-single-wized search" style={{ background: '#F8FAFC', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
                                    <div className="wized-header">
                                        <h5 className="title">Project Info</h5>
                                    </div>
                                    <div className="wized-body">
                                        <div className="single-info" style={{ marginBottom: '15px' }}>
                                            <span style={{ fontWeight: 'bold', display: 'block', color: '#1c2539' }}>Client Category</span>
                                            <span style={{ color: '#5D666F' }}>Enterprise / Tech</span>
                                        </div>
                                        <div className="single-info" style={{ marginBottom: '15px' }}>
                                            <span style={{ fontWeight: 'bold', display: 'block', color: '#1c2539' }}>Service Provided</span>
                                            <span style={{ color: '#5D666F' }}>{relatedService?.title}</span>
                                        </div>
                                        <div className="single-info" style={{ marginBottom: '15px' }}>
                                            <span style={{ fontWeight: 'bold', display: 'block', color: '#1c2539' }}>Date</span>
                                            <span style={{ color: '#5D666F' }}>Completed 2024</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rts-single-wized contact" style={{ background: 'var(--color-primary)', padding: '40px 30px', borderRadius: '10px', color: '#fff', textAlign: 'center' }}>
                                    <h5 className="title" style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>Need a Similar Solution?</h5>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
                                        Contact us today to discuss how we can help transform your business with our expert services.
                                    </p>
                                    <Link to="/contact" className="rts-btn btn-white" style={{
                                        background: '#fff',
                                        color: 'var(--color-primary)',
                                        padding: '12px 30px',
                                        borderRadius: '6px',
                                        fontWeight: '700',
                                        display: 'inline-block'
                                    }}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CaseStudyDetails;
