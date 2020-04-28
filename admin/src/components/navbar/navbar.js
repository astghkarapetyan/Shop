import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './navbar.css';

const  Navbar = ({location})=> {
    const setActiveClass = (path)=>{
        return location.pathname === path
    };
    return (
        <div
            className={`navbar-container`}
        >

            <ul className='navbar-list'>
                <li>
                    <Link
                        className={setActiveClass('/add-glasses') ? 'active': null}
                        to='/add-glasses'
                    >Add Glasses</Link>
                </li>
                <li>
                    <Link
                        className={setActiveClass('/products') ? 'active': null}
                        to='/products'
                    >Products</Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Navbar);