import React from 'react'
import Header from '../../common/header/Header'
import { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../../screens/login/Login';
import  {Tab, Tabs} from '@material-ui/core';
//  import { TabPanel } from '@material-ui/lab';
import Modal from 'react-modal';
import { Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';


export default function Home() {

    return(
        <Fragment>
            <Header toggleModal/>
            
        
        </Fragment>
    )
}