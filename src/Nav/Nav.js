import React from 'react';
import {Link} from 'react-router-dom';
function Nav(props) {
    return (
        <div id="nav"> 
            <div> <Link to='/'>  Link </Link> </div> 
            <div> <Link to='/timer'>Timer </Link> </div> 
         </div> 
    );
}

export default Nav;