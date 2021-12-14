import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import './style.module.scss'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/services' element={<Home />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
