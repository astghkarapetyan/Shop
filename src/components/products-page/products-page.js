import React,{ useEffect,useRef,useState} from 'react';
import ProductsList from './productList'
import './products-page.css'
const ProductsPage = ()=>{
    const [spansFidex,setSpansFixed] = useState(false);
    const spansParentRef = useRef(null);

    const listenToScroll = ()=>{
        if(window.pageYOffset + 105 > spansParentRef.current.offsetTop){
            setSpansFixed(true)
        }else{
            setSpansFixed(false)
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    },[]);
    return(
        <div>
            <div className="products-header-block">
                <p>Mens pages</p>
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

            <ProductsList/>

        </div>
    )
};

export default ProductsPage