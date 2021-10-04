import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{minHeight: "100vh"}} className="text-center mt-5">
         <div>
         <h1 className="display-1 fw-bold text-danger">Opps</h1>
         <h3>404 - PAGE NOT FOUND</h3>
         <p>The page you are looking for might  have been removid had its name changed or is temporarily unavailable</p>
         </div>
         <div>
             <Link to="/home">
             <button className="btn btn-secondary rounded">Go To HOMEPAGE</button>
             </Link>
         </div>
        </div>
    );
};

export default NotFound;