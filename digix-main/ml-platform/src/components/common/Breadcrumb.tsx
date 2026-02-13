import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    title: string;
    links: { label: string; url?: string; active?: boolean }[];
    bgImage?: string; // Optional if we want to change it
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, links }) => {
    return (
        <div className="rts-about-breadcrumb-area demo-4 bg-none rts-section-gapTop pb--100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="rts-about-breadcrumb-content">
                            <ul>
                                {links.map((link, index) => (
                                    <li key={index} className={link.active ? 'active' : ''}>
                                        {link.url ? (
                                            <Link to={link.url}>{link.label}</Link>
                                        ) : (
                                            link.label
                                        )}
                                        {!link.active && <i className="fa fa-chevron-right"></i>}
                                    </li>
                                ))}
                            </ul>
                            <h1 className="title rts-text-anime-style-1">{title}</h1>
                            <p className="disc">
                                Since our inception, we have been committed to delivering cutting-edge software solutions that drive innovation and success. From small startups to global enterprises we have partnered with clients across industries, helping them navigate complexities of the digital world with custom, scalable technology.
                            </p>
                            <div className="author-area">
                                <div className="stars-main-wrapper">
                                    <div className="wrapper">
                                        <img src="/assets/images/others/stars-02.svg" alt="stars" />
                                        <img src="/assets/images/others/star-02.svg" alt="stars" />
                                    </div>
                                    <p className="disc1">TrustScore 4.8 2k reviews</p>
                                </div>
                                <div className="author-wrapper">
                                    <div className="image">
                                        <img src="/assets/images/others/04.svg" alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="sign"><img src="/assets/images/others/sign-2.svg" alt="" /></div>
                                        <p>CEO of Digix</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="rts-about-breadcrumb-image">
                            <img src="/assets/images/banner/breadcrumb-01.webp" width="520" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
