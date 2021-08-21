import React from 'react'
import Header from '../../common/header/Header'
import { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../../screens/login/Login';



export default function Home() {
    return(
        <Fragment>
            <Header />
        </Fragment>
    )
}