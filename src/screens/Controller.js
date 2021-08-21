import Home from './home/Home';
import React, { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './login/Login';


export default function Controller(){
    return(
        <Fragment>
            <Router>
                <Route exact path='/' render={ () => <Home />} />
            </Router>
            <Router>
                <Route exact path='/login' render={() => <Login />} />
                {/* <Route exact path='/add' render={ ({history}, props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={(newSubsciber)=>addSubscriberHandler(newSubsciber)} />} /> */}
            </Router> 
           
        </Fragment>     
    )
}