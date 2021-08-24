import React, { Fragment, useState, useContext } from 'react';
import { Button, FormControl, InputLabel } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { Base64 } from 'js-base64';
import { ModalStateContext}  from '../../common/ModalContext';

export default function Login() {
    const history = useHistory();

    const [submitLoginForm, setsubmitLoginForm] = useState({
        id: 0,
        username: '',
        password: ''
    });

    const { username, password } = submitLoginForm;




    function inputChangedHandler(e) {
        const state = submitLoginForm;
        state[e.target.name] = e.target.value;

        setsubmitLoginForm({ ...state });
    }

    async function onLoginFormSubmitted(e) {
        e.preventDefault();
        const param = Base64.encode(`${username}:${password}`);
        console.log(param);
        try {
            const rawResponse = await fetch('http://localhost:8085/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    authorization: `Basic ${param}`
                }
            });

            const result = await rawResponse.json();
            if (rawResponse.ok) {
                window.sessionStorage.setItem('user-details', JSON.stringify(result));
                window.sessionStorage.setItem('access-token', rawResponse.headers.get('access-token'));
                history.push('/');
                window.location.href = '/';
            } else {
                const error = new Error();
                error.message = result.message || 'Something went wrong.';
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }
    return (
        <div className="login-content">
            {/* <div><h3>Login</h3></div> */}

            {/* <ValidatorForm className='login-form' onSubmit={onLoginFormSubmitted}>   */}
            <ValidatorForm className='login-form' onSubmit={onLoginFormSubmitted}>
                <FormControl className='login-content'>
                    <TextValidator
                        id='username'
                        type='text'
                        className='input-control'
                        name='username'
                        value={username}
                        onChange={inputChangedHandler}
                        label="Username*"
                        validators={['required']}
                        errorMessages={"UserName cannot be blank."}
                    ><span><br /><br /><br /><br /></span>
                        <span><br /><br /><br /><br /></span>
                    </TextValidator>
                    <TextValidator
                        id='password'
                        type='text'
                        className='input-control'
                        name='password'
                        value={password}
                        onChange={inputChangedHandler}
                        label="Password*"
                        validators={['required']}
                        errorMessages={"Password cannot be blank."

                        }
                    ></TextValidator>
                    <div className='login-info-container'>
                        {/* <span className='subscriber-to-add-heading'> Subscriber to be added: </span><br /> */}
                        {/* <span className='login-info'>UserName: </span><br />
                    <span className='login-info'>Password: </span><br /> */}
                        <br /><br />
                        <ModalStateContext.Provider value={false} >
                            <Link to='/'><span className='login-info'><Button variant='contained' type='submit' className='login-button'>Login</Button></span></ Link>
                        </ModalStateContext.Provider>
                    </div>
                </FormControl>
            </ValidatorForm>
        </div>
    )

}