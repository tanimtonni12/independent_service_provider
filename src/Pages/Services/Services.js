import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='container'>
            <div className="row">
                <div className='mb-5 w-75 mx-auto'>
                    <h1 className='text-danger text-center  mt-5 shadow p-3  bg-dark rounded'> Available Services</h1>
                </div>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;