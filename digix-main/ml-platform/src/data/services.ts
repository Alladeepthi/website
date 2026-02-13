export interface ServiceItem {
    id: number;
    title: string;
    subtitle: string;
    subCategories: string[];
    icon?: string;
    description: string;
}

export const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "API & Integration Services",
        subtitle: "(Earlier: IT Services for API development)",
        description: "We build scalable, secure, and high-performance APIs to connect your applications and services seamlessly. Our expertise ensures reliable data exchange and smooth system interoperability.",
        icon: "01.svg",
        subCategories: [
            "Telephony APIs (Telecalling, IVR, Voice Bots)",
            "Messaging APIs (WhatsApp, SMS, Email)",
            "Payment & Billing APIs",
            "Authentication & Identity APIs",
            "Analytics & Webhook APIs",
            "Third-Party System Integrations",
            "Secure REST & GraphQL Services"
        ]
    },
    {
        id: 2,
        title: "Enterprise Product Solutions",
        subtitle: "(Earlier: IT Solutions for product development)",
        description: "Comprehensive software solutions tailored for enterprise needs, focusing on efficiency, automation, and scalability to drive business growth.",
        icon: "02.svg",
        subCategories: [
            "CRM Platforms",
            "ERP Systems",
            "HRMS & Payroll Systems",
            "Workflow & Process Automation",
            "Learning & Training Platforms (LMS)",
            "Admin & Control Dashboards",
            "Multi-Tenant SaaS Platforms"
        ]
    },
    {
        id: 3,
        title: "Digital Experience Studio",
        subtitle: "(Earlier: Digital Agency)",
        description: "Identify and define your brand's unique digital footprint. We craft engaging, user-centric designs that elevate your brand and deliver exceptional user experiences.",
        icon: "03.svg",
        subCategories: [
            "UI/UX Design Systems",
            "Corporate Website Design",
            "Product & Brand Identity",
            "Landing Page Design",
            "SEO-Optimized Web Builds",
            "Performance & Accessibility Optimization",
            "Interaction & Motion Design"
        ]
    },
    {
        id: 4,
        title: "Growth & Automation",
        subtitle: "(Earlier: Marketing & Automation)",
        description: "Accelerate your business growth with automated marketing strategies and data-driven campaigns designed to maximize retention and ROI.",
        icon: "04.svg",
        subCategories: [
            "Marketing Automation Workflows",
            "Lead Scoring & Segmentation",
            "Campaign Management Systems",
            "CRM-Driven Growth Funnels",
            "Customer Journey Automation",
            "Conversion & ROI Analytics",
            "Forecasted Growth Systems"
        ]
    },
    {
        id: 5,
        title: "Mobile & App Engineering",
        subtitle: "(Earlier: App Development)",
        description: "From concept to deployment, we engineer robust mobile applications for iOS, Android, and cross-platform ecosystems that delight users.",
        icon: "05.svg",
        subCategories: [
            "Android App Development",
            "iOS App Development",
            "Cross-Platform Apps (Flutter / React Native)",
            "Enterprise Mobile Apps",
            "Backend & API Integration",
            "App Analytics & Deployment",
            "Mobile App UI/UX Engineering"
        ]
    },
    {
        id: 6,
        title: "AI & Machine Intelligence",
        subtitle: "(Earlier: Machine Learning)",
        description: "Harness the power of Artificial Intelligence and Machine Learning to unlock actionable insights, automate decisions, and gain a competitive edge.",
        icon: "06.svg",
        subCategories: [
            "Predictive Intelligence Models",
            "Recommendation Engines",
            "Anomaly & Risk Detection",
            "Custom ML Model Development",
            "Model Deployment & MLOps",
            "Explainable & Trusted AI",
            "AI Automation"
        ]
    },
    {
        id: 7,
        title: "Data & Insight Services",
        subtitle: "(Earlier: Data Science)",
        description: "Transform raw data into meaningful insights. We help you collect, process, and analyze data to make informed strategic decisions.",
        icon: "07.svg",
        subCategories: [
            "Data Engineering & Preparation",
            "Exploratory Data Analysis",
            "Statistical & Business Modeling",
            "BI Dashboards & Reports",
            "Decision Intelligence Systems",
            "Executive Analytics",
            "Predictive Analytics"
        ]
    },
    {
        id: 8,
        title: "SaaS Demo & Launch Systems",
        subtitle: "(Earlier: SaaS Landing for Product Demo)",
        description: "Optimize your product launch with high-converting SaaS landing pages and interactive demos that effectively communicate your value proposition.",
        icon: "08.svg",
        subCategories: [
            "SaaS Landing Page Design",
            "Interactive Product Demos",
            "Feature & Pricing Pages",
            "Trial & Onboarding Flows",
            "Conversion-Focused UI",
            "Hosting & Deployment Support",
            "SEO & Content"
        ]
    }
];
