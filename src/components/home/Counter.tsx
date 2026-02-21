import React from 'react';

export const Counter: React.FC = () => {
    return (
        <div className="rts-counter-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fun-facts-area-wrapper-machine bg_image" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '30px',
                            justifyContent: 'center',
                            padding: '40px 20px'
                        }}>
                            <div className="single-fun-facts" style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <h2 className="title" style={{ fontSize: '36px', marginBottom: '5px' }}>12k</h2>
                                <p style={{ margin: 0 }}>Project Done</p>
                            </div>
                            <div className="single-fun-facts" style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <h2 className="title" style={{ fontSize: '36px', marginBottom: '5px' }}>131+</h2>
                                <p style={{ margin: 0 }}>Happy Client</p>
                            </div>
                            <div className="single-fun-facts" style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <h2 className="title" style={{ fontSize: '36px', marginBottom: '5px' }}>25+</h2>
                                <p style={{ margin: 0 }}>Year Experience</p>
                            </div>
                            <div className="single-fun-facts" style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <h2 className="title" style={{ fontSize: '36px', marginBottom: '5px' }}>100+</h2>
                                <p style={{ margin: 0 }}>Award Wining</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
