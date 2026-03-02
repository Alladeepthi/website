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
        icon: "Business.png",
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
        icon: "Memory.png",
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
        icon: "Onconsulting.png",
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
        icon: "service-ai.png",
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
        icon: "service-digital.png",
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
        icon: "service-enterprise.png",
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
        icon: "service-stats.png",
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
        icon: "world.png",
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
