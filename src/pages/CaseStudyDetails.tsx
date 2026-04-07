import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, type CaseStudy, ALL_SERVICE_OFFERINGS } from '../data/services';
import { platformsData } from '../data/platformsData';

const CaseStudyDetails = () => {
    const { id } = useParams();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [relatedService, setRelatedService] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Find the case study based on the URL slug
        if (id) {
            const searchLink = `/case-studies/${id}`;
            let found = null;
            let parentService = null;

            // Search in servicesData (old)
            for (const service of servicesData) {
                if (service.caseStudies) {
                    found = service.caseStudies.find(study => study.link === searchLink);
                    if (found) {
                        parentService = service;
                        break;
                    }
                }
            }

            // Search in ALL_SERVICE_OFFERINGS (new)
            if (!found) {
                for (const offering of ALL_SERVICE_OFFERINGS) {
                    if (offering.caseStudies) {
                        found = offering.caseStudies.find(study =>
                            study.link === searchLink ||
                            (study.title && `/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}` === searchLink)
                        );
                        if (found) {
                            parentService = offering;
                            break;
                        }
                    }
                }
            }

            // Search in platformsData if not found
            if (!found) {
                for (const platform of platformsData) {
                    if (platform.caseStudies?.items) {
                        const item = platform.caseStudies.items.find((study: any) =>
                            study.link === searchLink || (study.title && `/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}` === searchLink)
                        );
                        if (item) {
                            found = {
                                title: item.title,
                                description: item.description,
                                image: item.image || '/assets/images/project/Laboratory-pana.png',
                                features: (item as any).features || ["Performance Optimized", "Scalable Design", "Secure Integration"],
                                link: (item as any).link
                            } as CaseStudy;
                            parentService = platform;
                            break;
                        }
                    }
                }
            }

            if (found) {
                setCaseStudy(found);
                setRelatedService(parentService);
            } else {
                setCaseStudy(null);
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
        <main style={{ backgroundColor: '#F9FAFB' }}>
            {/* Premium Hero Section */}
            <div className="rts-breadcrumb-area breadcrumb-bg-1 bg_image" style={{
                padding: '140px 0 100px',
                backgroundColor: '#0F172A',
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 100%), url(${caseStudy.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="breadcrumb-area-inner">
                                <span className="pre" style={{
                                    color: '#3B82F6',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    display: 'block',
                                    marginBottom: '20px'
                                }}>Success Story</span>
                                <h1 className="title" style={{
                                    color: '#FFFFFF',
                                    fontSize: '56px',
                                    fontWeight: 800,
                                    marginBottom: '25px',
                                    lineHeight: '1.1'
                                }}>{caseStudy.title}</h1>
                                <ul style={{
                                    display: 'flex',
                                    gap: '15px',
                                    listStyle: 'none',
                                    padding: 0,
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '15px',
                                    margin: 0
                                }}>
                                    <li><Link to="/" style={{ color: 'inherit' }}>Home</Link></li>
                                    <li><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', marginTop: '4px' }}></i></li>
                                    <li><Link to="/case-studies" style={{ color: 'inherit' }}>Case Studies</Link></li>
                                    <li><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', marginTop: '4px' }}></i></li>
                                    <li style={{ color: '#3B82F6', fontWeight: 600 }}>Project Detail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="rts-project-details-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="project-details-content-inner">
                                {/* Overview Section */}
                                <div style={{
                                    background: '#FFFFFF',
                                    padding: '50px',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    border: '1px solid #F1F5F9',
                                    marginBottom: '50px'
                                }}>
                                    <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '25px' }}>Project Overview</h3>
                                    <p style={{ fontSize: '18px', color: '#1E293B', lineHeight: '1.6', marginBottom: '25px', fontWeight: '500' }}>
                                        {caseStudy.description}
                                    </p>
                                    <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.8' }}>
                                        This project represents a significant milestone in our partnership with the client.
                                        By leveraging our expertise in <strong style={{ color: '#0F172A' }}>{relatedService?.title || 'technology'}</strong>,
                                        we were able to identify core bottlenecks and implement a solution that not only solved
                                        the immediate problem but also laid the groundwork for future scalability.
                                    </p>
                                </div>

                                {/* Challenge & Solution */}
                                <div className="row g-4 mb--50">
                                    <div className="col-md-6">
                                        <div style={{
                                            background: '#FFFFFF',
                                            padding: '40px',
                                            borderRadius: '20px',
                                            height: '100%',
                                            border: '1px solid #F1F5F9',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                                        }}>
                                            <div style={{ width: '50px', height: '50px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#EF4444' }}>
                                                <i className="fa-solid fa-bolt-lightning" style={{ fontSize: '20px' }}></i>
                                            </div>
                                            <h4 style={{ fontSize: '22px', fontWeight: 700, color: '#0F172A', marginBottom: '15px' }}>The Challenge</h4>
                                            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.7', margin: 0 }}>
                                                The client was facing significant operational hurdles that limited their ability to scale.
                                                Manual processes were causing delays, and data silos were preventing real-time decision-making.
                                                They needed a robust, automated solution to modernize infrastructure.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div style={{
                                            background: '#FFFFFF',
                                            padding: '40px',
                                            borderRadius: '20px',
                                            height: '100%',
                                            border: '1px solid #F1F5F9',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                                        }}>
                                            <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#3B82F6' }}>
                                                <i className="fa-solid fa-lightbulb" style={{ fontSize: '20px' }}></i>
                                            </div>
                                            <h4 style={{ fontSize: '22px', fontWeight: 700, color: '#0F172A', marginBottom: '15px' }}>Our Solution</h4>
                                            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.7', margin: 0 }}>
                                                We implemented a comprehensive strategy focused on automation and integration.
                                                Our team designed a custom architecture that addressed specific pain points,
                                                ensuring seamless data flow and high availability across all systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Results Section */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                    padding: '50px',
                                    borderRadius: '24px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', marginBottom: '15px' }}>Key Results & Impact</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '40px', maxWidth: '600px' }}>
                                            The implementation delivered immediate and measurable value.
                                            Key performance indicators showed significant improvement within the first quarter.
                                        </p>
                                        <div className="row g-4">
                                            {caseStudy.features.map((feature, index) => (
                                                <div className="col-md-4" key={index}>
                                                    <div style={{
                                                        background: 'rgba(255,255,255,0.05)',
                                                        padding: '25px',
                                                        borderRadius: '16px',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        textAlign: 'center',
                                                        height: '100%'
                                                    }}>
                                                        <div style={{ fontSize: '24px', color: '#3B82F6', marginBottom: '15px' }}>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                        </div>
                                                        <h5 style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>{feature}</h5>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div style={{ position: 'sticky', top: '100px' }}>
                                {/* Project Info */}
                                <div style={{
                                    background: '#FFFFFF',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    marginBottom: '30px',
                                    border: '1px solid #F1F5F9'
                                }}>
                                    <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '25px', color: '#0F172A' }}>Project Details</h4>
                                    <div style={{ display: 'grid', gap: '20px' }}>
                                        <div style={{ paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                                            <span style={{ fontSize: '13px', color: '#64748B', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Client Category</span>
                                            <span style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>Enterprise / Tech</span>
                                        </div>
                                        <div style={{ paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                                            <span style={{ fontSize: '13px', color: '#64748B', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Service Provided</span>
                                            <span style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>{relatedService?.title}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '13px', color: '#64748B', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Completion Date</span>
                                            <span style={{ fontSize: '16px', color: '#0F172A', fontWeight: 600 }}>Q4 2024</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to Action Sidebar */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <h4 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 700, marginBottom: '15px' }}>Start Your Project?</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', marginBottom: '30px', lineHeight: '1.6' }}>
                                            Let's build something extraordinary together. Our team is ready to transform your vision into reality.
                                        </p>
                                        <Link to="/contact" style={{
                                            background: '#FFFFFF',
                                            color: '#3B82F6',
                                            padding: '14px 28px',
                                            borderRadius: '12px',
                                            fontWeight: 700,
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                            transition: 'transform 0.3s ease'
                                        }} className="sidebar-cta-btn">
                                            Contact Us Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .sidebar-cta-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
            `}</style>
        </main>
    );
};

export default CaseStudyDetails;
