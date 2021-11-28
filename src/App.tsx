import React from 'react';
import {  BrowserRouter,  Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/auth/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={< LoginPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
