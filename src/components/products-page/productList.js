import React,{memo} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './products-page.css';
const ProductsList = ({products,location})=>{
    const setToAddress = (productName)=>{
        const path = `${location.pathname}/products/${productName.replace(/ /g, "-").toLowerCase()}`;
        return path.slice(0,path.length-1)
    };
    return(
        <>
            <Container className='products-container'>
                <Row>
                    {
                        products.map((product,index)=>(
                            <Col key={product.id} sm={12} md={6} lg={4}>
                                <div className='products-item'>
                                    <div className='new-product'>
                                        <span>New</span>
                                    </div>
                                    <div className='product-img'>
                                        <Link
                                              to={{
                                                  pathname: setToAddress(product.name),
                                                  state: {
                                                      itemId: product.id,
                                                      itemIndex: index
                                                  }
                                              }}
                                        >
                                            <img src={require(`../img/${product.img[0]}`)} />
                                        </Link>
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

export default memo(withRouter(ProductsList))





