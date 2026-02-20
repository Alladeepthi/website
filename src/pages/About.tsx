import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// --- Animated Counter Component ---
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => Math.floor(current));

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

// --- Video Modal Component ---
const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            aspectRatio: '16/9',
                            background: '#000',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'rgba(255,255,255,0.2)',
                                border: 'none',
                                color: '#fff',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                zIndex: 10,
                                fontSize: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#0F172A';

    const textColor = '#64748B';

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const fadeLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    const fadeRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <main style={{ overflowX: 'hidden' }}>
            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

            {/* 1. Layout Change: Split Screen Hero (Instead of Centered Banner) */}
            <div className="rts-hero-split-area" style={{ position: 'relative', background: darkColor }}>
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6" style={{ padding: '100px 5%' }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                            >
                                <span style={{
                                    color: primaryColor,
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                    display: 'block',
                                    marginBottom: '20px'
                                }}>
                                    About NeuraltrixAI
                                </span>
                                <h1 style={{
                                    color: '#fff',
                                    fontSize: '56px',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    marginBottom: '30px'
                                }}>
                                    Transforming Business <br /> Through Intelligence
                                </h1>
                                <p style={{
                                    color: '#94A3B8',
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                    maxWidth: '500px',
                                    marginBottom: '40px'
                                }}>
                                    We are a new-age creative agency located in India, dedicated to helping brands navigate the AI revolution.
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}><i className="fa-regular fa-arrow-left"></i> Back Home</Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6" style={{ height: '600px', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url('/assets/images/banner/breadcrumb-01.webp')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' // Angled cut
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Layout Change: Full Width Stats Bar (Separated from Intro Text) */}
            <div className="rts-stats-bar" style={{ background: primaryColor, padding: '50px 0' }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        {[
                            { val: 110, label: 'Happy Clients', icon: 'fa-users' },
                            { val: 130, label: 'Finished Projects', icon: 'fa-check-double' },
                            { val: 24, label: 'Skilled Experts', icon: 'fa-user-tie' },
                            { val: 5, label: 'Media Awards', icon: 'fa-trophy' },
                        ].map((stat, i) => (
                            <div key={i} className="col-lg-3 col-6 mb-4 mb-lg-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '30px', color: 'rgba(255,255,255,0.3)', marginBottom: '15px' }}></i>
                                    <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#fff', margin: 0 }}>
                                        <Counter value={stat.val} />+
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', fontWeight: '600', marginTop: '5px' }}>{stat.label}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Layout Change: Intro Text Centered (No Image Logic Here for Variety) */}
            <div className="rts-intro-minimal" style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Philosophy</span>
                                <h3 style={{ fontSize: '48px', fontWeight: '800', color: darkColor, marginTop: '20px', marginBottom: '30px', lineHeight: '1.3' }}>
                                    We think strategy, UX design, <br /> and AI development.
                                </h3>
                                <p style={{ fontSize: '20px', color: textColor, lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                                    NeuraltrixAI isn't just a dev shop. We are your strategic partners in the digital age. Our unique approach combines deep technical expertise with creative problem solving to deliver results that matter.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Layout Change: Contained Video (Not Full Width) */}
            <div className="rts-video-contained" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        style={{
                            position: 'relative',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            height: '500px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url('/assets/images/banner/06.webp')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(15, 23, 42, 0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setIsVideoOpen(true)}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    border: 'none',
                                    color: primaryColor,
                                    fontSize: '30px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <i className="fa-solid fa-play" style={{ marginLeft: '5px' }}></i>
                            </motion.button>
                            <h4 style={{ color: '#fff', marginTop: '30px', fontWeight: '700' }}>See How We Work</h4>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 5. Features / Process (Text Left, Image Right - Classic Container) */}
            <div className="rts-process-area" style={{ padding: '0 0 120px', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeLeft}
                            >
                                <h3 style={{ fontSize: '36px', fontWeight: '800', color: darkColor, marginBottom: '25px' }}>
                                    We've worked alongside <br /> plenty of brands & startups
                                </h3>
                                <div className="process-list">
                                    {[
                                        { title: 'Brand Research', desc: 'Deep dive into market positioning.' },
                                        { title: 'UX/UI Design', desc: 'Crafting intuitive user journeys.' },
                                        { title: 'AI Engineering', desc: 'Building scalable intelligence systems.' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', marginBottom: '30px' }}>
                                            <div style={{
                                                minWidth: '50px',
                                                height: '50px',
                                                background: '#EFF6FF',
                                                borderRadius: '50%',
                                                color: primaryColor,
                                                fontWeight: '800',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '20px',
                                                fontSize: '18px'
                                            }}>{i + 1}</div>
                                            <div>
                                                <h5 style={{ fontWeight: '700', marginBottom: '5px' }}>{item.title}</h5>
                                                <p style={{ color: textColor, margin: 0 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeRight}
                                style={{ position: 'relative' }}
                            >
                                <img src="/assets/images/about/16.webp" alt="Process" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
                                {/* Overlay Card */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '-30px',
                                    background: '#fff',
                                    padding: '25px',
                                    borderRadius: '15px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                                    maxWidth: '250px',
                                    display: 'none' // Hidden on mobile via CSS usually, but inline for now
                                }} className="d-none d-md-block">
                                    <p style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: darkColor }}>"The best agency we have worked with!"</p>
                                    <div style={{ marginTop: '10px', display: 'flex', gap: '5px', color: '#F59E0B', fontSize: '12px' }}>
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Testimonials (Dark Background for Constrast) */}
            <div className="rts-testimonials-dark" style={{ background: darkColor, padding: '120px 0', color: '#fff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>Client Stories</h2>
                        <p style={{ color: '#94A3B8' }}>See why companies trust NeuraltrixAI.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { name: 'Florence T.', role: 'Designer', img: '01.png', text: 'I love their flexibility. Even when my request is too complicated to handle.' },
                            { name: 'Thomas Smith', role: 'CEO', img: '02.png', text: 'Efficient, accommodating, and cleaned up thoroughly. Highly recommended.' },
                            { name: 'Eloise Smith', role: 'Manager', img: '03.png', text: 'We are completely satisfied with the quality of service that we got.' }
                        ].map((item, idx) => (
                            <div className="col-lg-4" key={idx}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                                        <img src={`/assets/images/testimonials/${item.img}`} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
                                        <div>
                                            <h5 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#fff' }}>{item.name}</h5>
                                            <span style={{ fontSize: '14px', color: '#94A3B8' }}>{item.role}</span>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#CBD5E1', fontStyle: 'italic' }}>"{item.text}"</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 7. CTA / Boxed Gradient Section (Alternative to Floating Icons) */}
            <div className="rts-cta-gradient" style={{ padding: '100px 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: `linear-gradient(135deg, ${darkColor} 0%, ${primaryColor} 100%)`,
                            borderRadius: '30px',
                            padding: '80px 60px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px -20px rgba(59, 130, 246, 0.4)'
                        }}
                    >
                        {/* Background Decor */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-50%',
                            left: '-10%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }}></div>

                        <div className="row align-items-center" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
                                <h2 style={{
                                    color: '#fff',
                                    fontSize: '42px',
                                    fontWeight: '800',
                                    marginBottom: '15px',
                                    lineHeight: '1.2'
                                }}>
                                    Ready to start your <br /> AI transformation?
                                </h2>
                                <p style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '18px',
                                    margin: 0,
                                    maxWidth: '500px'
                                }}>
                                    Join industry leaders who are scaling their businesses with our intelligent solutions.
                                </p>
                            </div>
                            <div className="col-lg-5 text-center text-lg-end">
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            padding: '18px 45px',
                                            background: '#fff',
                                            color: primaryColor,
                                            borderRadius: '50px',
                                            fontWeight: '700',
                                            fontSize: '18px',
                                            textDecoration: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        Start Conversation <i className="fa-regular fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .rts-hero-split-area .col-lg-6:first-child { padding: 80px 15px !important; text-align: center; }
                    .rts-hero-split-area .col-lg-6:last-child { height: 300px !important; }
                    .rts-hero-split-area .clip-path { clip-path: none !important; }
                    .video-btn-area { margin-top: 20px; }
                    .rts-cta-gradient { padding: 60px 0; }
                    .rts-cta-gradient > div > div { padding: 40px 20px !important; }
                }
            `}</style>
        </main>
    );
};
