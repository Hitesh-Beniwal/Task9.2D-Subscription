import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, loginWithGoogle } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            
        } catch {
            setError('Failed to log in');
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
        <div className="login">
            <h1>Log In</h1>
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
                <button type="submit">Log In</button>
            </form>
            <button onClick={handleGoogleLogin}>Log In with Google</button>
        </div>
    );
};

export default Login;
