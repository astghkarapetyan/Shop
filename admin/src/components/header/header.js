import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './header.css';

const  Header = ()=> {
    return (
        <div className="header-container">
            <Navbar className='header-part1'>
                <Navbar.Brand>
                    <span>=</span>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <span>GLASSES ADMIN</span>
                </Nav>
                <Form inline>
                    <Button className = 'logout' variant="outline-info">Logout</Button>
                </Form>
            </Navbar>
            {/*<div className='header-content'>*/}
                {/*<div className='header-part1'>*/}
                    {/**/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<button>Logout</button>*/}
                {/*</div>*/}
            {/*</div>*/}


        </div>
    );
};

export default Header;