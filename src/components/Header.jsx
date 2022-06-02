import React from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import phoneIcon from '../assets/icons/phone-solid.svg'
import barras from '../assets/icons/bars-solid.svg'
import '../styles/Header.scss'



const Header = () => {
    return (
        <React.Fragment>
        <nav class="navbar" id='navbar'>
            
            <div class="container-fluid justify-content-between p-0">

                <button class="navbar-toggler p-0 col-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span id='collapse-button' class="navbar-toggler-icon align-content-center align-self-center"> <img src={barras} alt="" align='middle' /></span>
                </button>


                <Link class="navbar-brand   col-auto m-0 " to={'/'}>
                    <img id='logo' src={logo} align="right" />
                </Link>

                <Link class='col-auto phone_link' to='/contact'>
                    <img id='phone-icon' src={phoneIcon} align='middle' alt="" />
                </Link>


            </div>
            
        </nav>
        <div class="collapse navbar-collapse align-content-start" id="navbarNav">
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item nav-link">
                <Link class="nav-link" to='/'>Inicio</Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to='/products' >Productos</Link>
            </li>

            <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/services'>Servicios</Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to='/services/vigilancy-security'>Vigilancia y Seguridad</Link>
                    <Link class="dropdown-item" to='/services/access-control'>Control de Accesos</Link>
                    <Link class="dropdown-item" to='/services/domotic-communications'>Domotica y Comunicaciones</Link>
                    <Link class="dropdown-item" to='/services/smart-house'>Domotica: Casa Inteligente </Link>
                </div>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to='/about'>Quiénes somos?</Link>
            </li>

            <li class="nav-item" id='contact'>
                <Link class="nav-link" to='/contact'>Contactar</Link>
            </li>
        </ul>
    </div>
    </React.Fragment>
    );
};

export default Header;