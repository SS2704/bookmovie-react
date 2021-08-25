import React, {Fragment, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, FormControl, InputLabel} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import './Register.css'

export default function Register() {
    const history = useHistory();
    let successmessage="";
    
    const [isRegistered,setisRegistered] = useState(false);

   function inputChangedHandler(e){
       const state = registerUserForm;
       state[e.target.name] = e.target.value;
       setregisterUserForm({...state});
   } 

   async function onRegisterSubmit(e){
    e.preventDefault();
        
        const params = {
            first_name  : firstname, 
            last_name   :lastname, 
            email_address      : email, 
            password   : password, 
            mobile_number : contactnum 
        }

        try{
            const rawResponse = await fetch('http://localhost:8085/api/v1/signup', {
                body: JSON.stringify(params),
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8"
                }

            });

            const result = await rawResponse.json();

            if(rawResponse.ok){
                setisRegistered(true);
                // registerUserForm['successmessage']="Registration Successful! Please Login."
                //history.push("/");
            }else{
                const error = new Error();
                error.message = result.message || 'Something went wrong.';
                throw error;
            }
            
        }catch(e){
            alert(`Error: ${e.message}`);
        }
   }

   const[registerUserForm, setregisterUserForm] = useState({
        firstname  : '', 
        lastname   : '', 
        email      : '', 
        password   : '', 
        contactnum : '' ,
        successmessage: ''
    
   });

   const{firstname, lastname, email, password, contactnum} = registerUserForm;

    return(
        <div className='register-content'> 
           
            <ValidatorForm className='register-form' onSubmit={onRegisterSubmit}>  
            <FormControl className='register-content' >
            <div> <TextValidator 
                    id='firstname' 
                    type='text' 
                    className='input-control' 
                    name='firstname' 
                    value={firstname}
                    onChange={inputChangedHandler}
                    label="First Name*"
                    validators={['required']}
                    errorMessages={"required"}
                >
                </TextValidator>
                <TextValidator 
                   id='lastname' 
                    type='text' 
                    className='input-control' 
                    name='lastname' 
                    value={lastname}
                    onChange={inputChangedHandler}
                    label="Last Name*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   id='email' 
                    type='text' 
                    className='input-control' 
                    name='email' 
                    value={email}
                    onChange={inputChangedHandler}
                    label="Email*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   id='password' 
                    type='text' 
                    className='input-control' 
                    name='password' 
                    value={password}
                    onChange={inputChangedHandler}
                    label="Password*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   id='contactnum' 
                    type='text' 
                    className='input-control' 
                    name='contactnum' 
                    value={contactnum}
                    onChange={inputChangedHandler}
                    label="Contact No.*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                </div>
                <div className='register-info-container'>
                    {/* <span className='subscriber-to-add-heading'> Subscriber to be added: </span><br /> */}
                    <span >
                        <div className='successMsg'>{isRegistered == true && <label className='successMsg' wrapText={false} >"Registration Successful! Please Login."</label>}</div>
                    </span><br /> <br /> 
                   <br /> <span className='register-info'><Button variant='contained' color='primary' type='submit' className='register-button'>Register</Button></span>
                </div>
               
            </FormControl>
            </ValidatorForm>  
        </div>
    )
    
}