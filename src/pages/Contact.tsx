import React, { useEffect } from 'react';

export const Contact: React.FC = () => {
    useEffect(() => {
        document.body.className = "demo-machine-learning";
        return () => {
            document.body.className = "";
        };
    }, []);

    return (
        <main>
            {/* rts service-details-breadcrumb-area-start */}
            <div className="rts-service-details-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-area">
                                <h1 className="title rts-text-anime-style-1">Get in Touch</h1>
                                <p className="disc" style={{ maxWidth: '384px', margin: 'auto', marginTop: '25px' }}>
                                    If you have any questions or require assistance, please complete the form on this page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service-details-breadcrumb-area-end */}

            {/* rts contact area start */}
            <div className="rts-contact-area rts-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="contact-form-content-left-wrapper">
                                <div className="signle-contact-card">
                                    <div className="top-area">
                                        <div className="icon">
                                            <img src="/assets/images/contact/icon/04.svg" alt="contact" />
                                        </div>
                                        <h4 className="title">Our Location</h4>
                                    </div>
                                    <p className="disc">123 Main Street, Apt 4B Springfield, IL 62704, UK</p>
                                </div>
                                <div className="signle-contact-card">
                                    <div className="top-area">
                                        <div className="icon">
                                            <img src="/assets/images/contact/icon/05.svg" alt="contact" />
                                        </div>
                                        <h4 className="title">Email Us</h4>
                                    </div>
                                    <p className="disc">Our support team is here to assist you</p>
                                    <a href="mailto:support@neuraltrixai.com">support@neuraltrixai.com</a>
                                </div>
                                <div className="signle-contact-card">
                                    <div className="top-area">
                                        <div className="icon">
                                            <img src="/assets/images/contact/icon/06.svg" alt="contact" />
                                        </div>
                                        <h4 className="title">Call Us</h4>
                                    </div>
                                    <p className="disc">Our customer support team is available</p>
                                    <a href="tel:+111112542174">+1 (111) 125- 42174</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="contact-form-main-wrapper-contact form__content">
                                <div className="single-input-wrapper">
                                    <div className="single-input">
                                        <label htmlFor="name">First Name</label>
                                        <input name="name" id="name" type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="lname">Last Name</label>
                                        <input id="lname" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="single-input-wrapper">
                                    <div className="single-input">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" name="email" placeholder="example@gmail.com" required />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="phone">Phone</label>
                                        <div className="input-with-country-selenct">
                                            <select className="form-select" aria-label="Default select example">
                                                <option defaultValue="BAN">BAN</option>
                                                <option value="1">USA</option>
                                                <option value="2">UAE</option>
                                                <option value="3">ENG</option>
                                            </select>
                                            <input id="phone" type="tel" name="phone" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-input">
                                    <label htmlFor="message">How can we help you?</label>
                                    <textarea name="message" id="message" placeholder="Your message..." required></textarea>
                                </div>
                                <div className="single-input with-checkbox">
                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">You agree to our friendly <a href="#">privacy policy</a></label>
                                </div>
                                <button className="rts-btn btn-primary" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts contact area end */}

            {/* rts faq area start */}
            <div className="rts-faq-area-start rts-section-gapBottom">
                <div className="container mb--50">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="title rts-text-anime-style-1">Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="container-faq">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordon-pricing-wrapper-three full-width">
                                <div className="accordion" id="pricingAccordion">
                                    {[
                                        { id: 'One', q: "What's included in each plan?", active: true },
                                        { id: 'Two', q: "Can I upgrade or downgrade my plan later?" },
                                        { id: 'Three', q: "What payment methods do you accept?" },
                                        { id: 'Four', q: "What's included in each plan?" },
                                        { id: 'Five', q: "Can I upgrade or downgrade my plan later?" },
                                        { id: 'Six', q: "What payment methods do you accept?" },
                                    ].map((faq, i) => (
                                        <div className="accordion-item" key={i}>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button className={`accordion-button ${faq.active ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={faq.active ? 'true' : 'false'} aria-controls={`collapse${faq.id}`}>
                                                    {faq.q}
                                                </button>
                                            </h2>
                                            <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#pricingAccordion">
                                                <div className="accordion-body">
                                                    Each plan is designed to offer a specific set of services tailored to different business needs.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq area end */}

            {/* rts call to action area start */}
            <div className="rts-call-to-action-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-wrapper-three">
                                <h3 className="title rts-text-anime-style-1">No long-term contracts. No catches. Simple.</h3>
                                <p className="disc">Start your 30-day free trial. Cancel anytime. View demo Start free trial</p>
                                <a href="#" className="rts-btn btn-primary">Started for Trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
