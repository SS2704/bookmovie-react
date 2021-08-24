import './Header.css';
import logo from '../../assets/logo.svg';

import {Link} from 'react-router-dom';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
import Logout from '../../screens/logout/Logout';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState, useContext} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  {AppBar, Tab, Tabs} from '@material-ui/core';
//  import { TabPanel } from '@material-ui/lab';
import Modal from 'react-modal';
import { Paper } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ModalStateContext } from '../../common/ModalContext';

Modal.setAppElement("#root");

export default function Header({}){
    const [selectedTab, setselectedTab] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setselectedTab(newValue);
    };

    //const [isOpen, setIsOpen] = useState(false);
    //let isOpen = useContext(ModalStateContext);

    // function toggleModal() {
    //     console.log('isOpen', isOpen);
    //   isOpen(!isOpen);
    // }

     function loginHandler() {
        //alert('Inside Header - Login clicked');
        ModalStateContext.isOpen=true;
        
    }
    
    return(
        <Fragment>
            <div className='header'>
                <img src={logo} alt='Logo' className="rotate linear infinite" />
                {/* <ModalStateContext.Provider value={true} > */}
                    <Button variant='contained' className='login-header-button' onClick={loginHandler}>Login</Button>
                {/* </ModalStateContext.Provider>    */}
            </div>
            <div className="model-content">

                <Modal  isOpen={ModalStateContext.isOpen} contentLabel="My dialog" >
                    <div className="model-content">          
                        <Tabs value={selectedTab} onChange={handleChange}>
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                    </div>
                    <div className="ReactModal__Content--after-open">
                    {selectedTab === 0 && <Login /> }
                    {selectedTab === 1 && <Register />}
                    </div>
                </Modal>
       
            

        </div>
        </Fragment>
    )
}