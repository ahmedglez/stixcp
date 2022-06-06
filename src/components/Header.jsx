import React from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import phoneIcon from '../assets/icons/phone-solid.svg'
import barras from '../assets/icons/bars-solid.svg'
import '../styles/Header.scss'
import '../animations/burguerMenu.scss'



const Header = () => {

    const handleClick = () => {
        const NavMenu =  document.getElementById('navMenu');
        NavMenu.classList.toggle('active');
    }
    return (
        <React.Fragment>
            <nav class="navbar navbar" id='navbar'>

                <div class="container-fluid justify-content-between p-0">



                <Link class="navbar-brand   col-auto m-0 " to={'/'}>
                        <img id='logo' src={logo} align="right" />
                    </Link>


                    <div class="navbar-toggler p-0 col-auto "  id='navMenu' onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>


                   



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
                        <Link class="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/services'>Servicios</Link>                        
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