import React from 'react';
import '../styles/AboutUsComponent.scss';
import description_image from '../assets/images/pexels-shane-aldendorff-1135453.jpg';
import isElementTotallyVisible from '../animations/aboutUsImg.js';

const AboutUsComponent = () => {
	const [positionV, setPositionV] = React.useState();

	return (
		<div className='container-fluid flex-sm-row justify-content-center align-content-center p-0   '>
			<div
				className='col-12 about_us_container container'
				data-bs-spy='scroll'
				data-bs-target='#navId'>
				<img
					id='about_us_img'
					data-aos='fade-up'
					data-aos-easing='ease-in-out'
					className=''
					tabindex='0'
					src={description_image}
					align='center'
					width={'100%'}
					alt=''
				/>

				<h2>Acerca de Nosotros</h2>

				<p>
					{' '}
					Stixcp somos un equipo profesional de ingenieros y técnicos ubicados
					en La Habana. Nuestra organización tiene como función principal la
					instalación de Sistemas de Seguridad Electrónica y Domótica. Nos
					especializamos en la instalación, reparación y mantenimiento de
					Sistemas de Videovigilancia profesionales, Sistemas de Alarma
					anti-intrusos, Sistemas de Detección Perimetral, Control de Accesos,
					Sistemas de Análisis de Video, Bloqueo y Barreras Vehiculares,
					Conexiones Inalámbricas y Comunicaciones IP. &nbsp;
				</p>
				<br></br>
				<br></br>
				<p>
					{' '}
					Contamos con más de 10 años de experiencia en el sector, llevamos
					hasta su empresa y hogar la tranquilidad de disfrutar un espacio
					protegido. Hemos desarrollados diversos proyectos tanto para
					organizaciones y empresas estatales como para negocios privados y
					seguridad doméstica.{' '}
				</p>
			</div>
		</div>
	);
};

export default AboutUsComponent;
