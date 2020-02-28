import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './header.css';
const HeaderSubMenu = ({title,imgSrc})=>{
    return(
        <div className='header-submenu'>
            <Container>
                <Row>
                    <Col sm={4}>

                        <div className='header-submenu-block'>
                            <div>
                                <img src={imgSrc[0]} />
                            </div>
                            <div className='header-submenu-block-title'>
                                {title[0]}
                            </div>
                        </div>

                        <div className='header-submenu-list'>
                            <p><span>NEW ARRIVALS</span></p>
                            <p><span>BEST SELLERS</span></p>
                            <p><span>VIEW ALL</span></p>
                        </div>
                    </Col>
                    <Col sm={4}>

                        <div className='header-submenu-block' >
                            <div>
                                <img src={imgSrc[1]} />
                            </div>
                            <div className='header-submenu-block-title'>
                                {title[1]}
                            </div>
                        </div>

                        <div className='header-submenu-list'>
                            <p><span>NEW ARRIVALS</span></p>
                            <p><span>BEST SELLERS</span></p>
                            <p><span>VIEW ALL</span></p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default HeaderSubMenu