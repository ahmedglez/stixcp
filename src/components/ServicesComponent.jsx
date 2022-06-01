import React from 'react';
import '../styles/ServicesComponent.scss';
import cameraicon from '../assets/icons/security/icons8-pincode-keyboard-64.png';
import alarmicon from '../assets/icons/security/icons8-siren-50.png';
import ipcameraicon from '../assets/icons/security/icons8-wall-mount-camera-64.png';

import videoportero from '../assets/icons/access_control/video_door_bell.png'
import puertas_garaje from '../assets/icons/access_control/garaje_doors.png'
import cerradura from '../assets/icons/access_control/door_lock.png'

import voip from '../assets/icons/communications/voip.png';
import wifi from '../assets/icons/communications/wifi.png'
import lan from '../assets/icons/communications/lan.png'

import instalacion_electrica from '../assets/icons/electricity/electr_instalation.png'
import mantenimiento_electrico from '../assets/icons/electricity/mant_elect.png';
import luces from '../assets/icons/electricity/luminarias.png'

import ServiceItem from './ServiceItem';

const ServicesComponent = () => {
    return (
        <div className='services container-fluid'>
            <div className='services-container flex-lg-row flex-md-row flex-sm-column justify-content-around flex-lg-wrap flex-md-wrap pt-lg-5 pt-md-5 pt-sm-2'>
                <ServiceItem
                    title={'Vigilancia y Seguridad'}
                    icon1={cameraicon}
                    icon2={alarmicon}
                    icon3={ipcameraicon}
                    li1={'Cámaras de vigilancia'}
                    li2={'Alarma contra intrusos'}
                    li3={'Cámaras Wifi'}
                />
                <ServiceItem
                    title={'Control de accesos'}
                    icon1={videoportero}
                    icon2={puertas_garaje}
                    icon3={cerradura}
                    li1={'Videoportero'}
                    li2={'Automatización de puertas de garaje'}
                    li3={'Cerradura eléctrica'}
                />
                <ServiceItem
                    title={'Comunicaciones y Redes'}
                    icon1={voip}
                    icon2={wifi}
                    icon3={lan}
                    li1={'Telefonía IP'}
                    li2={'Comunicaciones vía WIFI'}
                    li3={'Red de Área Local'}
                />
                <ServiceItem
                    title={'Instalación Eléctrica y Luminaria'}
                    icon1={instalacion_electrica}
                    icon2={mantenimiento_electrico}
                    icon3={luces}
                    li1={'Instalación de sistemas eléctricos'}
                    li2={'Instalación y comercialización de luminarias'}
                    li3={'Manenimiento de sistemas eléctricos'}
                />

            </div>
            <div className='services-smarthome'></div>

        </div>
    );
};

export default ServicesComponent;
