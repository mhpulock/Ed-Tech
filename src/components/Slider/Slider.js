import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../slider/slide1.jpg';
import slide2 from '../../slider/slide2.jpg';
import slide3 from '../../slider/slide3.jpg';

import './Slider.css';

const Slider = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <div>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Best Books</h3>
                            <p>Ed-Tech is Original Japanese showroom for purchasing reliable motorcycles</p>
                        </Carousel.Caption>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Original Books Garanty</h3>
                        <p>All of you are invited to our showroom</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Books</h3>
                        <p>We have been providing best service for last 5 years</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </>
    );
};

export default Slider;