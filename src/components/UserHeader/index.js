import { Public } from '@material-ui/icons';
import React from 'react';


import './styles.css';

const UserHeader = ({name, img, repoNum}) => {



    return (<>
        <div id='userHeader'>
            <div>
            <img src={img} alt='User avatar' />
            </div>
            <div>
            <h1>{name.toUpperCase()}</h1>
            <p>Public repositories: {repoNum}</p>
            </div>
        </div>

        
        </>
    );
}

export default UserHeader;
