import React from 'react'
import img1 from '../../assets/img/login.png';
import { Link, useNavigate } from 'react-router-dom';

export const SignupBlock = () => {
  const [userDetails, setUserDetails] = React.useState({username: '', email: '', password: '', 'confirm-password': ''});
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
    const userData = await fetch('/api/creator/signup', {
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

    if(user) nevigate('/home')
  }

  return (
    <div>
        <section class="login-sec pt-120 pb-120">
        <div class="container">
            <div class="account-wrapper">
                <div class="row g-0">
                    <div class="col-lg-6">
                        <div class="login-content" style={{ backgroundImage: `url(${img1})`}}>
                            <div class="description text-center">
                                <h2>Welcome Back!</h2>
                                <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login-form">
                            <h2>Sign Up</h2>
                            <form method="post">
                                <div class="input-group input-group-two mb-20">
                                    <input type="text" onChange={handleChange} placeholder="Full Name" name="username"/>
                                </div>
                                <div class="input-group input-group-two mb-20">
                                    <input type="email" onChange={handleChange} placeholder="Email" name="email"/>
                                </div>
                                <div class="input-group input-group-two mb-30">
                                    <input type="password" onChange={handleChange} placeholder="Password" name="password"/>
                                </div>
                                <div class="input-group input-group-two mb-30">
                                    <input type="password" onChange={handleChange} placeholder="Confirm Password" name="confirm-password"/>
                                </div>
                                <a href="register.html#">Forgot Password?</a>
                                <button onClick={handleClick} class="main-btn btn-filled mt-20 login-btn">Signup</button>
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
                                <p>Already have an Account?
                                <Link to='/login' class="d-inline-block">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
