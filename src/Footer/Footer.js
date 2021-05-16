import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props) {
    return (
        <div id="footer">
            <div> <Link to='/contact'>Contact</Link> </div>
            <div> Section 2 Footer </div> 
        </div>
    );
}

export default Footer;