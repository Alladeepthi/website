import React from 'react';

export const AIPlatform: React.FC = () => {
    // Duplicating metrics for seamless infinite scroll
    const metrics = [
        {
            value: "4 Weeks",
            label: "Typical MVP Delivery",
            desc: "Rapid prototyping to validate ideas and get to market fast.",
            icon: "fa-rocket"
        },
        {
            value: "40%",
            label: "Reduced Dev Costs",
            desc: "Significant savings compared to hiring full-time in-house teams.",
            icon: "fa-percent"
        },
        {
            value: "2x",
            label: "Faster Time-to-Market",
            desc: "Accelerated cycles using our pre-built AI accelerators.",
            icon: "fa-gauge-high"
        },
        {
            value: "100%",
            label: "Client IP Ownership",
            desc: "You own the code, models, and intellectual property completely.",
            icon: "fa-file-shield"
        },
        {
            value: "Top 1%",
            label: "Engineering Talent",
            desc: "Access to elite developers and AI researchers for your project.",
            icon: "fa-users-gear"
        },
        {
            value: "Zero",
            label: "Tech Debt",
            desc: "Clean, maintainable code architectures built for long-term scale.",
            icon: "fa-code-branch"
        }
    ];

    // Duplicate list for seamless loop
    const scrollingMetrics = [...metrics, ...metrics];

    return (
        <div className="rts-ai-platform-area" style={{ padding: '80px 0', background: '#F8FAFC', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative' }}>
                <div className="row mb-5 align-items-end text-center">
                    <div className="col-12">
                        <span style={{
                            color: '#3B82F6',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            marginBottom: '10px',
                            display: 'block'
                        }}>Value Delivered</span>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: 800,
                            color: '#0F172A',
                            marginBottom: '0'
                        }}>Accelerating Your Solution Vision</h2>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container" style={{
                    display: 'flex',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    overflow: 'hidden'
                }}>
                    <div className="marquee-track" style={{
                        display: 'flex',
                        gap: '30px',
                        animation: 'scroll 30s linear infinite',
                        width: 'max-content'
                    }}>
                        {scrollingMetrics.map((metric, idx) => (
                            <div key={idx} style={{
                                width: '300px',
                                flexShrink: 0
                            }}>
                                <div style={{
                                    background: '#fff',
                                    padding: '30px 25px',
                                    borderRadius: '16px',
                                    height: '100%',
                                    border: '1px solid #E2E8F0',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'center',
                                    position: 'relative',
                                    cursor: 'pointer'
                                }}
                                    className="metric-card"
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        color: '#3B82F6',
                                        fontSize: '20px'
                                    }}>
                                        <i className={`fa-solid ${metric.icon}`}></i>
                                    </div>
                                    <h3 style={{
                                        fontSize: '28px',
                                        fontWeight: 800,
                                        color: '#0F172A',
                                        marginBottom: '5px'
                                    }}>{metric.value}</h3>
                                    <h5 style={{
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        color: '#334155',
                                        marginBottom: '10px'
                                    }}>{metric.label}</h5>
                                    <p style={{
                                        fontSize: '14px',
                                        lineHeight: 1.5,
                                        color: '#64748B',
                                        marginBottom: 0
                                    }}>{metric.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track:hover {
                    animation-play-state: paused !important;
                }
                .metric-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.1);
                    border-color: #3B82F6 !important;
                }
            `}</style>
        </div>
    );
};
