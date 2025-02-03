import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    const [expandNavBar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}> 
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/portfolio/projects"> Projects </Link>
            <Link to="/portfolio"> Home </Link>
        </div>
    </div>
  );
}

export default Navbar