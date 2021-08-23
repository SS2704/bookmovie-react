import React, {Fragment, useState} from 'react';
import {Button, FormControl, InputLabel} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import './Login.css';

export default function Login() {

    // const{username, password} = submitLoginForm;

    // const[submitLoginForm, setsubmitLoginForm] = useState({
    //     id: 0,
    //     username: '',
    //     password: ''
    // });

    // const onLoginFormSubmitted = (e) =>{
    //     e.preventDefault();
    //     //addSubscriberHandler(addSubscriberForm);
    //     setsubmitLoginForm({id: 0, username: '', password: ''});
    //     //history.push("/");
    // }

    // function inputChangedHandler(e){
    //     const state = submitLoginForm;
    //     state[e.target.username] = e.target.value;
    //     state[e.target.password] = e.target.value;

    //     setsubmitLoginForm({...state});
    // }

    return(
        <div>
            {/* <div><h3>Login</h3></div> */}
            
            {/* <ValidatorForm className='login-form' onSubmit={onLoginFormSubmitted}>   */}
            <ValidatorForm className='login-form' >  
            <FormControl>
                <TextValidator 
                    // id='username' 
                    type='text' 
                    className='input-control' 
                    name='username' 
                    // value={username}
                    // onChange={inputChangedHandler}
                    label="Username*"
                    validators={['required']}
                    errorMessages={"UserName cannot be blank."}
                >
                </TextValidator>
                <TextValidator 
                    // id='password' 
                    type='text' 
                    className='input-control' 
                    name='password' 
                    // value={password}
                    // onChange={inputChangedHandler}
                    label="Password*"
                    validators={['required']}
                    errorMessages={"Password cannot be blank."}
                ></TextValidator>
                <div className='login-info-container'>
                    {/* <span className='subscriber-to-add-heading'> Subscriber to be added: </span><br /> */}
                    {/* <span className='login-info'>UserName: </span><br />
                    <span className='login-info'>Password: </span><br /> */}
                    <br /><span className='login-info'><Button variant='contained' type='submit' className='custom-button login-button'>Login</Button></span>
                </div>
            </FormControl>
            </ValidatorForm>  
        </div>
    )
    
}