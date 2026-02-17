export interface IndustryData {
    id: string;
    slug: string;
    name: string;
    hero: {
        title: string;
        description: string;
        image?: string;
    };
    overview: {
        heading: string;
        content: string;
        image?: string;
    };
    challenges: {
        title: string;
        items: {
            title: string;
            description: string;
            solution?: string;
        }[];
    };
    solutions: {
        title: string;
        items: {
            title: string;
            description: string;
            icon?: string;
        }[];
    };
    benefits: {
        title: string;
        items: string[];
    };
}

export const industriesData: IndustryData[] = [
    {
        id: '1',
        slug: 'healthcare',
        name: 'Healthcare & Life Sciences',
        hero: {
            title: 'Engineering the Future of Care',
            description: 'Building secure, interoperable, and patient-centric digital health platforms. We engineer compliant systems that bridge the gap between clinical workflows and modern technology.',
            image: '/assets/images/industry/patient-care1.png'
        },
        overview: {
            heading: 'Digital Transformation in Healthcare',
            content: 'The healthcare sector demands absolute reliability, security, and interoperability. We build HIPPA-compliant operational platforms, telemedicine solutions, and integrated data systems that streamline care delivery and improve patient outcomes without compromising on compliance.',
            image: '/assets/images/industry/patient-care.png'
        },
        challenges: {
            title: 'Key Industry Challenges',
            items: [
                {
                    title: 'Interoperability Gaps',
                    description: 'Fragmented systems (EHR/EMR) that fail to communicate effective patient data.',
                    solution: 'We deploy targeted solutions using HL7/FHIR standards to mitigate this risk, ensuring seamless data exchange and compliance through advanced automation and monitoring.'
                },
                {
                    title: 'Regulatory Compliance',
                    description: 'Navigating complex HIPAA, GDPR, and FDA regulations for digital products.',
                    solution: 'Our compliance-first approach integrates security and regulatory requirements from day one, with automated auditing and continuous monitoring to ensure adherence to all healthcare standards.'
                },
                {
                    title: 'Legacy Modernization',
                    description: 'Updating critical but outdated infrastructure without disrupting patient care.',
                    solution: 'We implement phased migration strategies with zero-downtime deployments, ensuring continuous patient care while modernizing your infrastructure with cloud-native technologies.'
                }
            ]
        },
        solutions: {
            title: 'Our Engineering Solutions',
            items: [
                { title: 'Telehealth Platforms', description: 'Secure, high-definition video consultation and remote monitoring systems.', icon: '/assets/images/why-choose/01.svg' },
                { title: 'EHR/EMR Integration', description: 'Middleware and APIs (HL7/FHIR) for seamless data exchange between providers.', icon: '/assets/images/why-choose/02.svg' },
                { title: 'Clinical Workflow Automation', description: 'Custom software to reduce administrative burden and optimize scheduling.', icon: '/assets/images/why-choose/03.svg' },
                { title: 'Medical IoT (IoMT)', description: 'Connectivity solutions for medical devices and wearable health tech.', icon: '/assets/images/why-choose/04.svg' }
            ]
        },
        benefits: {
            title: 'Strategic Value',
            items: [
                'Seamless Interoperability',
                'Strict Compliance (HIPAA/GDPR)',
                'Enhanced Patient Engagement',
                'Operational Efficiency'
            ]
        }
    },
    {
        id: '2',
        slug: 'finance',
        name: 'FinTech & Banking',
        hero: {
            title: 'Secure, Scalable Financial Infrastructure',
            description: 'Engineering the next generation of financial services. From high-frequency trading platforms to secure digital wallets, we build systems that power the global economy.',
            image: '/assets/images/industry/01.webp'
        },
        overview: {
            heading: 'Redefining Financial Services',
            content: 'Trust and speed are the currencies of modern finance. We engineer bank-grade software solutions that handle millions of transactions with zero latency, ensuring robust security and a frictionless user experience for customers and institutions alike.',
            image: '/assets/images/industry/01.webp'
        },
        challenges: {
            title: 'Key Industry Challenges',
            items: [
                {
                    title: 'Security & Fraud',
                    description: 'Protecting assets and data against increasingly sophisticated cyber threats.',
                    solution: 'We implement multi-layered security architectures with real-time fraud detection, encryption at rest and in transit, and continuous threat monitoring to protect your financial assets.'
                },
                {
                    title: 'Legacy Core Banking',
                    description: 'Integrating modern digital experiences with decades-old mainframe systems.',
                    solution: 'Our API-first integration approach creates a modern layer on top of legacy systems, enabling digital transformation without risky core replacements.'
                },
                {
                    title: 'Regulatory Agility',
                    description: 'Adapting quickly to changing global financial regulations and standards.',
                    solution: 'We build configurable compliance engines that adapt to regulatory changes quickly, with automated reporting and audit trails built into every transaction.'
                }
            ]
        },
        solutions: {
            title: 'Our Engineering Solutions',
            items: [
                { title: 'Digital Wallets & Payments', description: 'Secure payment gateways and mobile wallet architectures.', icon: '/assets/images/why-choose/01.svg' },
                { title: 'Trading Platforms', description: 'Low-latency execution venues and algorithmic trading infrastructure.', icon: '/assets/images/why-choose/02.svg' },
                { title: 'RegTech & Compliance', description: 'Automated reporting and KYC/AML verification systems.', icon: '/assets/images/why-choose/03.svg' },
                { title: 'Open Banking APIs', description: 'Secure API layers enabling third-party integrations and innovation.', icon: '/assets/images/why-choose/04.svg' }
            ]
        },
        benefits: {
            title: 'Strategic Value',
            items: [
                'Bank-Grade Security',
                'Microsecond Latency',
                'Regulatory Compliance',
                'Seamless UX'
            ]
        }
    },
    {
        id: '3',
        slug: 'retail',
        name: 'Retail & E-commerce',
        hero: {
            title: 'Omnichannel Retail Engineering',
            description: 'Building unified commerce platforms that connect online storefronts with physical inventory. predictive supply chains, and personalized customer journeys.',
            image: '/assets/images/industry/02.webp'
        },
        overview: {
            heading: 'The New Retail Landscape',
            content: 'Modern retail requires a unified view of the customer and inventory. We engineer end-to-end commerce platforms that integrate POS, e-commerce, and supply chain data to deliver a consistent, personalized experience across all touchpoints.',
            image: '/assets/images/industry/02.webp'
        },
        challenges: {
            title: 'Key Industry Challenges',
            items: [
                {
                    title: 'Inventory Visibility',
                    description: 'Lack of real-time stock data across online and offline channels.',
                    solution: 'We build unified inventory management systems with real-time synchronization across all channels, providing complete visibility and preventing stockouts or overselling.'
                },
                {
                    title: 'Supply Chain Agility',
                    description: 'Difficulty adapting to demand fluctuations and logistics disruptions.',
                    solution: 'Our predictive analytics and automated supply chain platforms help you forecast demand, optimize routing, and respond quickly to disruptions with intelligent automation.'
                },
                {
                    title: 'Customer Retention',
                    description: 'Competition driving the need for hyper-personalized shopping experiences.',
                    solution: 'We implement customer data platforms and AI-powered recommendation engines that deliver personalized experiences across all touchpoints, increasing loyalty and lifetime value.'
                }
            ]
        },
        solutions: {
            title: 'Our Engineering Solutions',
            items: [
                { title: 'Headless Commerce', description: 'Decoupled frontend and backend architectures for ultimate flexibility.', icon: '/assets/images/why-choose/01.svg' },
                { title: 'Supply Chain Visibility', description: 'Real-time tracking and inventory management systems.', icon: '/assets/images/why-choose/02.svg' },
                { title: 'Omnichannel POS', description: 'Unified point-of-sale systems that sync with online stores.', icon: '/assets/images/why-choose/03.svg' },
                { title: 'Customer Data Platforms', description: 'Centralized customer profiles for targeted marketing and loyalty.', icon: '/assets/images/why-choose/04.svg' }
            ]
        },
        benefits: {
            title: 'Strategic Value',
            items: [
                'Unified Inventory View',
                'Increased Conversion Rates',
                'Optimized Logistics',
                'Brand Loyalty'
            ]
        }
    },
    {
        id: '4',
        slug: 'manufacturing',
        name: 'Industrial IoT & Manufacturing',
        hero: {
            title: 'Industry 4.0 Engineering',
            description: 'Connecting machines, data, and people. We build smart factory solutions that visualize production data, automate workflows, and predict maintenance needs.',
            image: '/assets/images/industry/smart-manufacturing1.png'
        },
        overview: {
            heading: 'The Connected Factory',
            content: 'Efficiency in manufacturing comes from visibility and control. We engineer Industrial IoT (IIoT) platforms that collect data from the shop floor, analyze it in real-time, and trigger automated actions to optimize throughput and quality.',
            image: '/assets/images/industry/smart-manufacturing.png'
        },
        challenges: {
            title: 'Key Industry Challenges',
            items: [
                {
                    title: 'Data Silos',
                    description: 'Information locked in proprietary machine protocols and isolated systems.',
                    solution: 'We create unified IIoT platforms that integrate with legacy equipment using standard protocols (OPC-UA, MQTT), breaking down data silos and enabling real-time insights.'
                },
                {
                    title: 'Unplanned Downtime',
                    description: 'Reactive maintenance leading to costly production stoppages.',
                    solution: 'Our predictive maintenance solutions use machine learning to analyze sensor data and predict failures before they occur, reducing downtime by up to 50%.'
                },
                {
                    title: 'Quality Control',
                    description: 'Manual inspection processes that are slow and prone to error.',
                    solution: 'We implement computer vision and AI-powered quality control systems that inspect products in real-time with higher accuracy than manual processes.'
                }
            ]
        },
        solutions: {
            title: 'Our Engineering Solutions',
            items: [
                { title: 'IIoT Platforms', description: 'Sensor data ingestion and visualization dashboards (SCADA/MES integration).', icon: '/assets/images/why-choose/01.svg' },
                { title: 'Digital Twins', description: 'Virtual replicas of physical assets for simulation and monitoring.', icon: '/assets/images/why-choose/02.svg' },
                { title: 'Predictive Maintenance', description: 'Data-driven insights to schedule repairs before failure.', icon: '/assets/images/why-choose/03.svg' },
                { title: 'Automated QC Systems', description: 'Computer vision integration for real-time defect detection.', icon: '/assets/images/why-choose/04.svg' }
            ]
        },
        benefits: {
            title: 'Strategic Value',
            items: [
                'Reduced Downtime',
                'Real-time Visibility',
                'Higher Throughput',
                'Data-Driven Operations'
            ]
        }
    },
    {
        id: '5',
        slug: 'technology',
        name: 'SaaS & High Tech',
        hero: {
            title: 'Software Product Engineering',
            description: 'We are the engineers behind the engineers. We help technology companies build, scale, and modernize their SaaS platforms and digital products.',
            image: '/assets/images/industry/03.webp'
        },
        overview: {
            heading: 'Accelerating Product Innovation',
            content: 'In the fast-paced tech world, speed to market and scalability are everything. We function as an extension of your engineering team, helping you architect cloud-native solutions, automate DevOps pipelines, and launch feature-rich products faster.',
            image: '/assets/images/industry/03.webp'
        },
        challenges: {
            title: 'Key Industry Challenges',
            items: [
                {
                    title: 'Scaling Complexity',
                    description: 'Managing technical debt while trying to scale users and features.',
                    solution: 'We help you refactor and modernize your architecture with cloud-native patterns, microservices, and automated testing to scale efficiently without accumulating debt.'
                },
                {
                    title: 'Talent Gaps',
                    description: 'Finding specialized expertise for niche technologies or rapid expansion.',
                    solution: 'Our expert engineering teams provide on-demand access to specialized skills, allowing you to scale your development capacity quickly without lengthy hiring processes.'
                },
                {
                    title: 'Cloud Costs',
                    description: 'Optimizing infrastructure to maintain margins at scale.',
                    solution: 'We implement FinOps best practices, right-sizing resources, leveraging spot instances, and optimizing architectures to reduce cloud costs by 30-50% while maintaining performance.'
                }
            ]
        },
        solutions: {
            title: 'Our Engineering Solutions',
            items: [
                { title: 'SaaS Platform Development', description: 'Multi-tenant achitectures built for scale and security.', icon: '/assets/images/why-choose/01.svg' },
                { title: 'Cloud-Native Migration', description: 'Refactoring legacy apps for microservices and serverless environments.', icon: '/assets/images/why-choose/02.svg' },
                { title: 'DevOps & CI/CD', description: 'Automating build, test, and deployment workflows.', icon: '/assets/images/why-choose/03.svg' },
                { title: 'API Economy', description: 'Designing public-facing APIs for developer ecosystems.', icon: '/assets/images/why-choose/04.svg' }
            ]
        },
        benefits: {
            title: 'Strategic Value',
            items: [
                'Faster Time-to-Market',
                'Elastic Scalability',
                'Optimized Cloud Costs',
                'Robust Architecture'
            ]
        }
    }
];
