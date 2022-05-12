import React, {useState} from 'react';
import {NavBar} from '../../components'
import './style.css'

const HomePage = () => {
    return <div className="homepage">
    <h1>Hello and welcome to our GitHub Search</h1>
    <p>Feel free to use the search bar above to search for a GitHub user you know.</p>
    <p>The user's repositories will be displayed. Click on each repository to learn more!</p>
    </div>
}

export default HomePage;
