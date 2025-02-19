import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get user data from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Remove user data from storage
        setUser(null); // Clear state
        navigate('/'); // Redirect to home after logout
    };

    return (
        <header className="header">
            <div className="icon">
                <img src="/DRF Logo 112x56.svg" alt="Icon" />
            </div>

            <div className="buttons">
                {user ? (
                    <div className="user-profile" onClick={handleLogout}>
                        <span>{user.firstName[0]}{user.lastName[0]}</span>
                    </div>
                ) : (
                    <>
                        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                        <button className="register-button" onClick={() => navigate('/register')}>Register</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
