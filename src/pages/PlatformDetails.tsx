import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { platformsData } from '../data/platformsData';

export const PlatformDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const platform = platformsData.find(p => p.slug === id);

    useEffect(() => {
        document.body.className = "radious-4 demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, [id]);

    if (!platform) {
        return <Navigate to="/" replace />;
    }

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
                                    <li><Link to="#" onClick={(e) => e.preventDefault()}>Platforms</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><span className="active">{platform.name}</span></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1" dangerouslySetInnerHTML={{ __html: platform.hero.title }}></h1>
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
                                    <span className="pre">Platform Overview</span>
                                    <h2 className="title rts-text-anime-style-1">{platform.overview.heading}</h2>
                                </div>
                                <p className="disc mt--20">
                                    {platform.overview.content}
                                </p>
                                <div className="thumbnail-plunning-service-detials mt--60">
                                    <img src={platform.overview.image || "/assets/images/service/24.webp"} alt="process" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="working-process-list-wrapper">
                                {platform.solutions.items.map((solution, i) => (
                                    <div className="single-working-process-area" key={i}>
                                        <div className="icon">
                                            <i className="fa-regular fa-check-circle" style={{ fontSize: '24px', color: '#3A70FF' }}></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="title" style={{ marginBottom: 0 }}>{solution.title}</h5>
                                            <p className="desc" style={{ fontSize: '14px', color: '#5D666F', marginTop: '5px' }}>{solution.description}</p>
                                        </div>
                                    </div>
                                ))}
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
                                <h3 className="title rts-text-anime-style-1">Ready to Scale Your Technology?</h3>
                                <p className="disc">Partner with NeuraltrixAI to build the systems that will drive your future growth.</p>
                                <Link to="/contact" className="rts-btn btn-primary with-arrow btn-white">Schedule a Consultation <i className="fa-regular fa-arrow-up up-right"></i></Link>
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
