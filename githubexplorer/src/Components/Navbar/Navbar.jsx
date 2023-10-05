import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    GitHub Explorer
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/follower" className="nav-link" onClick={toggleMenu}>
                            Follower
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/repo" className="nav-link" onClick={toggleMenu}>
                            RepoDetiels
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
