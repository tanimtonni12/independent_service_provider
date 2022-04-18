import React from 'react';
import { Link } from 'react-router-dom';




const Service = ({ service }) => {
    const { img, id, name, price, description } = service;
    return (
        <div className="card-group w-75">
            <div className="card ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4>$ {price}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className='mx-auto mb-2'>
                    <Link to={`/checkout/${id}`}>
                        <button className='btn btn-danger'>Proceed Checkout</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Service;