// src/components/Pricing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pricing.css';

const Pricing = () => {
    return (
        <div className="pricing">
            <h1>Pricing Plans</h1>
            <div className="plans-container">
                <div className="plan">
                    <h2>Free Plan</h2>
                    <p>Access to basic features and resources.</p>
                    <ul className="plan-features">
                        <li>Community support</li>
                        <li>Limited tutorials</li>
                        <li>Basic documentation access</li>
                    </ul>
                    <p className="price">Price: <strong>Free</strong></p>
                    <Link to="/signup">
                        <button className="subscribe-button">Sign Up for Free</button>
                    </Link>
                </div>
                <div className="plan premium">
                    <h2>Premium Plan</h2>
                    <p>Access to all features, exclusive content, and priority support.</p>
                    <ul className="plan-features">
                        <li>All tutorials and resources</li>
                        <li>Exclusive webinars and workshops</li>
                        <li>Priority customer support</li>
                        <li>Monthly newsletters</li>
                    </ul>
                    <p className="price">Price: <strong>$9.99/month</strong></p>
                    <Link to="/payment">
                        <button className="subscribe-button">Subscribe Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
