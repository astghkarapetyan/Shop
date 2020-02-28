import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './products-page.css';
const ProductsList = ()=>{
    return(
        <>
            <Container className='products-container'>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='products-item'>
                            <div className='new-product'>
                                <span>New</span>
                            </div>
                            <div className='product-img'>
                                <img src={require('../img/men.jpg')} />
                            </div>
                            <div className='product-name'>
                                CANBY WOOD
                            </div>
                            <div>
                                <span> • $149.00</span>
                                <span>$</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='products-item'>
                        <div className='new-product'>
                            <span>New</span>
                        </div>
                        <div className='product-img'>
                            <img src={require('../img/men.jpg')} />
                        </div>
                        <div className='product-name'>
                            CANBY WOOD
                        </div>
                        <div>
                            <span> • $149.00</span>
                            <span>$</span>
                        </div>
                    </div>
                </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='products-item'>
                            <div className='new-product'>
                                <span>New</span>
                            </div>
                            <div className='product-img'>
                                <img src={require('../img/men.jpg')} />
                            </div>
                            <div className='product-name'>
                                CANBY WOOD
                            </div>
                            <div>
                                <span> • $149.00</span>
                                <span>$</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='products-item'>
                            <div className='new-product'>
                                <span>New</span>
                            </div>
                            <div className='product-img'>
                                <img src={require('../img/men.jpg')} />
                            </div>
                            <div className='product-name'>
                                CANBY WOOD
                            </div>
                            <div>
                                <span> • $149.00</span>
                                <span>$</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='products-item'>
                            <div className='new-product'>
                                <span>New</span>
                            </div>
                            <div className='product-img'>
                                <img src={require('../img/men.jpg')} />
                            </div>
                            <div className='product-name'>
                                CANBY WOOD
                            </div>
                            <div>
                                <span> • $149.00</span>
                                <span>$</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='products-item'>
                            <div className='new-product'>
                                <span>New</span>
                            </div>
                            <div className='product-img'>
                                <img src={require('../img/men.jpg')} />
                            </div>
                            <div className='product-name'>
                                CANBY WOOD
                            </div>
                            <div>
                                <span> • $149.00</span>
                                <span>$</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='products-item'>
                        <div className='new-product'>
                            <span>New</span>
                        </div>
                        <div className='product-img'>
                            <img src={require('../img/men.jpg')} />
                        </div>
                        <div className='product-name'>
                            CANBY WOOD
                        </div>
                        <div>
                            <span> • $149.00</span>
                            <span>$</span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='products-item'>
                    <div className='new-product'>
                        <span>New</span>
                    </div>
                    <div className='product-img'>
                        <img src={require('../img/men.jpg')} />
                    </div>
                    <div className='product-name'>
                        CANBY WOOD
                    </div>
                    <div>
                        <span> • $149.00</span>
                        <span>$</span>
                    </div>
                </div>
            </Col>



                </Row>
            </Container>
        </>
    )
};
export default ProductsList





