import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import SmallSearchMenu from "./smallSearchMenu";
import Cart from './cart';
import MenImag1 from '../img/men.jpg';
import MenImag2 from '../img/men2.webp';
import WomenImag1 from '../img/womens.jpg';
import WomenImag2 from '../img/womens2.jpg';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderFixed = ({openSubMenu,closeSubMenu,location,cartCount,categories})=>{
    const [showMenu,setShowMenu] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const handelToggle = ()=>{
        setShowMenu(!showMenu)
    };
    const handelCartToggle = ()=>{
        setShowCart(!showCart)
    };
    const submenuInfo = {
        men: {
            showSubMenu: true,
            title: ['MENS / SUNGLASSES', 'MENS / RX EYEGLASSES'],
            imgSrc: [MenImag1, MenImag2]
        },
        women:{
            showSubMenu:true,
            title:['WOMENS / SUNGLASSES','WOMENS / RX EYEGLASSES'],
            imgSrc:[WomenImag1,WomenImag2]
        }
    };
    const activePage = (pName)=>{
        return location.pathname === pName
    };
    const { categoryName } = categories;
    return(
        <>
            <Navbar variant='white' expand="lg">
            <Navbar.Brand  className='header-logo'>
                <Link to={'/'}>
                    <svg width="39" height="40" style={{width:'50px',height:'30px'}} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M30.9844 8.51562C27.8073 5.33854 23.9792 3.75 19.5 3.75C15.0208 3.75 11.1927 5.33854 8.01562 8.51562C4.83854 11.6927 3.25 15.5208 3.25 20C3.25 24.4792 4.83854 28.3073 8.01562 31.4844C11.1927 34.6615 15.0208 36.25 19.5 36.25C23.9792 36.25 27.8073 34.6615 30.9844 31.4844C34.1615 28.3073 35.75 24.4792 35.75 20C35.75 15.5208 34.1615 11.6927 30.9844 8.51562ZM5.75 6.32812C9.55208 2.52604 14.1354 0.625 19.5 0.625C24.8646 0.625 29.4219 2.52604 33.1719 6.32812C36.974 10.0781 38.875 14.6354 38.875 20C38.875 25.3646 36.974 29.9479 33.1719 33.75C29.4219 37.5 24.8646 39.375 19.5 39.375C14.1354 39.375 9.55208 37.5 5.75 33.75C2 29.9479 0.125 25.3646 0.125 20C0.125 14.6354 2 10.0781 5.75 6.32812ZM8.875 9.375C11.7917 6.45833 15.3333 5 19.5 5C23.6667 5 27.2083 6.45833 30.125 9.375C33.0417 12.2917 34.5 15.8333 34.5 20C34.5 24.1667 33.0417 27.7083 30.125 30.625C27.2083 33.5417 23.6667 35 19.5 35C15.3333 35 11.7917 33.5417 8.875 30.625C5.95833 27.7083 4.5 24.1667 4.5 20C4.5 15.8333 5.95833 12.2917 8.875 9.375ZM21.4531 9.29688C20.9323 8.72396 20.2812 8.4375 19.5 8.4375C18.7188 8.4375 18.0417 8.72396 17.4688 9.29688C16.9479 9.81771 16.6875 10.4688 16.6875 11.25C16.6875 12.0312 16.9479 12.7083 17.4688 13.2812C18.0417 13.8021 18.7188 14.0625 19.5 14.0625C20.2812 14.0625 20.9323 13.8021 21.4531 13.2812C22.026 12.7083 22.3125 12.0312 22.3125 11.25C22.3125 10.4688 22.026 9.81771 21.4531 9.29688ZM28.7188 16.0938C29.0312 16.0417 29.2656 15.8594 29.4219 15.5469C29.6302 15.2344 29.6823 14.9219 29.5781 14.6094C29.526 14.2448 29.3438 13.9844 29.0312 13.8281C28.7708 13.6198 28.4583 13.5677 28.0938 13.6719C24.3438 14.5573 21.4792 15 19.5 15C17.5208 15 14.6562 14.5573 10.9062 13.6719C10.5417 13.5677 10.2031 13.6198 9.89062 13.8281C9.63021 13.9844 9.44792 14.2448 9.34375 14.6094C9.29167 14.9219 9.34375 15.2344 9.5 15.5469C9.70833 15.8073 9.96875 15.9896 10.2812 16.0938C13.0417 16.7188 15.1771 17.1354 16.6875 17.3438C16.6875 19.7917 16.5573 21.875 16.2969 23.5938C16.0885 25.2604 15.9062 26.3542 15.75 26.875C15.5938 27.3438 15.2552 28.2031 14.7344 29.4531C14.6302 29.8177 14.6562 30.1823 14.8125 30.5469C14.9688 30.9115 15.2292 31.1719 15.5938 31.3281C15.9583 31.4323 16.2969 31.4062 16.6094 31.25C16.974 31.0938 17.2344 30.8594 17.3906 30.5469C18.3281 28.151 18.901 26.0938 19.1094 24.375H19.8906C20.099 26.0938 20.6719 28.151 21.6094 30.5469C21.7656 30.8594 22 31.0938 22.3125 31.25C22.6771 31.4062 23.0417 31.4323 23.4062 31.3281C23.7708 31.1719 24.0312 30.9115 24.1875 30.5469C24.3438 30.1823 24.3698 29.8177 24.2656 29.4531C23.7448 28.2031 23.4062 27.3438 23.25 26.875C23.0938 26.3542 22.8854 25.2604 22.625 23.5938C22.4167 21.875 22.3125 19.7917 22.3125 17.3438C23.8229 17.1354 25.9583 16.7188 28.7188 16.0938Z"></path>
                    </svg>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle onClick={handelToggle}  aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto l-menu">
                    {
                        categoryName.map( ({id,category_name }) =>(
                            <Nav.Item
                                // onMouseOver={()=>openSubMenu(submenuInfo[category_name])}
                                // onMouseOut={closeSubMenu}
                                className='header-after'
                                key={id}
                            >
                                <Link className={activePage(`/collections/${category_name}-sunglasses`) ? 'active' : null}
                                      to={{
                                          pathname: `/collections/${category_name}-sunglasses`,
                                          state: {
                                              categoryNameInState: category_name,
                                              category_id:id
                                          }
                                      }}
                                >{category_name.toUpperCase()}</Link>
                            </Nav.Item>
                        ))
                    }
                </Nav>

            </Navbar.Collapse>
            <Nav className='r-menu'>
                <Nav.Item>
                    <svg width="39" height="40" style={{width:'40px',height:'26px'}} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M30.9844 8.51562C27.8073 5.33854 23.9792 3.75 19.5 3.75C15.0208 3.75 11.1927 5.33854 8.01562 8.51562C4.83854 11.6927 3.25 15.5208 3.25 20C3.25 24.4792 4.83854 28.3073 8.01562 31.4844C11.1927 34.6615 15.0208 36.25 19.5 36.25C23.9792 36.25 27.8073 34.6615 30.9844 31.4844C34.1615 28.3073 35.75 24.4792 35.75 20C35.75 15.5208 34.1615 11.6927 30.9844 8.51562ZM5.75 6.32812C9.55208 2.52604 14.1354 0.625 19.5 0.625C24.8646 0.625 29.4219 2.52604 33.1719 6.32812C36.974 10.0781 38.875 14.6354 38.875 20C38.875 25.3646 36.974 29.9479 33.1719 33.75C29.4219 37.5 24.8646 39.375 19.5 39.375C14.1354 39.375 9.55208 37.5 5.75 33.75C2 29.9479 0.125 25.3646 0.125 20C0.125 14.6354 2 10.0781 5.75 6.32812ZM8.875 9.375C11.7917 6.45833 15.3333 5 19.5 5C23.6667 5 27.2083 6.45833 30.125 9.375C33.0417 12.2917 34.5 15.8333 34.5 20C34.5 24.1667 33.0417 27.7083 30.125 30.625C27.2083 33.5417 23.6667 35 19.5 35C15.3333 35 11.7917 33.5417 8.875 30.625C5.95833 27.7083 4.5 24.1667 4.5 20C4.5 15.8333 5.95833 12.2917 8.875 9.375ZM21.4531 9.29688C20.9323 8.72396 20.2812 8.4375 19.5 8.4375C18.7188 8.4375 18.0417 8.72396 17.4688 9.29688C16.9479 9.81771 16.6875 10.4688 16.6875 11.25C16.6875 12.0312 16.9479 12.7083 17.4688 13.2812C18.0417 13.8021 18.7188 14.0625 19.5 14.0625C20.2812 14.0625 20.9323 13.8021 21.4531 13.2812C22.026 12.7083 22.3125 12.0312 22.3125 11.25C22.3125 10.4688 22.026 9.81771 21.4531 9.29688ZM28.7188 16.0938C29.0312 16.0417 29.2656 15.8594 29.4219 15.5469C29.6302 15.2344 29.6823 14.9219 29.5781 14.6094C29.526 14.2448 29.3438 13.9844 29.0312 13.8281C28.7708 13.6198 28.4583 13.5677 28.0938 13.6719C24.3438 14.5573 21.4792 15 19.5 15C17.5208 15 14.6562 14.5573 10.9062 13.6719C10.5417 13.5677 10.2031 13.6198 9.89062 13.8281C9.63021 13.9844 9.44792 14.2448 9.34375 14.6094C9.29167 14.9219 9.34375 15.2344 9.5 15.5469C9.70833 15.8073 9.96875 15.9896 10.2812 16.0938C13.0417 16.7188 15.1771 17.1354 16.6875 17.3438C16.6875 19.7917 16.5573 21.875 16.2969 23.5938C16.0885 25.2604 15.9062 26.3542 15.75 26.875C15.5938 27.3438 15.2552 28.2031 14.7344 29.4531C14.6302 29.8177 14.6562 30.1823 14.8125 30.5469C14.9688 30.9115 15.2292 31.1719 15.5938 31.3281C15.9583 31.4323 16.2969 31.4062 16.6094 31.25C16.974 31.0938 17.2344 30.8594 17.3906 30.5469C18.3281 28.151 18.901 26.0938 19.1094 24.375H19.8906C20.099 26.0938 20.6719 28.151 21.6094 30.5469C21.7656 30.8594 22 31.0938 22.3125 31.25C22.6771 31.4062 23.0417 31.4323 23.4062 31.3281C23.7708 31.1719 24.0312 30.9115 24.1875 30.5469C24.3438 30.1823 24.3698 29.8177 24.2656 29.4531C23.7448 28.2031 23.4062 27.3438 23.25 26.875C23.0938 26.3542 22.8854 25.2604 22.625 23.5938C22.4167 21.875 22.3125 19.7917 22.3125 17.3438C23.8229 17.1354 25.9583 16.7188 28.7188 16.0938Z"></path>
                    </svg>
                </Nav.Item>
                <Nav.Item className='header-after header-price'>
                    USD
                </Nav.Item>
                <Nav.Item onClick={handelCartToggle}>
                    <span className='cartCount'>{cartCount}</span>
                    <svg style={{width:'40px',height:'26px'}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <path fill="currentColor" d="M6.74947953,4.75 L6.74947953,6 L13.2494795,6 L13.2494795,4.75 C13.2494795,2.958 11.7914795,1.5 9.99947953,1.5 C8.20747953,1.5 6.74947953,2.958 6.74947953,4.75 Z M2.81447953,18 L17.1844795,18 L16.3104795,7.5 L14.7494795,7.5 L13.2494795,7.5 L6.74947953,7.5 L5.24947953,7.5 L3.68947953,7.5 L2.81447953,18 Z M1.99947953,19.5 C1.79047953,19.5 1.58847953,19.412 1.44747953,19.258 C1.30647953,19.104 1.23547953,18.897 1.25247953,18.687 L2.25247953,6.688 C2.28547953,6.295 2.60547953,6 2.99947953,6 L5.24947953,6 L5.24947953,4.75 C5.24947953,2.131 7.38047953,0 9.99947953,0 C12.6184795,0 14.7494795,2.131 14.7494795,4.75 L14.7494795,6 L16.9994795,6 C17.3864795,6 17.7144795,6.302 17.7464795,6.687 L18.7464795,18.687 C18.7634795,18.896 18.6914795,19.104 18.5524795,19.258 C18.4094795,19.412 18.2084795,19.5 17.9994795,19.5 L1.99947953,19.5 Z"></path>
                    </svg>
                </Nav.Item>
                <Nav.Item onClick={handelToggle}>
                    <svg style={{width:'40px',height:'26px'}} viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor" fill-rule="evenodd">
                            <path d="M10.212 3H0v2h9.33a8.21 8.21 0 0 1 .882-2zM9.026 8H0v2h9.434a8.307 8.307 0 0 1-.408-2zm2.197 5H0v2h14.056a8.323 8.323 0 0 1-2.833-2z"></path>
                            <path d="M22.595 11.417A6.607 6.607 0 0 0 24 7.333a6.62 6.62 0 0 0-1.953-4.713A6.617 6.617 0 0 0 17.333.667c-1.78 0-3.455.693-4.713 1.953a6.62 6.62 0 0 0-1.953 4.713 6.62 6.62 0 0 0 1.953 4.714A6.617 6.617 0 0 0 17.333 14c1.5 0 2.92-.497 4.084-1.405l3.494 3.493 1.178-1.177-3.494-3.494zm-5.262.916a4.97 4.97 0 0 1-3.535-1.464 4.965 4.965 0 0 1-1.465-3.536c0-1.335.52-2.59 1.465-3.535a4.963 4.963 0 0 1 3.535-1.465c1.336 0 2.591.52 3.535 1.465a4.965 4.965 0 0 1 1.465 3.535c0 1.336-.52 2.592-1.465 3.536a4.966 4.966 0 0 1-3.535 1.464z"></path>
                        </g>
                    </svg>
                </Nav.Item>
            </Nav>

        </Navbar>
            {
                 showMenu ? <SmallSearchMenu handelToggle={handelToggle} /> :''
            }
            {
                showCart ? <Cart  handelCartToggle={handelCartToggle} /> :''
            }
        </>
    )
};

export default React.memo(withRouter(HeaderFixed))