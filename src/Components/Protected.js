/*import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import React from 'react'
import {changeLoginSuccess} from '../actions/changeLoginSuccess'



//user.name

const Protected = ({ children }) => {
const user = useSelector((state) => state.userReducer);
const nevigate = useNavigate();
const dispatch = useDispatch();
var y={};
var x=localStorage.getItem('userlogintoken');
     console.log("user token");
      console.log(x);

      if(!x)
    {
      nevigate('/creatorlogin');
    }
    else{
      y=JSON.parse(x);
    dispatch(changeLoginSuccess(y));
    }

    const isLoggedIn=user.isAuthenticated;
 if (!isLoggedIn) {
 return <nevigate to="/" replace />;
 }
 return children;
};
export default Protected;*/
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