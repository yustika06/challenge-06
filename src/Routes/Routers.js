import React from "react";
import { Routes, Route, Link, useHref } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { PageAdmin } from "../Pages/PageAdmin/PageAdmin";
import { Pageuser } from "../Pages/PageUser/Pageuser";
import { Register } from "../Pages/Register/Register";

export const Routers = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="PageAdmin" element={<PageAdmin />} />
          <Route path="Pageuser" element={<Pageuser/> } />
        </Routes>
    </div>
  );
};
