import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import SuccessPage from './Pages/Success';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/hot-drink">
    <Routes>
      <Route index element={  <Home />}></Route>
      <Route path='/contact' element={  <Contact />}></Route>
      <Route path='/products' element={  <Products />}></Route>
      <Route path='/products/:id' element={  <SingleProduct />}></Route>
      <Route path='/cart' element={  <Cart />}></Route>
      <Route path='/checkout' element={  <Checkout />}></Route>
      <Route path='/success' element={  <SuccessPage />}></Route>
    </Routes>
  
    </BrowserRouter>
  
);

