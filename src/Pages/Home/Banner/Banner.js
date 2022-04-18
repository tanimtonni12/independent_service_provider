import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height={'550px'}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Wedding Art Photography</h3>
                    <p className='text-center'>Create your sweet memories with weeding art. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={'550px'}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wedding Art Photography</h3>
                    <p className='text-center'>Always be there with you to fullfil your desire dreams.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={'550px'}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Wedding Art Photography</h3>
                    <p className='text-center'>
                        Your happiness is more important which give more inspiration to capture your moments.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;