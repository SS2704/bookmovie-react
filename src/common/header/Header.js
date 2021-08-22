import './Header.css';
import logo from '../../assets/logo.svg';

import {Link} from 'react-router-dom';
import Login from '../../screens/login/Login';
import Logout from '../../screens/logout/Logout';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  {Tab, Tabs} from '@material-ui/core';
//  import { TabPanel } from '@material-ui/lab';
import Modal from 'react-modal';
import { Paper } from '@material-ui/core';

Modal.setAppElement("#root");

export default function Header({}){

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }

     function loginHandler() {
        //alert('Inside Header - Login clicked');
        setIsOpen(true);
    }
    return(
        <Fragment>
            <div className='header'>
                <img src={logo} alt='Logo' />
                <Button variant='contained' className='login-button' onClick={loginHandler}>Login</Button>
                {/* <Button variant='contained' className='login-button' onClick={loginHandler}>Login</Button> */}
            </div>
            <div className="modal-content">

            <Modal  isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" 
                >
                <div>         
                    <Tabs  indicatorColor="primary" textColor="primary" >
                    {/* <Tab label="Login"  value="/login" component={Link} to="/login" />  */}
                        <Tab label="Login"  value="0"/>
                
                 <Tab label="Register" value="1" />
             </Tabs>
            </div>
                <button onClick={toggleModal}>Close modal</button>
            </Modal>
        </div>
        </Fragment>
    )
}