export interface ProductItem {
    id: number;
    name: string;
    punchline: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
    link: string;
    category: string;
    price: string;
}

export const productsData: ProductItem[] = [
    {
        id: 1,
        name: "NeuralFocus",
        punchline: "Advanced Computer Vision API",
        description: "Analyze images and videos in real-time with our high-precision computer vision engine. Detect objects, recognize faces, and extract text with 99.8% accuracy.",
        icon: "fa-eye",
        image: "/assets/images/service/Application programming interface-amico.png", // Using existing asset
        features: ["Object Detection", "Facial Recognition", "OCR Technology", "Real-time Processing"],
        link: "/products/neural-focus",
        category: "Vision AI",
        price: "$49/mo"
    },
    {
        id: 2,
        name: "LinguistAI",
        punchline: "Enterprise NLP & Language Engine",
        description: "Transform unstructured text into actionable insights. Support 50+ languages for sentiment analysis, entity extraction, and automated summarization.",
        icon: "fa-comments",
        image: "/assets/images/service/Consultative sales-amico.png",
        features: ["Sentiment Analysis", "Multi-language Support", "Chatbot API", "Document Classification"],
        link: "/products/linguist-ai",
        category: "Natural Language",
        price: "$39/mo"
    },
    {
        id: 3,
        name: "DataForge",
        punchline: "Synthetic Data Generator",
        description: "Train your models faster without waiting for real-world data collection. Generate high-fidelity synthetic datasets that respect user privacy and statistical properties.",
        icon: "fa-database",
        image: "/assets/images/service/Investment data-amico.png",
        features: ["Privacy-Preserving", "Statistical Parity", "Video Generation", "Tabular Data Support"],
        link: "/products/data-forge",
        category: "Data Ops",
        price: "$79/mo"
    },
    {
        id: 4,
        name: "AutoML Studio",
        punchline: "No-Code Model Builder",
        description: "Democratize AI in your organization. Empower analysts to build, train, and deploy machine learning models using a drag-and-drop interface with zero coding.",
        icon: "fa-magic",
        image: "/assets/images/service/Business merger-amico.png",
        features: ["Drag-and-Drop", "Auto-Tuning", "One-Click Deploy", "Model Explainability"],
        link: "/products/automl-studio",
        category: "Platform",
        price: "$99/mo"
    },
    {
        id: 5,
        name: "EdgeDeploy",
        punchline: "IoT & Edge Intelligence",
        description: "Run AI anywhere. Optimize and deploy your heavy neural networks to run efficiently on edge devices, mobile phones, and IoT sensors with minimal latency.",
        icon: "fa-microchip",
        image: "/assets/images/service/New employee-amico.png",
        features: ["Model Quantization", "Low Latency", "Offline Inference", "Device Fleet Mgmt"],
        link: "/products/edge-deploy",
        category: "Infrastructure",
        price: "$59/mo"
    },
    {
        id: 6,
        name: "PredictIQ",
        punchline: "Business Forecasting Suite",
        description: "Turn historical data into future revenue. A specialized demand forecasting tool for retail, logistics, and finance sectors to minimize risk and optimize stock.",
        icon: "fa-chart-line",
        image: "/assets/images/service/Business support-pana.png",
        features: ["Demand Forecasting", "Risk Assessment", "Trend Analysis", "Scenario Planning"],
        link: "/products/predict-iq",
        category: "Analytics",
        price: "$69/mo"
    }
];
