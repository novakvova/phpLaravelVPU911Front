import React from 'react';
import {  BrowserRouter,  Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/auth/Login';
import NoMatch from './components/NoMatch';
import HomePage from './components/Home';
import DefaultLayout from './components/containers/DefaultLayout';
import ProductsListPage from './components/products/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="products" element={<ProductsListPage/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
