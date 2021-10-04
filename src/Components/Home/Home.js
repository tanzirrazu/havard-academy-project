import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Img from '../../Img/home-img.png'



const Home = () => {
    return (
    <div style={{minHeight: "100vh"}} className="row my-5">
        <div className="col-md-3">
            <h1 className="fw-bold text-dark display-4"> <span className="text-danger">Choose</span> <br /> Your Future <br /> Career</h1>
        </div>
        <div className="col-md-6">
            <img  className="img-fluid" src={Img} alt="background-img" />
        </div>
        <div className="col-md-3">
           <div className="fw-bold">
           <h1>15,00</h1>
            <p>More then 15,000 students join</p>
           </div>
           <div className="fw-bold">
           <h1>1,000</h1>
            <p>More then 1,000 Courses Cover</p>
           </div>
           <div className="fw-bold">
           <h1>40%</h1>
            <p>Better grades then avearage</p>
           </div>
        </div>
    </div>
    );
};

export default Home;