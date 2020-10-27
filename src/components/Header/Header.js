import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import header from '../../images/header.png'
import './Header.css';
import { UserContext } from '../../App';


const Header = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <img className="logo" src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <nav className="nav">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/donation">Donation</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                            
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/addevents">Add Events</Link>
                                </li>
                                <li>
                                    {
                                        loggedInUser.email? <Link className="btn-user" to="/events">{loggedInUser.name}</Link>
                                        
                                        :<Link className="btn-register" to="/login">Register</Link>
                                        
                                    }
                                </li>
                                <li>
                                    <Link className="btn-admin" to="/admin">Admin</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="title-container">
                    <h1>I Grow By Helping People In Need</h1>
                    <input type="text" placeholder="search"/>
                    <button>Search</button>
                </div>
            </div>  
        </div>
    );
};

export default Header;