import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
const axios = require('axios');
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {changeLoginSuccess} from '../../../actions/changeLoginSuccess'

export const LoginBlock = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);


  const [userDetails, setUserDetails] = React.useState({email: '', password: ''});
  const nevigate = useNavigate();
  function handleChange(e){
    const {name, value} = e.target;
    setUserDetails(userDetails => {
        return {
            ...userDetails,
            [name]: value
        }
    });
  }
  async function handleClick(e){
    e.preventDefault();
    console.log(userDetails);
    /*const userData = await fetch('/api/creator/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });

    const user = await userData.json();

    console.log(user);

    if(user) nevigate('/home')*/

    axios.post('http://localhost:3000/api/employer/login', userDetails)
    .then(function (response) {
      // handle success
      console.log(response);
      const user=JSON.stringify(response);
    
      if(response.data){ console.log("our user",response.data.name)};
      dispatch(changeLoginSuccess(response.data));

      const x =JSON.stringify(response.data);
      console.log("strigy",x);
      localStorage.setItem('userlogintoken', x);

      
      if(response.data) nevigate('/brandlanding');


      /*console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )*/
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setShow(true);
      console.log(show);
      //const myTimeout = setTimeout(setShow(false), 3000);

    })
    .then(function () {
      
      //console.log("printing array 1",Array);
      //console.log("printing number",name);
      // always executed
    });
    
  }
  /* useEffect(() => {
  
    instance.get('/')
    .then(function (response) {
      // handle success
      //console.log(response);
      console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      console.log("printing array 1",Array);
      console.log("printing number",name);
      // always executed
    });
    
    
    
  },[]);*/
  
  return (
    <>
        <div class="brand-login-container">
        {(show)&&

<div class="alert alert-danger text-center" role="alert">
ERROR.PLEASE TRY AGAIN

</div>}
        <div class=" brand-login-logo">                
        <div class=" site-logo site-logo-text">
              <a href="index-4.html">
               <i class="flaticon-video-camera"></i>
               <div class="site-logo-text">
                <h3>BrandUp</h3>
                <h7 style={{fontSize:"20px"}}>Influencer site</h7>
              </div>
            </a>
          </div>
          </div>
                        <div class="brand-login-form">
                            <h2>Brand Log in</h2>
                            <form onSubmit={handleClick}>
                                <div class="brand-input-group input-group-two mb-20">
                                    <input onChange={handleChange} value={userDetails.email} type="email" placeholder="Email" name="email" required/>
                                </div>
                                <div class="brand-input-group input-group-two mb-30">
                                    <input onChange={handleChange} value={userDetails.password} type="password" placeholder="Password" name="password" required/>
                                </div>
                                <a href="brand-login.html#">Forgot Password?</a>
                                <button type="submit"  class="brand-main-btn btn-filled mt-20 login-btn">Login</button>
                                <Link to='/creatorlogin' class='mt-10'>Not a recruiter?Login to your Creator Account</Link>
                                <div class="form-seperator">
                                    <span>OR</span>
                                </div>
                                <div class="social-buttons">
                                    {/* <button type="button" class="main-btn btn-border facebook mb-20">
                                        <i class="fab fa-facebook-f"></i>
                                         Continue with Facebook
                                    </button> */}
                                    <button class="brand-main-btn btn-filled mb-30">
                                        <i class="fab fa-google"></i>
                                         Continue with Google
                                    </button>
                                </div>
                                <p>Don't have an Account?
                                <Link to="/brandsignup" class="d-inline-block">Create One</Link>
                                </p>
                            </form>
                        </div>

                        
                        <footer class="footer-two">
                        <div class="copyright-area pt-30 pb-30">
     
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5 order-2 order-md-1">
              <p class="copyright-text copyright-two">Copyright By@<a href="influencer-profile.html#">Example</a> - 2022</p>
            </div>
            <div class="col-lg-6 col-md-7 order-1 order-md-2">
              <div class="footer-menu text-center text-md-right">
                <ul>
                  <li><a href="influencer-profile.html#">Terms of use</a>
                  </li>
                  <li><a href="influencer-profile.html#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      
     
      </footer>  
        
      </div> 
    </>
  )
}
