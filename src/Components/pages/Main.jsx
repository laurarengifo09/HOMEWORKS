import { BrowserRouter } from "react-router-dom";
import {MainApp} from './09-useContext/MainApp'
import React from "react";
import { ReactDOM } from "react";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <MainApp />
    </BrowserRouter>
)