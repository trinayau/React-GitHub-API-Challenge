import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './style.css';

const NavBar = () => {

    let navigate = useNavigate(); 

    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="active" to="/about">About</NavLink>
            <button onClick={() => navigate(-1) }>Back</button>
        </nav>
    );
}

export default NavBar;
