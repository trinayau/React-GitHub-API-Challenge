import React from 'react';
import { useNavigate } from 'react-router-dom';
import {SearchBar} from '../index'
import './style.css';

const NavBar = () => {

    let navigate = useNavigate(); 

    return (<div className='navbar'>
        <div><img src="assets/images/logo.png" style={{height: "60px"}}></img></div>
        <div>
        <SearchBar/>
        </div>
        <nav>
            <button onClick={() => navigate(-1) }>Back</button>
        </nav>
        </div>
    );
}

export default NavBar;
