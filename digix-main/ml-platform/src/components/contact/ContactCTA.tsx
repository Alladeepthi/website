import React from 'react';
import { Link } from 'react-router-dom';

export const ContactCTA: React.FC = () => {
    return (
        <div className="rts-call-to-action-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="call-to-action-wrapper-three">
                            <h3 className="title rts-text-anime-style-1">
                                No long-term contracts. No catches. Simple.
                            </h3>
                            <p className="disc">
                                Start your 30-day free trial. Cancel anytime. View demo Start free trial
                            </p>
                            <Link to="/contact" className="rts-btn btn-primary">Started for Trial</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
