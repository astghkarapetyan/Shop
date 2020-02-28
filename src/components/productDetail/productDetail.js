import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './productDetail.css';
const ProductDetail = ({products,location})=>{

    if(!products.length) return <div className='detail-container no-product'>There is not product detail information</div>;
    const { itemIndex } = location.state;
   console.log(itemIndex,'itemIndex')
   const product = products[itemIndex];
    return(
        <div>
            <Container className='detail-container'>
                <Row>
                    <Col xs={12} sm={6} md={7}>
                        <div className="detail-part1">
                            <img src={require(`../img/${product.img[0]}`)}  />
                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={5} className="detail-part2">
                            <div>
                                <div className="d-product-name">
                                    {product.name}
                                </div>
                                <div className="d-product-text">
                                    BLACK / EBONY / BASIC POLARIZED GREY
                                </div>
                                <div className="d-product-price">
                                    {product.price} $
                                </div>
                                <div className="add-cart">
                                    <Button>ADD TO CART</Button>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
const mapStateFromProps = ({products:{data}})=>({
    products:data
});
export default withRouter(connect(mapStateFromProps)(ProductDetail))