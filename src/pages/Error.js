import React from 'react';
import {Link} from 'react-router-dom'
import '../style/app.css';
import '../style/Pages.css';

const Error = () => {
    return (
        <div className="full__container">
            <h1>There is nothing here</h1>
            <Link to="/" className='link__btn'>
                Back to home page
            </Link>
        </div>
    )
}

export default Error;