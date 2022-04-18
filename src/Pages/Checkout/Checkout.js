import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();

    return (
        <div className='container'>
            <div className='my-5' >
                <h2 className='text-center'>Thank you for check out!!</h2>
            </div>

        </div>
    );
};

export default Checkout;