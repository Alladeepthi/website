import React from 'react';

export const ContactFormArea: React.FC = () => {
    return (
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
                                <p className="disc">
                                    123 Main Street, Apt 4B Springfield,
                                    IL 62704, UK
                                </p>
                            </div>
                            <div className="signle-contact-card">
                                <div className="top-area">
                                    <div className="icon">
                                        <img src="/assets/images/contact/icon/05.svg" alt="contact" />
                                    </div>
                                    <h4 className="title">Email Us</h4>
                                </div>
                                <p className="disc">
                                    Our support team is here to assist you
                                </p>
                                <a href="mailto:support@neuraltrixai.com">support@neuraltrixai.com</a>
                            </div>
                            <div className="signle-contact-card">
                                <div className="top-area">
                                    <div className="icon">
                                        <img src="/assets/images/contact/icon/06.svg" alt="contact" />
                                    </div>
                                    <h4 className="title">Call Us</h4>
                                </div>
                                <p className="disc">
                                    Our customer support team is available
                                </p>
                                <a href="tel:11112542174">+1 (111) 125- 42174</a>
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
                                            <option>BAN</option>
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
                                <label htmlFor="checkbox">You agree to our friendly <a href="#">privacy policy</a></label>
                            </div>
                            <button className="rts-btn btn-primary" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
