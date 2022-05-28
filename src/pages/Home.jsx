import React from 'react';
import Introduction from '../components/Introduction';
import AboutUsComponent from '../components/AboutUsComponent';
import ServicesComponent from '../components/ServicesComponent';
import CallToAction from '../containers/CallToAction';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div>
           <Introduction />
           <CallToAction />
           <ServicesComponent />
           <Carousel />
        </div>
    );
};

export default Home;