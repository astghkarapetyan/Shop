import React,{memo} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './products-page.css';
const ProductsList = ({products})=>{
    console.log('ggggggg')
    return(
        <>
            <Container className='products-container'>
                <Row>
                    {
                        products.map(product=>(
                            <Col key={product.id} sm={12} md={6} lg={4}>
                                <div className='products-item'>
                                    <div className='new-product'>
                                        <span>New</span>
                                    </div>
                                    <div className='product-img'>
                                        <img src={require(`../img/${product.img[0]}`)} />
                                    </div>
                                    <div className='product-name'>
                                        {product.name}
                                    </div>
                                    <div>
                                        <span> {product.price}</span>
                                        <span>$</span>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </>
    )
};

export default memo(ProductsList)





