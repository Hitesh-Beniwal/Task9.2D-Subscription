// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css'; // Main styles

const stripePromise = loadStripe('pk_test_51QFwTkLcmjWVTFsVFIt1ppsin4TqWRiNdk0r7Rk4vJTqPiC2Mt9YuJ8NfRpq401L7gRteG4Mpzo4lCV8BNS6nrNS00AovPbipI'); 

ReactDOM.render(
    <BrowserRouter>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </BrowserRouter>,
    document.getElementById('root')
);
