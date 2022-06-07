import React from 'react';
import introduction_img_lg from '../assets/images/main.png';
import introduction_img_sm from '../assets/images/Layer 1.png';
import '../styles/Introduction.scss';
import '../animations/introduction-link.scss'

const Introduction = () => {
	return (
		<div className='introduction'>
			<div className='introduction-container tilt container-fluid col-12  align-content-center p-0 '>
				<div className="call-to-action-intro flex-column align-content-center col-sm-8 col-md-12 col-lg-12">
					<h1 className='title'>Disfrute su tranquilidad,
						usted la necesita
						y nosotros se la aseguramos</h1>
				</div>
				<img src={introduction_img_lg} alt="" />


			</div>
		</div>
	);
};

export default Introduction;
