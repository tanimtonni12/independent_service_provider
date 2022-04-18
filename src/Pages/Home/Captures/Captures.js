import React from 'react';
import cap1 from '../../../Images/captures/cap1.png'
import cap7 from '../../../Images/captures/cap7.png'
import cap3 from '../../../Images/captures/cap3.png'
import cap4 from '../../../Images/captures/cap4.png'
import cap5 from '../../../Images/captures/cap5.png'
import cap6 from '../../../Images/captures/cap6.png'


const Captures = () => {
    return (

        <div id='captures' className='container'>

            <div className='w-75 my-5 mx-auto  '>
                <h2 className='text-danger text-center fs-2 fw-bold  mt-5 shadow p-2  bg-dark rounded'>Captures</h2>
            </div>
            <div className='text-center'>
                <img src={cap1} class="img-thumbnail" alt="..." />
                <img src={cap7} class="img-thumbnail" alt="..." />
                <img src={cap3} class="img-thumbnail" alt="..." />
                <img src={cap4} class="img-thumbnail" alt="..." />
                <img src={cap5} class="img-thumbnail" alt="..." />
                <img src={cap6} class="img-thumbnail" alt="..." />
            </div>


        </div>

    );
};

export default Captures;