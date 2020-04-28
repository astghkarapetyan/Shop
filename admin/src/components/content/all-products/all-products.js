import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { actionProductsRequested } from "../../../actions/actionProductsRequested";
import { actionDeleteProduct } from "../../../actions/actionDeleteProduct";
import { actionProducts } from "../../../actions/actionProducts";
import withProductsRequestService from '../../hoc';
import AllProductsList from './all-products-list';
import './all-products.css';
const AllProducts = ({productsRequestService,data,loading,actionProducts,actionDeleteProduct,actionProductsRequested,history,location})=>{
    useEffect(()=>{
        if(!data.length){
            actionProductsRequested();
            productsRequestService
                .getAllProducts()
                .then(data=>{
                    actionProducts(data)
                })
        }

    },[]);
    const deleteProduct = (product_id) => {
        actionDeleteProduct(product_id);
        productsRequestService
            .deleteProduct(product_id)
    };
    if( loading ) return <div>Loading...</div>;

    return (
        <div className='all-products-container'>
            {
                data.length ? (
                    <AllProductsList
                        products={data}
                        deleteProduct = {deleteProduct}
                    />
                ):(
                    <div className='no-products'>There are not products</div>
                )
            }
        </div>
    )
};
const mapStateToProps = ({products:{data,loading}})=>({
    data,
    loading
});
const mapDispatchToProps = (dispatch)=>({
    actionProducts:(products)=>dispatch(actionProducts(products)),
    actionProductsRequested:()=>dispatch(actionProductsRequested()),
    actionDeleteProduct:(id)=>dispatch(actionDeleteProduct(id)),
});

export default withProductsRequestService()(
    connect(mapStateToProps,mapDispatchToProps)(AllProducts)
);