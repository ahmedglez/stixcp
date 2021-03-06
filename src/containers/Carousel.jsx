import React from 'react';
import camera1 from '../assets/images/camera1.jpg';
import camera2 from '../assets/images/camera2.jpg';
import camera3 from '../assets/images/camera3.jpg'
import '../styles/Carousel.scss'

const Carousel = () => {
    return (

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={camera1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={camera2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src={camera3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
            </button>
        </div>
    );
};

export default Carousel;