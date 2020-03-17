import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { actionProductsRequested } from "../../../actions/actionProductsRequested";
import { actionProducts } from "../../../actions/actionProducts";
import withProductsRequestService from '../../hoc';
import AllProductsList from './all-products-list';
import './all-products.css';
const AllProducts = ({productsRequestService,data,loading,actionProducts,actionProductsRequested})=>{
    useEffect(()=>{
        if(data.length <= 1 ){
            actionProductsRequested();
            productsRequestService
                .getAllProducts()
                .then(data=>{
                    actionProducts(data)
                })
        }

    },[]);
    console.log(loading,'loading')
    if( loading ) return <div>Loading...</div>;
    return (
        <div className='all-products-container'>
           <AllProductsList
               products={data}
           />
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
});

export default withProductsRequestService()(
    connect(mapStateToProps,mapDispatchToProps)(AllProducts)
);