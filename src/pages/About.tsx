import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Theme Colors
    const primaryColor = '#3B82F6';
    const darkColor = '#1e293b';
    const lightBg = '#F8FAFC';
    const textColor = '#475569';

    return (
        <main style={{ overflowX: 'hidden' }}>
            {/* 1. Hero / Header Section */}
            <div className="rts-about-breadcrumb-area" style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%), url('/assets/images/banner/breadcrumb-01.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                padding: '200px 0 120px',
                textAlign: 'center',
                color: '#fff',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title" style={{ fontSize: '56px', fontWeight: '800', marginBottom: '15px', color: '#fff', letterSpacing: '-1px' }}>About Us</h1>
                            <p style={{ maxWidth: '700px', margin: '0 auto 20px', fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>
                                Innovating for a smarter future. We engineer digital solutions that drive business transformation.
                            </p>
                            <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0, fontSize: '15px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                                <li><i className="fa fa-chevron-right" style={{ fontSize: '10px' }}></i></li>
                                <li><span style={{ color: primaryColor, fontWeight: 'bold' }}>About</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Intro Section with Floating Card */}
            <div className="rts-about-intro-area rts-section-gap" style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--60 pr_md--15 pr_sm--15">
                            <div className="content-left">
                                <span style={{ display: 'inline-block', color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', fontSize: '14px' }}>
                                    Who We Are
                                </span>
                                <h2 className="title" style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '25px', color: darkColor }}>
                                    Strategic Engineering for the Digital Age
                                </h2>
                                <p className="disc" style={{ fontSize: '18px', color: textColor, lineHeight: '1.8', marginBottom: '30px' }}>
                                    NeuraltrixAI is a product engineering and technology consulting firm. We partner with ambitious organizations to build scalable digital platforms, automate complex workflows, and unlock the value of data.
                                    <br /><br />
                                    We are not just a service provider; we are your strategic engineering partner committed to delivering measurable business outcomes.
                                </p>
                                <div className="row g-3 mb-4">
                                    {['Enterprise-Grade Solutions', 'Scalable Architecture', 'AI & Machine Learning', 'Cloud Native'].map((item, idx) => (
                                        <div className="col-md-6" key={idx}>
                                            <div className="d-flex align-items-center gap-2">
                                                <div style={{ width: '24px', height: '24px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, fontSize: '12px' }}>
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <span style={{ fontWeight: 600, color: darkColor }}>{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="author-area d-flex align-items-center gap-4 mt-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${primaryColor}` }}>
                                            <img src="/assets/images/others/04.svg" alt="CEO" style={{ width: '100%' }} />
                                        </div>
                                        <div>
                                            <h6 style={{ margin: 0, fontWeight: '700', color: darkColor }}>Dr. Deepak Chowdary</h6>
                                            <span style={{ fontSize: '12px', color: primaryColor, fontWeight: '600' }}>Founder & CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50 pl--30">
                            <div className="thumbnail-image" style={{ position: 'relative', width: '85%', margin: '0 auto' }}>
                                <img
                                    src="/assets/images/about/16.webp"
                                    alt="About Intro"
                                    style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                                />
                                {/* Floating Stat Card */}
                                <div className="cta-card" style={{
                                    position: 'absolute',
                                    bottom: '-40px',
                                    left: '-40px',
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                    maxWidth: '280px',
                                    zIndex: 2,
                                    border: '1px solid #f1f5f9'
                                }}>
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '12px' }}>
                                            <i className="fa-solid fa-users text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h2 style={{ color: darkColor, fontSize: '32px', margin: 0, fontWeight: '800' }}>23K+</h2>
                                            <span style={{ color: textColor, fontSize: '14px', fontWeight: '500' }}>Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Mission & Vision (Cards) */}
            <div className="rts-mission-area" style={{ background: lightBg, padding: '100px 0' }}>
                <div className="container">
                    <div className="row mb--60 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Our Values</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Driving Impact Through <br />Innovation</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: 'Our Mission', icon: 'fa-bullseye', desc: 'To empower businesses with robust, scalable, and intelligent technology infrastructure. We believe in engineering excellence that drives efficiency.' },
                            { title: 'Our Vision', icon: 'fa-eye', desc: 'To be the global leader in digital transformation, bridging the gap between complex technology and practical business application across industries.' },
                            { title: 'Our Approach', icon: 'fa-route', desc: 'We work side-by-side with our clients to design, build, and deploy systems that are secure, scalable, and future-proof.' }
                        ].map((item, idx) => (
                            <div className="col-lg-4" key={idx}>
                                <div className="mission-card h-100 p-5 rounded-4 bg-white border hover-lift transition-all" style={{ textAlign: 'center' }}>
                                    <div className="icon-wrapper mb-4 mx-auto" style={{
                                        width: '80px', height: '80px', background: '#eff6ff', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, fontSize: '32px'
                                    }}>
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: '24px', fontWeight: '800', color: darkColor, marginBottom: '20px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '16px', color: textColor, lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Stats Counter Section */}
            <div className="rts-funfact-area" style={{ background: darkColor, padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container position-relative z-1">
                    <div className="row text-center">
                        <div className="col-md-4 border-end border-white border-opacity-10">
                            <h2 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>25+</h2>
                            <p style={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', margin: 0 }}>Years Experience</p>
                        </div>
                        <div className="col-md-4 border-end border-white border-opacity-10">
                            <h2 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>23K</h2>
                            <p style={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', margin: 0 }}>Projects Completed</p>
                        </div>
                        <div className="col-md-4">
                            <h2 style={{ fontSize: '56px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>5M+</h2>
                            <p style={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', margin: 0 }}>Solutions Delivered</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Team Section */}
            <div className="rts-team-area" style={{ padding: '100px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-12 text-center">
                            <span style={{ color: primaryColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Leadership</span>
                            <h2 className="title" style={{ fontSize: '38px', fontWeight: '800', color: darkColor }}>Meet Our Experts</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {[
                            { name: 'Dr. Deepak Chowdary', role: 'Founder & CEO', img: '01.webp' },
                            { name: 'Dr. K V Krishna Kishore', role: 'President & MD', img: '02.webp' },
                            { name: 'Dr. V Phani Kumar S.', role: 'Vice President & CTO', img: '03.webp' },
                            { name: 'Mr. Venkatesh Addagadda', role: 'Delivery Manager', img: '04.webp' },
                        ].map((member, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className="team-card hover-lift transition-all" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                                    <div className="thumbnail" style={{ height: '300px', overflow: 'hidden' }}>
                                        <img
                                            src={`/assets/images/team/${member.img}`}
                                            alt={member.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                                        />
                                    </div>
                                    <div className="content p-4 text-center bg-white">
                                        <h5 style={{ fontWeight: '800', color: darkColor, marginBottom: '5px', fontSize: '18px' }}>{member.name}</h5>
                                        <span style={{ fontSize: '13px', color: primaryColor, textTransform: 'uppercase', fontWeight: '600' }}>{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 6. CTA Section */}
            <div className="rts-cta-area" style={{ background: `linear-gradient(135deg, ${darkColor}, #000)`, padding: '80px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>Ready to Scale Your Business?</h2>
                            <p style={{ color: '#cbd5e1', fontSize: '18px', marginBottom: 0 }}>Let's discuss how our engineering solutions can help you grow.</p>
                        </div>
                        <div className="col-lg-5 text-center text-lg-end mt-4 mt-lg-0">
                            <Link to="/contact" className="rts-btn btn-white" style={{ background: '#fff', color: darkColor, padding: '15px 40px', borderRadius: '6px', fontWeight: '700', display: 'inline-block', textDecoration: 'none' }}>
                                Contact Us <i className="fa-regular fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .hover-lift { transition: transform 0.3s, box-shadow 0.3s; }
                .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1); border-color: ${primaryColor} !important; }
            `}</style>
        </main>
    );
};
