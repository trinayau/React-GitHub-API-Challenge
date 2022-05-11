import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

const NavBar = () => {

    let navigate = useNavigate(); 

    return (


        <nav>
            <button onClick={() => navigate(-1) }>Back</button>
        </nav>
    );
}

export default NavBar;
