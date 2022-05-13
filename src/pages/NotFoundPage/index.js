import React from "react";
import './styles.css';
import * as components from '../../components';
import darth from './darth.jpg'

const NotFoundPage = () => {

    return <div className="notfound-container">


    <div className="darth">
        <h1>404 Page not found!</h1>
        <p>I am not your father, please go back home.</p>
        {/* <img src={darth} alt="Darth Vader" /> */}
    </div>
    
    </div>
}

export default NotFoundPage;
