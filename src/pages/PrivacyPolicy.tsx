import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main>
            {/* rts about-breadcrumb-area-start */}
            <div className="rts-about-breadcrumb-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="rts-about-breadcrumb-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-chevron-right"></i></li>
                                    <li><a href="#" className="active">Privacy Policy</a></li>
                                </ul>
                                <h1 className="title rts-text-anime-style-1">Our Privacy Commitment</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 pl--50 pl_md--10 pl_sm--10">
                            {/* Reusing existing breadcrumb image or similar */}
                            <div className="rts-about-breadcrumb-image">
                                <img src="/assets/images/about/05.webp" alt="privacy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about-breadcrumb-area-end */}

            {/* rts privacy policy content area start */}
            <div className="rts-privacy-policy-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="privacy-policy-content">
                                <h3 className="title">Privacy Policy</h3>
                                <p className="disc">
                                    Last updated: February 10, 2026.
                                    At NeuralTrix, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.
                                </p>

                                <h4 className="title mt--30">1. Information We Collect</h4>
                                <p className="disc">
                                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.
                                </p>

                                <h4 className="title mt--30">2. How We Use Information</h4>
                                <p className="disc">
                                    We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect NeuralTrix and our users.
                                </p>

                                <h4 className="title mt--30">3. Data Security</h4>
                                <p className="disc">
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                                </p>

                                <h4 className="title mt--30">4. Contact Us</h4>
                                <p className="disc">
                                    If you have any questions about this Privacy Policy, please contact us at support@neuraltrix.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts privacy policy content area end */}
        </main>
    );
};
