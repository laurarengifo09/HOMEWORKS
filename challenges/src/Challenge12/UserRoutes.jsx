import React from "react";
import { Routes, Route } from "react-router";
import { AboutPage } from "../Components/pages/AboutPage";
import { HomePage } from "../Components/pages/HomePage";

export const UserRoutes =()=>{
    return<>
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<AboutPage />} />
        </Routes>
    </>
}