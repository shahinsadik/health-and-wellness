import React from 'react';
import { Link} from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <Link to='/' className='btn btn-primary'>Back to home</Link>
        </div>
    );
};

export default ErrorPage;