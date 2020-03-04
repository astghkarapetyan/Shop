import React,{ useState } from 'react';
import { connect } from 'react-redux';
import HeaderFixed from './header-fixed';
import HeaderSubMenu from "./header-sub-menu";

import './header.css'
const Header = ({cartCount})=>{
    const [sumMenuInfo,setSumMenuInfo] = useState({showSubMenu:false});
    const openSubMenu = (showInfo)=>{
        setSumMenuInfo(showInfo)
    };
    const closeSubMenu = ()=>{
        setSumMenuInfo({showSubMenu:false})
    };

    const { title,imgSrc=[],showSubMenu=[]} = sumMenuInfo;
    return(
        <div className='header-top' style={{backgroundColor:'white'}}>
            <div className='header-free-info'>FREE 3-DAY U.S. SHIPPING + FREE RETURNS</div>
            <div className="container">
                <HeaderFixed
                    openSubMenu = { openSubMenu }
                    closeSubMenu = { closeSubMenu }
                    cartCount = {cartCount}
                />
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
const mapStateToProps = ({cartInfo:{cartCount}})=>({
    cartCount
});
export default connect(mapStateToProps)(Header)