import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Demo } from './Demo';
import { Parent } from './Parent';
import { Profilecards } from './Profilecards';
import { Profile } from './Profile';
//import  TaskList  from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Demoboot } from './Demoboot';
import LandingPage from './Laptoptask';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage/>
    {/* <Parent/> /}
    {/ <App />     */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
