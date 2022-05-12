import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import './style.css'
const HomePage = () => {

    const navigate = useNavigate()
    const {username, repo} = useParams();
    const [repository, setRepository] = useState({owner:{}},{topics:[]})

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://api.github.com/repos/${username}/${repo}`
        }).then(res => {
            //setRepos will show the data fetched
            setRepository(res.data);
            console.log(res.data)
        });
    },[])
 
    const topics = repository.topics;

  
    return (
    <>
    <div className="single-repo">
    <div className='owner'>
        <img src={`${repository.owner.avatar_url}`}></img>
        <h2>Repo Owner: {repository.owner.login}</h2>
    </div>
    <div className='repo-details'>
        <h1>{repository.name}</h1>
        <p>Description: {repository.description}</p>
        <p>Issues: {repository.open_issues}</p>
        <p>Forks: {repository.forks}</p>
        <div className='topics'>
        <p>Topics:</p> {topics?.map((topic, i) => {return (<p className="topic-class" key={i}>{topic}</p>)})}
        </div>
    </div>
       
    </div>
    </>
    )
}

export default HomePage;
