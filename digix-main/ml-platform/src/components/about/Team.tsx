import React from 'react';
import { Link } from 'react-router-dom';

export const Team: React.FC = () => {
    return (
        <div className="rts-team-members rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <div className="title-left-wrapper">
                                <h2 className="title rts-text-anime-style-1">Leadership Team</h2>
                            </div>
                            <div className="right-area">
                                <p className="disc">
                                    Our success is driven by a dedicated team of IT professionals who bring their expertise,
                                    creativity, and passion to every project.
                                </p>
                                <Link to="/contact" className="btn-line"><span>We are hiring</span> <i className="fa-solid fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    <div className="col-lg-12">
                        {/* Manual grid since slider might be tricky without full init, or could use just grid for now */}
                        <div className="row g-5">
                            {[
                                { img: '01.webp', name: 'Daniel Brown', role: 'Chief Executive Officer' },
                                { img: '02.webp', name: 'Christopher Henry', role: 'Chief Executive Officer' },
                                { img: '03.webp', name: 'Marketing Director', role: 'Senior Developer' },
                                { img: '04.webp', name: 'John Smith', role: 'Senior Developer' }
                            ].map((member, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="single-team-style-one">
                                        <div className="thumbnail">
                                            <img src={`/assets/images/team/${member.img}`} alt="team" />
                                        </div>
                                        <div className="inner-content">
                                            <h5 className="title">{member.name}</h5>
                                            <span className="designation">{member.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
