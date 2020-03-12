import React,{ useReducer } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './add-glasses.css';

const  AddGlasses = ()=> {
    const initialObject = {
        categoryId:'',
        name:'',
        price:'',
        sendUrls:[],
        showUrls:[]
    };
    const initialErrorObject = {
        errorcategoryId:false,
        errorname:false,
        errorprice:false
    };
    const [addInfo,setAddInfo] = useReducer((state,newState)=>({...state,...newState}),initialObject);
    const [ errors,setErrors ] = useReducer((state,newState)=>({...state,...newState}),initialErrorObject);
    const getChooseImageUrls = (files)=>{
        const { sendUrls,showUrls } = addInfo;
        const newSendUrls = [...sendUrls];
        const newShowUrls = [...showUrls];
        Object.keys(files).map(index=>{
            newSendUrls.push(files[index]);
            newShowUrls.push(URL.createObjectURL(files[index]));
        });
        setAddInfo({sendUrls:newSendUrls,showUrls:newShowUrls})
    };

    const getAddInfo = (event)=>{
        const name = event.target.name;
        if(name === 'file'){
            const files = event.target.files;
            getChooseImageUrls(files)
        }else{
            const value = event.target.value;
            setAddInfo({[name]:value});
            if(value){
                setErrors({[`error${name}`]:false})
            }
        }
    };
    const sendAddInfo = ()=>{
        let allowToAdd = true;
        Object.keys(addInfo).map(item=>{
            if(!addInfo[item].length){
                setErrors({[`error${item}`]:true})
                allowToAdd = false
            }
        });
        if(allowToAdd){
            //
        }
    };
    const {
        categoryId,
        name,
        price,
        showUrls } = addInfo;
    const {
        errorcategoryId,
        errorname,
        errorprice
    } = errors;
    return (
        <div className="add-glasses-container">
            <div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Category name</Form.Label>
                    <Form.Control
                        as="select"
                        size="lg"
                        name='categoryId'
                        onChange={getAddInfo}
                        value={categoryId}
                        style={errorcategoryId ? { border:'1px solid red'}: null}
                    >
                        <option></option>
                        <option value='1'>Men</option>
                        <option value='2'>Women</option>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        {errorcategoryId ? 'This field is require' : ''}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Add glasses name</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        name='name'
                        onChange={getAddInfo}
                        value={name}
                        style={errorname ? { border:'1px solid red'}: null}
                    />
                    <Form.Text className="text-muted">
                        {errorname ? 'This field is require' : ''}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Add price</Form.Label>
                    <Form.Control
                        type="number"
                        size="lg"
                        name='price'
                        onChange={getAddInfo}
                        value={price}
                        style={errorprice ? { border:'1px solid red'}: null}
                    />
                    <Form.Text className="text-muted">
                        {errorprice ? 'This field is require' : ''}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Add image(s)</Form.Label>
                    <Form.Control
                        type="file"
                        name='file'
                        onChange={getAddInfo}
                        multiple="multiple"
                    />
                    <Row  className='img-block'>
                        {
                            showUrls.map(url=>(
                                <Col xs={1} className='img-item'>
                                    <img src={url} />
                                </Col>

                            ))
                        }
                    </Row>



                </Form.Group>
                <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                    onClick = {sendAddInfo}
                >
                    Submit
                </Button>
            </div>

        </div>
    );
};

export default AddGlasses;