import React from 'react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
    const services = [
        {
            id: 1,
            img: 'api-integration.jpeg',
            title: 'API & Integration Services',
            subCategories: [
                'Telephony APIs (Telecalling, IVR, Voice Bots)',
                'Messaging APIs (WhatsApp, SMS, Email)',
                'Payment & Billing APIs',
                'Authentication & Identity APIs',
                'Analytics & Webhook APIs',
                'Third-Party System Integrations',
                'Secure REST & GraphQL Services'
            ]
        },
        {
            id: 2,
            img: 'enterprise.jpg',
            title: 'Enterprise Product Solutions',
            subCategories: [
                'CRM Platforms',
                'ERP Systems',
                'HRMS & Payroll Systems',
                'Workflow & Process Automation',
                'Learning & Training Platforms (LMS)',
                'Admin & Control Dashboards',
                'Multi-Tenant SaaS Platforms'
            ]
        },
        {
            id: 3,
            img: '21.webp',
            title: 'Digital Experience Studio',
            subCategories: [
                'UI/UX Design Systems',
                'Corporate Website Design',
                'Product & Brand Identity',
                'Landing Page Design',
                'SEO-Optimized Web Builds',
                'Performance & Accessibility Optimization',
                'Interaction & Motion Design'
            ]
        },
        {
            id: 4,
            img: 'growth.jpg',
            title: 'Growth & Automation',
            subCategories: [
                'Marketing Automation Workflows',
                'Lead Scoring & Segmentation',
                'Campaign Management Systems',
                'CRM-Driven Growth Funnels',
                'Customer Journey Automation',
                'Conversion & ROI Analytics',
                'Forecasted Growth Systems'
            ]
        },
        {
            id: 5,
            img: 'mobile-erp.jpg', // Using recycled image as placeholder
            title: 'Mobile & App Engineering',
            subCategories: [
                'Android App Development',
                'iOS App Development',
                'Cross-Platform Apps (Flutter / React Native)',
                'Enterprise Mobile Apps',
                'Backend & API Integration',
                'App Analytics & Deployment',
                'Mobile App UI/UX Engineering'
            ]
        },
        {
            id: 6,
            img: 'ai-machine.jpeg', // Using recycled image as placeholder
            title: 'AI & Machine Intelligence',
            subCategories: [
                'Predictive Intelligence Models',
                'Recommendation Engines',
                'Anomaly & Risk Detection',
                'Custom ML Model Development',
                'Model Deployment & MLOps',
                'Explainable & Trusted AI',
                'AI Automation'
            ]
        },
        {
            id: 7,
            img: '21.webp', // Using recycled image as placeholder
            title: 'Data & Insight Services',
            subCategories: [
                'Data Engineering & Preparation',
                'Exploratory Data Analysis',
                'Statistical & Business Modeling',
                'BI Dashboards & Reports',
                'Decision Intelligence Systems',
                'Executive Analytics',
                'Predictive Analytics'
            ]
        },
        {
            id: 8,
            img: '22.webp', // Using recycled image as placeholder
            title: 'SaaS Demo & Launch Systems',
            subCategories: [
                'SaaS Landing Page Design',
                'Interactive Product Demos',
                'Feature & Pricing Pages',
                'Trial & Onboarding Flows',
                'Conversion-Focused UI',
                'Hosting & Deployment Support',
                'SEO & Content'
            ]
        }
    ];

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
                    {services.map((service) => (
                        <div className="col-lg-3 col-md-6" key={service.id}>
                            <div className="single-service-wrapper-machine">
                                <Link to="/service-details" state={{ service }} className="thumbnail">
                                    <img src={`/assets/images/service/${service.img}`} alt={service.title} />
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
