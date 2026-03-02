export interface BlogPost {
    id: number;
    slug: string;
    date: string;
    author: string;
    category: string;
    title: string;
    image: string;
    content: string;
}

export const blogData: BlogPost[] = [
    {
        id: 1,
        slug: 'scaling-microservices',
        date: "2 October 2024",
        author: "James Henry",
        category: "System Architecture",
        title: "Scaling Microservices: Best Practices for High Throughput",
        image: "/assets/images/blog/blog.png",
        content: `
            <p>In today's distributed world, scaling microservices is a fundamental challenge for any engineering team. High throughput requires more than just adding more instances; it requires a deep understanding of bottlenecks and data flow.</p>
            <h3>1. Horizontal vs Vertical Scaling</h3>
            <p>Vertical scaling (scaling up) has its limits. Horizontal scaling (scaling out) is the preferred approach for cloud-native applications. This involves adding more instances of a service and using a load balancer to distribute traffic.</p>
            <h3>2. Databases and State Management</h3>
            <p>Stateless services are easy to scale. The real challenge lies in the database. Implementing read replicas, sharding, and caching strategies (like Redis) is essential for maintaining performance under load.</p>
        `
    },
    {
        id: 2,
        slug: 'resilient-data-pipelines',
        date: "19 October 2024",
        author: "Engineering Team",
        category: "Data Engineering",
        title: "Architecting Resilient Data Pipelines for Real-Time Analytics",
        image: "/assets/images/blog/webinar.png",
        content: `
            <p>Data pipelines are the lifelines of modern analytics. A failure in the pipeline can lead to stale data and incorrect business decisions. Resilience must be built-in from the start.</p>
            <h3>1. Idempotency and Retries</h3>
            <p>Every step in your pipeline should be idempotent. If a task fails and is retried, it should not produce duplicate data or side effects. This is usually achieved by using unique transaction IDs or overwriting existing records.</p>
            <h3>2. Monitoring and Alerting</h3>
            <p>A resilient pipeline is a monitored one. Setting up alerts for latency spikes, data quality issues, and resource exhaustion allows engineers to intervene before a small problem becomes a major outage.</p>
        `
    },
    {
        id: 3,
        slug: 'automating-mlops',
        date: "25 October 2024",
        author: "AI Research",
        category: "Machine Learning",
        title: "Automating MLOps: From Experimentation to Production",
        image: "/assets/images/service/Programmer-amico.png",
        content: `
            <p>The "hidden technical debt" in machine learning systems is often the lack of automation in the lifecycle. MLOps aims to bridge the gap between model building and deployment.</p>
            <h3>1. Continuous Integration for Models</h3>
            <p>Every time a new model is trained, it should undergo automated testing for performance regression, bias detection, and adversarial robustness.</p>
            <h3>2. Feature Stores</h3>
            <p>A centralized feature store ensures that the features used in training are identical to those used in production, solving the "training-serving skew" problem.</p>
        `
    },
    {
        id: 4,
        slug: 'future-of-genai',
        date: "1 November 2024",
        author: "Sarah Jenkins",
        category: "Generative AI",
        title: "The Future of GenAI: Integrating LLMs into Enterprise Workflows",
        image: "/assets/images/blog/04.webp",
        content: `
            <p>Generative AI is transforming how we interact with software. However, enterprise integration requires more than just calling an API; it requires Retrieval-Augmented Generation (RAG) and governance.</p>
            <h3>1. RAG: Beyond the Context Window</h3>
            <p>Retrieval-Augmented Generation allows models to tap into private enterprise data without needing constant retraining. This ensures that the AI's responses are accurate, grounded, and up-to-date.</p>
            <h3>2. Governance and Security</h3>
            <p>Data privacy is the top concern for enterprise AI. Implementing robust access controls and monitoring for prompt injection or data leakage is critical for maintaining trust.</p>
        `
    }
];
