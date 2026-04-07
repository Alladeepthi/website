export interface CaseStudy {
    title: string;
    description: string;
    features: string[];
    image: string;
    link?: string;
}

export interface ServiceItem {
    id: number;
    title: string;
    subtitle: string;
    subCategories: string[];
    detailedFeatures?: { title: string; description: string; icon: string; image?: string; }[];
    faqs?: { question: string; answer: string; }[];
    caseStudies?: CaseStudy[];
    icon?: string;
    description: string;
}

export const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "API & Integration Services",
        subtitle: "Seamless Connectivity for Modern Enterprises",
        description: "We architect high-performance API layers that serve as the backbone of your digital infrastructure. Our solutions ensure secure, reliable data flow between your internal systems, partners, and third-party platforms, eliminating silos and enabling real-time operational visibility.",
        icon: "Investment data-amico.png",
        subCategories: [
            "Telephony APIs (Telecalling, IVR, Voice Bots)",
            "Messaging APIs (WhatsApp, SMS, Email)",
            "Payment & Billing APIs",
            "Authentication & Identity APIs",
            "Analytics & Webhook APIs",
            "Third-Party System Integrations",
            "Secure REST & GraphQL Services"
        ],
        detailedFeatures: [
            { title: "Telephony APIs (Telecalling, IVR, Voice Bots)", description: "We provide comprehensive voice solutions including automated dialing systems, intelligent IVR menus, and AI-powered voice bots to streamline customer interactions and support.", icon: "fa-phone", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "Messaging APIs (WhatsApp, SMS, Email)", description: "Engage your customers on their preferred channels. Our unified messaging APIs handle high-volume dispatch for WhatsApp, SMS, and Email, ensuring reliable delivery for transactional alerts and marketing campaigns.", icon: "fa-comments", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Payment & Billing APIs", description: "Securely process transactions with our robust payment gateway integrations. We support recurring billing, multi-currency payments, and fraud detection to ensure smooth financial operations.", icon: "fa-credit-card", image: "/assets/images/service/Business merger-amico.png" },
            { title: "Authentication & Identity APIs", description: "Protect user data with advanced identity management. We implement OAuth2, OpenID Connect, and Multi-Factor Authentication (MFA) to ensure secure and seamless user access control.", icon: "fa-shield-halved", image: "/assets/images/service/Business support-pana.png" },
            { title: "Analytics & Webhook APIs", description: "Gain real-time visibility into your system's performance. Our analytics APIs provide granular data insights, while webhooks enable event-driven architectures for instant data synchronization.", icon: "fa-chart-line", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "Third-Party System Integrations", description: "Connect your disparate software tools into a unified ecosystem. We build custom connectors for CRM, ERP, and marketing platforms, eliminating manual data entry and ensuring data consistency across your stack.", icon: "fa-plug", image: "/assets/images/service/Programmer-amico.png" },
            { title: "Secure REST & GraphQL Services", description: "Build scalable and flexible backends with our REST and GraphQL API development services. We focus on performance optimization, comprehensive documentation, and strict security standards.", icon: "fa-server", image: "/assets/images/service/Application programming interface-amico.png" }
        ],
        faqs: [
            { question: "How do you ensure security when integrating external APIs?", answer: "We implement defense-in-depth strategies including OAuth2/OIDC for authentication, mutual TLS for transport security, and strict rate limiting. All sensitive data is encrypted in transit and at rest, and we adhere to industry standards like OWASP Top 10 API Security risks." },
            { question: "Can you integrity with our legacy on-premise systems?", answer: "Yes. We specialize in hybrid cloud architectures. We can deploy secure bridge agents or VPN tunnels to safely expose specific legacy functionalities as modern REST or GraphQL APIs without compromising your internal network security." },
            { question: "What happens if a third-party API goes down?", answer: "Resilience is key. We implement circuit breaker patterns, exponential backoff retries, and dead-letter queues. This ensures your system degrades gracefully rather than crashing, and transactions are queued to be processed once the external service is back online." }
        ],
        caseStudies: [
            {
                title: "Scaling Fintech Infrastructure",
                description: "Re-architected a legacy trading platform into microservices, handling 10x transaction volume with sub-millisecond latency.",
                features: ["99.99% Uptime", "Real-time Data", "Auto-Compliance"],
                image: "/assets/images/project/Laboratory-pana.png",
                link: "/case-studies/fintech-scaling"
            },
            {
                title: "Unified Communication API",
                description: "Built a centralized messaging API consolidating SMS, WhatsApp, and Email for a retail chain, boosting engagement by 40%.",
                features: ["Omnichannel Support", "High Throughput", "Analytics Dashboard"],
                image: "/assets/images/project/Emails-amico.png",
                link: "/case-studies/retail-communication"
            },
            {
                title: "Legacy Banking Integration",
                description: "Seamlessly connected a 20-year-old mainframe system with modern mobile banking apps using secure middleware.",
                features: ["Zero Downtime", "Bank-Grade Security", "Real-time Sync"],
                image: "/assets/images/service/Business merger-amico.png",
                link: "/case-studies/banking-integration"
            }
        ]
    },
    {
        id: 2,
        title: "Enterprise Software Solutions",
        subtitle: "Robust Licensing & Operational Platforms",
        description: "We build mission-critical software tailored to your specific business logic and operational needs. Our engineering team delivers scalable, secure applications that streamline complex workflows, reduce manual overhead, and support your organization’s growth without technical debt.",
        icon: "Programmer-amico.png",
        subCategories: [
            "CRM Platforms",
            "ERP Systems",
            "HRMS & Payroll Systems",
            "Workflow & Process Automation",
            "Learning & Training Platforms (LMS)",
            "Admin & Control Dashboards",
            "Multi-Tenant SaaS Platforms"
        ],
        detailedFeatures: [
            { title: "CRM Platforms", description: "Manage customer relationships effectively with our custom CRM solutions. Track leads, automate follow-ups, and gain 360-degree views of customer interactions to boost sales and retention.", icon: "fa-users", image: "/assets/images/service/agile method-bro.png" },
            { title: "ERP Systems", description: "Integrate core business processes into a single system. Our ERP solutions cover finance, supply chain, and operations, providing real-time data visibility for better resource planning.", icon: "fa-cogs", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "HRMS & Payroll Systems", description: "Automate human resources management from recruitment to retirement. Our HRMS handles attendance, leave management, and complex payroll calculations with compliance built-in.", icon: "fa-user-tie", image: "/assets/images/service/Business support-pana.png" },
            { title: "Workflow & Process Automation", description: "Eliminate manual bottlenecks. We digitize and automate complex business workflows, ensuring tasks are routed, approved, and completed efficiently without human error.", icon: "fa-project-diagram", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Learning & Training Platforms (LMS)", description: "Empower your workforce with continuous learning. Our custom LMS platforms support course delivery, progress tracking, and certification management for employee development.", icon: "fa-graduation-cap", image: "/assets/images/service/New employee-amico.png" },
            { title: "Admin & Control Dashboards", description: "Gain centralized control over your operations. We build intuitive admin panels that provide real-time monitoring, user management, and system configuration capabilities.", icon: "fa-tachometer-alt", image: "/assets/images/service/Consultative sales-amico.png" },
            { title: "Multi-Tenant SaaS Platforms", description: "Scale your software business with robust multi-tenancy. We architect platforms that securely serve multiple clients from a single instance, ensuring data isolation and cost efficiency.", icon: "fa-building", image: "/assets/images/service/Consultative sales-amico.png" }
        ],
        faqs: [
            { question: "Do we own the source code after the project?", answer: "Absolutely. Upon project completion and final payment, full intellectual property and source code ownership are transferred to your organization. We believe you should always be in control of your core technology assets." },
            { question: "How do you handle data migration from our spreadsheets/old system?", answer: "We treat data migration as a critical project phase. We perform detailed data profiling, cleansing, and mapping before automating the migration scripts. We verify data integrity through dry runs to ensure zero data loss during the transition." },
            { question: "What is your typical development methodology?", answer: "We follow an Agile methodology with two-week sprints. This gives you regular visibility into progress (demos every two weeks) and the flexibility to adjust priorities based on user feedback throughout the development lifecycle." }
        ],
        caseStudies: [
            {
                title: "Custom ERP for Manufacturing",
                description: "Developed a bespoke ERP solution integrating inventory, production planning, and logistics, reducing ops costs by 25%.",
                features: ["Real-time Inventory", "Auto-Scheduling", "Vendor Portal"],
                image: "/assets/images/project/Tax-bro.png",
                link: "/case-studies/manufacturing-erp"
            },
            {
                title: "Global HRMS Platform",
                description: "Built a centralized HR management system for a multinational corp, streamlining payroll for 5,000+ employees.",
                features: ["Multi-Country Payroll", "Self-Service Portal", "Compliance Engine"],
                image: "/assets/images/service/New employee-amico.png",
                link: "/case-studies/global-hrms"
            }
        ]
    },
    {
        id: 3,
        title: "Digital Experience Studio",
        subtitle: "User-Centric Interfaces that Convert",
        description: "Our design process balances aesthetic excellence with functional precision. We create intuitive, accessible, and engaging digital experiences that reduce user friction, increase adoption rates, and directly support your core business metrics and conversion goals.",
        icon: "Consultative sales-amico.png",
        subCategories: [
            "UI/UX Design Systems",
            "Corporate Website Design",
            "Brand & Visual Identity",
            "Landing Page Design",
            "SEO-Optimized Web Builds",
            "Performance & Accessibility Optimization",
            "Interaction & Motion Design"
        ],
        detailedFeatures: [
            { title: "UI/UX Design Systems", description: "Create consistent and scalable digital products. We develop comprehensive design systems including component libraries and style guides to ensure a unified user experience across all platforms.", icon: "fa-swatchbook", image: "/assets/images/service/teamwork high five-bro.png" },
            { title: "Corporate Website Design", description: "Make a strong first impression. We design professional, responsive corporate websites that effectively communicate your brand values and offerings to your target audience.", icon: "fa-desktop", image: "/assets/images/service/Onboarding-bro.png" },
            { title: "Brand & Visual Identity", description: "Stand out in the market with a unique identity. We craft logos, color palettes, and visual assets that reflect your brand's personality and resonate with your customers.", icon: "fa-fingerprint", image: "/assets/images/service/At the office-amico.png" },
            { title: "Landing Page Design", description: "Convert visitors into leads. Our high-performance landing pages are optimized for conversion, featuring compelling copy, clear calls-to-action, and persuasive design elements.", icon: "fa-file-alt", image: "/assets/images/service/New employee-amico.png" },
            { title: "SEO-Optimized Web Builds", description: "Improve your search engine rankings. We build websites with clean code, proper semantic structure, and fast load times to ensure maximum visibility on Google and other search engines.", icon: "fa-search", image: "/assets/images/service/agile method-bro.png" },
            { title: "Performance & Accessibility Optimization", description: "Ensure inclusivity and speed. We optimize your digital assets for lightning-fast performance and full WCAG compliance, making your site accessible to all users.", icon: "fa-tachometer-alt", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Interaction & Motion Design", description: "Delight your users with subtle animations. We use motion design to guide user attention, provide feedback, and add a layer of polish that elevates the overall experience.", icon: "fa-mouse-pointer", image: "/assets/images/service/Investment data-amico.png" }
        ],
        faqs: [
            { question: "What is your design process?", answer: "We follow a Double Diamond approach: Discover (research & strategy), Define (user personas & flows), Develop (wireframing & prototyping), and Deliver (UI design & specs). We involve you at every stage to ensure the design aligns with business goals." },
            { question: "Do you really do user testing?", answer: "Yes. We believe 'you are not your user'. We conduct usability testing sessions with real or representative users on prototypes to validate assumptions and uncover friction points before development begins." },
            { question: "How do we collaborate during the design phase?", answer: "We use Figma for all our design work. You'll have a live link to view progress in real-time, leave comments directly on the designs, and see how the product is evolving day by day." }
        ],
        caseStudies: [
            {
                title: "FinTech App UI Overhaul",
                description: "Redesigned a mobile banking app interface, boosting user engagement by 35% and upgrading store ratings to 4.8 stars.",
                features: ["Modern Visual Identity", "Simplified Flows", "Dark Mode"],
                image: "/assets/images/project/Laboratory-pana.png",
                link: "/case-studies/fintech-ui-overhaul"
            },
            {
                title: "E-Commerce Rebranding",
                description: "Complete visual rebranding and website redesign for a fashion retailer, resulting in a 50% increase in mobile conversions.",
                features: ["Visual Storytelling", "Mobile-First Design", "Design System"],
                image: "/assets/images/service/Onboarding-bro.png",
                link: "/case-studies/ecommerce-rebrand"
            }
        ]
    },
    {
        id: 4,
        title: "Growth & Automation",
        subtitle: "Automated Systems for Customer Acquisition",
        description: "Scale your marketing efforts without increasing headcount. We implement intelligent automation frameworks that track user behavior, manage customer lifecycles, and deliver personalized experiences at scale, ensuring you capture and retain value at every touchpoint.",
        icon: "Investment data-amico.png",
        subCategories: [
            "Marketing Automation Workflows",
            "Lead Scoring & Segmentation",
            "Campaign Management Systems",
            "CRM-Driven Growth Funnels",
            "Customer Journey Automation",
            "Conversion & ROI Analytics",
            "Forecasted Growth Systems"
        ],
        detailedFeatures: [
            { title: "Marketing Automation Workflows", description: "Nurture leads automatically. We design complex email and SMS workflows that guide prospects through the sales funnel based on their interactions and behaviors.", icon: "fa-robot", image: "/assets/images/service/Consultative sales-amico.png" },
            { title: "Lead Scoring & Segmentation", description: "Prioritize your sales efforts. Our systems automatically score leads based on engagement and demographic data, helping your team focus on the highest-potential prospects.", icon: "fa-star-half-alt", image: "/assets/images/service/New employee-amico.png" },
            { title: "Campaign Management Systems", description: "Manage multi-channel campaigns from a single dashboard. We implement tools that centralize planning, execution, and tracking of your marketing initiatives.", icon: "fa-bullhorn", image: "/assets/images/service/Investment data-amico.png" },
            { title: "CRM-Driven Growth Funnels", description: "Align marketing and sales. We integrate your marketing automation with your CRM to create seamless funnels that track the entire customer lifecycle from lead to revenue.", icon: "fa-filter", image: "/assets/images/service/Business merger-amico.png" },
            { title: "Customer Journey Automation", description: "Deliver personalized experiences at scale. We map and automate key touchpoints along the customer journey to increase engagement opportunities and customer satisfaction.", icon: "fa-map-signs", image: "/assets/images/service/Onboarding-bro.png" },
            { title: "Conversion & ROI Analytics", description: "Measure what matters. We set up advanced analytics dashboards that track conversion rates and ROI for every campaign, enabling data-driven optimization.", icon: "fa-chart-pie", image: "/assets/images/service/Business support-pana.png" },
            { title: "Forecasted Growth Systems", description: "Predict future performance. Our growth models use historical data to forecast trends, helping you allocate budgets and resources effectively for maximum impact.", icon: "fa-chart-line", image: "/assets/images/service/Business support-pana.png" }
        ],
        faqs: [
            { question: "Which CRM platforms do you integrate with?", answer: "We have extensive experience with major platforms including Salesforce, HubSpot, Zoho, and Pipedrive, as well as custom industry-specific CRMs. We ensure seamless 2-way data sync." },
            { question: "Can you help us separate 'hot' leads from 'tire kickers'?", answer: "Yes, that's exactly what our lead scoring models do. We assign points based on behavioral signals (email opens, pricing page visits) and demographic fit, so your sales team only calls leads that are sales-ready." },
            { question: "How long does it take to see results from automation?", answer: "While setup takes a few weeks, most clients see an immediate impact on efficiency (time saved). Measurable improvements in conversion rates and retention typically become statistically significant within 1-3 months of launching the new workflows." }
        ],
        caseStudies: [
            {
                title: "SaaS Lead Nurturing",
                description: "Implemented a complex HubSpot automation workflow that increased lead-to-opportunity conversion by 20% within 3 months.",
                features: ["Behavioral Triggers", "Personalized Sequences", "Sales Alerts"],
                image: "/assets/images/project/Emails-amico.png",
                link: "/case-studies/saas-automation"
            },
            {
                title: "Retention Bot for Telco",
                description: "Deployed an AI-driven churn prevention bot that automatically engaged at-risk customers, reducing churn by 12%.",
                features: ["Sentiment Analysis", "Auto-Offers", "CRM Sync"],
                image: "/assets/images/service/Consultative sales-amico.png",
                link: "/case-studies/telco-retention"
            }
        ]
    },
    {
        id: 5,
        title: "Mobile & App Engineering",
        subtitle: "High-Performance Native & Cross-Platform Apps",
        description: "We engineer responsive, feature-rich mobile applications that extend your business capabilities to the edge. Whether for consumer engagement or enterprise mobility, our apps are built for speed, stability, and seamless performance across all devices.",
        icon: "Application programming interface-amico.png",
        subCategories: [
            "Android App Development",
            "iOS App Development",
            "Cross-Platform Apps (Flutter / React Native)",
            "Enterprise Mobile Apps",
            "Backend & API Integration",
            "App Analytics & Deployment",
            "Mobile App UI/UX Engineering"
        ],
        detailedFeatures: [
            { title: "Android App Development", description: "Reach the global market with robust Android apps. We build native applications using Kotlin and Java that are optimized for performance across a wide range of devices.", icon: "fa-android", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "iOS App Development", description: "Deliver premium experiences on Apple devices. Our iOS apps are built with Swift to ensure smooth performance, high security, and adherence to Apple's design guidelines.", icon: "fa-apple", image: "/assets/images/service/At the office-amico.png" },
            { title: "Cross-Platform Apps", description: "Save time and cost with cross-platform development. We use Flutter and React Native to build apps that run natively on both iOS and Android from a single codebase.", icon: "fa-layer-group", image: "/assets/images/service/Business support-pana.png" },
            { title: "Enterprise Mobile Apps", description: "Mobilize your workforce. We build secure enterprise apps that improve employee productivity by providing access to critical business systems on the go.", icon: "fa-briefcase", image: "/assets/images/service/Business merger-amico.png" },
            { title: "Backend & API Integration", description: "Power your mobile apps with a robust backend. We develop scalable APIs and cloud infrastructure to handle user data, authentication, and content delivery.", icon: "fa-server", image: "/assets/images/service/New employee-amico.png" },
            { title: "App Analytics & Deployment", description: "Monitor and optimize app performance. We integrate analytics SDKs and handle the entire app store deployment process to ensure a successful launch.", icon: "fa-rocket", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Mobile App UI/UX Engineering", description: "Design for small screens. Our mobile-first design approach ensures intuitive navigation and touch-friendly interfaces that delight users.", icon: "fa-mobile-alt", image: "/assets/images/service/Investment data-amico.png" }
        ],
        faqs: [
            { question: "Do you recommend React Native/Flutter or pure Native?", answer: "For 90% of business use cases, we recommend React Native or Flutter. They offer significant cost savings (one codebase) and near-native performance. We recommend pure Native (Swift/Kotlin) only for apps requiring extreme hardware access or 3D graphics." },
            { question: "Will you help us get the app on the App Store?", answer: "Yes, we handle the entire submission process, including compliance checks, certificate management, and responding to Apple/Google review queries until the app is approved and live." },
            { question: "How do you handle bug fixes after launch?", answer: "We offer ongoing maintenance packages. Critical bugs are addressed immediately under SLA. For non-critical issues, we can follow a monthly update schedule to bundle fixes with new feature releases." }
        ],
        caseStudies: [
            {
                title: "Logistics Delivery App",
                description: "Built a cross-platform Flutter app featuring real-time tracking, route optimization, and secure in-app payments for a logistics firm.",
                features: ["Live Geolocation", "Secure Payments", "Driver Dashboard"],
                image: "/assets/images/project/Tax-bro.png",
                link: "/case-studies/delivery-app"
            },
            {
                title: "Telemedicine Platform",
                description: "Secure video consultation app connecting patients with doctors, featuring verified digital prescriptions and appointment booking.",
                features: ["HIPAA Compliant", "Video Calling", "E-Prescriptions"],
                image: "/assets/images/service/Business support-pana.png",
                link: "/case-studies/telemedicine-app"
            }
        ]
    },
    {
        id: 6,
        title: "AI & Machine Intelligence",
        subtitle: "Practical AI for Measurable Efficiency",
        description: "We move beyond hype to deploy functional machine learning models that solve specific operational bottlenecks. From automating repetitive tasks to predicting resource needs, our AI solutions are designed to deliver tangible ROI and operational cost reductions.",
        icon: "At the office-amico.png",
        subCategories: [
            "Predictive Intelligence Models",
            "Recommendation Engines",
            "Anomaly & Risk Detection",
            "Custom ML Model Development",
            "Model Deployment & MLOps",
            "Explainable & Trusted AI",
            "AI Automation"
        ],
        detailedFeatures: [
            { title: "Predictive Intelligence Models", description: "Forecast future trends with high accuracy. We build models that analyze historical data to predict sales, demand, and market shifts.", icon: "fa-crystal-ball", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Recommendation Engines", description: "Personalize user experiences. Our recommendation systems algorithmically suggest products or content based on user behavior.", icon: "fa-thumbs-up", image: "/assets/images/service/Business merger-amico.png" },
            { title: "Anomaly & Risk Detection", description: "Identify threats early. We implement ML models that detect unusual patterns in data to flag fraud, security breaches, or system failures.", icon: "fa-exclamation-triangle", image: "/assets/images/service/Consultative sales-amico.png" },
            { title: "Custom ML Model Development", description: "Solve unique problems. We design and train bespoke machine learning models tailored to your specific business challenges and data.", icon: "fa-brain", image: "/assets/images/service/FAQs-amico.png" },
            { title: "Model Deployment & MLOps", description: "Take AI to production. We establish MLOps pipelines to deploy, monitor, and retrain models effectively.", icon: "fa-cogs", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "Explainable & Trusted AI", description: "Build trust in AI decisions. We implement explainable AI (XAI) techniques to provide insights into how models reach their conclusions.", icon: "fa-balance-scale", image: "/assets/images/service/Programmer-amico.png" },
            { title: "AI Automation", description: "Automate complex tasks. We combine AI with robotic process automation (RPA) to handle repetitive cognitive tasks efficiently.", icon: "fa-robot", image: "/assets/images/service/Programmer-amico.png" }
        ],
        faqs: [
            { question: "Do we need a huge dataset to start with AI?", answer: "Not necessarily. We can start with transfer learning on pre-trained models (like GPT or Vision models) and fine-tune them with your smaller dataset. We also help you implement data collection strategies to build your proprietary dataset over time." },
            { question: "How accurate are the models?", answer: "Accuracy varies by use case, but we typically target and achieve >95% accuracy for tasks like document processing and >90% for classification. We always implement 'human-in-the-loop' workflows where the AI flags low-confidence predictions for human review." },
            { question: "Is our data used to train public models?", answer: "Never. We deploy private instances of models (or local models) where your data remains essentially your own. It is used exclusively to train/tune YOUR model and is never shared with third parties or used to improve public base models." }
        ],
        caseStudies: [
            {
                title: "Predictive Maintenance AI",
                description: "Deployed IoT sensor analysis models to predict equipment failures, reducing plant downtime by 30% and maintenance costs by 15%.",
                features: ["IoT Integration", "Early Warning", "Operator Dashboards"],
                image: "/assets/images/project/Laboratory-pana.png",
                link: "/case-studies/predictive-maintenance"
            },
            {
                title: "Fraud Detection System",
                description: "Real-time transaction monitoring system using ML to flag fraudulent activities with 98% accuracy for a payment processor.",
                features: ["Real-time Scoring", "Pattern Recognition", "Admin Alerts"],
                image: "/assets/images/service/Business merger-amico.png",
                link: "/case-studies/fraud-detection"
            }
        ]
    },
    {
        id: 7,
        title: "Data & Insight Services",
        subtitle: "Turning Raw Data into Strategic Assets",
        description: "We design robust data pipelines and warehousing architectures that centralize your information for accurate analysis. Our systems provide stakeholders with real-time, actionable insights, enabling evidence-based decision-making and precise performance tracking.",
        icon: "Investment data-amico.png",
        subCategories: [
            "Data Engineering & Preparation",
            "Exploratory Data Analysis",
            "Statistical & Business Modeling",
            "BI Dashboards & Reports",
            "Decision Intelligence Systems",
            "Executive Analytics",
            "Predictive Analytics"
        ],
        detailedFeatures: [
            { title: "Data Engineering & Preparation", description: "Build a solid data foundation. We design ETL pipelines that clean, transform, and organize your raw data for analytics.", icon: "fa-database", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Exploratory Data Analysis", description: "Uncover hidden patterns. We perform deep analysis on your datasets to discover trends, correlations, and insights.", icon: "fa-search-plus", image: "/assets/images/service/Consultative sales-amico.png" },
            { title: "Statistical & Business Modeling", description: "Validate hypotheses numerically. We use advanced statistical methods to model business scenarios and forecast outcomes.", icon: "fa-chart-bar", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "BI Dashboards & Reports", description: "Visualize key metrics. We build interactive dashboards using PowerBI, Tableau, or custom tools to present data clearly.", icon: "fa-chart-pie", image: "/assets/images/service/Programmer-amico.png" },
            { title: "Decision Intelligence Systems", description: "Augment human decision making. We create systems that combine data science with business rules to support strategic choices.", icon: "fa-lightbulb", image: "/assets/images/service/Business support-pana.png" },
            { title: "Executive Analytics", description: "High-level insights for leadership. We design simplified views that provide executives with instant snapshots of organizational health.", icon: "fa-user-tie", image: "/assets/images/service/agile method-bro.png" },
            { title: "Predictive Analytics", description: "Anticipate the future. We apply predictive models to help you proactively address challenges and opportunities.", icon: "fa-clock", image: "/assets/images/service/agile method-bro.png" }
        ],
        faqs: [
            { question: "Which cloud data warehouse should we use?", answer: "It depends on your existing stack. If you are on GCP, BigQuery is the clear winner. For AWS, Redshift or Snowflake are great options. We help you evaluate costs and performance to make the best architectural decision." },
            { question: "How do you handle 'dirty' data?", answer: "We implement automated data quality checks (using tools like Great Expectations) within the pipeline. Bad data is quarantined for review, and we build transformation logic to clean common errors automatically, ensuring your dashboard metrics remain accurate." },
            { question: "Is my data secure in the cloud?", answer: "Yes. We implement strict encryption at rest and in transit, private networking (VPC), and granular IAM policies. We also configure audit logging so you know exactly who accessed what data and when." }
        ],
        caseStudies: [
            {
                title: "BI Data Warehouse",
                description: "Consolidated data from 5 sources into a single cloud warehouse, enabling real-time cross-departmental reporting and visualization.",
                features: ["Unified Data", "Automated ETL", "Interactive Dashboards"],
                image: "/assets/images/service/Investment data-amico.png",
                link: "/case-studies/bi-warehouse"
            },
            {
                title: "Supply Chain Analytics",
                description: "Created an end-to-end visibility dashboard for a logistics firm, helping identify bottlenecks and reducing delivery delays by 18%.",
                features: ["Route Analytics", "Driver Performance", "Cost Tracking"],
                image: "/assets/images/service/Consultative sales-amico.png",
                link: "/case-studies/supply-chain-analytics"
            }
        ]
    },
    {
        id: 8,
        title: "SaaS Demo & Launch Systems",
        subtitle: "Technical Infrastructure for Successful Launches",
        description: "We provide the technical backbone for your go-to-market strategy. From high-converting landing pages to stable beta environments and launch analytics, we ensure your product enters the market smoothly and gains traction immediately.",
        icon: "New employee-amico.png",
        subCategories: [
            "SaaS Landing Page Design",
            "Interactive Solution Demos",
            "Feature & Pricing Pages",
            "Trial & Onboarding Flows",
            "Conversion-Focused UI",
            "Hosting & Deployment Support",
            "SEO & Content"
        ],
        detailedFeatures: [
            { title: "SaaS Landing Page Design", description: "Capture interest instantly. We design high-converting landing pages that clearly communicate your value proposition.", icon: "fa-laptop-code", image: "/assets/images/service/agile method-bro.png" },
            { title: "Interactive Solution Demos", description: "Let users experience your solution. We build guided interactive demos that showcase key capabilities without a full signup.", icon: "fa-play-circle", image: "/assets/images/service/Investment data-amico.png" },
            { title: "Feature & Pricing Pages", description: "Drive purchase decisions. We create detailed feature comparisons and pricing tables optimized for subscription conversions.", icon: "fa-tags", image: "/assets/images/service/Business support-pana.png" },
            { title: "Trial & Onboarding Flows", description: "Seamless user activation. We design smooth signup and onboarding processes that reduce drop-off and accelerate time-to-value.", icon: "fa-user-plus", image: "/assets/images/service/Application programming interface-amico.png" },
            { title: "Conversion-Focused UI", description: "Optimize for action. Every element of our interface design is placed strategically to encourage user conversion.", icon: "fa-mouse-pointer", image: "/assets/images/service/Consultative sales-amico.png" },
            { title: "Hosting & Deployment Support", description: "Launch with confidence. We manage the infrastructure setup, ensuring your launch site can handle successful traffic spikes.", icon: "fa-cloud-upload", image: "/assets/images/service/Onboarding-bro.png" },
            { title: "SEO & Content", description: "Attract organic traffic. We optimize your launch content for search engines to ensure long-term visibility.", icon: "fa-pen-nib", image: "/assets/images/service/Onboarding-bro.png" }
        ],
        faqs: [
            { question: "How quickly can we launch?", answer: "Using our pre-built infrastructure templates, we can often cut launch technical preparation time by 50%. A typical MVP launch setup can be ready in 2-4 weeks alongside your product development." },
            { question: "Can you help with the marketing strategy too?", answer: "While our core focus is technical implementation (analytics, landing pages, email automation), we work closely with your marketing team to ensure their strategy is technically feasible and properly tracked." },
            { question: "What support do we get on launch day?", answer: "We provide a 'War Room' service on launch day. Our engineers monitor traffic, server health, and error logs in real-time to instantly mitigate any issues, ensuring your big day goes without a hitch." }
        ],
        caseStudies: [
            {
                title: "High-Speed SaaS Launch",
                description: "Executed a technical launch for a B2B SaaS product, including landing pages and analytics, acquiring 1,000 users in week one.",
                features: ["Scalable Infra", "Integrated Analytics", "High Conv. Pages"],
                image: "/assets/images/service/Business support-pana.png",
                link: "/case-studies/saas-launch"
            },
            {
                title: "Beta Program Management",
                description: "Managed the technical rollout of a closed beta program, handling invite codes, waitlists, and user feedback collection for 500 early adopters.",
                features: ["Invite System", "Feedback Loops", "Waitlist Ops"],
                image: "/assets/images/service/New employee-amico.png",
                link: "/case-studies/beta-management"
            }
        ]
    }
];
export interface ServiceFeature {
    title: string;
    description: string;
    icon: string;
    image: string;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceCaseStudy {
    title: string;
    description: string;
    image: string;
    features: string[];
    link?: string;
}

export interface ServiceOffering {
    slug: string;
    title: string;
    category: string;
    summary: string;
    description: string;
    outcomes: string[];
    detailedFeatures?: ServiceFeature[];
    faqs?: ServiceFAQ[];
    caseStudies?: ServiceCaseStudy[];
}

export interface OfferingMenuItem {
    slug: string;
    title: string;
    /** Short line under the title (mega menu card, matches Platforms pattern) */
    desc: string;
    /** Font Awesome 6 solid icon class without the `fa-solid` prefix */
    icon: string;
}

export interface OfferingMenuColumn {
    title: string;
    subtitle: string;
    items: OfferingMenuItem[];
}

export const OFFERING_MENU_COLUMNS: OfferingMenuColumn[] = [
    {
        title: 'Artificial Intelligence',
        subtitle: 'Strategy through production AI',
        items: [
            { slug: 'ai-consulting', title: 'AI Consulting', desc: 'Roadmaps & responsible adoption', icon: 'fa-lightbulb' },
            { slug: 'rag-development', title: 'RAG Development', desc: 'Grounded retrieval pipelines', icon: 'fa-database' },
            { slug: 'llm-development', title: 'LLM Development', desc: 'Custom models & prompts', icon: 'fa-brain' },
            { slug: 'ai-app-development', title: 'AI App Development', desc: 'Product-grade AI interfaces', icon: 'fa-mobile-screen' },
            { slug: 'ai-software-development', title: 'AI Software Development', desc: 'Full-stack intelligent systems', icon: 'fa-code' },
            { slug: 'ai-integration', title: 'AI Integration', desc: 'Connect AI to your stack', icon: 'fa-plug' },
        ],
    },
    {
        title: 'Data Engineering',
        subtitle: 'Pipelines, warehouses, quality',
        items: [
            { slug: 'data-analytics', title: 'Data Analytics', desc: 'Insights & decision support', icon: 'fa-chart-line' },
            { slug: 'data-warehousing', title: 'Data Warehousing', desc: 'Scalable analytics stores', icon: 'fa-warehouse' },
            { slug: 'data-pipeline-development', title: 'Data Pipeline Development', desc: 'ETL, ELT & orchestration', icon: 'fa-diagram-project' },
            { slug: 'data-integration', title: 'Data Integration', desc: 'Connect systems & APIs', icon: 'fa-network-wired' },
            { slug: 'real-time-streaming', title: 'Real-Time Streaming', desc: 'Events, Kafka & stream processing', icon: 'fa-bolt' },
            { slug: 'data-quality-governance', title: 'Data Quality & Governance', desc: 'Trust, lineage & policies', icon: 'fa-shield-halved' },
            { slug: 'data-annotation-services', title: 'Data Annotation Services', desc: 'Quality labels for ML', icon: 'fa-tags' },
            { slug: 'master-data-management', title: 'Master Data Management', desc: 'Golden records & stewardship', icon: 'fa-sitemap' },
        ],
    },
    {
        title: 'Generative AI',
        subtitle: 'Agents, chatbots, fine-tuning',
        items: [
            { slug: 'ai-agent-development', title: 'AI Agent Development', desc: 'Autonomous task agents', icon: 'fa-robot' },
            { slug: 'ai-chatbot-development', title: 'AI Chatbot Development', desc: 'Conversational experiences', icon: 'fa-comments' },
            { slug: 'llm-finetuning', title: 'LLM Finetuning', desc: 'Domain-tuned language models', icon: 'fa-sliders' },
            { slug: 'chatgpt-integration', title: 'Chat GPT Integration', desc: 'OpenAI in your workflows', icon: 'fa-comment-dots' },
            { slug: 'generative-ai-integration', title: 'Generative AI Integration', desc: 'GenAI across products', icon: 'fa-wand-magic-sparkles' },
            { slug: 'adaptive-ai', title: 'Adaptive AI', desc: 'Systems that learn in context', icon: 'fa-arrows-spin' },
            { slug: 'ai-copilot', title: 'AI Copilot', desc: 'Assistive AI for your teams', icon: 'fa-user-astronaut' },
        ],
    },
    {
        title: 'DevOps & Development',
        subtitle: 'Reliability, automation, and delivery',
        items: [
            { slug: 'aiops', title: 'AIOps', desc: 'AI for operations & alerts', icon: 'fa-gears' },
            { slug: 'devops-consulting', title: 'DevOps Consulting', desc: 'Culture, tools, and flow', icon: 'fa-people-group' },
            { slug: 'devops-automation', title: 'DevOps Automation', desc: 'CI/CD & infrastructure as code', icon: 'fa-screwdriver-wrench' },
            { slug: 'site-reliability-engineering', title: 'Site Reliability Engineering', desc: 'SLOs, resilience, on-call', icon: 'fa-server' },
            { slug: 'llm-observability', title: 'LLM Observability', desc: 'Trace, eval, and monitor LLMs', icon: 'fa-eye' },
            { slug: 'mobile-app-development', title: 'Mobile App Development', desc: 'iOS, Android, cross-platform', icon: 'fa-mobile-screen-button' },
            { slug: 'software-development', title: 'Software Development', desc: 'End-to-end engineering', icon: 'fa-laptop-code' },
            { slug: 'staff-augmentation', title: 'Staff Augmentation', desc: 'Embed experts with your team', icon: 'fa-users' },
            { slug: 'product-engineering', title: 'Product Engineering', desc: 'Discovery through delivery', icon: 'fa-diagram-project' },
            { slug: 'api-development', title: 'API Development', desc: 'REST, GraphQL, events', icon: 'fa-code-branch' },
        ],
    },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
    {
        slug: 'ai-consulting',
        title: 'AI Consulting',
        category: 'Artificial Intelligence',
        summary: 'Strategic roadmaps and responsible AI adoption frameworks to drive measurable ROI.',
        description: 'Our AI consulting methodology bridges the gap between executive vision and technical implementation. We conduct deep-dive audits of your existing data infrastructure, identify high-impact AI use cases, and design a phased roadmap that prioritizes quick wins while building long-term competitive advantage.',
        outcomes: ['3-Year AI Maturity Roadmap', 'High-Confidence ROI Models', 'Ethical AI Governance Framework'],
        detailedFeatures: [
            {
                title: 'Strategic Roadmap Development',
                description: 'We define the technical milestones, resource requirements, and vendor selection criteria needed to transition from pilot to production.',
                icon: 'fa-map-location-dot',
                image: '/assets/images/service/Consultative%20sales-amico.png'
            },
            {
                title: 'Data Readiness Assessment',
                description: 'An exhaustive analysis of your data quality, accessibility, and governance to ensure your infrastructure can support advanced model training.',
                icon: 'fa-database',
                image: '/assets/images/service/Investment%20data-amico.png'
            },
            {
                title: 'AI Governance & Ethics',
                description: 'Implementation of guardrails for data privacy, model bias mitigation, and compliance with emerging global AI regulations.',
                icon: 'fa-shield-halved',
                image: '/assets/images/service/At%20the%20office-amico.png'
            }
        ],
        faqs: [
            {
                question: 'How do you measure the ROI of AI consulting?',
                answer: 'We define specific KPIs relative to your business—such as reduction in operational toil, increased developer velocity, or higher customer conversion rates—and track them throughout the implementation phases.'
            },
            {
                question: 'Do you recommend specific models or vendors?',
                answer: 'We are vendor-neutral. We evaluate OpenAI, Google Gemini, Anthropic Claude, and open-source models like Llama 3 to find the best fit for your specific cost and privacy constraints.'
            }
        ],
        caseStudies: [
            {
                title: "Scaling Fintech Infrastructure",
                description: "Re-architected a legacy trading platform into microservices, handling 10x transaction volume with sub-millisecond latency.",
                features: ["99.99% Uptime", "Real-time Data", "Auto-Compliance"],
                image: "/assets/images/project/Laboratory-pana.png",
                link: "/case-studies/fintech-scaling"
            }
        ]
    },
    {
        slug: 'rag-development',
        title: 'RAG Development',
        category: 'Artificial Intelligence',
        summary: 'Retrieval-Augmented Generation systems that connect LLMs to your private enterprise data.',
        description: 'Retrieval-Augmented Generation (RAG) is the gold standard for reducing LLM hallucinations. We build sophisticated pipelines that index your custom knowledge base, retrieve the most relevant context in real-time, and provide grounded, cited answers that your employees and customers can trust.',
        outcomes: ['Zero-Hallucination AI Responses', 'Secure Private Knowledge Access', 'Automated Document Citation'],
        detailedFeatures: [
            {
                title: 'Vector Database Orchestration',
                description: 'High-performance indexing strategies using Pinecone, Weaviate, or Milvus to ensure millisecond-latency retrieval of relevant context.',
                icon: 'fa-network-wired',
                image: '/assets/images/service/Investment%20data-amico.png'
            },
            {
                title: 'Advanced Chunking Strategies',
                description: 'Context-aware document parsing that preserves semantic meaning across complex PDFs, spreadsheets, and technical docs.',
                icon: 'fa-scissors',
                image: '/assets/images/process/design.png'
            },
            {
                title: 'Hybrid Search Implementation',
                description: 'Combining keyword-based (BM25) and semantic (Vector) search to achieve maximum accuracy across diverse query types.',
                icon: 'fa-magnifying-glass-chart',
                image: '/assets/images/process/Research.png'
            }
        ],
        faqs: [
            {
                question: 'How do you handle data privacy in RAG?',
                answer: 'We implement VPC-level security and metadata filtering to ensure the LLM only accesses documents that the querying user has specific permissions to see.'
            },
            {
                question: 'Can RAG handle real-time streaming data?',
                answer: 'Yes, we specialize in high-frequency indexing pipelines that can ingest new data and make it available for AI retrieval within seconds.'
            }
        ]
    },
    {
        slug: 'llm-development',
        title: 'LLM Development',
        category: 'Artificial Intelligence',
        summary: 'Custom prompt engineering, agent orchestration, and fine-tuning for domain-specific tasks.',
        description: 'Going beyond simple API calls, we engineer the systems surrounding LLMs. This includes sophisticated prompt chaining, autonomous agent loops (ReAct/Plan-and-Execute), and fine-tuning models on your specific proprietary datasets to outperform GPT-4 in niche domains.',
        outcomes: ['High-Accuracy Task Agents', 'Proprietary Fine-tuned Models', 'Latency-Optimized Inference'],
        detailedFeatures: [
            {
                title: 'Prompt Engineering & DSLs',
                description: 'Crafting robust, versioned prompt templates with automated evaluation (LLM-as-a-judge) to ensure consistent production performance.',
                icon: 'fa-comment-dots',
                image: '/assets/images/process/development.png'
            },
            {
                title: 'Agentic Orchestration',
                description: 'Building autonomous loops with LangChain and LlamaIndex that can plan, execute, and self-correct multi-step business workflows.',
                icon: 'fa-robot',
                image: '/assets/images/service/Programmer-amico.png'
            }
        ]
    },
    {
        slug: 'ai-app-development',
        title: 'AI App Development',
        category: 'Artificial Intelligence',
        summary: 'Product-ready web and mobile interfaces that put the power of AI in your users’ hands.',
        description: 'We build high-fidelity applications with AI-first UX. From streaming chat interfaces and canvas-based AI editors to assistive copilots embedded in your existing dashboard, we ensure the interface feels snappy and the AI features are discoverable.',
        outcomes: ['Low-Latency AI UX', 'Multi-Modal Interfaces', 'Streaming Response Architecture'],
        detailedFeatures: [
            {
                title: 'Streaming & Async UI',
                description: 'Instant feedback loops using Vercel AI SDK and WebSockets to eliminate the perceived latency of large model responses.',
                icon: 'fa-bolt-lightning',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ],
        caseStudies: [
            {
                title: "FinTech App UI Overhaul",
                description: "Redesigned a mobile banking app interface, boosting user engagement by 35% and upgrading store ratings to 4.8 stars.",
                features: ["Modern Visual Identity", "Simplified Flows", "Dark Mode"],
                image: "/assets/images/project/Laboratory-pana.png",
                link: "/case-studies/fintech-ui-overhaul"
            }
        ]
    },
    {
        slug: 'data-analytics',
        title: 'Data Analytics',
        category: 'Data Engineering',
        summary: 'Transform raw data into strategic insights with advanced modeling and visualization.',
        description: 'Standard dashboards aren’t enough. We build intelligent analytics layers that use diagnostic and predictive modeling to tell you what happened and why it will happen again. We specialize in semantic layers that provide a single source of truth for your entire organization.',
        outcomes: ['Predictive KPI Dashboards', 'Self-Serve Business Intelligence', 'Anomaly Detection Alerts'],
        detailedFeatures: [
            {
                title: 'Semantic Layer Design',
                description: 'Centralized metric definitions using dbt Semantic Layer or Cube.js to prevent "metric drift" between different business units.',
                icon: 'fa-diagram-project',
                image: '/assets/images/service/Investment%20data-amico.png'
            }
        ]
    },
    {
        slug: 'data-warehousing',
        title: 'Data Warehousing',
        category: 'Data Engineering',
        summary: 'Scalable cloud storage and Lakehouse architectures optimized for cost and speed.',
        description: 'We design and implement modern cloud data warehouses using Snowflake, BigQuery, or Databricks. Our architectures follow industry-best Medallion (Bronze/Silver/Gold) patterns to ensure data lineage, quality, and high-performance querying for analysts and ML engineers.',
        outcomes: ['90% Faster Query Performance', 'Linear Scalability', 'Cost-Optimized Auto-Scaling'],
        detailedFeatures: [
            {
                title: 'Cloud Warehouse Migration',
                description: 'Seamlessly moving legacy on-prem workloads to cloud-native platforms with zero downtime and verified data parity.',
                icon: 'fa-cloud-arrow-up',
                image: '/assets/images/process/deployment.png'
            }
        ]
    },
    {
        slug: 'ai-agent-development',
        title: 'AI Agent Development',
        category: 'Generative AI',
        summary: 'Autonomous AI agents capable of planning and executing complex multi-step workflows.',
        description: 'Our agents don’t just chat; they act. Using advanced reasoning loops (Chain-of-Thought) and tool-calling capabilities, we build agents that can browse the web, interact with your CRM, and solve complex customer tickets with minimal human intervention.',
        outcomes: ['Autonomous Ticket Resolution', '24/7 Cognitive Workers', 'Reduced Operational Toil'],
        detailedFeatures: [
            {
                title: 'Tool-Calling & Function Apps',
                description: 'Securely connecting AI models to your internal APIs and databases to enable read/write actions in business systems.',
                icon: 'fa-gears',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'aiops',
        title: 'AIOps',
        category: 'DevOps',
        summary: 'AI-driven incident detection and automated remediation for mission-critical systems.',
        description: 'AIOps transforms your NOC into an intelligent operations center. We implement anomaly detection on telemetry data, automated root-cause analysis for outages, and "self-healing" infrastructure that can restart services or scale capacity before users even notice an issue.',
        outcomes: ['99.99% Availability', 'MTTR Reduction by 60%', 'Zero Alert Fatigue'],
        detailedFeatures: [
            {
                title: 'Anomaly Detection Loops',
                description: 'Using temporal machine learning to identify deviations from normal traffic patterns before they escalate into incidents.',
                icon: 'fa-tower-broadcast',
                image: '/assets/images/process/testing.png'
            }
        ]
    },
    {
        slug: 'ai-software-development',
        title: 'AI Software Development',
        category: 'Artificial Intelligence',
        summary: 'Full-stack engineering of high-performance, intelligent systems tailored for scale.',
        description: 'Going beyond standalone models, we architect the entire software ecosystem required to make AI work in production. This includes high-throughput microservices, real-time data ingestion layers, and responsive UI/UX that makes intelligent features intuitive for the end-user.',
        outcomes: ['Production-Scale AI Backends', 'Service-Oriented AI Pipelines', 'Low-Latency Intelligent Apps'],
        detailedFeatures: [
            {
                title: 'High-Throughput Microservices',
                description: 'Building containerized GO or Python backends optimized for GPU-accelerated inference and high-concurrency user loads.',
                icon: 'fa-cubes',
                image: '/assets/images/service/Programmer-amico.png'
            },
            {
                title: 'Streaming Data Ingestion',
                description: 'Real-time event processing using Kafka or RabbitMQ to feed live data into your intelligent decision-making loops.',
                icon: 'fa-bridge-water',
                image: '/assets/images/service/Investment%20data-amico.png'
            }
        ],
        faqs: [
            {
                question: 'What tech stack do you use for AI software?',
                answer: 'We typically use FastAPI or Go for performance-critical AI services, combined with Kubernetes for orchestration and specialized vector stores for memory.'
            }
        ]
    },
    {
        slug: 'ai-integration',
        title: 'AI Integration',
        category: 'Artificial Intelligence',
        summary: 'Seamlessly embedding AI capabilities into your existing legacy and modern software stacks.',
        description: 'Don’t rebuild from scratch—augment. We specialize in retrofitting existing enterprise platforms (ERP, CRM, LMS) with AI capabilities like auto-summarization, sentiment analysis, and intelligent search without disrupting your current operations.',
        outcomes: ['AI-Augmented Workflows', 'Legacy System Modernization', 'Instant Productivity Gains'],
        detailedFeatures: [
            {
                title: 'Zero-Downtime Augmentation',
                description: 'Using sidecar architectures and API gateways to inject AI logic into legacy systems without modifying core monolithic code.',
                icon: 'fa-plug-circle-bolt',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'data-pipeline-development',
        title: 'Data Pipeline Development',
        category: 'Data Engineering',
        summary: 'Resilient ETL/ELT pipelines that ensure your AI models always have fresh, high-quality data.',
        description: 'Data is the fuel for AI. We build automated, observable pipelines using dbt, Airflow, and Fivetran that handle schema evolution, deduplication, and backfills automatically, ensuring a "clean stream" of data into your warehouse or lake.',
        outcomes: ['Real-Time Data Availability', '99.9% Pipeline Reliability', 'Automated Data Lineage'],
        detailedFeatures: [
            {
                title: 'Modern ELT Orchestration',
                description: 'Replacing brittle legacy ETL with modern, code-based orchestration that supports version control and automated testing.',
                icon: 'fa-code-branch',
                image: '/assets/images/service/agile%20method-bro.png'
            },
            {
                title: 'Change Data Capture (CDC)',
                description: 'Implementing low-impact CDC from production databases to ensure your analytics are never more than seconds out of sync.',
                icon: 'fa-bolt',
                image: '/assets/images/service/Investment%20data-amico.png'
            }
        ]
    },
    {
        slug: 'real-time-streaming',
        title: 'Real-Time Streaming',
        category: 'Data Engineering',
        summary: 'Sub-second data processing and event-driven architectures for instant business response.',
        description: 'In many industries, a minute late is too late. We build high-velocity streaming architectures using Kafka, Flink, or Spark Streaming that process millions of events per second, enabling instant fraud detection, dynamic pricing, and real-time user personalization.',
        outcomes: ['Sub-Second Insight Latency', 'Event-Driven Agility', 'High-Volume Stream Processing'],
        detailedFeatures: [
            {
                title: 'Kafka Cluster Optimization',
                description: 'Tuning partition strategies and consumer groups to handle massive throughput while maintaining strict ordering and exactly-once semantics.',
                icon: 'fa-network-wired',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'ai-chatbot-development',
        title: 'AI Chatbot Development',
        category: 'Generative AI',
        summary: 'Context-aware, conversational AI that handles customer inquiries with human-like precision.',
        description: 'Move beyond "if-else" bots. We build GenAI-powered agents that understand nuanced intent, maintain multi-turn context, and can actually perform actions like checking order status or booking appointments by integrating directly with your APIs.',
        outcomes: ['70% Automation of Support', '24/7 Multi-Lingual Support', 'Bespoke Brand Voice Retention'],
        detailedFeatures: [
            {
                title: 'Nuanced Intent Discovery',
                description: 'Using semantic embeddings to understand user goals even when phrasing is ambiguous or informal.',
                icon: 'fa-comments',
                image: '/assets/images/service/At%20the%20office-amico.png'
            }
        ]
    },
    {
        slug: 'llm-finetuning',
        title: 'LLM Finetuning',
        category: 'Generative AI',
        summary: 'Training foundation models on your proprietary data to exceed GPT-4 performance in specialized domains.',
        description: 'When general models aren’t enough, we fine-tune open-source models (Llama 3, Mistral, Qwen) on your specific datasets—legal, medical, or technical—to achieve superior accuracy, lower latency, and significantly reduced token costs.',
        outcomes: ['Domain-Specific Expertise', 'Drastic Latency Reduction', 'Privacy-Safe Local Inference'],
        detailedFeatures: [
            {
                title: 'Parameter-Efficient Fine-Tuning (PEFT)',
                description: 'Implementing LoRA and QLoRA to fine-tune massive models on consumer-grade hardware with professional-grade results.',
                icon: 'fa-sliders',
                image: '/assets/images/service/FAQs-amico.png'
            }
        ]
    },
    {
        slug: 'devops-automation',
        title: 'DevOps Automation',
        category: 'DevOps',
        summary: 'Eliminating manual toil with intelligent CI/CD and Infrastructure-as-Code (IaC).',
        description: 'We turn infrastructure into code. Our DevOps experts implement self-healing CI/CD pipelines, automated security scanning, and "push-to-deploy" environments that let your developers focus on features, not fire-fighting.',
        outcomes: ['Zero-Manual Deployments', 'Instant Environment Spin-up', 'Automated Compliance Guardrails'],
        detailedFeatures: [
            {
                title: 'GitOps Workflow Design',
                description: 'Managing infrastructure and application state through Git using ArgoCD or Flux for total auditability and easy rollbacks.',
                icon: 'fa-code-commit',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'data-integration',
        title: 'Data Integration',
        category: 'Data Engineering',
        summary: 'Unifying disparate data sources into a single, cohesive truth for your enterprise.',
        description: 'Move past data silos. We specialize in complex data orchestration that unifies CRM, ERP, and legacy mainframe data into a unified platform. Our solutions ensure high availability and data consistency across your entire application ecosystem.',
        outcomes: ['360-Degree Customer View', 'Synchronized Multi-Cloud Data', 'Real-Time Operational Sync'],
        detailedFeatures: [
            {
                title: 'Multi-Source Replication',
                description: 'Using high-performance CDC and event-driven architectures to keep disparate systems in perfect harmony.',
                icon: 'fa-layer-group',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'data-quality-governance',
        title: 'Data Quality & Governance',
        category: 'Data Engineering',
        summary: 'Ensuring your data is accurate, compliant, and trustworthy for AI training.',
        description: 'Bad data leads to bad AI. We implement automated data quality checks, lineage tracking, and governance guardrails that ensure your enterprise data meets the highest standards of accuracy and regulatory compliance (GDPR, HIPAA).',
        outcomes: ['Certified Data Accuracy', 'Automated Lineage Tracking', 'Regulatory Compliance'],
        detailedFeatures: [
            {
                title: 'Automated DQ Observability',
                description: 'Real-time monitoring of data freshness, volume, and schema drift using Monte Carlo or Great Expectations.',
                icon: 'fa-clipboard-check',
                image: '/assets/images/service/Investment%20data-amico.png'
            }
        ]
    },
    {
        slug: 'chatgpt-integration',
        title: 'ChatGPT Integration',
        category: 'Generative AI',
        summary: 'Expert implementation of OpenAI’s most powerful models into your specific business workflows.',
        description: 'We go beyond basic API calls. Our team specializes in building "wrapper-plus" solutions that combine ChatGPT’s reasoning with your proprietary business logic, custom tool-calling, and enterprise-grade security layers.',
        outcomes: ['Instant GenAI Capabilities', 'Secure Enterprise Proxies', 'Domain-Specific Prompt Libraries'],
        detailedFeatures: [
            {
                title: 'Enterprise API Proxying',
                description: 'Adding rate-limiting, PII filtering, and cost-tracking layers on top of standard LLM APIs.',
                icon: 'fa-shield-halved',
                image: '/assets/images/service/At%20the%20office-amico.png'
            }
        ]
    },
    {
        slug: 'adaptive-ai',
        title: 'Adaptive AI',
        category: 'Generative AI',
        summary: 'AI systems that learn and adjust in real-time based on new data and user feedback.',
        description: 'Standard AI is static; Adaptive AI is alive. We implement online learning systems and reinforcement learning loops that allow your models to adapt to changing market conditions and user behaviors without manual retraining.',
        outcomes: ['Continuously Improving Models', 'Real-Time Trend Adoption', 'Reduced Retraining Overhead'],
        detailedFeatures: [
            {
                title: 'Online Learning Loops',
                description: 'Implementing streaming inference pipelines that update model weights or context windows based on live user interactions.',
                icon: 'fa-arrows-spin',
                image: '/assets/images/service/agile%20method-bro.png'
            }
        ]
    },
    {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'DevOps & Development',
        summary: 'Native and cross-platform mobile experiences optimized for speed and engagement.',
        description: 'We build mobile apps that feel like they belong on the device. Whether it’s high-performance native iOS/Android or efficient React Native/Flutter, our apps are built with offline-first capabilities and seamless AI integrations.',
        outcomes: ['Offline-First Functionality', '5-Star App Store Performance', 'Seamless AI Interactions'],
        detailedFeatures: [
            {
                title: 'Cross-Platform Excellence',
                description: 'Single-codebase efficiency with native performance using modern frameworks like Flutter and React Native.',
                icon: 'fa-mobile-screen-button',
                image: '/assets/images/service/Application%20programming%20interface-amico.png'
            }
        ]
    },
    {
        slug: 'product-engineering',
        title: 'Product Engineering',
        category: 'DevOps & Development',
        summary: 'End-to-end lifecycle management of your digital product from concept to scale.',
        description: 'We are your technical co-founders. From MVP scoping to global scaling, we provide the full-stack engineering, design, and product thinking required to build world-class digital products that win markets.',
        outcomes: ['Rapid MVP Timelines', 'Scalable Product Architecture', 'Market-Driven Feature Velocity'],
        detailedFeatures: [
            {
                title: 'Full-Lifecycle Engineering',
                description: 'Managing everything from infrastructure and databases to frontend UI and product analytics.',
                icon: 'fa-rocket',
                image: '/assets/images/service/New%20employee-amico.png'
            }
        ],
        caseStudies: [
            {
                title: "Custom ERP for Manufacturing",
                description: "Developed a bespoke ERP solution integrating inventory, production planning, and logistics, reducing ops costs by 25%.",
                features: ["Real-time Inventory", "Auto-Scheduling", "Vendor Portal"],
                image: "/assets/images/project/Tax-bro.png",
                link: "/case-studies/manufacturing-erp"
            }
        ]
    }
];

// Fallback logic for any services not explicitly defined above
const DEFAULT_FEATURE = (service: string) => ({
    title: 'Core Implementation',
    description: `High-performance implementation of ${service} tailored to your enterprise security and scalability needs.`,
    icon: 'fa-check-double',
    image: '/assets/images/service/At%20the%20office-amico.png'
});

const getRemainingServices = (): ServiceOffering[] => {
    const existingSlugs = SERVICE_OFFERINGS.map(s => s.slug);
    const columns = OFFERING_MENU_COLUMNS.flatMap(c => c.items);

    return columns.filter(c => !existingSlugs.includes(c.slug)).map(c => ({
        slug: c.slug,
        title: c.title,
        category: 'Consulting & Engineering',
        summary: `Professional ${c.title} services for modern enterprises.`,
        description: `Our ${c.title} practice focuses on delivering high-impact, scalable results using the latest industry standards and frameworks. We combine domain expertise with engineering rigor to solve your most complex technical challenges.`,
        outcomes: ['Operational Excellence', 'Scalable Performance', 'Technical Reliability'],
        detailedFeatures: [DEFAULT_FEATURE(c.title)],
        faqs: []
    }));
};

export const ALL_SERVICE_OFFERINGS = [
    ...SERVICE_OFFERINGS,
    ...getRemainingServices()
];

const bySlug: Record<string, ServiceOffering> = Object.fromEntries(
    ALL_SERVICE_OFFERINGS.map((o) => [o.slug, o])
);

export function getServiceOfferingBySlug(slug: string | undefined): ServiceOffering | undefined {
    if (!slug) return undefined;
    return bySlug[slug];
}

export const SERVICE_OFFERING_SLUGS = ALL_SERVICE_OFFERINGS.map((o) => o.slug);
