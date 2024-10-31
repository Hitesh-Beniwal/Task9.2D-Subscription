// src/components/Payment.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './payment.css';

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        setLoading(true); 

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        setLoading(false); 

        if (error) {
            setError(error.message);
            setSuccess(false);
        } else {
            setError('');
            setSuccess(true);
            console.log('Payment successful!', paymentMethod);
         
        }
    };

    return (
        <div className="payment-container">
            <h1>Subscribe to Premium</h1>
            <p className="description">
                Enjoy exclusive features and content by subscribing to our premium plan. 
                Please enter your card details below.
            </p>
            <form onSubmit={handleSubmit} className="payment-form">
                <CardElement className="card-element" />
                <button type="submit" disabled={!stripe || loading} className="submit-button">
                    {loading ? 'Processing...' : 'Subscribe'}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Payment successful! Thank you for subscribing.</p>}
        </div>
    );
};

export default Payment;
