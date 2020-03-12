import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './navbar.css';

const  Navbar = ({location})=> {
    const [hideNavbar,setHideNavbar] =  useState(false);
    const setActiveClass = (path)=>{
        return location.pathname === path
    };
    return (
        <div
            className={`navbar-container ${hideNavbar ? 'hideNavbar' : null }`}
        >

            <ul>
                <li>
                    <Link
                        className={setActiveClass('/add-glasses') ? 'active': null}
                        to='/add-glasses'
                    >Add Glasses</Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Navbar);