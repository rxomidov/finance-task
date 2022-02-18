import {Navigate, Outlet} from "react-router-dom";
import React from "react";
// import {useSelector} from "react-redux";

const ProtectedRoute = () => {

    const token = localStorage.getItem("token");
    // const loginState = useSelector((state) => state.login.loginSuccess);

    return token ? <Outlet /> : <Navigate to="/login"/>;
};

export default ProtectedRoute;