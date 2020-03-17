import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import withProductsRequestService from '../../hoc';
import AddProductsContainer from './add-products-container';
import { actionCategories } from "../../../actions/actionCategories";
import { actionAddOneProduct } from "../../../actions/actionAddOneProduct";

const  AddProducts = ({productsRequestService,actionCategories,categories,actionAddOneProduct})=> {
    useEffect(()=>{
        if(!Object.keys(categories).length){
            productsRequestService
                .getAllCategories()
                .then(data=>{
                    actionCategories(data)
                })
        }
    },[]);
    return (
        <AddProductsContainer
            productsRequestService={productsRequestService}
            categories={categories}
            actionAddOneProduct={actionAddOneProduct}
        />
    );
};
const mapStateToProps = ({categories})=>({
    categories
});
const mapDispatchToProps = (dispatch)=>({
    actionCategories:(data)=>dispatch(actionCategories(data)),
    actionAddOneProduct:(data)=>dispatch(actionAddOneProduct(data))
});
export default withProductsRequestService()(
    connect(mapStateToProps,mapDispatchToProps)(AddProducts)
);