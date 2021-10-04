import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../Img/home-img.png'



const Home = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('./homeData.json')
        .then(res => res.json())
        .then(data => setDatas(data));
    },[])
    return (
    <div style={{minHeight: "100vh", marginTop: "80px"}} >
        <div className="row my-5">
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
    <div>
        <h1 className="text-center display-4 fw-bold">Our Best <span className="text-muted">Services</span> </h1>
    </div>
    <div className="row mt-2 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
         {
         datas.map(data => <div key={data.id} className="col">
        <div className="card h-100 p-2">
             <img src={data.img} alt="course-img" />
            <div className="card-body">
                   <h5 className="card-title fw-bold">{data.name}</h5>
                   <h6 className="card-text">by: {data.teacher}</h6>
                   <p className="card-text">Duration: {data.duration}</p>
                   <p>{data.deccription.slice(0, 80)}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2">
                   <button className="btn btn-success">Enroll Now</button>
                   <h5>Price: ${data.enrol}</h5>
               </div>
           </div>
        </div>)}
    </div>
    <div className="w-75 mt-3 mx-auto">
        <Link to="/services">
            <button className="btn btn-outline-dark mb-3  form-control">See More</button>
        </Link>
        </div>
    </div>
    );
};

export default Home;