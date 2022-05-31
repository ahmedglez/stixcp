import React from 'react';
import introduction_img_lg from '../assets/images/main_pc.png';
import introduction_img_sm from '../assets/images/main_mobile.png';
import '../styles/Introduction.scss';

const Introduction = () => {
	return (
		<div className='introduction'>
			<div className='introduction-container container-fluid col-12 mb-lg-0'>
				{window.screen.width > 400 ? (
					<img src={introduction_img_lg} />
				) : (
					<img src={introduction_img_sm} />
				)}
			</div>
		</div>
	);
};

export default Introduction;
