import React from 'react';

const SingleServices = (props) => {
    const {name, teacher, duration, enrol, deccription, img} = props.data
    return (
        <div className="col">
           <div className="card shadow h-100 p-2">
               <img src={img} alt="course-img" />
               <div className="card-body">
                   <h5 className="card-title fw-bold">{name}</h5>
                   <h6 className="card-text">by: {teacher}</h6>
                   <p className="card-text">Duration: {duration}</p>
                   <p>{deccription.slice(0, 80)}</p>
               </div>
               <div className="d-flex justify-content-between align-items-center px-2">
                   <button className="btn btn-success">Enroll Now</button>
                   <h5>Price: ${enrol}</h5>
               </div>
           </div>
        </div>
    );
};

export default SingleServices;