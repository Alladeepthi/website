
export interface PlatformData {
    id: string;
    slug: string;
    name: string;
    type: 'DataLake' | 'RAG' | 'VectorDB' | 'Model';
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
    solutions: {
        title: string;
        items: {
            title: string;
            description: string;
        }[];
        image?: string;
    };
    caseStudies: {
        title: string;
        items: {
            title: string;
            description: string;
            image?: string;
        }[];
    };
    whyChoose: {
        title: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    faq: {
        question: string;
        answer: string;
    }[];
}

export const platformsData: PlatformData[] = [
    {
        id: 'snowflake',
        slug: 'snowflake',
        name: 'Snowflake',
        type: 'DataLake',
        hero: {
            title: 'Snowflake Partner',
            description: 'Unlock the full potential of your data with Snowflake’s Data Cloud. Secure, scalable, and easy to use.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Platform Overview',
            content: 'Snowflake delivers the Data Cloud — a global network where thousands of organizations mobilize data with near-unlimited scale, concurrency, and performance. Inside the Data Cloud, organizations unite their siloed data, easily discover and securely share governed data, and execute diverse analytic workloads.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Our Snowflake Solutions',
            items: [
                {
                    title: 'Data Migration',
                    description: 'Seamlessly migrate your legacy data warehouses to Snowflake with zero downtime.'
                },
                {
                    title: 'Data Warehousing',
                    description: 'Build robust data warehouse solutions that scale with your business needs.'
                },
                {
                    title: 'Data Engineering',
                    description: 'Automate data pipelines and transformations for real-time insights.'
                },
                {
                    title: 'Data Sharing',
                    description: 'Securely share live data across your organization and with external partners.'
                }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: {
            title: 'Case studies showcasing our expertise',
            items: [
                {
                    title: 'Retail Analytics Transformation',
                    description: 'How we helped a major retailer optimize inventory using Snowflake.',
                    image: '/assets/images/platform/computer-login.png'
                },
                {
                    title: 'FinTech Data Security',
                    description: 'Implementing secure data sharing for a financial services provider.',
                    image: '/assets/images/platform/Social networking-amico.png'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose NeuralTrix for Snowflake Solutions',
            items: [
                {
                    title: 'Certified Experts',
                    description: 'Our team consists of certified Snowflake architects and engineers.'
                },
                {
                    title: 'Proven Methodologies',
                    description: 'We follow best practices and proven methodologies for successful delivery.'
                },
                {
                    title: 'End-to-End Support',
                    description: 'From strategy to implementation and ongoing support, we are with you.'
                },
                {
                    title: 'Cost Optimization',
                    description: 'We help you optimize your Snowflake usage to reduce costs.'
                }
            ]
        },
        faq: [
            {
                question: 'What is Snowflake?',
                answer: 'Snowflake is a cloud-based data warehousing platform that allows you to store and analyze data.'
            },
            {
                question: 'How is Snowflake different from traditional data warehouses?',
                answer: 'Snowflake separates compute and storage, allowing for independent scaling and cost optimization.'
            },
            {
                question: 'Is my data secure in Snowflake?',
                answer: 'Yes, Snowflake includes built-in security features such as encryption, access control, and compliance certifications.'
            }
        ]
    },
    {
        id: 'redshift',
        slug: 'redshift',
        name: 'RedShift',
        type: 'DataLake',
        hero: {
            title: 'AWS Redshift Partner',
            description: 'Analyze all your data with the fastest and most widely used cloud data warehouse.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Amazon Redshift Overview',
            content: 'Amazon Redshift uses SQL to analyze structured and semi-structured data across data warehouses, operational databases, and data lakes, using AWS-designed hardware and machine learning to deliver the best price performance at any scale.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Our Redshift Solutions',
            items: [
                { title: 'Warehouse Modernization', description: 'Upgrade your legacy databases to a modern, cloud-native architecture.' },
                { title: 'Performance Optimization', description: 'Fine-tune your clusters for maximum query speed and concurrency.' },
                { title: 'Data Lake Integration', description: 'Seamlessly query data in your S3 data lake without loading it.' },
                { title: 'Real-time Analytics', description: 'Enable real-time dashboards and reporting for immediate insights.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: {
            title: 'Success Stories',
            items: [
                { title: 'E-commerce Scale', description: 'Scaling to petabytes of data for a global e-commerce giant.', image: '/assets/images/platform/Social tree-rafiki.png' },
                { title: 'Healthcare Analytics', description: 'Accelerating patient data analysis by 10x with Redshift.', image: '/assets/images/platform/Video files-rafiki.png' }
            ]
        },
        whyChoose: {
            title: 'Why Us for AWS Redshift?',
            items: [
                { title: 'AWS Advanced Partners', description: 'Recognized expertise in AWS data analytics solutions.' },
                { title: 'Migration Accelerators', description: 'Tools and frameworks to speed up your migration journey.' },
                { title: '24/7 Managed Services', description: 'Round-the-clock monitoring and management of your data infrastructure.' },
                { title: 'Security First', description: 'Best-in-class security implementation for sensitive data.' }
            ]
        },
        faq: [
            { question: 'What is Amazon Redshift?', answer: 'Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud.' },
            { question: 'Can Redshift handle semi-structured data?', answer: 'Yes, Redshift supports semi-structured data like JSON using the SUPER data type.' },
            { question: 'How does Redshift scale?', answer: 'Redshift allows you to scale concurrency and storage independently to meet demand.' }
        ]
    },
    {
        id: 'databricks',
        slug: 'databricks',
        name: 'Databricks',
        type: 'DataLake',
        hero: {
            title: 'Databricks Lakehouse Platform',
            description: 'Unify all your data, analytics, and AI on one platform.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Databricks Overview',
            content: 'The Databricks Lakehouse Platform combines the best elements of data lakes and data warehouses to deliver the reliability, strong governance, and performance of data warehouses with the openness, flexibility, and machine learning support of data lakes.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Our Databricks Solutions',
            items: [
                { title: 'Lakehouse Architecture', description: 'Design and implement a unified data architecture.' },
                { title: 'Data Engineering & ETL', description: 'Build reliable and scalable data pipelines with Delta Live Tables.' },
                { title: 'Machine Learning Operations', description: 'Manage the full ML lifecycle with MLflow.' },
                { title: 'Data Governance', description: 'Implement fine-grained data access control with Unity Catalog.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Impactful Results', items: [{ title: 'Predictive Maintenance', description: 'Reducing equipment downtime by 40% for a manufacturing client.', image: '/assets/images/platform/computer-login.png' }, { title: 'Personalization Engine', description: 'Driving 30% revenue uplift through real-time recommendations.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Certified Databricks Partners', description: 'Deep expertise in the Databricks ecosystem.' }, { title: 'Unified Approach', description: 'We bridge the gap between data engineering and data science.' }, { title: 'Rapid Deployment', description: 'Get your Lakehouse up and running in weeks, not months.' }, { title: 'Scalable Solutions', description: 'Architectures designed to grow with your data.' }] },
        faq: [{ question: 'What is a Lakehouse?', answer: 'A Lakehouse is a new data management architecture that combines the flexibility of data lakes with the data management of data warehouses.' }, { question: 'What is Delta Lake?', answer: 'Delta Lake is an open-source storage layer that brings reliability to data lakes.' }]
    },
    {
        id: 'mongodb',
        slug: 'mongodb',
        name: 'MongoDB',
        type: 'DataLake',
        hero: {
            title: 'MongoDB – The Developer Data Platform',
            description: 'Build faster and scale further with the most popular modern database.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'MongoDB Overview',
            content: 'MongoDB is a document database designed for ease of development and scaling. Its flexible data model allows you to store data of any structure, and it provides a unified query interface for any workload.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Our MongoDB Solutions',
            items: [
                { title: 'Application Development', description: 'Build high-performance, scalable applications with MongoDB.' },
                { title: 'Database Migration', description: 'Migrate from relational databases or other NoSQL stores.' },
                { title: 'Performance Tuning', description: 'Optimize indexes and queries for maximum throughput.' },
                { title: 'Atlas Management', description: 'Full management and optimization of MongoDB Atlas clusters.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Client Success', items: [{ title: 'IoT Data Platform', description: 'Handling millions of device events per second.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Content Management', description: 'Flexible CMS backend for a global media company.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'MongoDB Experts', description: 'Deep knowledge of document modeling and distributed systems.' }, { title: 'Cloud Native', description: 'Expertise in deploying MongoDB on AWS, Azure, and GCP.' }, { title: 'Agile Delivery', description: 'Iterative development to match your fast-paced needs.' }, { title: 'Full-Stack Capability', description: 'We build the apps that run on the database, not just the database.' }] },
        faq: [{ question: 'Why use a document database?', answer: 'Document databases offer a flexible schema that maps directly to objects in your code.' }, { question: 'What is MongoDB Atlas?', answer: 'MongoDB Atlas is a fully managed cloud database service.' }]
    },
    {
        id: 'datadog',
        slug: 'datadog',
        name: 'Datadog',
        type: 'DataLake',
        hero: {
            title: 'Datadog: Cloud Monitoring as a Service',
            description: 'See inside any stack, any app, at any scale, anywhere.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Datadog Overview',
            content: 'Datadog is a monitoring and security platform for cloud applications. It brings together end-to-end traces, metrics, and logs to make your applications, infrastructure, and third-party services entirely observable.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Our Datadog Solutions',
            items: [
                { title: 'Full-Stack Observability', description: 'Implement comprehensive monitoring across your entire stack.' },
                { title: 'Log Management', description: 'Centralize and analyze logs for rapid troubleshooting.' },
                { title: 'APM & Tracing', description: 'Optimize application performance with detailed tracing.' },
                { title: 'Security Monitoring', description: 'Detect potential threats in real-time.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Monitoring Success', items: [{ title: 'Downtime Reduction', description: 'Reduced MTTR by 60% for a SaaS provider.', image: '/assets/images/platform/computer-login.png' }, { title: 'Cloud Migration', description: ' ensured visibility during a massive cloud migration.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Observability Experts', description: 'We know what metrics matter most for your business.' }, { title: 'Custom Dashboards', description: 'We build views tailored to your specific stakeholders.' }, { title: 'Proactive Alerting', description: 'Configure alerts that are actionable, not noisy.' }, { title: 'Integration Specialists', description: 'Seamlessly integrate Datadog with your existing tools.' }] },
        faq: [{ question: 'What can Datadog monitor?', answer: 'Datadog monitors servers, databases, tools, services, and apps.' }, { question: 'Is Datadog SaaS?', answer: 'Yes, Datadog is a SaaS-based data analytics platform.' }]
    },

    // RAG Tools
    {
        id: 'unstructured',
        slug: 'unstructured',
        name: 'Unstructured',
        type: 'RAG',
        hero: {
            title: 'Unstructured.io Integration',
            description: 'ETL for LLMs. Ingest and process unstructured data for your AI applications.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Unstructured Overview',
            content: 'Unstructured provides open-source components for ingesting and processing unstructured data, such as PDFs, HTML, and Word documents, preparing it for use with Large Language Models (LLMs).',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Unstructured Data Solutions',
            items: [
                { title: 'Document Parsing', description: 'Extract clean text from PDFs, PPTs, and more.' },
                { title: 'Data Cleaning', description: 'Normalize and clean data for superior model performance.' },
                { title: 'RAG Pipelines', description: 'Build end-to-end Retrieval Augmented Generation flows.' },
                { title: 'Metadata Extraction', description: 'Automatically tag and classify document content.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'RAG Success', items: [{ title: 'Legal Document Search', description: 'Indexing thousands of contracts for semantic search.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Financial Analysis', description: 'Extracting insights from earnings reports.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'AI Engineering Focus', description: 'We specialize in building production-grade AI systems.' }, { title: 'Data Quality First', description: 'We understand that better data means better models.' }, { title: 'Custom Connectors', description: 'We build custom ingest pipelines for your unique data sources.' }, { title: 'Fast Iteration', description: 'Rapidly prototype and deploy RAG solutions.' }] },
        faq: [{ question: 'What file types are supported?', answer: 'Unstructured supports PDF, HTML, Word, PowerPoint, images, and more.' }, { question: 'Why is this needed for LLMs?', answer: 'LLMs need clean text input; raw documents contain complex formatting that must be processed first.' }]
    },
    {
        id: 'airbyte',
        slug: 'airbyte',
        name: 'Airbyte',
        type: 'RAG',
        hero: {
            title: 'Airbyte: Open Source ELT',
            description: 'Replicate data from APIs, databases, and files to data warehouses, lakes, and databases.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Airbyte Overview',
            content: 'Airbyte is the leading open-source ELT platform tailored for the modern data stack. It offers a vast catalog of pre-built connectors and makes it easy to build custom ones, ensuring you can move data from anywhere to anywhere.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Our Airbyte Implementations',
            items: [
                { title: 'Data Replication', description: 'Reliable syncs from 300+ sources.' },
                { title: 'Custom Connectors', description: 'Develop connectors for your proprietary APIs.' },
                { title: 'Modern Data Stack', description: 'Integrate Airbyte with dbt, Snowflake, and more.' },
                { title: 'Data Quality Monitoring', description: 'Ensure the integrity of your piped data.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Integration Wins', items: [{ title: 'Marketing Analytics', description: 'Centralizing data from Ad platforms for unified reporting.', image: '/assets/images/platform/computer-login.png' }, { title: 'Product Usage', description: 'Syncing product telemetry to the warehouse.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'ELT Experts', description: 'Deep experience with the extraction and loading paradigm.' }, { title: 'Open Source Contributors', description: 'Active members of the data engineering community.' }, { title: 'Robust Architectures', description: 'Building fault-tolerant data pipelines.' }, { title: 'Scalability', description: 'Handling high-volume data syncs effortlessly.' }] },
        faq: [{ question: 'What is ELT?', answer: 'ELT stands for Extract, Load, Transform, a modern data integration process.' }, { question: 'Is Airbyte open source?', answer: 'Yes, Airbyte has a widely used open-source edition.' }]
    },
    {
        id: 'llamaindex',
        slug: 'llamaindex',
        name: 'LlamaIndex',
        type: 'RAG',
        hero: {
            title: 'LlamaIndex Data Framework',
            description: 'Connect your custom data to Large Language Models.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'LlamaIndex Overview',
            content: 'LlamaIndex (formerly GPT Index) is a data framework for your LLM applications. It provides the essential tools to ingest, structure, and access private or domain-specific data, making it useful for LLMs.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'LlamaIndex Solutions',
            items: [
                { title: 'Knowledge Base Q&A', description: 'Build chatbots that know your documentation.' },
                { title: 'Structured Data Indexing', description: 'Query SQL databases using natural language.' },
                { title: 'Agentic Workflows', description: 'Create agents that can reason over your data.' },
                { title: 'Document Summarization', description: 'Generate concise summaries of large document sets.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'LLM Applications', items: [{ title: 'Customer Support Bot', description: 'Reducing ticket volume by answering queries from knowledge base.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Internal Search', description: 'Employee handbook search engine.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Cutting-Edge AI', description: 'We stay updated with the latest in GenAI frameworks.' }, { title: 'Context Optimization', description: 'Efficiently managing token windows and retrieval.' }, { title: 'Hybrid Search', description: 'Combining keyword and semantic search for accuracy.' }, { title: 'Production Ready', description: 'Moving prototypes to stable, deployed applications.' }] },
        faq: [{ question: 'What does LlamaIndex do?', answer: 'It builds indices over your data for efficient querying by LLMs.' }, { question: 'How is it different from LangChain?', answer: 'LlamaIndex focuses specifically on data ingestion and retrieval structures.' }]
    },
    {
        id: 'langchain',
        slug: 'langchain',
        name: 'LangChain',
        type: 'RAG',
        hero: {
            title: 'LangChain Development',
            description: 'Building applications powered by Language Models.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'LangChain Overview',
            content: 'LangChain is a framework for developing applications powered by language models. It enables applications that are data-aware and agentic, allowing them to interact with their environment.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'LangChain Services',
            items: [
                { title: 'Custom AI Agents', description: 'Autonomous agents that perform complex tasks.' },
                { title: 'Chat Interfaces', description: 'Memory-aware conversation capabilities.' },
                { title: 'Tool Integration', description: 'Giving LLMs access to calculators, APIs, and search.' },
                { title: 'Evaluation & Tracing', description: 'Debugging and improving model outputs.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Agent Success', items: [{ title: 'Market Research Agent', description: 'Automating web research and report generation.', image: '/assets/images/platform/computer-login.png' }, { title: 'Coding Assistant', description: 'Custom code generation tools for internal libraries.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Early Adopters', description: 'Extensive experience since the inception of LangChain.' }, { title: 'Complex Chains', description: 'Building multi-step reasoning chains.' }, { title: 'Model Agnostic', description: 'Switching between OpenAI, Anthropic, and local models.' }, { title: 'Enterprise Grade', description: 'Security and reliability in AI apps.' }] },
        faq: [{ question: 'What is a Chain?', answer: 'A sequence of calls (to an LLM or a tool) tailored to a specific task.' }, { question: 'Can LangChain run locally?', answer: 'Yes, it works with local models and vector stores.' }]
    },

    // Vector DB
    {
        id: 'pinecone',
        slug: 'pinecone',
        name: 'Pinecone',
        type: 'VectorDB',
        hero: {
            title: 'Pinecone Vector Database',
            description: 'Long-term memory for your AI. Managed vector search.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Pinecone Overview',
            content: 'Pinecone makes it easy to add vector search to your production applications. It combines vector search libraries, API, and managed infrastructure to deliver high performance and reliability at any scale.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Pinecone Integrations',
            items: [
                { title: 'Semantic Search', description: 'Powering search based on meaning, not just keywords.' },
                { title: 'Recommendation Systems', description: 'Suggesting content based on user similarity.' },
                { title: 'RAG Memory', description: 'Storing embeddings for fast context retrieval.' },
                { title: 'Image Search', description: 'Finding similar images using vector embeddings.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Search Scale', items: [{ title: 'E-commerce Discovery', description: 'Improving conversion with visual similarity search.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Chat Memory', description: 'Giving a chatbot long-term conversation history.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Vector Specialists', description: 'Expertise in embedding models and vector space.' }, { title: 'Performance Tuning', description: 'Optimizing index types for speed/accuracy trade-offs.' }, { title: 'Managed Service Ops', description: 'Zero-hassle infrastructure management.' }, { title: 'Scalable Architecture', description: 'Building for millions of vectors.' }] },
        faq: [{ question: 'What is a vector database?', answer: 'A database optimized for storing and querying high-dimensional vectors.' }, { question: 'Is Pinecone fully managed?', answer: 'Yes, you don’t need to manage infrastructure.' }]
    },
    {
        id: 'weaviate',
        slug: 'weaviate',
        name: 'Weaviate',
        type: 'VectorDB',
        hero: {
            title: 'Weaviate Vector Search Engine',
            description: 'Open source vector database that stores both objects and vectors.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Weaviate Overview',
            content: 'Weaviate is an open-source vector search engine. It allows you to store data objects and vector embeddings from your favorite ML-models, and scale seamlessly into billions of data objects.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Weaviate Solutions',
            items: [
                { title: 'Hybrid Search', description: 'Combining keyword and vector search out of the box.' },
                { title: 'Generative Search', description: 'RAG capabilities built directly into the database.' },
                { title: 'Multi-modal Search', description: 'Searching across text, images, and audio.' },
                { title: 'Cloud & On-Prem', description: 'Flexible deployment options to suit your needs.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Search Innovation', items: [{ title: 'Wiki Search', description: 'Semantic search over millions of articles.', image: '/assets/images/platform/computer-login.png' }, { title: 'Product Matcher', description: 'Using CLIP embeddings for inventory matching.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Weaviate Partners', description: 'Close collaboration with the Weaviate ecosystem.' }, { title: 'Modular Design', description: 'Customizing modules for vectorization.' }, { title: 'Data Privacy', description: 'On-premise deployments for sensitive data.' }, { title: 'Scalability', description: 'Horizontal scaling for massive datasets.' }] },
        faq: [{ question: 'Is Weaviate open source?', answer: 'Yes, the core engine is open source.' }, { question: 'What are modules?', answer: 'Extensions that add functionality like vectorization.' }]
    },
    {
        id: 'zilliz',
        slug: 'zilliz',
        name: 'Zilliz',
        type: 'VectorDB',
        hero: {
            title: 'Zilliz Cloud',
            description: 'Fully managed Milvus. The standard for vector database.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Zilliz Overview',
            content: 'Zilliz Cloud is a fully managed vector database service built on Milvus, the world\'s most popular open-source vector database. It simplifies the deployment and scaling of vector search.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Zilliz Implementations',
            items: [
                { title: 'Enterprise Vector Search', description: 'High availability and security for enterprise apps.' },
                { title: 'Real-time Similarity', description: 'Millisecond latency for vector queries.' },
                { title: 'Unstructured Data Analysis', description: 'Making sense of video, audio, and text.' },
                { title: 'Cluster Management', description: 'Effortless scaling and maintenance.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Deployment Success', items: [{ title: 'Visual Ad Tech', description: 'Matching distinct visual patterns in real-time.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Bioinformatics', description: 'Protein structure similarity search.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Milvus Experts', description: 'Deep roots in the Milvus technology.' }, { title: 'Cloud Optimization', description: 'Getting the best performance per dollar.' }, { title: 'Support & Training', description: 'Helping your team master vector search.' }, { title: 'Security', description: 'Enterprise-grade compliance and security.' }] },
        faq: [{ question: 'Is Zilliz related to Milvus?', answer: 'Zilliz is the company behind Milvus.' }, { question: 'Why use Zilliz Cloud?', answer: 'For a managed, hassle-free experience of Milvus.' }]
    },
    {
        id: 'milvus',
        slug: 'milvus',
        name: 'Milvus',
        type: 'VectorDB',
        hero: {
            title: 'Milvus Vector Database',
            description: 'The world\'s most advanced open-source vector database.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Milvus Overview',
            content: 'Milvus is built for scalable similarity search. It is cloud-native and designed to make unstructured data search accessible and efficient across deployment environments.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Milvus Solutions',
            items: [
                { title: 'Large Scale Search', description: 'Handling billions of vectors efficiently.' },
                { title: 'Custom Deployment', description: 'Running on Kubernetes in your private cloud.' },
                { title: 'AI Application Backend', description: 'The storage engine for your custom AI models.' },
                { title: 'Feature Store', description: 'Managing embeddings for ML training.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Open Source Wins', items: [{ title: 'Cybersecurity', description: 'Detecting anomaly patterns in network traffic.', image: '/assets/images/platform/computer-login.png' }, { title: 'Drug Discovery', description: 'Molecule similarity matching.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Kubernetes Masters', description: 'Expertise in deploying stateful apps on K8s.' }, { title: 'Performance Engineering', description: 'Tuning Milvus for specific hardware.' }, { title: 'Open Source Advocacy', description: 'Commitment to open standards.' }, { title: 'Cost Effective', description: 'Maximizing resource utilization.' }] },
        faq: [{ question: 'What is the license?', answer: 'Apache 2.0.' }, { question: 'How does it scale?', answer: 'It separates compute and storage for elastic scaling.' }]
    },
    {
        id: 'supabase',
        slug: 'supabase',
        name: 'Supabase',
        type: 'VectorDB',
        hero: {
            title: 'Supabase Vector',
            description: 'The open source Firebase alternative with pgvector.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Supabase Overview',
            content: 'Supabase provides a full backend-as-a-service, including authentication, real-time database, and storage. With pgvector, it becomes a powerful vector database utilizing the robustness of PostgreSQL.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Supabase AI Solutions',
            items: [
                { title: 'PostgreSQL Vectors', description: 'Store vectors alongside your relational data.' },
                { title: 'Full Backend', description: 'Auth, Database, and Vectors in one platform.' },
                { title: 'Edge Functions', description: 'Run AI logic close to your users.' },
                { title: 'Real-time AI', description: 'Push AI-generated updates to clients instantly.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'App Development', items: [{ title: 'SaaS Starter', description: 'Rapid launch of an AI-powered SaaS.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Mobile App Backend', description: 'Unified backend for a Flutter app.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'PostgreSQL Experts', description: 'Decades of SQL experience applied to vectors.' }, { title: 'Rapid Development', description: 'We build MVPs in record time.' }, { title: 'Integrated Security', description: 'Row Level Security applied to vector search.' }, { title: 'Open Source', description: 'No vendor lock-in.' }] },
        faq: [{ question: 'Is it just Postgres?', answer: 'Yes, it extends Postgres with vector capabilities.' }, { question: 'Can I self hopse?', answer: 'Yes, Supabase is open source.' }]
    },

    // Models
    {
        id: 'openai',
        slug: 'openai',
        name: 'OpenAI',
        type: 'Model',
        hero: {
            title: 'OpenAI Integration Partner',
            description: 'Building the next generation of apps with GPT-4 and ChatGPT.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'OpenAI Overview',
            content: 'OpenAI is an AI research and deployment company tailored to ensure AGIs benefit all of humanity. Their models, including GPT-4 and DALL-E, set the standard for generative AI capability.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'OpenAI Services',
            items: [
                { title: 'Custom GPT Assistants', description: 'Fine-tuned assistants for your business.' },
                { title: 'Content Generation', description: 'Automated marketing, code, and text creation.' },
                { title: 'Code Interpretation', description: 'Data analysis using specialized models.' },
                { title: 'Vision Capabilities', description: 'Analyzing images and inputs with GPT-4V.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Generative AI Success', items: [{ title: 'Automated Support', description: 'Resolving 80% of queries automatically.', image: '/assets/images/platform/computer-login.png' }, { title: 'Creative Studio', description: 'Generating asset variations for campaigns.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Prompt Engineering', description: 'Advanced techniques to get the best outputs.' }, { title: 'API Optimization', description: 'Managing costs and latency.' }, { title: 'Fine-Tuning', description: 'Training models on your specific dataset.' }, { title: 'Safety Guardrails', description: 'Preventing hallucinations and unsafe outputs.' }] },
        faq: [{ question: 'What is GPT-4?', answer: 'The latest multimodal model from OpenAI.' }, { question: 'Is my data used for training?', answer: 'We ensure API usage policies protect your data.' }]
    },
    {
        id: 'gemini',
        slug: 'gemini',
        name: 'Gemini',
        type: 'Model',
        hero: {
            title: 'Google Gemini',
            description: 'Google’s most capable and general model, built to be multimodal.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Gemini Overview',
            content: 'Gemini is built from the ground up to be multimodal, which means it can generalize and seamlessly understand, operate across, and combine different types of information including text, code, audio, image, and video.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Gemini Implementations',
            items: [
                { title: 'Multimodal Analysis', description: 'Processing video and text simultaneously.' },
                { title: 'Complex Reasoning', description: 'Solving difficult math and logic problems.' },
                { title: 'Coding Partner', description: 'Advanced code generation and debugging.' },
                { title: 'Enterprise Search', description: 'Powering Vertex AI search experiences.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Innovation', items: [{ title: 'Video Intelligence', description: 'Automated tagging and summary of video archives.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Scientific Research', description: 'Analyzing complex papers and datasets.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Google Cloud Partners', description: 'Deep integration with Vertex AI.' }, { title: 'Multimodal Experts', description: 'Leveraging video and audio inputs effectively.' }, { title: 'Enterprise Scale', description: 'Deploying robust Google-backed solutions.' }, { title: 'Responsible AI', description: 'Adhering to strict safety standards.' }] },
        faq: [{ question: 'How is it different from GPT-4?', answer: 'It is natively multimodal and integrated into the Google ecosystem.' }, { question: 'Available in Vertex AI?', answer: 'Yes, fully available for enterprise use.' }]
    },
    {
        id: 'llama-3.2',
        slug: 'llama-3.2',
        name: 'Llama 3.2',
        type: 'Model',
        hero: {
            title: 'Meta Llama 3.2',
            description: 'The open state-of-the-art model. Power and control in your hands.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Llama 3.2 Overview',
            content: 'Llama 3.2 is the latest generation of open access large language models from Meta. It offers performance competitive with the best closed source models, allowing for private, on-premise, or custom deployments.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Llama Deployments',
            items: [
                { title: 'Private AI', description: 'Running models within your secure VPC.' },
                { title: 'Fine-Tuning', description: 'Adapting the open weights to your unique domain.' },
                { title: 'Cost Efficiency', description: 'Lowering inference costs compared to APIs.' },
                { title: 'Edge Deployment', description: 'Running quantized models on smaller devices.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Open Source Freedom', items: [{ title: 'Financial Modeling', description: 'Secure on-prem analysis of sensitive data.', image: '/assets/images/platform/computer-login.png' }, { title: 'Healthcare Assistant', description: 'HIPAA compliant private deployment.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Model Hosting', description: 'Optimized inference infrastructure.' }, { title: 'Fine-Tuning Labs', description: 'Custom datasets and training pipelines.' }, { title: 'Privacy Focused', description: 'Your data never leaves your environment.' }, { title: 'Optimization', description: 'Quantization and pruning for speed.' }] },
        faq: [{ question: 'Is it free?', answer: 'The weights are open for research and commercial use.' }, { question: 'Can I run it on my laptop?', answer: 'Yes, smaller versions run efficiently on consumer hardware.' }]
    },
    {
        id: 'bert',
        slug: 'bert',
        name: 'BERT',
        type: 'Model',
        hero: {
            title: 'BERT & Transformers',
            description: 'The foundation of modern NLP. Understanding context like never before.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'BERT Overview',
            content: 'BERT (Bidirectional Encoder Representations from Transformers) revolutionized NLP by offering state-of-the-art results in a wide variety of NLP tasks. It is excellent for understanding the meaning and context of text.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'BERT Applications',
            items: [
                { title: 'Sentiment Analysis', description: 'Understanding customer emotion at scale.' },
                { title: 'Named Entity Recognition', description: 'Extracting people, places, and organizations.' },
                { title: 'Text Classification', description: 'Routing support tickets automatically.' },
                { title: 'Question Answering', description: 'Extractive QA from documents.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'NLP Success', items: [{ title: 'Email Sorting', description: 'Categorizing thousands of emails daily.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Legal Review', description: 'Identifying clauses in contracts.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'NLP Traditionalists', description: 'Strong foundation in classical NLP tasks.' }, { title: 'Efficient Models', description: 'Deploying lightweight BERT variants.' }, { title: 'High Accuracy', description: 'Fine-tuning for specific classification tasks.' }, { title: 'Legacy Integration', description: 'Updating older systems with modern NLP.' }] },
        faq: [{ question: 'Is BERT Generative?', answer: 'No, BERT is an encoder model, best for understanding, not generating.' }, { question: 'Is it still relevant?', answer: 'Yes, for classification and extraction it is highly efficient.' }]
    },
    {
        id: 'lamda',
        slug: 'lamda',
        name: 'LaMDA',
        type: 'Model',
        hero: {
            title: 'Google LaMDA',
            description: 'Breakthrough conversation technology for open-ended dialogue.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'LaMDA Overview',
            content: 'LaMDA (Language Model for Dialogue Applications) is designed to engage in a free-flowing way about a seemingly endless number of topics, unlocking more natural and open-ended conversational experiences.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Conversational AI',
            items: [
                { title: 'Advanced Chatbots', description: 'Nuanced and context-aware conversations.' },
                { title: 'Digital Personas', description: 'Creating consistent brand voices.' },
                { title: 'Roleplay Agents', description: 'Educational and training simulations.' },
                { title: 'Social Dialogue', description: 'Engaging user interaction systems.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Dialogue Design', items: [{ title: 'Language Learning', description: 'Conversational practice partner.', image: '/assets/images/platform/computer-login.png' }, { title: 'Interactive Fiction', description: 'Dynamic storytelling experiences.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Conversation Design', description: 'Experts in flow and persona.' }, { title: 'Google Tech Stack', description: 'Leveraging Google\'s advanced AI research.' }, { title: 'Safety Filters', description: 'Implementing robust content moderation.' }, { title: 'User Engagement', description: 'Driving metrics through better chat.' }] },
        faq: [{ question: 'Is LaMDA available?', answer: 'Technology from LaMDA powers Bard and other Google services.' }, { question: 'What is it best for?', answer: 'Open-ended, natural dialogue.' }]
    },
    {
        id: 'orca',
        slug: 'orca',
        name: 'Orca',
        type: 'Model',
        hero: {
            title: 'Microsoft Orca',
            description: 'Learning to reason. Small models with big capabilities.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Orca Overview',
            content: 'Orca is a Microsoft research model that explores how smaller models can imitate the reasoning processes of massive foundation models, offering high performance with significantly lower compute requirements.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Efficient AI',
            items: [
                { title: 'Edge Reasoning', description: 'Complex logic on limited hardware.' },
                { title: 'Cost Reduction', description: 'Replacing GPT-4 calls with smaller models.' },
                { title: 'Specialized Agents', description: 'Training focused experts.' },
                { title: 'Private Clouds', description: 'Deploying reasoning capabilities securely.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Efficiency', items: [{ title: 'Mobile AI', description: 'Reasoning capabilities on a phone.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'IoT Decision Making', description: 'Smart decisions at the edge.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Model Distillation', description: 'Transferring knowledge from large to small models.' }, { title: 'Optimization', description: 'Squeezing performance from hardware.' }, { title: 'Microsoft Stack', description: 'Integration with Azure AI services.' }, { title: 'Reasoning Focus', description: 'Prioritizing logic over just knowledge.' }] },
        faq: [{ question: 'What is progressive learning?', answer: 'A technique used by Orca to learn reasoning steps.' }, { question: 'Is it open source?', answer: 'Research weights are often released.' }]
    },
    {
        id: 'mistral',
        slug: 'mistral',
        name: 'Mistral',
        type: 'Model',
        hero: {
            title: 'Mistral AI',
            description: 'Open-weight models that punch above their weight class.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Mistral Overview',
            content: 'Mistral AI provides efficient, open-weight models like Mistral 7B and Mixtral 8x7B. They are known for high performance-to-cost ratios and strong reasoning capabilities.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Mistral Solutions',
            items: [
                { title: 'Mixture of Experts', description: 'Leveraging MoE architectures for speed.' },
                { title: 'Code Generation', description: 'Strong coding capabilities.' },
                { title: 'Long Context', description: 'Processing large documents efficiently.' },
                { title: 'Self-Hosting', description: 'Full control over your inference stack.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Performance', items: [{ title: 'Code Assistant', description: 'Internal coding tool using Codestral.', image: '/assets/images/platform/computer-login.png' }, { title: 'Document Analysis', description: 'Processing 30k token documents.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'European AI', description: 'Compliance with EU regulations.' }, { title: 'Open Weights', description: 'Transparency and control.' }, { title: 'Model Serving', description: 'High-throughput inference systems.' }, { title: 'Cost/Perf Balance', description: 'Best in class value.' }] },
        faq: [{ question: 'What is MoE?', answer: 'Mixture of Experts, a sparse architecture for efficiency.' }, { question: 'Is it better than Llama?', answer: 'It is highly competitive and often faster.' }]
    },
    {
        id: 'palm2',
        slug: 'palm2',
        name: 'PaLM2',
        type: 'Model',
        hero: {
            title: 'Google PaLM 2',
            description: 'The foundation of Google\'s AI. Capable, fast, and efficient.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'PaLM 2 Overview',
            content: 'PaLM 2 is a next-generation language model with improved multilingual, reasoning, and coding capabilities. It powers over 25 Google products and features.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'PaLM Applications',
            items: [
                { title: 'Medical AI', description: 'Med-PaLM for healthcare insights.' },
                { title: 'Security AI', description: 'Sec-PaLM for threat analysis.' },
                { title: 'Translation', description: 'Superior multilingual understanding.' },
                { title: 'Codey', description: 'Specialized for programming tasks.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Domain Specific', items: [{ title: 'Medical Triage', description: 'Assisting diagnosis support.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Cyber Defense', description: 'Analyzing malware scripts.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Google Specialists', description: 'Expertise in Vertex AI Model Garden.' }, { title: 'Domain Experts', description: 'Implementing industry-specific PaLM builds.' }, { title: 'Global Reach', description: 'Building truly multilingual apps.' }, { title: 'Security', description: 'Enterprise-grade implementation.' }] },
        faq: [{ question: 'Is it available?', answer: 'Yes, via Vertex AI API.' }, { question: 'What is Med-PaLM?', answer: 'A version fine-tuned on medical knowledge.' }]
    },
    {
        id: 'claude',
        slug: 'claude',
        name: 'Claude',
        type: 'Model',
        hero: {
            title: 'Anthropic Claude',
            description: 'Helpful, harmless, and honest AI with massive context windows.',
            image: '/assets/images/platform/Operating system-bro.png'
        },
        overview: {
            heading: 'Claude Overview',
            content: 'Claude is a next-generation AI assistant built by Anthropic. It focuses on constitutional AI to ensure safety and possesses a massive context window, allowing it to read brief books in a single prompt.',
            image: '/assets/images/platform/Innovation-rafiki.png'
        },
        solutions: {
            title: 'Claude Capabilities',
            items: [
                { title: 'Large Document Analysis', description: 'Reading 200k+ tokens at once.' },
                { title: 'Safe Chatbots', description: 'Reduced risk of toxic outputs.' },
                { title: 'Creative Writing', description: 'Nuanced and human-like prose.' },
                { title: 'Complex Instruction', description: 'Following detailed multi-step rules.' }
            ],
            image: '/assets/images/platform/App development-rafiki.png'
        },
        caseStudies: { title: 'Deep Analysis', items: [{ title: 'Legal Contract Review', description: 'Analyzing entire case files in one pass.', image: '/assets/images/platform/computer-login.png' }, { title: 'Book Summarization', description: 'Condensing technical manuals.', image: '/assets/images/platform/Social networking-amico.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Safety First', description: 'Prioritizing reliable AI behavior.' }, { title: 'Context Masters', description: 'Utilizing large context windows effectively.' }, { title: 'Human-like Interaction', description: 'Designing natural conversation flows.' }, { title: 'Strategic Implementation', description: 'High-value use cases for premium models.' }] },
        faq: [{ question: 'What is Constitutional AI?', answer: 'A method to align AI with human values via rules.' }, { question: 'Context limit?', answer: 'Up to 200k tokens.' }]
    },
    {
        id: 'hugging-face',
        slug: 'hugging-face',
        name: 'Hugging Face',
        type: 'Model',
        hero: {
            title: 'Hugging Face Hub',
            description: 'The AI community building the future. Thousands of models at your fingertips.',
            image: '/assets/images/platform/Online world-bro.png'
        },
        overview: {
            heading: 'Hugging Face Overview',
            content: 'Hugging Face is the platform where the machine learning community collaborates on models, datasets, and applications. It is the central hub of the open-source AI revolution.',
            image: '/assets/images/platform/Creative thinking-amico.png'
        },
        solutions: {
            title: 'Hugging Face Services',
            items: [
                { title: 'Model Hosting', description: 'Deploying Inference Endpoints.' },
                { title: 'Open Source Strategy', description: 'Leveraging the best community models.' },
                { title: 'Dataset Management', description: 'Curating and hosting bespoke datasets.' },
                { title: 'AutoTrain', description: 'No-code model training and fine-tuning.' }
            ],
            image: '/assets/images/platform/Team work-amico.png'
        },
        caseStudies: { title: 'Community Power', items: [{ title: 'Specialized Classifiers', description: 'Training BERT on niche industry data.', image: '/assets/images/platform/Social tree-rafiki.png' }, { title: 'Diffusion Models', description: 'Custom image generation pipelines.', image: '/assets/images/platform/Video files-rafiki.png' }] },
        whyChoose: { title: 'Why Us?', items: [{ title: 'Open Source Navigators', description: 'We know which of the 500k+ models work.' }, { title: 'Production Engineering', description: 'Taking research code to production containers.' }, { title: 'Training Pipelines', description: 'Building robust fine-tuning workflows.' }, { title: 'Cost Optimization', description: 'Running efficiency analysis on open models.' }] },
        faq: [{ question: 'Is it free?', answer: 'Many models are open source; hosting costs apply.' }, { question: 'What is Spaces?', answer: 'A way to host and demo ML apps easily.' }]
    },
];
