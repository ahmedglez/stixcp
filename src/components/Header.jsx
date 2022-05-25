import React from 'react';
import logo from '../assets/images/logo.jpeg'
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import '../styles/Header.scss'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand col rounded" href="#">
                    <img class='col-4' src={logo} alt="Stixcp Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Productos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" >Servicios</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Vigilancia y Seguridad</a>
                                <a class="dropdown-item" href="#">Control de Accesos</a>
                                <div class="dropdown-divider">Domotica y Comunicaciones</div>
                                <a class="dropdown-item" href="#">Domotica: Casa Inteligente</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Quiénes somos?</a>
                        </li>
                        <li class="nav-item" id='contact'>
                            <a class="nav-link">Contactar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;