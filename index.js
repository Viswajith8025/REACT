import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import New from "./New";
import { Work1 } from "./Task2";
import { BrowserRouter, Route, Routes, UNSAFE_ErrorResponseImpl } from "react-router-dom";
import SignUpPage from "./Signup";
import HomePage from "./Home";
import LoginPage from "./Login";
import Homee from "./Homee";
import About from "./About";
import Contact from "./Contact";
import { Count } from "./Count";
import { Togglebgcolor } from "./Toggle";
import { Bg } from "./Toggle2";
import { Effect } from "./Effect";
import { Datafetching } from "./Fetch";
import { Api } from "./Api";
import TodoList from "./Todoapi";
import { Newapp } from "./Newapp";
import { Netflix} from "./Netflix";
import { Detail } from "./Detail";
import { WeatherApp } from "./Weather";
import { Formset } from "./Form";
import Key from "./Key";
import UserRole from "./Rendering/UserRole";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/new" element={<New />}></Route>
        <Route path="/task2" element={<Work1 />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/home2" element={<Homee />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/count" element={<Count />}></Route>
        <Route path="/toggle" element={<Togglebgcolor />}></Route>
        <Route path="/toggle2" element={<Bg />}></Route>
        <Route path="/effect" element={<Effect />}></Route>
        <Route path="/fetch" element={<Datafetching />}></Route>
        <Route path="/api" element={<Api />}></Route>
        <Route path="/todo" element={<TodoList/>}></Route>
        <Route path="/Newapp" element={<Newapp/>}></Route>
        <Route path="/netflix" element={<Netflix/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/weather" element={<WeatherApp/>}></Route>
        <Route path="/form" element={<Formset/>}></Route>
        <Route path="/key" element={<Key/>}></Route>
        <Route path="/userrole" element={<UserRole/>}></Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
