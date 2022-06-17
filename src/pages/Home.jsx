import React from 'react';
import Introduction from '../components/Introduction';
import AboutUsComponent from '../components/AboutUsComponent';
import ServicesComponent from '../components/ServicesComponent';
import Accordion from '../containers/Accordion';
import '../styles/Home.scss';

const Home = () => {
	return (
		<div className='home-container container-fluid flex-column align-content-center p-0'>
			<Introduction />
			<AboutUsComponent />
			<Accordion />
			<ServicesComponent />
		</div>
	);
};

export default Home;
