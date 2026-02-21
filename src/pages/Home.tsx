import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AIPlatform } from '../components/home/AIPlatform';
import { CaseStudies } from '../components/home/CaseStudies';
import { WorkingProcess } from '../components/home/WorkingProcess';
import { Testimonials } from '../components/home/Testimonials';
import { Counter } from '../components/home/Counter';
import { HomeBlog } from '../components/home/HomeBlog';
import { CTA } from '../components/home/CTA';

export const Home: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";

        // Re-initialize main.js for animations and plugins
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
            <Hero />
            {/* 2. Services Section - Scrolled Content */}
            <div style={{ position: 'relative', zIndex: 10, marginTop: '100vh', width: '100%', backgroundColor: '#ffffff' }}>
                <Services />
            </div>

            {/* 3. Sticky Section - Why Choose Us */}
            <div className="sticky-why-choose-wrapper" style={{
                position: 'sticky',
                top: '0',
                zIndex: 5,
                width: '100%',
                backgroundColor: '#ffffff'
            }}>
                <WhyChooseUs />
            </div>

            {/* 4. Remaining Content - Scrolled Content */}
            <div className="main-content-wrapper" style={{ position: 'relative', zIndex: 10, width: '100%', backgroundColor: '#ffffff' }}>
                <AIPlatform />
                <CaseStudies />
                <WorkingProcess />
                <Testimonials />
                <Counter />
                <HomeBlog />
                <CTA />
            </div>

            <style>{`
                /* Fix Mobile Sticky & Layout Issues */
                @media (max-width: 991px) {
                    /* Fix Sticky Behavior on Mobile */
                    .sticky-why-choose-wrapper {
                        position: sticky !important;
                        top: 60px !important; /* Account for mobile header */
                        z-index: 5 !important;
                        height: auto !important;
                    }
                    
                    /* Fix Case Studies Cards (narrow card fix) */
                    .product-wrapper .inner {
                        flex-direction: column !important;
                        padding: 25px 20px !important;
                        gap: 20px !important;
                        width: 100% !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        border-radius: 16px !important;
                    }
                    
                    .product-wrapper .inner .image-area,
                    .product-wrapper .inner .left-content {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    
                    .product-wrapper .inner .image-area img {
                        width: 100% !important;
                        height: auto !important;
                        max-width: 280px !important;
                        margin: 0 auto !important;
                        display: block !important;
                    }

                    .product-wrapper .inner .left-content .title {
                        font-size: 24px !important;
                        line-height: 1.2 !important;
                        margin-bottom: 15px !important;
                    }

                    .product-wrapper .inner .left-content .disc {
                        font-size: 14px !important;
                        margin-bottom: 20px !important;
                    }

                    /* Re-enabled Sticky Stacking Effect for Mobile */
                    .product-wrapper {
                        position: sticky !important;
                        top: 80px !important; /* Offset for header */
                        z-index: 5 !important;
                        margin-bottom: 80px !important; /* Controlled duration for the 'stick' */
                        height: auto !important;
                    }

                    .product-wrapper:nth-child(2) {
                        top: 110px !important;
                        z-index: 6 !important;
                    }

                    .product-wrapper:nth-child(3) {
                        top: 140px !important;
                        z-index: 7 !important;
                        margin-bottom: 30px !important;
                    }

                    .product-wrapper .inner {
                        flex-direction: column !important;
                        padding: 30px 20px !important;
                        gap: 20px !important;
                        width: 100% !important;
                        margin: 0 !important;
                        border-radius: 16px !important;
                        min-height: auto !important;
                    }

                    .product-sticky-wrapper-main {
                        height: auto !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    .rts-product-area {
                        padding-top: 40px !important;
                        padding-bottom: 20px !important;
                    }
                }

                @media (min-width: 992px) {
                    .product-wrapper {
                        position: sticky !important;
                        top: 120px !important;
                    }
                    .product-wrapper:nth-child(2) {
                        top: 160px !important;
                    }
                    .product-wrapper:nth-child(3) {
                        top: 200px !important;
                    }
                }
            `}</style>
        </main>
    );
};
