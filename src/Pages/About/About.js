import React from 'react';
import img from '../../Images/profile/person.png'
import './About.css'


const About = () => {
    return (
        <div className='container'>
            <div className='mt-3 w-75 mx-auto'>
                <h2 className='text-danger text-center fw-bold shadow p-3 mb-5 bg-dark rounded'>About Me</h2>
            </div>
            <div className='text-center'>
                <img src={img} alt="..." />
            </div>

            <div className='text-center'>

                <h2 className='fst-italic fw-bold text-danger my-5'>Hi, I’m Kate!</h2>
                <div className='paragraph-container'>

                    <p>I’m a wedding photographer! Since 2008, capturing professional wedding photos to make your moments better.I try and make the event more memorable for my clients.</p>
                    <p>I’m proud to say that I was voted “Best Wedding Photographer” , have received 4 awards from the National Association of Professional wedding Photographers, and have been published by Yahoo! But the achievement that means the most to me? Building lifelong relationships with my clients as their families grow and change.</p>
                    <p>Please pull up a chair, grab an iced coffee, and take a peek around! I’m so glad you’re here!</p>

                </div>
            </div>

        </div>
    );
};


export default About;