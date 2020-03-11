import React,{ useEffect,useRef,useState} from 'react';
import { connect } from 'react-redux';
import ProductsList from './productList';
import Loading from '../loading';
import { actionProducts } from "../../actions/actionProducts";
import { actionProductsRequested } from "../../actions/actionProductsRequested";
import { withProductsStoreService } from '../hoc';
import './products-page.css';
const ProductsPage = ({
          loading,
          products,
          categoryName,
          productsStoreService,
          location,
          actionProducts,
          actionProductsRequested
    })=>{
    const [spansFidex,setSpansFixed] = useState(false);
    const { categoryNameInState  } = location.state;
    const spansParentRef = useRef(null);
    const listenToScroll = ()=>{
        if( window.pageYOffset + 105 > spansParentRef.current.offsetTop){
            setSpansFixed(true)
        }else{
            setSpansFixed(false)
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    },[]);

    useEffect(()=>{
        if(categoryNameInState !== categoryName){
            actionProductsRequested();
            productsStoreService
                .getProducts(categoryNameInState)
                .then( products =>{
                    actionProducts(products,categoryNameInState);
                });
        }

    },[categoryNameInState]);

    return(
        <div>
            <div className="products-header-block">
                <p>{categoryNameInState.toUpperCase()} GLASSES </p>
            </div>
            <div ref={spansParentRef}>
                <div
                     style={spansFidex ?{top: '102px',position: 'fixed'}:null}
                     className='products-options'
                >
                    <span> SHAPE </span>
                    <span>MATERIAL</span>
                    <span>COLOR</span>
                </div>
            </div>
            {loading ?(
                <Loading/>
            ) : <ProductsList products={products} />}


        </div>
    )
};
const mapStateToProps = ({products:{loading,data = [],categoryName}})=>({
    loading,
    products:data,
    categoryName
});

const mapDispatchToProps = (dispatch)=>({
    actionProducts:(products,categoryName)=>dispatch(actionProducts(products,categoryName)),
    actionProductsRequested:(products,categoryName)=>dispatch(actionProductsRequested(products,categoryName))
});

export default withProductsStoreService()(
    connect(mapStateToProps,mapDispatchToProps)(ProductsPage)
)