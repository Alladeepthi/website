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
        title: "API & Integration Ecosystems",
        subtitle: "Seamless Connectivity for Modern Enterprises",
        description: "We architect high-performance API layers that serve as the backbone of your digital infrastructure. Our solutions ensure secure, reliable data flow between your internal systems, partners, and third-party platforms, eliminating silos and enabling real-time operational visibility.",
        icon: "Business.png",
        subCategories: [
            "Unified System Architecture",
            "Real-time Data Synchronization",
            "Secure Third-party Integrations",
            "Legacy System Modernization",
            "High-Throughput API Gateways",
            "Automated Event Workflows"
        ]
    },
    {
        id: 2,
        title: "Enterprise Software Engineering",
        subtitle: "Robust Licensing & Operational Platforms",
        description: "We build mission-critical software tailored to your specific business logic and operational needs. Our engineering team delivers scalable, secure applications that streamline complex workflows, reduce manual overhead, and support your organization’s growth without technical debt.",
        icon: "Memory.png",
        subCategories: [
            "Optimized Operational Workflows",
            "Scalable Cloud-Native Architecture",
            "Bank-Grade Security Standards",
            "Custom ERP & CRM Solutions",
            "SaaS Tenant Management",
            "Automated Compliance and Reporting"
        ]
    },
    {
        id: 3,
        title: "Digital Product Design",
        subtitle: "User-Centric Interfaces that Convert",
        description: "Our design process balances aesthetic excellence with functional precision. We create intuitive, accessible, and engaging digital experiences that reduce user friction, increase adoption rates, and directly support your core business metrics and conversion goals.",
        icon: "Onconsulting.png",
        subCategories: [
            "Higher User Adoption Rates",
            "Streamlined User Journeys",
            "Brand-Consistent Design Systems",
            "Accessibility (WCAG) Compliance",
            "Rapid Interactive Prototyping",
            "Data-Driven UX Optimization"
        ]
    },
    {
        id: 4,
        title: "Growth & Marketing Automation",
        subtitle: "Automated Systems for Customer Acquisition",
        description: "Scale your marketing efforts without increasing headcount. We implement intelligent automation frameworks that track user behavior, manage customer lifecycles, and deliver personalized experiences at scale, ensuring you capture and retain value at every touchpoint.",
        icon: "service-ai.png",
        subCategories: [
            "Increased Lead Conversion",
            "Automated Customer Retention",
            "Data-Driven Campaign Optimization",
            "Cross-Channel Attribution",
            "Dynamic Personalization Engines",
            "CRM & Pipeline Integration"
        ]
    },
    {
        id: 5,
        title: "Mobile Application Development",
        subtitle: "High-Performance Native & Cross-Platform Apps",
        description: "We engineer responsive, feature-rich mobile applications that extend your business capabilities to the edge. Whether for consumer engagement or enterprise mobility, our apps are built for speed, stability, and seamless performance across all devices.",
        icon: "service-digital.png",
        subCategories: [
            "Native-Like Performance",
            "Offline-First Capabilities",
            "Seamless Backward Compatibility",
            "Secure Biometric Authentication",
            "Real-time Push Notifications",
            "Integrated Analytics SDKs"
        ]
    },
    {
        id: 6,
        title: "Intelligent Automation & AI",
        subtitle: "Practical AI for Measurable Efficiency",
        description: "We move beyond hype to deploy functional machine learning models that solve specific operational bottlenecks. From automating repetitive tasks to predicting resource needs, our AI solutions are designed to deliver tangible ROI and operational cost reductions.",
        icon: "service-enterprise.png",
        subCategories: [
            "Reduced Operational Costs",
            "Automated Decision Support",
            "Predictive Resource Planning",
            "Natural Language Processing (NLP)",
            "Intelligent Document Processing",
            "Computer Vision Quality Control"
        ]
    },
    {
        id: 7,
        title: "Data Engineering & Analytics",
        subtitle: "Turning Raw Data into Strategic Assets",
        description: "We design robust data pipelines and warehousing architectures that centralize your information for accurate analysis. Our systems provide stakeholders with real-time, actionable insights, enabling evidence-based decision-making and precise performance tracking.",
        icon: "service-stats.png",
        subCategories: [
            "Single Source of Truth",
            "Real-time Business Intelligence",
            "Scalable Data Warehousing",
            "ETL/ELT Pipeline Automation",
            "Data Governance Frameworks",
            "Custom Executive Dashboards"
        ]
    },
    {
        id: 8,
        title: "Product Launch & Go-to-Market",
        subtitle: "Technical Infrastructure for Successful Launches",
        description: "We provide the technical backbone for your go-to-market strategy. From high-converting landing pages to stable beta environments and launch analytics, we ensure your product enters the market smoothly and gains traction immediately.",
        icon: "world.png",
        subCategories: [
            "Accelerated Time-to-Market",
            "High-Conversion Technical Setup",
            "Stable Beta Environments",
            "Launch Traffic Management",
            "A/B Testing Infrastructure",
            "User Onboarding Automation"
        ]
    }
];
