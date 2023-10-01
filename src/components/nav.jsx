import React from 'react';
import { Link } from 'react-router-dom';
import "../css/index.css";

const Nav = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li>
                    <Link to ="/Home"><div className="nav_link">Home</div></Link>
                </li>
                <li>
                    <Link to ="/Pre_Nursery"><div className="nav_link">Pre Nuresery Lesson Note</div></Link>
                </li>
                <li>
                    <Link to ="/Nursery"><div className="nav_link">Nursery Lesson Note</div></Link>
                </li>
                <li>
                    <Link to ="/Primary"><div className="nav_link">Primary Lesson Note</div></Link>
                </li>
                <li>
                    <Link to ="/Programming"><div className="nav_link">Programming course</div></Link>
                </li>
                <li>
                    <Link to ="/Scheme"><div className="nav_link">Scheme of Work</div></Link>
                </li>

            </ul>
        </div>
     );
}
 
export default Nav;