import React from 'react';
import img from '../../Images/profile/person.png'
import './About.css'


const About = () => {
    return (
        <div className='container'>
            <div className='mt-3 w-75 mx-auto'>
                <h2 className='text-danger text-center fw-bold shadow p-2 mb-5 bg-dark rounded'>About Me</h2>
            </div>
            <div className='text-center'>
                <img id='image' src={img} alt="..." />
            </div>

            <div className='text-center'>

                <h2 className='fst-italic fw-bold text-danger my-5'>Hi, I’m Tanim Tonni!</h2>
                <div className='paragraph-container'>

                    <p>I want to be a web developer! For this reason I have enrolled programming hero's course and try hard to learn from here properly.
                        I love to do this course. From here I can learn so many things. I believe that one day I'll achieve my goal.</p>

                </div>
            </div>

        </div>
    );
};


export default About;