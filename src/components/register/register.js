import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.css';
const Register = ()=>{
    return(
        <div className='register-container'>

            <Form>
                <Form.Label>Sign Up</Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                    {/*<Form.Text className="text-muted">*/}
                        {/*We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button className='register'>
                    REGISTER
                </Button>
            </Form>
        </div>
    )
};

export default Register