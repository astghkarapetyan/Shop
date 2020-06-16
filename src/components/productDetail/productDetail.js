import React, { useEffect,useState } from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from '../loading';
import { withProductsStoreService } from '../hoc';
import { actionCartCount } from "../../actions/actionCartCount";
import { ADDTOCART_COUNT } from "../../actions/actionType";
import './productDetail.css';
const ProductDetail = ({products,location,actionCartCount,productsStoreService})=>{

    const { itemIndex = '',itemId = '' } = location.state;
    const [product , setProduct] = useState(products[itemIndex]);

    useEffect(()=>{
        if(!product){
            productsStoreService
                .getProduct(itemId)
                .then( product =>{
                    setProduct(product[0])
                });

        }
    },[product, productsStoreService,itemId]);
    if(!product) return <Loading/>;
   const addToCart = ()=>{
       actionCartCount(ADDTOCART_COUNT,product)
   };
    return(
        <div>
            <Container className='detail-container'>
                <Row>
                    <Col xs={12} sm={6} md={7}>
                        <div className="detail-part1">
                            <img alt='' src={require(`../../uploads/${JSON.parse(product.images)[0]}`)} />
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
                                    <Button onClick={addToCart}>ADD TO CART</Button>
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
const mapDispatchToProps = (dispatch)=>({
    actionCartCount:(type,product)=>dispatch(actionCartCount(type,product))
});
export default withProductsStoreService()(
    withRouter(connect(mapStateFromProps,mapDispatchToProps)(ProductDetail))
)