import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Captures from '../Captures/Captures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Captures></Captures>

        </div>
    );
};

export default Home;