import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import './Signup.css';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup, loginWithGoogle } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
           
        } catch {
            setError('Failed to create an account');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            
        } catch {
            setError('Failed to log in with Google');
        }
    };

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" ref={emailRef} required />
                </label>
                <label>
                    Password:
                    <input type="password" ref={passwordRef} required />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={handleGoogleLogin}>Sign Up with Google</button>
        </div>
    );
};

export default Signup;
