import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './landing_page/Navbar';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';

import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<HomePage />}></Route>
     <Route path="/signup" element = {<Signup />}></Route>
     <Route path="/about" element = {<AboutPage />}></Route>
      <Route path="/product" element = {<ProductPage />}></Route>
      <Route path="/pricing" element = {<PricingPage />}></Route>
         <Route path="/support" element = {<SupportPage />}></Route>
         <Route path='*' element= {<NotFound/>}/>
    {/* 2
    <AboutPage />
    3
    <PricingPage />
    4
    <ProductPage />
    5
    <Signup />
    6
    <SupportPage /> */}
    </Routes>
     <Footer/>
  </BrowserRouter>
);
