import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {changeLogout} from '../../actions/changeLogout'


export const NavBar2 = () => {
  const user = useSelector((state) => state.userReducer);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout=()=>{
    dispatch(changeLogout());
    nevigate('/creatorlogin');
  }
  return (
    <nav>
    <header class="header-three header-absolute sticky-header sigma-header">
      <div class="header-top">
        <div class="container-fluid container-custom-three">
          <div class="d-flex align-items-center justify-content-between">
            <p class="welcome-text">
                <a href="image-style-2.html#"> sdsd</a>
            </p>
            <form class="sigma_search-form">
              <input type="text" placeholder="Search Videos" />
              <span class="icon">
                <i class="flaticon-video-camera d-none d-sm-block mr-2"></i>
                <i class="fal fa-angle-down d-none d-sm-block"></i>
              </span>
              <button type="submit">
                <i class="far fa-search"></i>
              </button>
            </form>
            <ul class="header-top-info d-none d-md-block">
              <li class="d-flex align-items-center">
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-menu-area sticky-header">
        <div class="container-fluid container-custom-three">
          <div
            class="nav-container d-flex align-items-center justify-content-between"
          >
          
            <div class="site-logo site-logo-text">
              <a href="index.html">
                <i class="flaticon-video-camera"></i>
                <div class="site-logo-text">
                  <h3>Fansbase</h3>
                  <h6>Influencer site</h6>
                </div>
              </a>
            </div>
          
            <div
              class="nav-menu d-lg-flex align-items-center justify-content-between"
            >
            
              <div class="navbar-close">
                <div class="cross-wrap">
                  <span class="top"></span><span class="bottom"></span>
                </div>
              </div>
              
              <div class="sigma-header-nav">
                <div class="container">
                  <div class="sigma-header-nav-inner">
                    <nav>
                      <ul class="sigma-main-menu">
                       
                        
                        <li class="menu-item">
                          <Link to="/profile"> welcome back {user.user.name} </Link>
                        </li>
                       
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="menu-right-buttons">
              
              <div class="login-btn">
                <a href="login.html" id="loginBtn"
                  ><i class="fal fa-user"></i>
                </a>
              </div>
              
              <div class="toggle">
                <a
                  ><i class="fal fa-bars"></i>
                </a>

               {/* <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>*/}
              </div>
              <div>
              <button className='main-btn btn-unfilled'  onClick={handleLogout}>LOGOUT</button>
              </div>
              

              <div class="navbar-toggler">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="sigma-mobile-header">
        <div class="container">
          <div class="sigma-mobile-header-inner">
           
            <div class="site-logo site-logo-text">
              <a href="index.html">
                <i class="flaticon-video-camera"></i>
                <div class="site-logo-text">
                  <h3>Fansbase</h3>
                  <h6>Influencer site</h6>
                </div>
              </a>
            </div>
            <div class="sigma-hamburger-menu">
              <div class="sigma-menu-btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
     
    </header>
    </nav>
  )
}
