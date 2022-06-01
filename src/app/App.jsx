import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home'
import Products from '../containers/Products';
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs'
import '../styles/App.css';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
        </Layout>
    )
}

export default App