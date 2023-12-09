import React from 'react';
import { Link } from 'react-router-dom';
import "./navbarStyle.css";

const Navbar = () =>
{
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/piechart">Pie Chart</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
