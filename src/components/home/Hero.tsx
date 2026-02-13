import React, { useEffect, useRef, useState } from 'react';

export const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(err => console.log("Autoplay blocked:", err));
        }
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                minHeight: '820px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#000000',
                margin: 0,
                padding: 0
            }}
        >
            {/* 1. ULTRA-SMOOTH 'DIGITAL WAVE' DATA STREAM (NOT CONNECTED DOTS) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: videoLoaded ? 1 : 0,
                transition: 'opacity 2s ease'
            }}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    poster="https://cdn.pixabay.com/photo/2016/06/02/00/29/abstract-1429813_1280.png"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                >
                    {/* Primary: 'Blue Digital Wave' - Smooth, Flowing, Future Tech (Very different from dots) */}
                    <source src="https://cdn.pixabay.com/video/2021/04/16/71239-537824855_large.mp4" type="video/mp4" />

                    {/* Secondary: 'Cyber Space Data Tunnel' - Clean, Fast, High-End */}
                    <source src="https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. CINEMATIC GRADIENT MASK (45% -> 20%) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }}></div>

            {/* 3. CENTERED CONTENT */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div>
                            <span style={{
                                letterSpacing: '3px',
                                color: '#60A5FA', // Lighter blue for better contrast
                                fontSize: '14px',
                                fontWeight: 700,
                                marginBottom: '24px',
                                display: 'inline-block',
                                textTransform: 'uppercase',
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '8px 20px',
                                borderRadius: '30px',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}>
                                Future-Scale Product Engineering
                            </span>

                            <h1 style={{
                                fontSize: 'clamp(38px, 8vw, 76px)',
                                lineHeight: '1.15',
                                fontWeight: 900,
                                color: '#FFFFFF',
                                marginBottom: '35px',
                                textTransform: 'uppercase',
                                letterSpacing: '-1.5px',
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                Architecting <br />
                                <span style={{
                                    background: 'linear-gradient(90deg, #60A5FA 0%, #3B82F6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                                }}>Intelligent</span> <br />
                                Engineering Ecosystems
                            </h1>

                            <p style={{
                                fontSize: 'clamp(17px, 2vw, 21px)',
                                maxWidth: '780px',
                                margin: '0 auto 45px auto',
                                color: '#E2E8F0',
                                lineHeight: '1.6',
                                fontWeight: 400
                            }}>
                                We master the intersection of human creativity and technical precision to deliver scalable, AI-powered solutions that drive global enterprise growth.
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
                                <a href="/contact" className="rts-btn btn-primary" style={{
                                    padding: '18px 50px',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                                }}>
                                    Launch Project
                                </a>
                                <a href="/services" style={{
                                    padding: '18px 50px',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    backdropFilter: 'blur(5px)',
                                    background: 'rgba(255,255,255,0.05)'
                                }}>
                                    Our Core Stack
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
