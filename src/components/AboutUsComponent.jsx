import React from 'react';
import '../styles/AboutUsComponent.scss'

const AboutUsComponent = () => {
    return (
        <div className='about-us-component container'>
            <p className='about-us-component-title' >Acerca de Nosotros</p>
            <p className='about-us-component-description'>
                Nuestra principal función es el Servicios de Instalación de Sistemas de
                Seguridad Electrónica. Llevamos hasta su empresa y hogar la tranquilidad
                de disfrutar un espacio protegido. Todos nuestros servicios están
                garantizados con un seguimiento para su posterior mantenimiento, labor
                que etenderá la vida útil de sus equipos y el buen funcionamiento de los
                sitemas instalados.
            </p>
            <button type="button" id='about-us-component-button' class="btn btn-outline-secondary">Más información</button>
        </div>
    );
};

export default AboutUsComponent;
