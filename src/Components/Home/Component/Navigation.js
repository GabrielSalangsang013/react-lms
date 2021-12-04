import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import mainLogo from './img/image.png';
import flag from './img/flag.png';

const Navigation = () => {
    return (
        <header className="header">
            <div className="nav-container-1 nav-float">
                <img src={mainLogo} className="logo" alt="logo"/>
            </div>
            
            <div className="nav-container-2 nav-float">
                <div className="search-container">
                    <form className="search-form" action="/action_page.php">
                    <input type="text" className="search" placeholder="Search.." name="search" />
                    <button type="submit"><i className="fa material-icons">search</i></button>
                    </form>
                </div>
            </div>

            <div className="nav-container-3 nav-float">

                    <div className="container-3-1">
                        <div className="Nav-mini-box">
                            <i className="material-icons">phone</i>
                        </div>
                    </div>

                    <div className="container-3-2">
                        <img src={flag} alt="Flag" className="flag" />
                    </div>
                    
                    <div className="container-3-3">
                        <Link to="/"><div className="mini-3-3-1">Sign Out</div></Link>
                    </div>
            </div>
        </header>
    )
}

export default Navigation