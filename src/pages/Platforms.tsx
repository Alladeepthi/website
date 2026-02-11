import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Platforms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const platforms = [
        {
            id: 1,
            name: "NeuralX Core",
            subtitle: "The Brain of Your AI Operations",
            description: "A centralized command center designed to orchestrate machine learning models, manage data pipelines, and monitor AI performance in real-time.",
            features: ["Real-time Model Monitoring", "Automated Retraining", "Scalable Infrastructure", "Secure Data Handling"],
            icon: "01.svg",
            image: "1a.png"
        },
        {
            id: 2,
            name: "DataFlow Pro",
            subtitle: "Seamless Data Processing",
            description: "Efficiently ingest, process, and transform massive datasets with our high-throughput data processing platform, ready for AI consumption.",
            features: ["ETL Automation", "Data Quality Checks", "Real-time Streaming", "Multi-source Integration"],
            icon: "02.svg",
            image: "1b.png"
        },
        {
            id: 3,
            name: "Visionary AI",
            subtitle: "Computer Vision Made Easy",
            description: "Deploy advanced computer vision models for object detection, facial recognition, and image analysis with our drag-and-drop interface.",
            features: ["Object Detection", "Facial Recognition", "Image Segmentation", "Video Analytics"],
            icon: "03.svg",
            image: "1c.png"
        },
        {
            id: 4,
            name: "ConversaBot",
            subtitle: "Intelligent Conversational AI",
            description: "Build, train, and deploy sophisticated chatbots and voice assistants that understand nuance and context better than ever before.",
            features: ["NLP/NLU Engine", "Voice Interaction", "Sentiment Analysis", "Multi-lingual Support"],
            icon: "04.svg",
            image: "1d.png"
        },
        {
            id: 5,
            name: "AutoPredict",
            subtitle: "Predictive Analytics Engine",
            description: "Empower your business with foresight. AutoPredict uses historical data to forecast trends, sales, and risks with high accuracy.",
            features: ["Trend Forecasting", "Risk Assessment", "Sales Prediction", "Demand Planning"],
            icon: "05.svg",
            image: "1e.png"
        },
        {
            id: 6,
            name: "SecureGuard",
            subtitle: "AI-Powered Cyber Security",
            description: "Protect your digital assets with an AI watchdog that detects anomalies, prevents breaches, and responds to threats automatically.",
            features: ["Anomaly Detection", "Threat Prevention", "Automated Response", "Compliance Monitoring"],
            icon: "06.svg",
            image: "1f.png"
        }
    ];

    return (
        <>
            {/* Breadcrumb Area */}
            <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
                            <h1 className="title">Our Platforms</h1>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="bread-tag">
                                <Link to="/">Home</Link>
                                <span> / </span>
                                <Link to="#" className="active">Platforms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumb Area */}

            {/* Platforms Grid Section */}
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    {/* Add Inline Style for Floating Animation */}
                    <style>
                        {`
                            @keyframes float-platform {
                                0% { transform: translateY(0px); }
                                50% { transform: translateY(-10px); }
                                100% { transform: translateY(0px); }
                            }
                            .platform-image-animate {
                                animation: float-platform 4s ease-in-out infinite;
                            }
                        `}
                    </style>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-area-main-two">
                                <span className="sub">Powering Intelligence</span>
                                <h2 className="title">Explore Our AI Platforms</h2>
                                <p className="disc">
                                    A suite of powerful, integrated platforms designed to cover every aspect of your <br /> artificial intelligence and data journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        {platforms.map((platform) => (
                            <div key={platform.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <a href="#" className="thumbnail">
                                            <img
                                                src={`/assets/images/service/${platform.image}`}
                                                alt={platform.name}
                                                className="platform-image-animate"
                                                style={{ minHeight: "250px", objectFit: "contain", maxHeight: "300px", width: "100%", background: "#f8f9fa", borderRadius: "10px", padding: "10px" }}
                                            />
                                        </a>
                                        <div className="content">

                                            <h5 className="title">{platform.name}</h5>
                                            <span className="subtitle" style={{ display: "block", marginBottom: "10px", fontSize: "14px", color: "var(--color-primary)" }}>{platform.subtitle}</span>
                                            <p className="disc">{platform.description}</p>

                                            <ul className="list-style-one" style={{ marginTop: "15px", paddingLeft: "0", listStyle: "none" }}>
                                                {platform.features.map((feature, i) => (
                                                    <li key={i} style={{ marginBottom: "5px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                                                        <i className="fa-regular fa-check-circle" style={{ color: "var(--color-primary)" }}></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                        <Link to="/contact" className="rts-btn btn-primary-3">Request Demo <i className="fa-regular fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Platforms Grid Section */}

            {/* CTA Section */}
            <div className="rts-cta-area-four rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-four-inner">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="cta-content-left">
                                            <h3 className="title">Ready to Transform Your Business with AI?</h3>
                                            <p className="disc">
                                                Contact us today to schedule a demo of any of our platforms and see how NeuralTrix can drive value for your organization.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-btn-right">
                                            <Link to="/contact" className="rts-btn btn-white">Get Started Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
