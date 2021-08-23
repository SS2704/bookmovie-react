import React, {Fragment, useState} from 'react';
import {Button, FormControl, InputLabel} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import './Register.css';

export default function Register(isOpn) {


    return(
        <div>
            {/* <div><h3>Register</h3></div> */}
            
            <ValidatorForm className='register-form' >  
            <FormControl>
                <TextValidator 
                  //  id='firstname' 
                    type='text' 
                    className='input-control' 
                    name='firstname' 
                    // value={firstname}
                    // onChange={inputChangedHandler}
                    label="First Name*"
                    validators={['required']}
                    errorMessages={"required"}
                >
                </TextValidator>
                <TextValidator 
                   // id='lastname' 
                    type='text' 
                    className='input-control' 
                    name='lastname' 
                    // value={lastname}
                    // onChange={inputChangedHandler}
                    label="Last Name*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   // id='email' 
                    type='text' 
                    className='input-control' 
                    name='email' 
                    // value={email}
                    // onChange={inputChangedHandler}
                    label="Email*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   // id='password' 
                    type='text' 
                    className='input-control' 
                    name='password' 
                    // value={password}
                    // onChange={inputChangedHandler}
                    label="Password*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <TextValidator 
                   // id='contactnum' 
                    type='text' 
                    className='input-control' 
                    name='contactnum' 
                    // value={contactnum}
                    // onChange={inputChangedHandler}
                    label="Contact No.*"
                    validators={['required']}
                    errorMessages={"required"}
                ></TextValidator>
                <div className='register-info-container'>
                    {/* <span className='subscriber-to-add-heading'> Subscriber to be added: </span><br /> */}
                   
                   <br /> <span className='register-info'><Button variant='contained' type='submit' className='custom-button register-button'>Register</Button></span>
                </div>
            </FormControl>
            </ValidatorForm>  
        </div>
    )
    
}