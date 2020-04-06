import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HeaderFixed from './header-fixed';
import HeaderSubMenu from "./header-sub-menu";
import { withProductsStoreService } from '../hoc';
import { actionCategories } from "../../actions/actionCategories";
import './header.css'
const Header = ({cartCount,productsStoreService,actionCategories,categories = {}})=>{
    const [subMenuInfo,setSubMenuInfo] = useState({showSubMenu:false});
    const openSubMenu = (showInfo = {})=>{
        setSubMenuInfo(showInfo)
    };
    const closeSubMenu = ()=>{
        setSubMenuInfo({showSubMenu:false})
    };
    const { title,imgSrc=[],showSubMenu=[]} = subMenuInfo;
    useEffect(()=>{
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
                             <div>loadding... </div>
                    ): (
                        <HeaderFixed
                            openSubMenu = { openSubMenu }
                            closeSubMenu = { closeSubMenu }
                            cartCount = {cartCount}
                            categories = { categories }
                        />
                    )
                }

            </div>
            {
                showSubMenu && (
                    <HeaderSubMenu
                        title={title}
                        imgSrc ={imgSrc}
                    />
                )
            }
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