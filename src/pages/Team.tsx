import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Team: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        const script = document.createElement('script');
        script.src = "/assets/js/main.js?t=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.className = "";
            document.body.removeChild(script);
        };
    }, []);

    const teamMembers = [
        { name: 'Daniel Brown', role: 'Chief Executive Officer', img: '/assets/images/team/01.webp' },
        { name: 'Christopher Henry', role: 'Chief Executive Officer', img: '/assets/images/team/02.webp' },
        { name: 'Marketing Director', role: 'Chief Executive Officer', img: '/assets/images/team/03.webp' },
        { name: 'John Smith', role: 'Senior Developer', img: '/assets/images/team/04.webp' },
    ];

    return (
        <main>
            <div className="rts-career-banner-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="career-banner-wrapper">
                                <h1 className="title">Meet Our Creative Team Members</h1>
                                <p className="disc">
                                    Our team is a group of skilled and dedicated professionals who bring their expertise,
                                    creativity, and commitment to every project. We believe that great work stems from
                                    collaboration
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 mt_md--30 mt_sm--30">
                            <div className="thumbnail-top">
                                <img src="/assets/images/team/05.webp" alt="career" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* rts team members area start */}
            <div className="rts-team-members rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <div className="title-left-wrapper">
                                    <span className="pre">Team Member</span>
                                    <h2 className="title rts-text-anime-style-1">The People Behind <br /> Our Success</h2>
                                </div>
                                <div className="right-area">
                                    <p className="disc">
                                        our success is driven by a dedicated team of IT professionals who bring their expertise,
                                        creativity, and passion to every project.
                                    </p>
                                    <Link to="/about" className="btn-line"><span>We are hiring</span> <i className="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-lg-12">
                            <div className="team-swiper-area">
                                <div className="swiper mySwiper-team-one">
                                    <div className="swiper-wrapper">
                                        {teamMembers.concat(teamMembers).map((member, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div className="single-team-style-one">
                                                    <div className="thumbnail">
                                                        <img src={member.img} alt="team" />
                                                    </div>
                                                    <div className="inner-content">
                                                        <h5 className="title">{member.name}</h5>
                                                        <span className="designation">{member.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
                                <div className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* rts testimoanials area start */}
            <div className="rts-testimonials-style-three rts-section-gap">
                <div className="container pb--50">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-wrapper">
                                <span className="pre">Testimonials</span>
                                <h2 className="title rts-text-anime-style-1">What clients said</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 pt--60">
                            <div className="testimominas-single-wrapper-three">
                                <div className="swiper mySwiper-testimonials-three">
                                    <div className="swiper-wrapper">
                                        {[1, 2, 3].map((_, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div className="single-testimonails-three">
                                                    <div className="left-thumbnmail">
                                                        <img src="/assets/images/testimonials/06.webp" alt="testimonial" />
                                                        <div className="small-image">
                                                            <img src="/assets/images/testimonials/07.webp" alt="testimonial" />
                                                        </div>
                                                    </div>
                                                    <div className="right-content">
                                                        <div className="top">
                                                            <div className="brand">
                                                                <img src="/assets/images/testimonials/08.webp" alt="testimonial" />
                                                            </div>
                                                            <div className="content">
                                                                <p className="disc">
                                                                    "Working with NeuralTrix AI has been a game-changer for our business.
                                                                    Their strategic insights and innovative solutions have significantly
                                                                    boosted our growth. The professionalism and dedication are unmatched. Highly recommend!"
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="bottom">
                                                            <h5 className="title">John Smith</h5>
                                                            <span>CEO of Tech Innovations Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
                                    <div className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why work with us area start */}
            <div className="rts-work-with-us-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="luminos-main-solutioin-key">
                                <h3 className="title">Why Work With Us</h3>
                                <p className="disc">Partner with us to drive innovation and create cutting-edge solutions in technology</p>
                                <div className="check-wrapper">
                                    {[
                                        'A dynamic and collaborative work environment.',
                                        'Opportunities to work on cutting-edge projects.',
                                        'A culture of continuous learning and growth.',
                                        'Competitive compensation and benefits.',
                                    ].map((text, i) => (
                                        <div className="single-check" key={i}>
                                            <img src="/assets/images/why-choose/05.svg" alt="service" />
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className="rts-btn btn-primary mt--40">Apply Now</Link>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-6 mt_sm--50">
                            <div className="thumbnail">
                                <img src="/assets/images/team/06.webp" alt="team" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* rts call to action area start */}
            <div className="rts-call-to-action-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">No long-term contracts. No catches. Simple.</h3>
                                <p className="disc">Start your 30-day free trial. Cancel anytime. View demo Start free trial</p>
                                <Link to="/about" className="rts-btn btn-primary">Started for Trial</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
