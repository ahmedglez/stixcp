import React from 'react';
import '../styles/AboutUsComponent.scss'
import description_image from '../assets/images/pexels-shane-aldendorff-1135453.jpg'
import isElementTotallyVisible from '../animations/aboutUsImg.js'

const AboutUsComponent = () => {
    const [positionV, setPositionV] = React.useState()




    return (
        <div className="container-fluid flex-sm-row justify-content-center align-content-center p-0 ">

            <div className="col-12 about_us_container container  " data-bs-spy="scroll" data-bs-target="#navId"  >
                <img id='about_us_img' data-aos="fade-up" data-aos-easing='ease-in-out' className='' tabindex="0" src={description_image} align='center' width={'100%'} alt="" />

                <h2>Nuestra principal función</h2>

                <p> Servicios de Instalación de Sistemas de Seguridad Electrónica.
                    Llevamos hasta su empresa y hogar la
                    tranquilidad de disfrutar un espacio
                    protegido.
                    Todos nuestros servicios están
                    garantizados con un seguimiento para
                    su posterior mantenimiento, labor que
                    extenderá la vida útil de sus equipos y
                    el buen funcionamiento de los
                    sistemas instalados.</p>
                <p>Ofrecemos un sistema de gestión de
                    seguridad, basado fundamentalmente en el
                    diagnóstico e instalación de Sistemas de
                    Seguridad Electrónica. </p>
               


            </div>
        </div>

    );
};

export default AboutUsComponent;
