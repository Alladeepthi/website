import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './team-styles.css';

export const Team: React.FC = () => {
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

    const teamMembers = [
        {
            name: 'Dr. Sarah Chen',
            role: 'Chief Executive Officer',
            img: '/assets/images/team/01.webp',
            bio: 'Former VP at Google AI with 15+ years pioneering ML research',
            linkedin: '#'
        },
        {
            name: 'Michael Rodriguez',
            role: 'Chief Technology Officer',
            img: '/assets/images/team/02.webp',
            bio: 'Ex-Amazon Web Services architect, cloud infrastructure expert',
            linkedin: '#'
        },
        {
            name: 'Emily Thompson',
            role: 'Head of Product',
            img: '/assets/images/team/03.webp',
            bio: 'Product visionary from Microsoft Azure AI division',
            linkedin: '#'
        },
        {
            name: 'David Park',
            role: 'Lead AI Engineer',
            img: '/assets/images/team/04.webp',
            bio: 'PhD in Deep Learning, published researcher at MIT',
            linkedin: '#'
        },
    ];

    const stats = [
        { number: '50+', label: 'Team Members' },
        { number: '15+', label: 'Countries' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '10+', label: 'Years Experience' },
    ];

    const values = [
        {
            icon: 'fa-light fa-rocket-launch',
            title: 'Innovation First',
            desc: 'We push boundaries and embrace cutting-edge technologies to deliver transformative AI solutions that redefine industries.'
        },
        {
            icon: 'fa-light fa-users',
            title: 'Collaborative Culture',
            desc: 'Cross-functional teams working together seamlessly to achieve extraordinary results and exceed expectations.'
        },
        {
            icon: 'fa-light fa-chart-line-up',
            title: 'Continuous Growth',
            desc: 'We invest heavily in learning, development, and career advancement opportunities for every team member.'
        },
        {
            icon: 'fa-light fa-handshake',
            title: 'Integrity & Trust',
            desc: 'Building lasting relationships through transparency, ethical practices, and unwavering commitment to excellence.'
        },
    ];

    return (
        <main className="team-page-modern">
            {/* Hero Section */}
            <section className="team-hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-hero-content">
                                <div className="hero-badge">
                                    <i className="fa-light fa-sparkles"></i>
                                    <span>Meet Our Team</span>
                                </div>
                                <h1 className="hero-title">
                                    The Minds Behind <br />
                                    <span className="gradient-text">NeuralTrix Innovation</span>
                                </h1>
                                <p className="hero-description">
                                    We're a diverse team of world-class engineers, designers, and strategists united by a passion for
                                    building AI solutions that transform businesses and empower people worldwide.
                                </p>
                                <div className="hero-actions">
                                    <Link to="/contact" className="rts-btn btn-primary">
                                        Join Our Team
                                        <i className="fa-light fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/about" className="btn-link">
                                        <span>View Open Positions</span>
                                        <i className="fa-light fa-chevron-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-hero-image">
                                <div className="image-glow"></div>
                                <img src="/assets/images/team/At the office-pana.png" alt="Our Team" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="team-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <div className="stat-card" key={i}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="team-members-section">
                <div className="container">
                    <div className="section-header-modern">
                        <div className="section-tag">Leadership</div>
                        <h2 className="section-title">Meet Our Leadership Team</h2>
                        <p className="section-description">
                            Industry veterans and visionaries with decades of combined experience driving our mission forward
                        </p>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, i) => (
                            <div className="team-member-card" key={i}>
                                <div className="member-image-wrapper">
                                    <img src={member.img} alt={member.name} />
                                    <div className="member-overlay">
                                        <a href={member.linkedin} className="social-link">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4 className="member-name">{member.name}</h4>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="team-values-section">
                <div className="container">
                    <div className="section-header-modern">
                        <div className="section-tag">Our Values</div>
                        <h2 className="section-title">What Drives Us Forward</h2>
                        <p className="section-description">
                            Core principles that shape our culture, guide our decisions, and define who we are
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, i) => (
                            <div className="value-card" key={i}>
                                <div className="value-icon">
                                    <i className={value.icon}></i>
                                </div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-desc">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="team-join-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="join-content">
                                <div className="section-tag">Careers</div>
                                <h2 className="join-title">Why Join NeuralTrix?</h2>
                                <p className="join-description">
                                    Be part of a team that's shaping the future of AI and making a real impact on businesses worldwide.
                                    We offer more than just a job—we offer a career-defining opportunity.
                                </p>

                                <div className="benefits-list">
                                    {[
                                        { icon: 'fa-light fa-globe', text: 'Remote-first culture with global flexibility' },
                                        { icon: 'fa-light fa-graduation-cap', text: 'Unlimited learning & development budget' },
                                        { icon: 'fa-light fa-heart-pulse', text: 'Comprehensive health & wellness benefits' },
                                        { icon: 'fa-light fa-coins', text: 'Competitive salary with equity options' },
                                        { icon: 'fa-light fa-calendar-days', text: 'Flexible PTO and work-life balance' },
                                        { icon: 'fa-light fa-rocket', text: 'Work on cutting-edge AI projects' },
                                    ].map((benefit, i) => (
                                        <div className="benefit-item" key={i}>
                                            <div className="benefit-icon">
                                                <i className={benefit.icon}></i>
                                            </div>
                                            <p>{benefit.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="rts-btn btn-primary mt--40">
                                    Explore Opportunities
                                    <i className="fa-light fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="join-image">
                                <img src="/assets/images/why-choose/At the office-rafiki.png" alt="Join Our Team" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="team-cta-section">
                <div className="container">
                    <div className="cta-card-modern">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Make an Impact?</h2>
                            <p className="cta-description">
                                Join a team of innovators, builders, and dreamers who are redefining what's possible with artificial intelligence.
                                Your next career breakthrough starts here.
                            </p>
                        </div>
                        <div className="cta-actions">
                            <Link to="/contact" className="rts-btn btn-primary-large">
                                View Open Positions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes floatHero {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </main>
    );
};
