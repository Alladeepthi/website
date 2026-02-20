import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Brand Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#0F172A';
    const lightBg = '#F8FAFC';
    const textColor = '#64748B';

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const teamMembers = [
        {
            name: 'Dr. Sarah Chen',
            role: 'Chief Executive Officer',
            img: '/assets/images/team/01.webp',
            bio: 'Former VP at Google AI with 15+ years pioneering ML research.',
            linkedin: '#'
        },
        {
            name: 'Michael Rodriguez',
            role: 'Chief Technology Officer',
            img: '/assets/images/team/02.webp',
            bio: 'Ex-Amazon Web Services architect, cloud infrastructure expert.',
            linkedin: '#'
        },
        {
            name: 'Emily Thompson',
            role: 'Head of Product',
            img: '/assets/images/team/03.webp',
            bio: 'Product visionary from Microsoft Azure AI division.',
            linkedin: '#'
        },
        {
            name: 'David Park',
            role: 'Lead AI Engineer',
            img: '/assets/images/team/04.webp',
            bio: 'PhD in Deep Learning, published researcher at MIT.',
            linkedin: '#'
        },
    ];

    const values = [
        {
            icon: 'fa-rocket',
            title: 'Innovation First',
            desc: 'We push boundaries and embrace cutting-edge technologies to deliver transformative AI solutions.'
        },
        {
            icon: 'fa-users',
            title: 'Collaborative Culture',
            desc: 'Cross-functional teams working together seamlessly to achieve extraordinary results.'
        },
        {
            icon: 'fa-chart-line',
            title: 'Continuous Growth',
            desc: 'We invest heavily in learning, development, and career advancement opportunities.'
        },
        {
            icon: 'fa-handshake',
            title: 'Integrity & Trust',
            desc: 'Building lasting relationships through transparency and ethical practices.'
        },
    ];

    return (
        <main style={{ overflowX: 'hidden', background: '#fff' }}>
            {/* 1. Hero Section (Split Layout) */}
            <div className="rts-team-hero" style={{ position: 'relative', background: darkColor, overflow: 'hidden' }}>
                {/* Background Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}></div>

                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6" style={{ padding: '120px 8%' }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                            >
                                <span style={{
                                    display: 'inline-block',
                                    color: primaryColor,
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontSize: '13px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Meet The Team
                                </span>
                                <h1 style={{
                                    color: '#fff',
                                    fontSize: '56px',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    marginBottom: '25px'
                                }}>
                                    The Minds Behind <br />
                                    <span style={{
                                        background: `linear-gradient(to right, #fff, ${primaryColor})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>Neuraltrix Innovation</span>
                                </h1>
                                <p style={{
                                    color: '#94A3B8',
                                    fontSize: '18px',
                                    lineHeight: '1.7',
                                    maxWidth: '540px',
                                    marginBottom: '40px'
                                }}>
                                    We're a diverse team of world-class engineers, designers, and strategists united by a passion for building AI solutions that transform businesses.
                                </p>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                padding: '14px 35px',
                                                background: primaryColor,
                                                color: '#fff',
                                                borderRadius: '50px',
                                                fontWeight: '700',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Join Our Team
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6" style={{ height: '650px', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url('/assets/images/banner/breadcrumb-01.webp')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Team Grid Section */}
            <div className="rts-team-grid" style={{ padding: '120px 0', background: lightBg }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Leadership</span>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', color: darkColor, marginTop: '10px' }}>Meet Our Leadership</h2>
                    </div>

                    <div className="row g-4">
                        {teamMembers.map((member, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                        height: '100%',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '100%' }}>
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        {/* Hover Overlay */}
                                        <div className="team-overlay" style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            padding: '20px',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}>
                                            <a href="#" style={{
                                                width: '40px',
                                                height: '40px',
                                                background: '#fff',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#0077b5',
                                                textDecoration: 'none'
                                            }}>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div style={{ padding: '25px' }}>
                                        <h4 style={{ fontSize: '20px', fontWeight: '700', color: darkColor, marginBottom: '5px' }}>{member.name}</h4>
                                        <p style={{ color: primaryColor, fontSize: '14px', fontWeight: '600', marginBottom: '15px' }}>{member.role}</p>
                                        <p style={{ fontSize: '14px', color: textColor, lineHeight: '1.6', margin: 0 }}>{member.bio}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Values Section (Glassmorphism Cards) */}
            <div className="rts-values-area" style={{ padding: '120px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h2 style={{ fontSize: '42px', fontWeight: '800', color: darkColor }}>What Drives Us Forward</h2>
                            <p style={{ fontSize: '18px', color: textColor }}>Core principles that shape our culture.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {values.map((val, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <motion.div
                                    whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.15)' }}
                                    style={{
                                        padding: '40px 30px',
                                        background: '#fff',
                                        borderRadius: '20px',
                                        border: '1px solid #F1F5F9',
                                        height: '100%',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px',
                                        color: primaryColor,
                                        marginBottom: '25px'
                                    }}>
                                        <i className={`fa-solid ${val.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: '20px', fontWeight: '700', color: darkColor, marginBottom: '15px' }}>{val.title}</h4>
                                    <p style={{ fontSize: '15px', color: textColor, lineHeight: '1.7', margin: 0 }}>{val.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. "Why Join" / Benefits - Modern Open Layout (Replaced Dark Container) */}
            <div className="rts-join-area" style={{ padding: '120px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span style={{
                                    color: primaryColor,
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    display: 'inline-block',
                                    marginBottom: '15px'
                                }}>
                                    Join Our Team
                                </span>
                                <h2 style={{
                                    fontSize: '42px',
                                    fontWeight: '800',
                                    color: darkColor,
                                    marginBottom: '25px',
                                    lineHeight: '1.2'
                                }}>
                                    Build the future of <br />
                                    AI with us.
                                </h2>
                                <p style={{
                                    fontSize: '18px',
                                    color: textColor,
                                    marginBottom: '40px',
                                    lineHeight: '1.8'
                                }}>
                                    We believe great software is built by great people. We offer a culture that challenges you to do your best work while respecting your life outside the office.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                padding: '16px 35px',
                                                background: primaryColor,
                                                color: '#fff',
                                                borderRadius: '50px',
                                                fontWeight: '700',
                                                border: 'none',
                                                cursor: 'pointer',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            View Open Positions <i className="fa-regular fa-arrow-right"></i>
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="row g-4">
                                {[
                                    { icon: 'fa-globe', title: 'Remote-First', desc: 'Work from anywhere in the world.' },
                                    { icon: 'fa-graduation-cap', title: 'Learning Budget', desc: 'Unlimited books and courses.' },
                                    { icon: 'fa-heart-pulse', title: 'Full Health', desc: 'Comprehensive medical coverage.' },
                                    { icon: 'fa-coins', title: 'Competitive Pay', desc: 'Top-tier salary & equity packages.' },
                                    { icon: 'fa-calendar-days', title: 'Flexible PTO', desc: 'Take time when you need it.' },
                                    { icon: 'fa-laptop', title: 'Top Gear', desc: 'MacBook Pro and home office stipend.' },
                                ].map((item, i) => (
                                    <div className="col-md-6" key={i}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            style={{
                                                background: '#fff',
                                                padding: '25px',
                                                borderRadius: '16px',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                                border: '1px solid #E2E8F0',
                                                height: '100%'
                                            }}
                                        >
                                            <div style={{
                                                width: '45px',
                                                height: '45px',
                                                background: '#EFF6FF',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: primaryColor,
                                                marginBottom: '15px',
                                                fontSize: '18px'
                                            }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <h4 style={{ fontSize: '17px', fontWeight: '700', color: darkColor, marginBottom: '8px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: textColor, margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. CTA Gradient Section (Consistent with About Page) */}
            <div className="rts-cta-gradient" style={{ padding: '50px 0 120px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: `linear-gradient(135deg, ${primaryColor} 0%, #8B5CF6 100%)`,
                            borderRadius: '30px',
                            padding: '80px 60px',
                            position: 'relative',
                            overflow: 'hidden',
                            textAlign: 'center',
                            boxShadow: '0 30px 60px -20px rgba(59, 130, 246, 0.4)'
                        }}
                    >
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ color: '#fff', fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
                                Ready to Make an Impact?
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Join a team of innovators, builders, and dreamers who are redefining what's possible with artificial intelligence.
                            </p>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        padding: '18px 45px',
                                        background: '#fff',
                                        color: primaryColor,
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                        minWidth: '220px'
                                    }}
                                >
                                    My Career Starts Here
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .rts-team-hero .col-lg-6:first-child { padding: 80px 15px !important; text-align: center; }
                    .rts-team-hero .col-lg-6:last-child { height: 300px !important; }
                    .rts-team-hero .clip-path { clip-path: none !important; }
                    .rts-join-area > div > div { padding: 50px 30px !important; }
                }
            `}</style>
        </main>
    );
};
