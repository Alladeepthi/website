import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
    return (
        <div className="rts-cta-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rts-cta-main-wrapper-machine bg_image">
                            <h3 className="title">Ready to Scale Your <br /> Technology?</h3>
                            <Link to="/contact" className="rts-btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
