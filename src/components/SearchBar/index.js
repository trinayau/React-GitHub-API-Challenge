import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

import './style.css';

function SearchBar ({setSearchQuery}){
    return (
        <>
    <form>
      <TextField className="TextField"
        id="search-bar"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        color="primary"
        label="Enter a GitHub username"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
    </form>
    </>
    )
        };
 
export default SearchBar;
