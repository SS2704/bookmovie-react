import './Header.css';
import logo from '../../assets/logo.svg';

import {Link} from 'react-router-dom';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
import Logout from '../../screens/logout/Logout';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  {AppBar, Tab, Tabs} from '@material-ui/core';
//  import { TabPanel } from '@material-ui/lab';
import Modal from 'react-modal';
import { Paper } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

Modal.setAppElement("#root");

export default function Header({}){
    const [selectedTab, setselectedTab] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setselectedTab(newValue);
    };

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
                <img src={logo} alt='Logo' class="rotate linear infinite" />
                <Button variant='contained' className='login-button' onClick={loginHandler}>Login</Button>
                
            </div>
            <div className="modal-content">

            <Modal  isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" dialogClassName='model-content'>
                <div>         
                    <Tabs value={selectedTab} onChange={handleChange}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </div>
                
                {selectedTab === 0 && <Login />}
                {selectedTab === 1 && <Register />}
            </Modal>
            
        </div>
        </Fragment>
    )
}