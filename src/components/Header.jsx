import React from 'react';
import logo from '../assets/images/logo.png'
import '../styles/Header.scss'
import { Link } from 'react-router-dom';
import phoneIcon from '../assets/icons/phone-solid.svg'

const Header = () => {
    return (
        <nav class="navbar" id='navbar'>
            <div class="container-fluid justify-content-between">

                <button class="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <div>
                   <span id='collapse-button' class="navbar-toggler-icon"></span>
                   </div>
                </button>
                <Link class="navbar-brand   col-2 " to={'/'}>
                    <img src={logo} alt="Stixcp Logo" />
                </Link>

                <Link class='col-2 phone_link' to='/contact'>
                <img id='phone-icon' src={phoneIcon} alt="" />
                </Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/'>Inicio</Link>
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
            </div>
        </nav>
    );
};

export default Header;