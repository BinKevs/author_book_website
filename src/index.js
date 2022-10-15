import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blogs from './views/Blogs';
import Layout from './views/Layout';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<App />}/>
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
