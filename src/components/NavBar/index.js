import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {SearchBar} from '../index'
import './style.css';

const NavBar = () => {

    let navigate = useNavigate(); 

    return (<div className='navbar'>
        <div><Link to="/"><img src="../assets/images/logo.png" style={{height: "60px"}}></img></Link></div>
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
