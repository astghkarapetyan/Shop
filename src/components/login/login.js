import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
const Login = ()=>{
    return(
        <div className='login-container'>

            <Form>
                <Form.Label>Sign In</Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="your@example.com" />
                    {/*<Form.Text className="text-muted">*/}
                        {/*We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <div className='password-block'>
                        <Form.Label>Password</Form.Label>
                        <Form.Label>Forgot your password?</Form.Label>
                    </div>

                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button className='login'>
                    LOGIN
                </Button>
            </Form>
            <div className="login-info">
                <h2>New Customer?</h2>
                <p>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                <Button className='registration'>
                    <Link to={'/account/register'}> REGISTER</Link>
                </Button>
            </div>
        </div>
    )
};

export default Login