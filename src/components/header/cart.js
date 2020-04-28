import React  from 'react';
import { Link } from  'react-router-dom';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {actionCartCount} from "../../actions/actionCartCount";
import { REMOVEPRODUCTTOCART_COUNT,REMOVEALLPRODUCTTOCART_COUNT,ADDTOCART_COUNT,REMOVETOCART_COUNT} from "../../actions/actionType";

const SmallSearchMenu = ({handelCartToggle,cartInfo,actionCartCount})=>{

    const { cart, totalPrice} = cartInfo;
    const removeProduct = (product)=>{
        actionCartCount(REMOVEPRODUCTTOCART_COUNT,product)
    };
    const removeAllProducts = ()=>{
        actionCartCount(REMOVEALLPRODUCTTOCART_COUNT)
    };
    const addProduct = (product)=>{
        actionCartCount(ADDTOCART_COUNT,product)
    };
    const remove = (product)=>{
        actionCartCount(REMOVETOCART_COUNT,product)
    };
    return(
        <>
            <div  className='cart-container'>
                <div className='cart-black' onClick={handelCartToggle}></div>
                <div className='cart'>
                    {
                        cart.length ? (
                            <>
                                <div className="cart-header">
                                    <div className="cart-header-title">
                                        Review Your Cart
                                    </div>
                                    <div className="cart-text-info">
                                        YOU'VE EARNED FREE U.S. SHIPPING!
                                    </div>
                                </div>
                                <div
                                    className='remove-all-products'
                                    onClick={removeAllProducts}
                                >Remove all products</div>
                                <div className="cart-body">
                                    {
                                        cart.map((product)=>(
                                            <Row key={product.product_id}>
                                                <Col xs={2} className = 'img-block'>
                                                    <span className='show-product-count'>{product.count}</span>
                                                    <img src={require(`../../uploads/${JSON.parse(product.images)[0]}`)} />
                                                </Col>
                                                <Col xs={5} className = 'product-name'>
                                                    <p>{product.name}</p>
                                                    <p>TORTOISE / WALNUT / BASIC POLARIZED GREY</p>
                                                </Col>
                                                <Col xs={2} className = 'product-control-buttons' >
                                                    <span onClick = {()=>remove(product)}>-</span>
                                                    <span onClick = {()=>addProduct(product)}>+</span>
                                                </Col>
                                                <Col xs={2} className = 'product-price' >
                                                     {`$${Number(product.price).toFixed(2)}`}
                                                </Col>
                                                <Col
                                                    xs={1}
                                                    className='remove-from-cart'
                                                    onClick = {()=>removeProduct(product)}
                                                >
                                                    X
                                                </Col>
                                            </Row>
                                        ))
                                    }

                                </div>
                                <div className="cart-footer">
                                    <div className="fixed-footer-container">
                                        <div>
                                            CHECKOUT
                                        </div>
                                        <div>
                                           Total $ {Number(totalPrice).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) :
                            <div className='empty-text'>
                                <span>Your cart is empty</span>
                                <Link to=''>SHOP MEN GLASSES</Link>
                                <Link to=''>SHOP WOMEN GLASSES</Link>
                            </div>
                    }

                </div>

            </div>
        </>
    )
};
const mapStateFromProps = ({cartInfo})=>({
    cartInfo
});
const mapDispatchToProps = (dispatch)=>({
    actionCartCount:(type,product)=>dispatch(actionCartCount(type,product))
});
export default connect(mapStateFromProps,mapDispatchToProps)(SmallSearchMenu)