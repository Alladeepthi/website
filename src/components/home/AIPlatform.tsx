import React from 'react';

export const AIPlatform: React.FC = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(4);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 992) setItemsPerPage(2);
            else setItemsPerPage(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const nextSlide = () => {
        if (currentIndex < metrics.length - itemsPerPage) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="rts-ai-platform-area" style={{ padding: '80px 0', background: '#F8FAFC' }}>
            <div className="container" style={{ position: 'relative' }}>
                <div className="row mb-5 align-items-end">
                    <div className="col-lg-8">
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
                        }}>Accelerating Your Product Vision</h2>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    border: '1px solid #E2E8F0',
                                    background: currentIndex === 0 ? '#F1F5F9' : '#fff',
                                    color: currentIndex === 0 ? '#94A3B8' : '#3B82F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '18px'
                                }}
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= metrics.length - itemsPerPage}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    border: '1px solid #E2E8F0',
                                    background: currentIndex >= metrics.length - itemsPerPage ? '#F1F5F9' : '#fff',
                                    color: currentIndex >= metrics.length - itemsPerPage ? '#94A3B8' : '#3B82F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: currentIndex >= metrics.length - itemsPerPage ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '18px'
                                }}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ overflow: 'hidden', margin: '-15px', padding: '15px' }}>
                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    }}>
                        {metrics.map((metric, idx) => (
                            <div key={idx} style={{
                                flex: `0 0 ${100 / itemsPerPage}%`,
                                padding: '0 12px',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    background: '#fff',
                                    padding: '30px 25px',
                                    borderRadius: '16px',
                                    height: '100%',
                                    border: '1px solid #E2E8F0',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'center',
                                    position: 'relative'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.1)';
                                        e.currentTarget.style.borderColor = '#3B82F6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = '#E2E8F0';
                                    }}
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
                                        marginBottom: '5px',
                                        background: 'linear-gradient(90deg, #1E40AF 0%, #3B82F6 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
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
        </div>
    );
};
