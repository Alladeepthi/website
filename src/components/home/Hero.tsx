import React, { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);


    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            // Force play immediately
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    console.log("Auto-play was prevented. This is expected for large local files locally.");
                });
            }
        }
    }, []);

    return (
        <section
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#000000',
                margin: 0,
                padding: 0
            }}
        >
            {/* 1. PROFESSIONAL TEAMWORK VIDEO (Optimized Replacement) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    // onLoadedData={() => setVideoLoaded(true)} -> Removed
                    // Removed fallback image to prove video is playing/loading
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                >
                    {/* Local High-Quality Video Source as requested by the user */}
                    <source src="/assets/images/Untitled.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. OVERLAY - Kept Moderate for Visibility */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 2,
                pointerEvents: 'none'
            }}></div>

            {/* 3. CONTENT - HIDDEN TEMPORARILY AS REQUESTED TO CHECK VIDEO */}
            {/* User request: "if we remove the text then the video might look good" */}
            {/* We are hiding it to verify the video playback quality first */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div>

                            <span style={{
                                letterSpacing: '3px',
                                color: '#60A5FA',
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
                                Future-Scale Solution Engineering
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
