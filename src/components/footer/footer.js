import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './footer.css';
const Footer = ()=>{
    return(
        <>
            <Container className='footer-container'>
                <Row>
                    <Col lg={3} sm={6} xs={12}>
                        <div className='f-part1'>
                            <p>MY ACCOUNT</p>
                            <p>TRACK MY ORDER</p>
                            <p>RETURNS</p>
                            <p> WARRANTY</p>
                            <p>WARRANTY</p>
                            <p> FAQ / HELP</p>
                            <p> WHOLESALE</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={6} xs={12}>
                        <div className="f-part2">
                            <h3>Stay In Touch, Save 10%</h3>
                            <p>SIGN UP FOR OUR NEWSLETTER TO RECEIVE 10% OFF YOUR FIRST PURCHASE.</p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="email@example.com"
                                    aria-label="email@example.com"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">JOIN US</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <div className="f-part3">
                            <div className="phone">
                                <span>

                                </span>
                                <span>
                                    503-389-1613 <br/>
                                    9-3 PST, MON-FRI
                                </span>
                            </div>
                            <div className="email">
                                <span>

                                </span>
                                <span>
                                    EMAIL US
                                </span>
                            </div>
                            <div className="location">
                                <span>

                                </span>
                                <span>
                                    2136 SE 7TH AVE <br/>
                                   PORTLAND, OR 97214

                                </span>
                            </div>
                            <div className='social'>
                                <span>

                                </span>
                                <span>

                                </span>
                                <span>

                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer