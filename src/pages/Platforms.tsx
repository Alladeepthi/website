import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Platforms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State for Testimonials Carousel
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonials = [
        { name: "Sarah Jenkins", role: "CTO, TechFlow", text: "NeuralTrix transformed our data pipeline. The efficiency gains were immediate." },
        { name: "Michael Chen", role: "VP of Engineering, Solaris", text: "The platform's scalability is unmatched. We expanded seamlessly." },
        { name: "Emma Rodriguez", role: "Data Lead, FinCorp", text: "Security and compliance are built-in, saving us months." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Colors & Styles
    const styles = {
        page: {
            backgroundColor: '#0f172a',
            color: '#cbd5e1',
            fontFamily: "'Inter', sans-serif",
            overflowX: 'hidden' as const,
            minHeight: '100vh'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            position: 'relative' as const,
            zIndex: 1
        },
        section: {
            padding: '80px 0',
            position: 'relative' as const
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
        },
        grid3: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
        },
        grid4: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
        },
        glassCard: {
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '30px',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            height: '100%'
        },
        buttonPrimary: {
            background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
        },
        buttonOutline: {
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            backdropFilter: 'blur(10px)'
        }
    };

    return (
        <main style={styles.page}>
            <style>{`
                @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
                .hover-card:hover { transform: translateY(-5px); border-color: #3B82F6 !important; background: rgba(30, 41, 59, 0.6) !important; }
            `}</style>

            {/* 1. Hero Section */}
            <section style={{ ...styles.section, paddingTop: '180px', paddingBottom: '120px', overflow: 'hidden' }}>
                {/* Background Blobs */}
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>

                <div style={styles.container}>
                    <div style={styles.grid2}>
                        <div className="animate-fade-in">
                            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#60A5FA', fontSize: '13px', fontWeight: 'bold', marginBottom: '24px', letterSpacing: '1px' }}>
                                ENTERPRISE PLATFORM V4.0
                            </span>
                            <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', color: '#fff', marginBottom: '24px' }}>
                                Build the Future with <br />
                                <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligent Core</span>
                            </h1>
                            <p style={{ fontSize: '18px', lineHeight: '1.6', opacity: 0.8, maxWidth: '540px', marginBottom: '40px' }}>
                                Seamlessly integrate AI, automate workflows, and scale your infrastructure with our unified enterprise platform.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link to="/contact" style={styles.buttonPrimary}>Explore Platforms</Link>
                                <button style={styles.buttonOutline}>Watch Demo</button>
                            </div>
                        </div>
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="animate-float" style={{ ...styles.glassCard, padding: '10px', position: 'relative' }}>
                                <img src="/assets/images/about/16.webp" alt="Platform UI" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
                                {/* Floating Badge */}
                                <div style={{ ...styles.glassCard, position: 'absolute', top: '20px', right: '20px', padding: '15px', display: 'flex', alignItems: 'center', gap: '15px', maxWidth: '200px', height: 'auto' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-check" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>System Active</p>
                                        <p style={{ margin: 0, color: '#10B981', fontSize: '12px' }}>99.99% Uptime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Powering Next-Gen Enterprises</h2>
                        <p style={{ fontSize: '18px', opacity: 0.7 }}>A complete suite of tools designed for modern scalability.</p>
                    </div>
                    <div style={styles.grid4}>
                        {[
                            { title: 'Cloud Native', icon: 'fa-cloud', desc: 'Deploy anywhere with containerized microservices architecture.' },
                            { title: 'Real-time Analytics', icon: 'fa-chart-line', desc: 'Gain actionable insights with millisecond-latency data processing.' },
                            { title: 'AI Automation', icon: 'fa-robot', desc: 'Automate complex decision-making workflows with built-in ML models.' },
                            { title: 'Enterprise Security', icon: 'fa-shield-halved', desc: 'Bank-grade encryption and compliance features out of the box.' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ ...styles.glassCard }} className="hover-card">
                                <div style={{ width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', fontSize: '24px', marginBottom: '20px' }}>
                                    <i className={`fa-solid ${feature.icon}`}></i>
                                </div>
                                <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>{feature.title}</h4>
                                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0, opacity: 0.8 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Comparison Table (Custom Grid) */}
            <section style={{ ...styles.section, background: 'rgba(15, 23, 42, 0.5)' }}>
                <div style={styles.container}>
                    <div style={{ ...styles.glassCard, padding: '40px' }}>
                        <h2 style={{ color: '#fff', fontWeight: '800', textAlign: 'center', marginBottom: '40px' }}>Why Choose NeuralTrix?</h2>

                        {/* Table Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '20px' }}>
                            <div style={{ color: '#94a3b8', fontSize: '16px', fontWeight: '600' }}>Features</div>
                            <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>NeuralTrix Core</div>
                            <div style={{ color: '#64748b', fontSize: '16px', fontWeight: '600', textAlign: 'center' }}>Others</div>
                        </div>

                        {/* Table Rows */}
                        {[
                            { feat: 'Deployment Speed', us: 'Instant (< 5min)', them: 'Hours / Days' },
                            { feat: 'AI Integration', us: 'Native / Built-in', them: 'Plugin / Extra Cost' },
                            { feat: 'Scalability', us: 'Auto-scaling', them: 'Manual Config' },
                            { feat: 'Support SLA', us: '24/7 Dedicated', them: 'Email Only' }
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', alignItems: 'center', padding: '20px 0', borderBottom: i !== 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                <div style={{ color: '#fff', fontWeight: '500' }}>{row.feat}</div>
                                <div style={{ color: '#10B981', fontWeight: 'bold', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <i className="fa-solid fa-check-circle"></i> {row.us}
                                </div>
                                <div style={{ color: '#64748b', textAlign: 'center' }}>{row.them}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Use Cases */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>Versatile Applications</h2>
                            <p style={{ fontSize: '18px', opacity: 0.7 }}>From fintech to healthcare, our platform adapts.</p>
                        </div>
                        <Link to="/services" style={{ ...styles.buttonOutline, padding: '10px 24px', fontSize: '14px' }}>View All Industries</Link>
                    </div>
                    <div style={styles.grid3}>
                        {[
                            { title: 'Fraud Detection', industry: 'Fintech', img: '08.webp' },
                            { title: 'Predictive Maintenance', industry: 'Manufacturing', img: '10.webp' },
                            { title: 'Personalized Care', industry: 'Healthcare', img: '07.webp' }
                        ].map((useCase, idx) => (
                            <div key={idx} className="hover-card" style={{ ...styles.glassCard, padding: 0, overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
                                <img src={`/assets/images/feature/${useCase.img}`} alt={useCase.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                                <div style={{ position: 'relative', padding: '24px', background: 'linear-gradient(to top, rgba(15,23,42,1), transparent)' }}>
                                    <span style={{ background: '#3B82F6', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', display: 'inline-block' }}>{useCase.industry}</span>
                                    <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>{useCase.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Testimonials Carousel */}
            <section style={{ ...styles.section, textAlign: 'center' }}>
                <div style={styles.container}>
                    <i className="fa-solid fa-quote-left" style={{ fontSize: '48px', color: '#3B82F6', opacity: 0.3, marginBottom: '40px' }}></i>
                    <div style={{ position: 'relative', height: '180px', maxWidth: '800px', margin: '0 auto' }}>
                        {testimonials.map((t, i) => (
                            <div key={i} style={{
                                position: 'absolute', top: 0, left: 0, width: '100%',
                                opacity: activeTestimonial === i ? 1 : 0,
                                transition: 'opacity 0.8s ease-in-out',
                                pointerEvents: activeTestimonial === i ? 'all' : 'none'
                            }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '500', color: '#fff', lineHeight: '1.5', marginBottom: '30px' }}>"{t.text}"</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '50%' }}></div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h5 style={{ color: '#fff', margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{t.name}</h5>
                                        <p style={{ color: '#3B82F6', margin: 0, fontSize: '14px' }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Indicators */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                style={{
                                    width: '10px', height: '10px', borderRadius: '50%', border: 'none',
                                    background: activeTestimonial === i ? '#3B82F6' : '#334155',
                                    cursor: 'pointer', transition: 'background 0.3s'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={styles.container}>
                    <div style={{ ...styles.glassCard, padding: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        {/* Glow Behind */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 60%)', filter: 'blur(50px)', zIndex: 0 }}></div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>Start Your Transformation Today</h2>
                            <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '600px', margin: '0 auto 40px' }}>
                                Join 500+ enterprises leveraging NeuralTrix to scale their operations.
                            </p>
                            <Link to="/contact" style={{ ...styles.buttonPrimary, background: '#fff', color: '#0f172a' }}>
                                Get Started Free
                            </Link>
                            <p style={{ fontSize: '13px', opacity: 0.5, marginTop: '20px' }}>No credit card required. 14-day free trial.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
