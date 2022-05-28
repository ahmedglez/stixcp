import React from 'react';
import camera1 from '../assets/images/camera1.jpg';
import camera2 from '../assets/images/camera2.jpg';
import camera3 from '../assets/images/camera3.jpg'
import '../styles/Carousel.scss'

const Carousel = () => {
    return (

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={camera1} alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={camera2} alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={camera3} alt="Third slide" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;