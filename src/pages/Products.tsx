import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Products: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        return () => {
            document.body.className = "";
        };
    }, []);

    const productList = [
        {
            title: 'NeuralX AI Platform',
            description: 'A comprehensive platform for building, training, and deploying AI models at scale.',
            icon: '/assets/images/feature/01.svg',
            link: '/service-details'
        },
        {
            title: 'ML Studio',
            description: 'Interactive notebook environment designed for data scientists and ML engineers.',
            icon: '/assets/images/feature/02.svg',
            link: '/service-details'
        },
        {
            title: 'Data Analytics Suite',
            description: 'Advanced analytics tools to visualize data and derive actionable insights.',
            icon: '/assets/images/feature/03.svg',
            link: '/service-details'
        },
        {
            title: 'Automation Engine',
            description: 'Automate complex business processes with intelligent workflow orchestration.',
            icon: '/assets/images/feature/04.svg',
            link: '/service-details'
        },
        {
            title: 'Vision API',
            description: 'Integrate powerful computer vision capabilities into your applications easily.',
            icon: '/assets/images/feature/05.svg',
            link: '/service-details'
        },
        {
            title: 'NLP Toolkit',
            description: 'State-of-the-art tools for text analysis, sentiment analysis, and translations.',
            icon: '/assets/images/feature/06.svg',
            link: '/service-details'
        }
    ];

    return (
        <main>
            {/* rts product-breadcrumb-area-start */}
            <div className="rts-about-breadcrumb-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="rts-about-breadcrumb-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><a href="#" className="active">Products</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Core Tech & Products</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 pl--50 pl_md--10 pl_sm--10">
                            <div className="rts-about-breadcrumb-image">
                                <img src="/assets/images/about/05.webp" alt="products" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts product-breadcrumb-area-end */}

            {/* rts feature area start (Product Grid) */}
            <div className="rts-feature-area-three rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="title-left-wrapper text-center mb--50">
                                <span className="pre">Our Products</span>
                                <h2 className="title rts-text-anime-style-1">Tools to Accelerate Your AI Journey</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        {productList.map((product, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-feature-area-three" style={{ height: '100%' }}>
                                    <div className="icon">
                                        <img src={product.icon} alt={product.title} />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{product.title}</h3>
                                        <p className="disc">{product.description}</p>
                                        <Link to={product.link} className="round-btn">
                                            <i className="fa-sharp-duotone fa-light fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* rts feature area end */}

            {/* rts why choose us substitute start */}
            <div className="why-chooseus-area rts-section-gap bg-light-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="why-choose-left-content">
                                <div className="title-left-wrapper">
                                    <h2 className="title rts-text-anime-style-1">Why Build with <br /> NeuralTrix?</h2>
                                </div>
                                <p className="disc">
                                    Our stack is optimized for performance, scalability, and ease of use.
                                    Whether you are a startup or an enterprise, we have the tools you need.
                                </p>
                                <div className="reason-wrapper">
                                    {[
                                        { title: 'Enterprise Security', icon: '/assets/images/why-choose/01.svg' },
                                        { title: 'Scalable Architecture', icon: '/assets/images/why-choose/02.svg' },
                                        { title: '24/7 Expert Support', icon: '/assets/images/why-choose/03.svg' },
                                        { title: 'Seamless Integration', icon: '/assets/images/why-choose/04.svg' },
                                    ].map((reason, i) => (
                                        <div className="single-reason" key={i}>
                                            <div className="icon">
                                                <img src={reason.icon} alt="choose" />
                                            </div>
                                            <h5 className="title" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                                                {reason.title}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-6 mt_sm--50 mt_md--50">
                            <div className="why-choose-iamge-two">
                                <img src="/assets/images/why-choose/01.jpg" alt="why us" className="one" />
                                <img src="/assets/images/why-choose/02.jpg" alt="why us" className="two" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts why choose us substitute end */}

            {/* rts call to action area start */}
            <div className="rts-call-to-action-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">Ready to start building?</h3>
                                <p className="disc">Get started with our free tier or contact sales for enterprise options.</p>
                                <Link to="/contact" className="rts-btn btn-primary">Contact Sales</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
