import React from 'react';
import {Link, BrowserRouter,Route, Routes, Navigate} from 'react-router-dom';
import { LoginPage } from '../../Challenge12/LoginPage';
import { PrivateRoutes } from '../../Challenge12/PrivateRoutes';
import { UserRoutes } from '../../Challenge12/UserRoutes';
import { useNavigate } from "react-router";

export const NavComponent =()=>{
  return (
      <div className="">
      <BrowserRouter>
            <Routes>  
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={
            <PrivateRoutes>
            <UserRoutes />
          </PrivateRoutes>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}