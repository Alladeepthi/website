import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_OFFERINGS } from '../../data/services'; // Fixed import from services.ts

const AUTO_PLAY_MS = 4500;

/** Rotate through premium Storyset illustrations verified to exist in the directory. */
const SERVICE_CARD_IMAGES = [
    '/assets/images/service/Application%20programming%20interface-amico.png',
    '/assets/images/service/At%20the%20office-amico.png',
    '/assets/images/service/Business%20merger-amico.png',
    '/assets/images/service/Business%20support-pana.png',
    '/assets/images/service/Consultative%20sales-amico.png',
    '/assets/images/service/Investment%20data-amico.png',
    '/assets/images/service/New%20employee-amico.png',
    '/assets/images/service/Onboarding-bro.png',
    '/assets/images/service/Programmer-amico.png',
    '/assets/images/service/agile%20method-bro.png',
    '/assets/images/service/teamwork%20high%20five-bro.png',
];

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    if (!arr) return out;
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

function usePerView(): number {
    const [perView, setPerView] = useState(4);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1200) setPerView(4);
            else if (w >= 768) setPerView(2);
            else setPerView(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return perView;
}

export const Services: React.FC = () => {
    const perView = usePerView();
    // Use the comprehensive SERVICE_OFFERINGS array
    const slides = useMemo(() => chunk(SERVICE_OFFERINGS, perView), [perView]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage((p) => Math.min(p, Math.max(0, slides.length - 1)));
    }, [slides.length]);

    const goTo = useCallback(
        (i: number) => {
            setPage(Math.max(0, Math.min(i, slides.length - 1)));
        },
        [slides.length]
    );

    useEffect(() => {
        if (slides.length <= 1) return undefined;
        const id = window.setInterval(() => {
            setPage((p) => (p + 1) % slides.length);
        }, AUTO_PLAY_MS);
        return () => window.clearInterval(id);
    }, [slides.length]);

    const gap = 24;
    const cardBasis =
        perView === 4
            ? `calc((100% - ${3 * gap}px) / 4)`
            : perView === 2
                ? `calc((100% - ${gap}px) / 2)`
                : '100%';

    const multi = slides.length > 1;

    return (
        <div
            className="nt-home-services"
            style={{
                background: '#F1F5F9',
                padding: 'clamp(56px, 8vw, 96px) 0',
            }}
        >
            <div className="container">
                <div className="title-center-wrapper" style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
                    <span
                        className="pre"
                        style={{
                            color: '#3B82F6',
                            fontWeight: 700,
                            fontSize: '13px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '12px',
                        }}
                    >
                        Our Capabilities
                    </span>
                    <h2
                        className="title rts-text-anime-style-1"
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                            fontWeight: 800,
                            color: '#0F172A',
                            lineHeight: 1.2,
                            marginBottom: '12px',
                        }}
                    >
                        Full-Cycle Product Engineering
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#64748B',
                            maxWidth: '640px',
                            margin: '0 auto',
                            lineHeight: 1.55,
                        }}
                    >
                        End-to-end solutions from ideation to deployment—explore every offering below.
                    </p>
                </div>

                <div
                    className="nt-home-services__viewport"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Service offerings"
                    aria-live="polite"
                    style={{
                        overflow: 'hidden',
                        marginLeft: 'calc(var(--bs-gutter-x, 1.5rem) * -0.5)',
                        marginRight: 'calc(var(--bs-gutter-x, 1.5rem) * -0.5)',
                        paddingLeft: 'calc(var(--bs-gutter-x, 1.5rem) * 0.5)',
                        paddingRight: 'calc(var(--bs-gutter-x, 1.5rem) * 0.5)',
                    }}
                >
                    <div
                        className="nt-home-services__track"
                        style={{
                            display: 'flex',
                            width: `${slides.length * 100}%`,
                            transform: `translateX(-${(page * 100) / slides.length}%)`,
                            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                    >
                        {slides.map((slideItems, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="nt-home-services__slide"
                                style={{
                                    width: `${100 / slides.length}%`,
                                    flexShrink: 0,
                                    display: 'flex',
                                    gap: `${gap}px`,
                                    justifyContent: 'flex-start',
                                    alignItems: 'stretch',
                                    boxSizing: 'border-box',
                                    padding: '0 2px',
                                }}
                            >
                                {slideItems.map((offering, j) => {
                                    const globalIndex = slideIndex * perView + j;
                                    const imgSrc =
                                        SERVICE_CARD_IMAGES[globalIndex % SERVICE_CARD_IMAGES.length];
                                    // Match the route pattern used in the rest of the app
                                    const to = `/service-details`;

                                    return (
                                        <article
                                            key={offering.slug}
                                            className="nt-home-service-card"
                                            style={{
                                                flex: `0 0 ${cardBasis}`,
                                                maxWidth: cardBasis,
                                                background: '#fff',
                                                borderRadius: '4px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Link
                                                to={to}
                                                state={{ service: offering }}
                                                style={{
                                                    display: 'block',
                                                    aspectRatio: '1 / 1',
                                                    overflow: 'hidden',
                                                    background: '#F8FAFC',
                                                }}
                                            >
                                                <img
                                                    src={imgSrc}
                                                    alt=""
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                    }}
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src =
                                                            '/assets/images/service/Programmer-amico.png';
                                                    }}
                                                />
                                            </Link>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '16px',
                                                    padding: '20px 18px',
                                                    minHeight: '72px',
                                                }}
                                            >
                                                <span
                                                    aria-hidden
                                                    style={{
                                                        width: '3px',
                                                        alignSelf: 'stretch',
                                                        minHeight: '40px',
                                                        background: '#0F172A',
                                                        flexShrink: 0,
                                                        borderRadius: '2px',
                                                    }}
                                                />
                                                <h3
                                                    style={{
                                                        flex: 1,
                                                        margin: 0,
                                                        fontSize: 'clamp(15px, 1.15vw, 17px)',
                                                        fontWeight: 700,
                                                        color: '#0F172A',
                                                        lineHeight: 1.35,
                                                    }}
                                                >
                                                    <Link
                                                        to={to}
                                                        state={{ service: offering }}
                                                        style={{
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        {offering.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {multi && (
                    <div
                        role="tablist"
                        aria-label="Service slides"
                        className="nt-home-services__dots"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            marginTop: '40px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                            maxWidth: '100%',
                        }}
                    >
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                role="tab"
                                aria-selected={i === page}
                                aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                                onClick={() => goTo(i)}
                                className="nt-home-services__dot-btn"
                                style={{
                                    padding: 0,
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    lineHeight: 0,
                                    flexShrink: 0,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'auto',
                                    minHeight: 0,
                                }}
                            >
                                {i === page ? (
                                    <span
                                        style={{
                                            display: 'block',
                                            width: '32px',
                                            height: '8px',
                                            borderRadius: '999px',
                                            background: '#2563EB',
                                        }}
                                    />
                                ) : (
                                    <span
                                        style={{
                                            display: 'block',
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            border: '2px solid #2563EB',
                                            background: 'transparent',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .nt-home-services__dots {
                    flex-direction: row !important;
                    justify-content: center !important;
                    align-items: center !important;
                }
                .demo-machine-learning .nt-home-services__dot-btn,
                .nt-home-services__dot-btn {
                    width: auto !important;
                    max-width: none !important;
                    display: inline-flex !important;
                }
            `}</style>
        </div>
    );
};
