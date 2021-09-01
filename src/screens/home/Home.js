import React, { useEffect } from 'react'
import Header from '../../common/header/Header'
import { Fragment, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../../screens/login/Login';
import  {Tab, Tabs} from '@material-ui/core';
//  import { TabPanel } from '@material-ui/lab';
import Modal from 'react-modal';
import { Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import MovieGrid from '../../common/moviegrid/MovieGrid';

import './Home.css';
export default function Home() {
    const[movies, setMovies] = useState([]);

    useEffect(() => {

        async function getMovies() {
            // alert('Inside onLoginFormSubmitted');
            // e.preventDefault();
             const authorization = window.sessionStorage.getItem('access-token');
             //console.log(param);
             try {
                 //alert('1');
                 const rawResponse = await fetch('http://localhost:8085/api/v1/movies?page=1&limit=6&status=RELEASED', {
                     method: 'GET',
                     headers: {
                         "Accept": "application/json"
                     }
                 });
    
                 const result = await rawResponse.json();
                 if (rawResponse.ok) {
                     setMovies(result.movies);
                    //  alert('movies');
                    
                 } else {
                     const error = new Error();
                     error.message = result.message || 'Something went wrong.';
                 }
             } catch (e) {
                 alert(`Error: ${e.message}`);
             }
         }
         getMovies();
        },[])
     
    return(
        
        <Fragment>
            <Header toggleModal />
           
            <div className='upcomingMovies'><h3>Upcoming Movies</h3></div>
            <div className='movieGrid'>
                < MovieGrid movieList={movies}/>
            </div>
        </Fragment>
    )
}