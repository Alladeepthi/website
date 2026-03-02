export interface SolutionItem {
    id: number;
    title: string;
    problem: string;
    solution: string;
    benefit: string;
    icon: string;
    image: string;
    category: string;
    tags: string[];
}

export const solutionsData: SolutionItem[] = [
    {
        id: 1,
        title: "Intelligent Visual Monitoring",
        problem: "Traditional monitoring systems rely on manual observation, which is prone to fatigue, human error, and slow response times in critical scenarios.",
        solution: "Deploy high-precision computer vision engines that analyze video feeds in real-time, detecting anomalies, recognizing objects, and triggering immediate alerts.",
        benefit: "Reduce operational risks by 85% and achieve 24/7 autonomous surveillance with specialized object tracking.",
        icon: "fa-eye",
        image: "/assets/images/service/Application programming interface-amico.png",
        category: "Vision AI",
        tags: ["Object Detection", "Facial Recognition", "OCR", "Real-time Alerts"]
    },
    {
        id: 2,
        title: "Enterprise Knowledge Automation",
        problem: "Organizations struggle to process millions of unstructured documents, emails, and chat logs, leading to lost insights and inefficient decision-making.",
        solution: "Implement sophisticated NLP layers that automatically categorize documents, extract key entities, and summarize complex texts into actionable intelligence.",
        benefit: "Save thousands of man-hours per month and uncover hidden market trends with multi-language sentiment analysis.",
        icon: "fa-comments",
        image: "/assets/images/service/Consultative sales-amico.png",
        category: "Natural Language",
        tags: ["Sentiment Analysis", "Auto-Summarization", "Entity Extraction", "50+ Languages"]
    },
    {
        id: 3,
        title: "Privacy-Compliant Data Augmentation",
        problem: "Strict data privacy laws (GDPR/CCPA) and data scarcity often prevent the training of accurate AI models using sensitive real-world datasets.",
        solution: "Generate high-fidelity synthetic data that mirrors the statistical properties of real data without including any personally identifiable information (PII).",
        benefit: "Accelerate model training cycles by 3x while ensuring 100% compliance with global data protection standards.",
        icon: "fa-database",
        image: "/assets/images/service/Investment data-amico.png",
        category: "Data Ops",
        tags: ["Privacy-Preserving", "Synthetic Data", "GDPR Ready", "Statistical Parity"]
    },
    {
        id: 4,
        title: "Democratized Business Intelligence",
        problem: "Business analysts often face a technical 'glass ceiling' where they cannot implement advanced predictive models without deep coding expertise.",
        solution: "An intuitive no-code AI studio that allows non-technical users to build, train, and deploy sophisticated machine learning models via drag-and-drop.",
        benefit: "Empower your existing workforce to solve complex problems without hiring additional specialized engineers.",
        icon: "fa-magic",
        image: "/assets/images/service/Business merger-amico.png",
        category: "Platform",
        tags: ["No-Code", "Model Explainability", "One-Click Deploy", "Auto-Tuning"]
    },
    {
        id: 5,
        title: "Decentralized Edge Intelligence",
        problem: "Cloud-dependent AI suffers from high latency, bandwidth costs, and complete failure during connectivity drops, making it unsuitable for remote operations.",
        solution: "Optimize heavy neural networks into lightweight versions that run directly on IoT devices and mobile hardware with zero cloud dependency.",
        benefit: "Achieve millisecond latency and maintain full functionality in offline environments with efficient device fleet management.",
        icon: "fa-microchip",
        image: "/assets/images/service/New employee-amico.png",
        category: "Infrastructure",
        tags: ["Model Quantization", "IoT Support", "Low Latency", "Offline Inference"]
    },
    {
        id: 6,
        title: "Adaptive Demand Forecasting",
        problem: "Small market shifts can lead to massive bullwhip effects in supply chains, causing either crippling stockouts or expensive inventory surpluses.",
        solution: "Use advanced time-series forecasting tools that analyze historical trends and external variables to predict demand with granular accuracy.",
        benefit: "Maximize capital efficiency and minimize waste with scenario planning and risk-adjusted inventory levels.",
        icon: "fa-chart-line",
        image: "/assets/images/service/Business support-pana.png",
        category: "Analytics",
        tags: ["Risk Assessment", "Trend Analysis", "Scenario Planning", "Supply Chain Focus"]
    }
];
