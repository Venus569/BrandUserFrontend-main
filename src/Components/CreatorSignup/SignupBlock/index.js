import React from 'react'
import img1 from '../../assets/img/login.png';
import { Link, useNavigate } from 'react-router-dom';

const axios = require('axios').default;


export const SignupBlock = () => {
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









  
  /*
  async function handleClick(e){
    e.preventDefault();
    console.log(userDetails);
    const userData = await fetch('/api/creator/login', {
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
  }*/
  
  function handleClick(e){
    e.preventDefault();
    console.log(userDetails);
    
    /*const userData = await fetch('/api/creator/', {
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

    axios.post('http://localhost:3000/api/creator', userDetails)
    .then(function (response) {
      // handle success
      console.log(response);
      const user=JSON.stringify(response);
      if(user) nevigate('/creatorlogin');
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
                    <h2>Creator Sign Up</h2>
                    <form onSubmit={handleClick}>
                    <div class="input-group input-group-two mb-20">
                                    <input type="text" onChange={handleChange} placeholder="Full Name" name="name" required/>
                                </div>
                                <div class="input-group input-group-two mb-20">
                                    <input type="email" onChange={handleChange} placeholder="Email" name="email" required/>
                                </div>
                                <div class="input-group input-group-two mb-30">
                                    <input type="password" onChange={handleChange} placeholder="Password" name="password" required/>
                                </div>
                               {/* <div class="input-group input-group-two mb-30">
                                    <input type="password" onChange={handleChange} placeholder="Confirm Password" name="confirm-password" required/>
  </div>*/}
                        <a href="login.html#">Forgot Password?</a>
                        <button type="submit" class="main-btn btn-filled mt-20 login-btn">Sign Up</button>
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
                        <Link to="/signup" class="d-inline-block">Create One</Link>
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
/*<div class="input-group input-group-two mb-20">
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
                                </div>*/