import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from "react-redux";
import { store } from "./Components/Challenge14/store/store";
import { Registro } from "./Components/Registro";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Registro></Registro>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

