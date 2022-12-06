import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Bot from "./pages/Bot/bot";
import Toolbar from "./pages/Admin/toolbar";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="h-screen v-screen">
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/bot" element={<Bot />} />
          <Route path="/admin" element={<Admin />}>
            {/* <Route path="general_setting" element={<General_Setting />} /> */}
            {/* <Route path="/admin" element={<Home />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
