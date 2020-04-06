import React,{memo,useState,useMemo } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './products-page.css';
const ProductsList = ({products,location})=>{
    const [hoverImage,setHoverImage] = useState({});
    const showSecondImage = (id,src)=>{
        setHoverImage({[id]:src})
    };
    const closeSecondImage = ()=>{
        setHoverImage({})
    };
    const setToAddress = (productName)=>{

        const path = `${location.pathname}/products/${productName.replace(/ /g, "-").toLowerCase()}`;
        return path.slice(0,path.length-1)
    };
    return(
        <>
            <Container className='products-container'>
                <Row>
                    {
                        products.map(({product_id,images,name,price},index)=>(
                            <Col
                                 onMouseOver={()=>showSecondImage(product_id,JSON.parse(images)[1])}
                                 onMouseOut={closeSecondImage}
                                 key={product_id}
                                 sm={12}
                                 md={6}
                                 lg={4}
                            >
                                <div style={{transitionDelay:`${0.1 + index/10}s`}} className='products-item'>
                                    <div className='new-product'>
                                        <span>New</span>
                                    </div>
                                    <div className='product-img'>
                                        <Link
                                              to={{
                                                  pathname: setToAddress(name),
                                                  state: {
                                                      itemId:product_id,
                                                      itemIndex: index
                                                  }
                                              }}
                                        >
                                            <img src={require(`../img/${hoverImage[product_id] ? JSON.parse(images)[1] : JSON.parse(images)[0]}`)} />
                                        </Link>
                                    </div>
                                    <div className='product-name'>
                                        {name}
                                    </div>
                                    <div>
                                        <span> {price}</span>
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





