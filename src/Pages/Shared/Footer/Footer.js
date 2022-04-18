import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark mt-5 '>
            <p className='text-white text-center p-3'><small>Wedding Art copyright © {year} </small></p>
        </footer>
    );
};

export default Footer;