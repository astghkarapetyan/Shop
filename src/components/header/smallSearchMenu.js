import React,{ useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import sunglasses from '../img/sunglasses.png';
import rxGlasses from '../img/rx_glasses.jpg';


const SmallSearchMenu = ({handelToggle})=>{
    const [eventKey,setEventKey] = useState('');
    const [showMenu,setShowMenu] = useState(true);
    const closeSmallSearchMenu = ()=>{
        setShowMenu(false)
    };
    const handleEventKey = (value)=>{
        let currentValue = value === eventKey ? '' : value;
        setEventKey(currentValue)
    };
    return(
        <>
            <div  className='small-menu-container'>
                <div className='small-menu-black' onClick={handelToggle}></div>
                <div className='small-menu'>
                    <div className="small-menu-header">

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <svg width="39" height="40" style={{width:'50px',height:'30px'}} viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M30.9844 8.51562C27.8073 5.33854 23.9792 3.75 19.5 3.75C15.0208 3.75 11.1927 5.33854 8.01562 8.51562C4.83854 11.6927 3.25 15.5208 3.25 20C3.25 24.4792 4.83854 28.3073 8.01562 31.4844C11.1927 34.6615 15.0208 36.25 19.5 36.25C23.9792 36.25 27.8073 34.6615 30.9844 31.4844C34.1615 28.3073 35.75 24.4792 35.75 20C35.75 15.5208 34.1615 11.6927 30.9844 8.51562ZM5.75 6.32812C9.55208 2.52604 14.1354 0.625 19.5 0.625C24.8646 0.625 29.4219 2.52604 33.1719 6.32812C36.974 10.0781 38.875 14.6354 38.875 20C38.875 25.3646 36.974 29.9479 33.1719 33.75C29.4219 37.5 24.8646 39.375 19.5 39.375C14.1354 39.375 9.55208 37.5 5.75 33.75C2 29.9479 0.125 25.3646 0.125 20C0.125 14.6354 2 10.0781 5.75 6.32812ZM8.875 9.375C11.7917 6.45833 15.3333 5 19.5 5C23.6667 5 27.2083 6.45833 30.125 9.375C33.0417 12.2917 34.5 15.8333 34.5 20C34.5 24.1667 33.0417 27.7083 30.125 30.625C27.2083 33.5417 23.6667 35 19.5 35C15.3333 35 11.7917 33.5417 8.875 30.625C5.95833 27.7083 4.5 24.1667 4.5 20C4.5 15.8333 5.95833 12.2917 8.875 9.375ZM21.4531 9.29688C20.9323 8.72396 20.2812 8.4375 19.5 8.4375C18.7188 8.4375 18.0417 8.72396 17.4688 9.29688C16.9479 9.81771 16.6875 10.4688 16.6875 11.25C16.6875 12.0312 16.9479 12.7083 17.4688 13.2812C18.0417 13.8021 18.7188 14.0625 19.5 14.0625C20.2812 14.0625 20.9323 13.8021 21.4531 13.2812C22.026 12.7083 22.3125 12.0312 22.3125 11.25C22.3125 10.4688 22.026 9.81771 21.4531 9.29688ZM28.7188 16.0938C29.0312 16.0417 29.2656 15.8594 29.4219 15.5469C29.6302 15.2344 29.6823 14.9219 29.5781 14.6094C29.526 14.2448 29.3438 13.9844 29.0312 13.8281C28.7708 13.6198 28.4583 13.5677 28.0938 13.6719C24.3438 14.5573 21.4792 15 19.5 15C17.5208 15 14.6562 14.5573 10.9062 13.6719C10.5417 13.5677 10.2031 13.6198 9.89062 13.8281C9.63021 13.9844 9.44792 14.2448 9.34375 14.6094C9.29167 14.9219 9.34375 15.2344 9.5 15.5469C9.70833 15.8073 9.96875 15.9896 10.2812 16.0938C13.0417 16.7188 15.1771 17.1354 16.6875 17.3438C16.6875 19.7917 16.5573 21.875 16.2969 23.5938C16.0885 25.2604 15.9062 26.3542 15.75 26.875C15.5938 27.3438 15.2552 28.2031 14.7344 29.4531C14.6302 29.8177 14.6562 30.1823 14.8125 30.5469C14.9688 30.9115 15.2292 31.1719 15.5938 31.3281C15.9583 31.4323 16.2969 31.4062 16.6094 31.25C16.974 31.0938 17.2344 30.8594 17.3906 30.5469C18.3281 28.151 18.901 26.0938 19.1094 24.375H19.8906C20.099 26.0938 20.6719 28.151 21.6094 30.5469C21.7656 30.8594 22 31.0938 22.3125 31.25C22.6771 31.4062 23.0417 31.4323 23.4062 31.3281C23.7708 31.1719 24.0312 30.9115 24.1875 30.5469C24.3438 30.1823 24.3698 29.8177 24.2656 29.4531C23.7448 28.2031 23.4062 27.3438 23.25 26.875C23.0938 26.3542 22.8854 25.2604 22.625 23.5938C22.4167 21.875 22.3125 19.7917 22.3125 17.3438C23.8229 17.1354 25.9583 16.7188 28.7188 16.0938Z"></path>
                                </svg>
                            </InputGroup.Prepend>
                            <FormControl
                                className='search-input'
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder="Search"
                            />
                        </InputGroup>
                    </div>
                    <div className="small-menu-body">
                        <Accordion>
                            <Card style={{background:eventKey === 0 ? '#eee':'white'}}>
                                <Accordion.Toggle onClick={()=>handleEventKey(0)} eventKey="0">
                                    <Row>
                                        <Col xs={4}><img src={sunglasses} /></Col>
                                        <Col xs={6}>SHOP SUNGLASSES </Col>
                                        <Col xs={2}><div className={eventKey === 0 ? null :'rotate'}>^</div></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className='submenu' >My menu</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{background:eventKey === 1 ? '#eee':'white'}}>
                                <Accordion.Toggle onClick={()=>handleEventKey(1)}  eventKey="1">
                                    <Row>
                                        <Col xs={4}><img src={rxGlasses} /></Col>
                                        <Col xs={6}>SHOP RX GLASSES</Col>
                                        <Col xs={2}><div className={eventKey === 1 ? null :'rotate'}>^</div></Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className='submenu'>My menu</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </div>
                    <div className="fixed-footer">
                        <div className="fixed-footer-container">
                            <div className='call'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M4.723 1a.631.631 0 0 0-.44.181L1.725 3.713C1.237 4.196 1 4.872 1 5.6c0 2.35 1.835 5.62 4.947 8.625C9.059 17.229 12.447 19 14.883 19c.754 0 1.455-.23 1.955-.7l2.622-2.469a.585.585 0 0 0 .007-.856l-4.144-4a.638.638 0 0 0-.861-.019l-2.13 1.888c-1.042-.6-1.995-1.28-2.81-2.07C8.696 9.978 8 9.065 7.377 8.07l1.955-2.063a.586.586 0 0 0-.019-.831l-4.144-4A.635.635 0 0 0 4.723 1zm.013 1.456L8.013 5.62 6.135 7.594a.583.583 0 0 0-.078.7c.723 1.226 1.568 2.348 2.584 3.331a15.637 15.637 0 0 0 3.45 2.5.64.64 0 0 0 .726-.081l2.046-1.813 3.277 3.163-2.17 2.043c-.233.22-.589.363-1.087.363-1.75 0-5.1-1.573-8.055-4.425S2.243 7.288 2.243 5.6c0-.481.15-.825.376-1.05l2.117-2.094z" fill-rule="evenodd"></path>
                                </svg>
                                <p>CALL</p>
                            </div>
                            <div className='email'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M18.339 3H1.665C.75 3 0 3.728 0 4.626v9.752C0 15.272.748 16 1.665 16h16.67c.917 0 1.665-.728 1.665-1.622V4.626C20.004 3.728 19.256 3 18.339 3zm-.45 1.085L9.998 10.57 2.115 4.085h15.774zM1.11 14.247V4.675l5.86 4.817-5.86 4.755zm.913.668l5.809-4.713 1.807 1.487a.57.57 0 0 0 .716 0l1.811-1.487 5.817 4.713H2.023zm16.871-.67l-5.863-4.753 5.863-4.82v9.572z" fill-rule="evenodd"></path>
                                </svg>
                                <p>EMAIL</p>
                            </div>
                            <div className='email'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M4.723 1a.631.631 0 0 0-.44.181L1.725 3.713C1.237 4.196 1 4.872 1 5.6c0 2.35 1.835 5.62 4.947 8.625C9.059 17.229 12.447 19 14.883 19c.754 0 1.455-.23 1.955-.7l2.622-2.469a.585.585 0 0 0 .007-.856l-4.144-4a.638.638 0 0 0-.861-.019l-2.13 1.888c-1.042-.6-1.995-1.28-2.81-2.07C8.696 9.978 8 9.065 7.377 8.07l1.955-2.063a.586.586 0 0 0-.019-.831l-4.144-4A.635.635 0 0 0 4.723 1zm.013 1.456L8.013 5.62 6.135 7.594a.583.583 0 0 0-.078.7c.723 1.226 1.568 2.348 2.584 3.331a15.637 15.637 0 0 0 3.45 2.5.64.64 0 0 0 .726-.081l2.046-1.813 3.277 3.163-2.17 2.043c-.233.22-.589.363-1.087.363-1.75 0-5.1-1.573-8.055-4.425S2.243 7.288 2.243 5.6c0-.481.15-.825.376-1.05l2.117-2.094z" fill-rule="evenodd"></path>
                                </svg>
                                <p>CHAT</p>
                            </div>
                            <div className='email'>
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M18.339 3H1.665C.75 3 0 3.728 0 4.626v9.752C0 15.272.748 16 1.665 16h16.67c.917 0 1.665-.728 1.665-1.622V4.626C20.004 3.728 19.256 3 18.339 3zm-.45 1.085L9.998 10.57 2.115 4.085h15.774zM1.11 14.247V4.675l5.86 4.817-5.86 4.755zm.913.668l5.809-4.713 1.807 1.487a.57.57 0 0 0 .716 0l1.811-1.487 5.817 4.713H2.023zm16.871-.67l-5.863-4.753 5.863-4.82v9.572z" fill-rule="evenodd"></path>
                                </svg>
                                <p>FAQ</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default SmallSearchMenu