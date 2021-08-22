import Home from './home/Home';
import React, { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../common/header/Header';

export default function Controller(){
 
    return(
        <Fragment>
            <Home />
            {/* <Router>
                <Route exact path='/' render={ () => <Home />} />
            </Router>
            <Router>
                <Route exact path='/login' render={(props) => <Header  />} />
                {/* <Route exact path='/add' render={ ({history}, props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={(newSubsciber)=>addSubscriberHandler(newSubsciber)} />} /> 
            </Router>  */}
           
        </Fragment>     
    )
}