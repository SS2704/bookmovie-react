import React from 'react';
import Button from '@material-ui/core/Button';

import './Logout.css';

export default function Logout() {
    async function onLogoutFormSubmitted(e) {
        // alert('Inside onLoginFormSubmitted');
         e.preventDefault();
         const authorization = window.sessionStorage.getItem('access-token');

         console.log(param);
         try {
             const rawResponse = await fetch('http://localhost:8085/api/v1/auth/logout', {
                 method: 'POST',
                 headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json", 
                     authorization: `Bearer ${authorization}`
                 }
             });
             alert('rr');
             //const result = await rawResponse.json();
             if (rawResponse.ok) {
                 window.sessionStorage.removeItem('user-details');
                 window.sessionStorage.removeItem('access-token');
                 // history.push('/');
                 // window.location.href = '/';
                 onSubmit();
             } else {
                 const error = new Error();
                 error.message =  'Something went wrong.';
             }
         } catch (e) {
             alert(`Error: ${e.message}`);
         }
     }
    return(
        <div>
            <Button variant='contained' className='logout-button' onClick={onLogoutFormSubmitted}>Logout</Button>
        </div>
    )
}