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
    <div className='repo-details'>
        <a className="heading" href={repository.html_url}>{repository.full_name}</a>
        <p>Description: {repository.description}</p>
        <p>Homepage: <a href={repository.homepage} target="_blank">{repository.homepage}</a></p>
        <p>Issues: {repository.open_issues}</p>
        <p>Forks: {repository.forks}</p>
        <p>Language: {repository.language}</p>
        <div className='topics'>
        <p>Topics:</p> {topics !== [] ? topics?.map((topic, i) => {return (<p className="topic-class" key={i}>{topic}</p>)}) : <p>0</p>}

        </div>
    </div>
       
    </div>
    </>
    )
}

export default HomePage;
