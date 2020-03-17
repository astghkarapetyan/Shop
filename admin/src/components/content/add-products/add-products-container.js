import React,{ useReducer ,useEffect} from 'react';
import withProductsRequestService from '../../hoc';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './add-products.css';

const  AddProductsContainer = ({productsRequestService,categories = {},actionAddOneProduct})=> {
    const initialObject = {
        category_name_id:'',
        name:'',
        price:'',
        images:[],
        showUrls:[]
    };
    const initialErrorObject = {
        errorcategory_name_id:false,
        errorname:false,
        errorprice:false,
        errorimages:false
    };
    const [addInfo,setAddInfo] = useReducer((state,newState)=>({...state,...newState}),initialObject);
    const [ errors,setErrors ] = useReducer((state,newState)=>({...state,...newState}),initialErrorObject);
    const getChooseImageUrls = (files)=>{
        const { images,showUrls } = addInfo;
        const newimages = [...images];
        const newShowUrls = [...showUrls];
        Object.keys(files).map(index=>{
            newimages.push(files[index]);
            newShowUrls.push(URL.createObjectURL(files[index]));
        });
        setAddInfo({images:newimages,showUrls:newShowUrls})
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

        const formatData = new FormData();
        let addInfoKeys = Object.keys(addInfo);
        addInfoKeys = addInfoKeys.slice(0,addInfoKeys.length-1);
        addInfoKeys.map(item=>{
            if(typeof addInfo[item] === "object"){
                addInfo[item].map(img =>formatData.append('images',img))
            }else{
                formatData.append(`${item}`,addInfo[item])
            }
            if(!addInfo[item].length){
                setErrors({[`error${item}`]:true});
                allowToAdd = false
            }
        });
        if(allowToAdd){
            productsRequestService
                .addProduct(formatData,actionAddOneProduct)

            setAddInfo(initialObject)
        }
    };
    const {
        category_name_id,
        name,
        price,
        showUrls } = addInfo;
    const {
        errorcategory_name_id,
        errorname,
        errorprice,
        errorimages
    } = errors;
    return (
        <div className="add-glasses-container">
            <div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Category name</Form.Label>
                    <Form.Control
                        as="select"
                        size="lg"
                        name='category_name_id'
                        onChange={getAddInfo}
                        value={category_name_id}
                        style={errorcategory_name_id ? { border:'1px solid red'}: null}
                    >
                        <option value=''></option>
                        {
                           'categoryName' in categories ?
                               (
                                   categories.categoryName.map(({category_name_id,category_name})=>(
                                         <option key={category_name_id} value={category_name_id}>{category_name}</option>
                                     ))
                               ) : ''
                        }
                    </Form.Control>
                    <Form.Text className="text-muted">
                        {errorcategory_name_id ? 'This field is require' : ''}
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
                    <div className='add-image'>
                        <label className="choose-image-label">
                            <span>Add Image</span>
                            <Form.Control
                                type="file"
                                name='file'
                                onChange={getAddInfo}
                                multiple="multiple"
                            />
                        </label>
                    </div>



                    <Row  className='img-block'>
                        {
                            showUrls.map(url=>(
                                <Col key={url} xs={1} className='img-item'>
                                    <img src={url} />
                                </Col>

                            ))
                        }
                    </Row>
                    <Form.Text className="text-muted">
                        {errorimages ? 'This field is require' : ''}
                    </Form.Text>


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

export default AddProductsContainer;