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

        return () => {
            document.body.className = "";
        };
    }, []);

    return (
        <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <AIPlatform />
            <CaseStudies />
            <WorkingProcess />
            <Testimonials />
            <Counter />
            <Pricing />
            <HomeBlog />
            <CTA />
        </main>
    );
};
