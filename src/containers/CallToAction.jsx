import React from 'react';
import '../styles/CallToAction.scss';
import homesafe from '../assets/images/maxxyustas140200018.jpg'

const CallToAction = () => {
	return (
		<div className='call-to-action'>
			<div className='call-to-action-container container pt-lg-5'>
				<div className='call-to-action-title'>
					<h4>Disfrute de un hogar y un negocio seguro</h4>
				</div>
				<div className='call-to-action-text'>
					<p>
						Ofrecemos soluciones de seguridad personalizadas desde el año 2012.
						Nuestra empresa está formada por un grupo de profesionales con
						experiencia y con la misión de brindar a nuestros clientes
						soluciones integrales. Contáctenos para obtener más información sin
						coste y sin compromiso.
					</p>
				</div>
				<div className='call-to-action-button'>
					<button
						type='button'
						id='button-call-to-action'
						class='btn btn-outline-secondary'>
						Saber más
					</button>
				</div>
				
			</div>
		</div>
	);
};

export default CallToAction;
