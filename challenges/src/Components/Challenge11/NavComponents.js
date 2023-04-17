import React from 'react';
import {Link, BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';



export const NavComponent =()=>{
    return (
        <div className="bg-blue-500">
        <h1 className="text-2xl font-bold">Main App</h1>
        <nav className="flex space-x-4">
          <a href="./home" className="text-blue-500 hover:text-blue-700">Home</a>
          <a href="./login" className="text-blue-500 hover:text-blue-700">Login</a>
          <a href="./about" className="text-blue-500 hover:text-blue-700">About</a>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/about" />} />
          </Routes>
        </BrowserRouter>
      </div>
  
    )
}