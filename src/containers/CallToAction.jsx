import React from 'react';
import '../styles/CallToAction.scss';
import { Link } from 'react-router-dom';

const CallToAction = () => {
	return (

		<div class="jumbotron container-fluid flex-column align-content-center">
			<h4 class="display-4 col-12">Disfrute de un hogar y un negocio seguro!</h4>
			<p class="lead col-10">Ofrecemos soluciones de seguridad personalizadas desde el año 2012.
				Nuestra empresa está formada por un grupo de profesionales con
				experiencia y con la misión de brindar a nuestros clientes
				soluciones integrales. Contáctenos para obtener más información sin
				coste y sin compromiso.</p>
			<hr class="my-4" />
			< p className='col-10'> Solicite ahora mismo nuestro servicio de asesoría y diagnóstico totalmente gratis </p>
			
		</div>


	);
};

export default CallToAction;


