import React from 'react';
import Introduction from '../components/Introduction';
import AboutUsComponent from '../components/AboutUsComponent';
import ServicesComponent from '../components/ServicesComponent';
import CallToAction from '../containers/CallToAction';
import fondo from '../assets/images/Layer 1.png'
import '../styles/Home.scss'

const Home = () => {
    return (
        <div className='home-container container-fluid flex-column align-content-center'>
           <Introduction />
           <AboutUsComponent />
           <ServicesComponent />
        </div>
    );
};  

export default Home;