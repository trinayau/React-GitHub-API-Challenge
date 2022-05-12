import React, { useState, useEffect } from "react";
import axios from 'axios';
import { UserHeader } from '../../components';
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './style.css'
const UserPage = () => {

    const navigate = useNavigate()
    const {username} = useParams();

    useEffect(()=>{
        searchRepos()
    },[username]);

    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState([])

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
            //setRepos will show the data fetched
            setRepos(res.data);
        });
    },[username])

    function searchRepos() {
       
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
        }).then(res => {
            //setRepos will show the data fetched
            setUser(res.data);
        });
    }

    function navigateRepo(i){
        navigate(`/user/${username}/${i}`)

    }

    function renderRepos(){
        return repos.map((r,i) => <div className="repo-link" key={i}><Link to={`/user/${username}/${r.name}`}>{r.name}</Link><br/>{r.description?r.description:'No description'}</div>)
    }
    return <div className='user'>
    <UserHeader name={username} img={user.avatar_url} repoNum={user.public_repos}/>
    <div className='repository-container'>
    <h1>Repositories</h1>
   <div className='repo-style'>{renderRepos()}</div>
   </div>
    </div>;
}

export default UserPage;
