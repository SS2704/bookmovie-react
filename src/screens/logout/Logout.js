import React from 'react';
import Button from '@material-ui/core/Button';

import './Logout.css';

export default function Logout() {

    return(
        <div>
            <Button variant='contained' className='logout-button'>Logout</Button>
        </div>
    )
}