import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import HeaderFixed from './header-fixed';
import { withProductsStoreService } from '../hoc';
import { actionCategories } from "../../actions/actionCategories";
import './header.css'
const Header = ({cartCount,productsStoreService,actionCategories,categories = {}})=>{
    useEffect(()=>{
        //  async action
        // fetchProducts = (getProductData) => async dispatch =>{
        //     dispatch({type:FETCH_PRODUCT_START});
        //     try {
        //         const data = await getProductData();
        //         dispatch({
        //             type:FETCH_PRODUCT_SUCCESS,
        //             payload:data,
        //         })
        //     }catch (e) {
        //         dispatch({
        //             type:FETCH_PRODUCT_FAILURE,
        //             payload:e,
        //             error:true
        //         })
        //     }
        // }
        productsStoreService
            .getAllCategories()
            .then(data=>{
                actionCategories(data)
            })
    },[]);

    return(
        <div className='header-top' style={{backgroundColor:'white'}}>
            <div className='header-free-info'>FREE 3-DAY U.S. SHIPPING + FREE RETURNS</div>
            <div className="container">
                {
                    !Object.keys(categories).length ? (
                        <div>loading... </div>
                    ): (
                        <HeaderFixed
                            cartCount = {cartCount}
                            categories = { categories }
                        />
                    )
                }

            </div>
        </div>
    )
};
const mapStateToProps = ({cartInfo:{cartCount},categories})=>({
    cartCount,
    categories
});
const mapDispatchToProps = (dispatch)=>({
    actionCategories:(data)=>dispatch(actionCategories(data))
});
export default withProductsStoreService()(
    connect(mapStateToProps,mapDispatchToProps)(Header)
);