import './Header.css';
import logo from '../../assets/logo.svg';

import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState, useContext} from 'react'
import  { Tab, Tabs} from '@material-ui/core';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function Header({}){
    const [selectedTab, setselectedTab] = React.useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

    const handleChange = (event, newValue) => {
        setselectedTab(newValue);
    };

    
    function toggleModal() {
        setIsOpen(!isOpen);
    }

     function loginHandler() {
       // alert('Inside Header - Login clicked');
        setIsOpen(true);
        
    }

    function onLoginFormSubmit(e){
        //e.preventDefault();
        //alert('Inside header onLoginFormSubmit');
        toggleModal();
        const token = window.sessionStorage.getItem('access-token');
        if (token.length >0){
            setisUserLoggedIn(true);
        }
        else{
            setisUserLoggedIn(false);
        }
    }

    async function onLogoutFormSubmitted(e) {
         e.preventDefault();
         const authorization = window.sessionStorage.getItem('access-token');

         //console.log(`Bearer ${authorization}`);
         try {
             const rawResponse = await fetch('http://localhost:8085/api/v1/auth/logout', {
                 method: 'POST',
                 headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/json",
                     authorization: `Bearer ${authorization}`
                 }
             });
            console.log(rawResponse);
             const result = await rawResponse.json();
             alert(result);
             if (rawResponse.ok) {
                 window.sessionStorage.removeItem('user-details');
                 window.sessionStorage.removeItem('access-token');
                 alert(window.sessionStorage.removeItem('user-details'));
                 // history.push('/');
                 // window.location.href = '/';
                 setisUserLoggedIn(false);
             } else {
                 const error = new Error();
                 error.message = result.message || 'Something went wrong.';
             }
         } catch (e) {
             alert(`Error: ${e.message}`);
         }
     } 
    return(
        <Fragment>
            <div className='header'>
                <img src={logo} alt='Logo' className="rotate linear infinite" />
                  {isUserLoggedIn == false && <Button name="Login" variant='contained' className='login-header-button' onClick={loginHandler}>Login</Button>}
                  {isUserLoggedIn == true && <Button name="Logout"  variant='contained' className='logout-header-button' onClick={onLogoutFormSubmitted}>Logout</Button>}
            </div>
      
            <div className="model-content">

                <Modal  isOpen={isOpen} contentLabel="My dialog" onHide={toggleModal}>
                    <div className="model-content">          
                        <Tabs value={selectedTab} onChange={handleChange}>
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                    </div>
                    <div className="ReactModal__Content--after-open">
                    {selectedTab === 0 && <Login onSubmit={onLoginFormSubmit} /> }
                    {selectedTab === 1 && <Register />}
                    </div>
                </Modal>
       
            

        </div>
        </Fragment>
    )
}