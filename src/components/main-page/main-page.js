import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import './main-page.css';
const MainPage = ()=>{
    return(
        <div className='main-page'>

            <Row className='main-page-row'>
                <Col xs={{span: 12, order: 1}} lg={{span: 5, order: 0}} >

                    <div className='main-page-block1'>
                        <div className='main-page-title'>
                            <h3>
                                <span>Built For </span><br/>
                                <span>Adventure</span>
                            </h3>
                            <p>Classic Styles. Crafted For The Outdoors.</p>
                        </div>
                        <div className='main-page-buttons'>
                            <Alert className='button-style' >
                                $79 CAMP COLLECTION <span> > </span>
                            </Alert>
                            <Alert className='button-style' >
                                ACTV SPORT FRAMES <span> > </span>
                            </Alert>
                        </div>


                    </div>
                </Col>
                <Col className="video-block" xs={12} lg={9} >

                        <iframe
                            title='glasses video'
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/a7yRNqnJdTY?autoplay=1&loop=0&controls=0&mute=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        >
                        </iframe>

                </Col>
            </Row>

        </div>
    )
};

export default MainPage