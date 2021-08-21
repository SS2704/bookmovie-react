import './Header.css';
import {Link} from 'react-router-dom';
import Login from '../../screens/login/Login';
import Logout from '../../screens/logout/Logout';
import Button from '@material-ui/core/Button';
import React, { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default function Header(){
    return(
        <Fragment>
            <div className='header'>
                <img src="logo.svg" alt='Logo'/>
                <Link to='/login'><Button variant='contained' className='login-button'>Login</Button></Link>

            </div>
        </Fragment>
    )
}