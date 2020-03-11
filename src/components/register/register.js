import React,{ useState,useReducer } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.css';
const Register = ()=>{
    let initialObject = {
        fName:'',
        lName:'',
        email:'',
        password:'',
        cPassword:'',
        errorfName:true,
        errorlName:true,
        erroremail:true,
        errorcPassword:true,
        eightCharacter:false,
        oneLetter:false,
        oneNumber:false,

    };
    const [registerInfo,setRegisterInfo] = useReducer((state,newState)=>({...state,...newState}),initialObject);
    const [showPasswordValidator,setShowPasswordValidator] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const validateFunction = (inpValue)=>{

        const checkLength = (value)=>{
            return value.length >=3
        };
        const checkEmail = (email)=>{
            return isEmail(email)
        };
        const checkCPassword = (cPassword)=>{
            return cPassword === registerInfo.password
        };
        switch(inpValue){
            case 'fName':
            case 'lName':
                if(!checkLength(registerInfo[inpValue])){
                    setRegisterInfo({[`error${inpValue}`]:false})
                }else{
                    setRegisterInfo({[`error${inpValue}`]:true})
                }
                return;
            case 'email':
                if(!checkEmail(registerInfo[inpValue])){
                    setRegisterInfo({[`error${inpValue}`]:false})
                }else{
                    setRegisterInfo({[`error${inpValue}`]:true})
                }
                return;
            case 'cPassword':
                if(!checkCPassword(registerInfo[inpValue])){
                    setRegisterInfo({[`error${inpValue}`]:false})
                }else{
                    setRegisterInfo({[`error${inpValue}`]:true})
                }
                return;

        }
    };
    const checkPassword = (password)=>{
        if(password.length>8 ){
            setRegisterInfo({eightCharacter:true})
        }else{
            setRegisterInfo({eightCharacter:false})
        }
        if(/(?=.*\d)/.test(password)){
            setRegisterInfo({oneNumber:true})
        }else{
            setRegisterInfo({oneNumber:false})
        }
        if(/(?=.*?[a-zA-z])/.test(password)){
            setRegisterInfo({oneLetter:true})
        }else{
            setRegisterInfo({oneLetter:false})
        }
    };
    const handelRegisterInfo = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if(name==='password'){
            checkPassword(value);
            setShowPasswordValidator(true);
        }
        setRegisterInfo({[name]:value})
    };

    const onBlurRegisterInfo = (e)=>{
        let name = e.target.name;
        validateFunction(name)
    };

    const onRegister = ()=>{
        setErrorMessage('');
        let registerInfoKeys = Object.keys(registerInfo);
        for(let index = 0;index<registerInfoKeys.length;index++){
            if(registerInfo[registerInfoKeys[index]] === '' || registerInfo[registerInfoKeys[index]] === false ){
                setErrorMessage('There is a missed field');
                break
            }
        }

    };
    const {
        fName,
        lName,
        email,
        password,
        cPassword,
        errorfName,
        errorlName,
        erroremail,
        eightCharacter,
        oneLetter,
        oneNumber,
        errorcPassword
     } = registerInfo;
    return(
        <div className='register-container'>

            <Form>
                <Form.Label>Sign Up</Form.Label>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name='fName'
                        value={fName}
                        onChange={handelRegisterInfo}
                        onBlur={onBlurRegisterInfo}
                    />
                    <Form.Text className="text-muted">
                        {!errorfName ? 'Value must be minimum 3 letters' : ''}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        name='lName'
                        value={lName}
                        onChange={handelRegisterInfo}
                        onBlur={onBlurRegisterInfo}
                    />
                    <Form.Text className="text-muted">
                        {!errorlName ? 'Value must be minimum 3 letters' : ''}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        value={email}
                        onChange={handelRegisterInfo}
                        onBlur={onBlurRegisterInfo}
                    />
                    <Form.Text className="text-muted">
                        { !erroremail ? 'Invalid Email' : '' }
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name='password'
                        value={password}
                        onChange={handelRegisterInfo}
                        onBlur={onBlurRegisterInfo}
                    />
                    <Form.Text  className="text-muted">
                        {
                            showPasswordValidator ? (
                                <>
                                    <div style={{color:eightCharacter ? 'green':'red'}}>.8 characters minimum</div>
                                    <div style={{color:oneLetter ? 'green':'red'}}>.At least one letter</div>
                                    <div style={{color:oneNumber ? 'green':'red'}}>.At least one number</div>
                                </>
                            ):''
                        }
                         </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name='cPassword'
                        value={cPassword}
                        onChange={handelRegisterInfo}
                        onBlur={onBlurRegisterInfo}
                    />
                    <Form.Text className="text-muted">
                        { !errorcPassword ? 'Confirm password isn`t valid' :'' }
                    </Form.Text>
                </Form.Group>
                <Form.Text className="text-muted">
                    { errorMessage }
                </Form.Text>
                <Button onClick={onRegister} className='register'>
                    REGISTER
                </Button>
                <span>Registration work</span>
            </Form>
        </div>
    )
};

export default Register