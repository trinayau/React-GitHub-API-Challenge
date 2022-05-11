import React, { useState, useEffect } from "react";
import axios from 'axios';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import './style.css';

function SearchBar (){
    const [username, setUsername] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details, setDetails] = useState({});
    const [loadingDetails, setLoadingDetails] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setRepos([]);
        setDetails({});

    }, [username]);

    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
    }

    function searchRepos() {
        setIsPending(true);
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
        }).then(res => {
            setIsPending(false);
            //setRepos will show the data fetched
            setRepos(res.data);
            console.log(res.data)
            navigate(`/user/${username}`)

        });
    }

  
    return (
        <>
    <form onSubmit={handleSubmit}>
      <TextField className="TextField"
        id="search-bar"
        onChange={e => {setUsername(e.target.value)}}
        color="primary"
        label="Enter a GitHub username"
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={username}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
    </form>
    </>
    )
        };
 
export default SearchBar;
