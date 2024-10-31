import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

const featuredContent = [
    {
        id: 1,
        title: 'Introduction to React',
        image: 'logo192.png', 
        teacher: 'Kent C Dodes',
        rating: 4.5,
    },
    {
        id: 2,
        title: 'JavaScript Basics',
        image: 'javascript.png',
        teacher: 'Mosh',
        rating: 4.7,
    },
    {
        id: 3,
        title: 'REST API',
        image: 'api.webp',
        teacher: 'Net Ninja',
        rating: 3.8,
    },
    
];

function Web() {
    return (
        <div>
            <header>
                <h1 className='bar'>DEV@Deakin</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-bar" />
                        <button type="submit" className="search-button">Search</button>
                    </div>
                </nav>
            </header>
            <div className='content'>
                <h2>Welcome to DEV@Deakin!</h2>
                <p>Your one-stop platform for development resources and tutorials.</p>
                
                <h3>Featured Tutorials and Articles</h3>
                <div className="featured-container">
                    {featuredContent.map(item => (
                        <div className="featured-item" key={item.id}>
                            <img src={item.image} alt={item.title} className="featured-image" />
                            <h4>{item.title}</h4>
                            <p>Instructor: {item.teacher}</p>
                            <p>Rating: {item.rating} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Web;
