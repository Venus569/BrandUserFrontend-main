import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react'

//user.name

const Protected = ({ children }) => {
const user = useSelector((state) => state.userReducer);

    const isLoggedIn=user.isAuthenticated;
 if (!isLoggedIn) {
 return <Navigate to="/" replace />;
 }
 return children;
};
export default Protected;