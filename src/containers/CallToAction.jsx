import React from 'react';
import '../styles/CallToAction.scss';
import { Link } from 'react-router-dom';

const CallToAction = () => {
	return (

		<div class="jumbotron">
			<h4 class="display-4">Disfrute de un hogar y un negocio seguro!</h4>
			<p class="lead">Ofrecemos soluciones de seguridad personalizadas desde el año 2012.
				Nuestra empresa está formada por un grupo de profesionales con
				experiencia y con la misión de brindar a nuestros clientes
				soluciones integrales. Contáctenos para obtener más información sin
				coste y sin compromiso.</p>
			<hr class="my-4" />
			< p> Solicite ahora mismo nuestro servicio de asesoría y diagnóstico totalmente gratis </p>
			<p class="lead">
				<Link to='/about' class="btn btn-primary" id='button-call-to-action' role="button">Contactar</Link>
			</p>
		</div>


	);
};

export default CallToAction;


