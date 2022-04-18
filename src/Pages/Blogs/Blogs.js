import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container my-3'>
            <div className='bg-dark text-danger w-75 mb-3 mx-auto shadow rounded'>
                <h2 className='text-center p-2 fw-bold'>Blogs</h2>
            </div>
            <div className='bg-light text-dark  mb-5 p-3 shadow  rounded'>
                <h2>Difference between authorization and authentication?</h2>
                <p>Authentication :

                    Authentication is a process that identifies the users who have checked for providing the access to the system or application. Users or persons are verified by the authentication process. It has been done before the authorization process. Authentication needs usually the user’s login details. It determines whether the person is a user or not.

                    <br /> Authorization :

                    The authorization is a process where a person’s or user’s authorities are checked for accessing the resources or application. Users or persons are validated by the authorization process. It needs the user’s privilege or security levels. It also determines what the permission user has.
                </p>
            </div>
            <div className='bg-light text-dark  mb-5 p-3 shadow  rounded'>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is a Google-backed application development software or application that enables developers to develop Web application , iOS and  Android app . Firebase provides tools for tracking analytics, reporting and fixing app crashes, and creating marketing and product experiment. So I have used firebase for authentication. I have implemented password authentication, login & registration.
                </p>
            </div>
            <div className='bg-light text-dark  mb-5 p-3 shadow  rounded'>
                <h2>What other services does firebase provide other than authentication ? </h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>

        </div>
    );
};

export default Blogs;