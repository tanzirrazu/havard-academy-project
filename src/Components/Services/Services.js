import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';

const Services = () => {
    const [datas, setData] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div style={{minHeight: "100vh", marginTop: "70px"}}>
            <div>
           <h1 className="display-1 fw-bold text-center"><span className="text-muted">Our</span> Services</h1>
        </div>
            <div className="row mb-5 mt-2 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                datas.map(data => <SingleServices
                key={data.id} data={data} ></SingleServices>)
            }
            </div>
        </div>
    );
};

export default Services;