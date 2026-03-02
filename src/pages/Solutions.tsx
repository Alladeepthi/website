import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { solutionsData } from '../data/solutionsData';
import { Pricing } from '../components/home/Pricing';

export const Solutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All Solutions');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const primaryColor = '#3C72FC';
    const darkColor = '#0F172A';
    const lightBg = '#F8FAFC';

    const tabs = ['All Solutions', 'Vision AI', 'Natural Language', 'Infrastructure', 'Platform', 'Data Ops', 'Analytics'];
    const filteredSolutions = activeTab === 'All Solutions'
        ? solutionsData
        : solutionsData.filter(p => p.category === activeTab);

    return (
        <main style={{ background: '#fff' }}>
            {/* 1. Classic Split Hero (Matching the Template's modern inner page style) */}
            <div className="solutions-header-area" style={{
                background: darkColor,
                position: 'relative',
                overflow: 'hidden',
                padding: '120px 0 80px'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span style={{
                                    color: primaryColor,
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                    letterSpacing: '2px',
                                    marginBottom: '20px',
                                    display: 'block'
                                }}>Strategic Solutions</span>
                                <h1 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(36px, 5vw, 64px)',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    marginBottom: '24px'
                                }}>
                                    Precise Answers to <br />
                                    Complex Challenges.
                                </h1>
                                <p style={{
                                    color: '#94A3B8',
                                    fontSize: '18px',
                                    maxWidth: '550px',
                                    marginBottom: '40px',
                                    lineHeight: '1.6'
                                }}>
                                    We bridge the gap between business friction and technical intelligence.
                                    Browse our industry-specific solution frameworks.
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                style={{ position: 'relative' }}
                            >
                                <img src="/assets/images/about/16.webp" alt="" style={{ width: '100%', borderRadius: '20px' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    background: primaryColor,
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '24px',
                                    boxShadow: '0 10px 20px rgba(60, 114, 252, 0.4)'
                                }}>
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Modern Filter & Grid Section */}
            <section style={{ padding: '100px 0', background: lightBg }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-12">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '20px',
                                borderBottom: '1px solid #E2E8F0',
                                paddingBottom: '30px'
                            }}>
                                <div className="sec-title">
                                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: darkColor, margin: 0 }}>Solution Explorer</h2>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    overflowX: 'auto',
                                    padding: '5px'
                                }} className="no-scrollbar">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            style={{
                                                padding: '10px 20px',
                                                borderRadius: '50px',
                                                border: 'none',
                                                background: activeTab === tab ? primaryColor : '#fff',
                                                color: activeTab === tab ? '#fff' : '#64748B',
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                transition: 'all 0.3s ease',
                                                whiteSpace: 'nowrap',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        <AnimatePresence mode="popLayout">
                            {filteredSolutions.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="col-lg-4 col-md-6"
                                >
                                    <div className="modern-solution-card" style={{
                                        background: '#fff',
                                        borderRadius: '24px',
                                        padding: '40px 30px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid #F1F5F9',
                                        transition: 'all 0.4s ease',
                                        position: 'relative',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '16px',
                                            background: `${primaryColor}10`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: primaryColor,
                                            fontSize: '24px',
                                            marginBottom: '25px'
                                        }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>

                                        <div style={{ marginBottom: '20px' }}>
                                            <span style={{
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                textTransform: 'uppercase',
                                                color: '#94A3B8',
                                                letterSpacing: '1px'
                                            }}>{item.category}</span>
                                            <h3 style={{
                                                fontSize: '24px',
                                                fontWeight: '800',
                                                color: darkColor,
                                                marginTop: '5px',
                                                lineHeight: '1.2'
                                            }}>{item.title}</h3>
                                        </div>

                                        <div className="problem-box" style={{
                                            background: '#FFF1F2',
                                            padding: '20px',
                                            borderRadius: '16px',
                                            marginBottom: '15px'
                                        }}>
                                            <h6 style={{ fontSize: '12px', fontWeight: '800', color: '#E11D48', textTransform: 'uppercase', marginBottom: '8px' }}>
                                                <i className="fa-solid fa-circle-exclamation" style={{ marginRight: '6px' }}></i> Challenge
                                            </h6>
                                            <p style={{ fontSize: '14px', color: '#9F1239', margin: 0, lineHeight: '1.5' }}>{item.problem}</p>
                                        </div>

                                        <div className="solution-box" style={{
                                            background: '#F0F9FF',
                                            padding: '20px',
                                            borderRadius: '16px',
                                            marginBottom: '30px'
                                        }}>
                                            <h6 style={{ fontSize: '12px', fontWeight: '800', color: primaryColor, textTransform: 'uppercase', marginBottom: '8px' }}>
                                                <i className="fa-solid fa-bolt" style={{ marginRight: '6px' }}></i> Solution
                                            </h6>
                                            <p style={{ fontSize: '14px', color: '#075985', margin: 0, lineHeight: '1.5', fontWeight: '500' }}>{item.solution}</p>
                                        </div>

                                        <div style={{ marginTop: 'auto', borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                                <div style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    background: '#16A34A',
                                                    color: '#fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '14px'
                                                }}>
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase' }}>ROI Impact</span>
                                                    <p style={{ fontSize: '15px', fontWeight: '700', color: darkColor, margin: 0 }}>{item.benefit}</p>
                                                </div>
                                            </div>

                                            <Link to="/contact" className="rts-btn btn-primary" style={{
                                                width: '100%',
                                                justifyContent: 'center',
                                                padding: '12px',
                                                fontSize: '14px',
                                                borderRadius: '12px'
                                            }}>
                                                Engage Solution
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3. Standard Integrated Pricing */}
            <div id="pricing-plan" style={{ background: '#fff', paddingBottom: '120px' }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-8">
                            <h2 style={{ fontSize: '42px', fontWeight: '800', color: darkColor }}>Engagement Frameworks</h2>
                            <p style={{ color: '#64748B' }}>Professional scaling models for every business size.</p>
                        </div>
                    </div>
                    <Pricing />
                </div>
            </div>

            <style>{`
                .modern-solution-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: ${primaryColor}30;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
};
