//creator login
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import {changeLoginSuccess} from '../../../actions/changeLoginSuccess'
import { GoogleLogin } from 'react-google-login';

//import axios from 'axios';

const axios = require('axios');

export const LoginBlock = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  
const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
}

  //<button onClick={ ()=>{dispatch(changeLoginSuccess(response.data))}}>click here</button>





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
    /*const userData = await fetch('http://localhost:3000/api/creator/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });

    const user = await userData.json();

    console.log("user",user);

    if(user) nevigate('/home')*/

    axios.post('http://localhost:3000/api/creator/login', userDetails)
    .then(function (response) {
      // handle success
      console.log(response);
      const user=JSON.stringify(response);
      console.log(typeof(response))
      //console.log(typeof(user))

      if(response.data){ console.log("our user",response.data.name)};
      dispatch(changeLoginSuccess(response.data));
      const x =JSON.stringify(response.data);
      console.log("strigy",x);
      localStorage.setItem('userlogintoken', x);
      if(response.data) nevigate('/creatorlanding');
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
    })
    .then(function () {
      
      //console.log("printing array 1",Array);
      //console.log("printing number",name);
      // always executed
    });
    
    
    


  }
  return (
    <>
        <div class="login-container">

        {(show)&&

        <div class="alert alert-danger text-center" role="alert">
  ERROR.TRY AGAIN
    
    </div>}



        <div class=" login-logo">    
        
                        
        <div class=" site-logo site-logo-text">
              <a href="index-4.html">
               <i class="flaticon-video-camera"></i>
               <div class="site-logo-text">
                <h3>BrandUp</h3>
                <h6>Influencer site</h6>
              </div>
            </a>
          </div>
          </div>
                        <div class="login-form">
                            <h2>Creator Log in</h2>
                            <form onSubmit={handleClick}>
                                <div class="input-group input-group-two mb-20">
                                    <input onChange={handleChange} value={userDetails.email} type="email" placeholder="Email" name="email" required/>
                                </div>
                                <div class="input-group input-group-two mb-30">
                                    <input onChange={handleChange} value={userDetails.password} type="password" placeholder="Password" name="password" required/>
                                </div>
                                <Link to='/creatorlogin'>Forgot Password?</Link>
                               
                                <button type="submit" class="main-btn btn-filled mt-20 login-btn">Login
                                </button>
                                <Link to='/brandlogin' class='mt-10'>Not a creator?Login to your Brand Account</Link>
                                                                
                                <div class="form-seperator">
                                    <span>OR</span>
                                </div>
                                <div class="social-buttons">
                                    {/* <button type="button" class="main-btn btn-border facebook mb-20">
                                        <i class="fab fa-facebook-f"></i>
                                         Continue with Facebook
                                    </button> */}
                                    <button class="main-btn btn-filled mb-30">
                                        <i class="fab fa-google"></i>
                                         Continue with Google
                                    </button>
                                </div>
                                <p>Don't have an Account?
                                <Link to="/creatorsignup" class="d-inline-block">Create One</Link>
                                </p>
                            </form>
                        </div>

<div>google here <GoogleLogin
    clientId="412881566679-ed0od0s7smn3lne3g68phmquqrf6m2rj.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,</div>

                        
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
