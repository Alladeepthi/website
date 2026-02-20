import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AIPlatform } from '../components/home/AIPlatform';
import { CaseStudies } from '../components/home/CaseStudies';
import { WorkingProcess } from '../components/home/WorkingProcess';
import { Testimonials } from '../components/home/Testimonials';
import { Counter } from '../components/home/Counter';
import { Pricing } from '../components/home/Pricing';
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
            <div style={{ position: 'sticky', top: 0, zIndex: 5, width: '100%' }}>
                <WhyChooseUs />
            </div>

            {/* 4. Remaining Content - Scrolled Content */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', backgroundColor: '#ffffff' }}>
                <AIPlatform />
                <CaseStudies />
                <WorkingProcess />
                <Testimonials />
                <Counter />
                <Pricing />
                <HomeBlog />
                <CTA />
            </div>
        </main>
    );
};
