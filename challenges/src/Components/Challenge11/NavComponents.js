import React from 'react';
import {Link, BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';
import { LoginPage } from '../../Challenge12/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';



export const NavComponent =()=>{
    return (
        <div className="">
        <nav className="flex align-middle bg-blue-500 px-2 py-3 space-x-4">
          <div className='flex gap-2 pt-1'>
            <a href="./home" className="text-white hover:text-blue-700">Home</a>
            <a href="./login" className="text-white hover:text-blue-700">Login</a>
            <a href="./about" className="text-white hover:text-blue-700">About</a>
          </div>
          <div className='flex w-full pr-10 justify-center justify-center'>
            <h1 className="text-white text-2xl font-bold">Main App</h1>
          </div>
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