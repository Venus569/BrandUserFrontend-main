import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
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
                          <Link to="/home"> Home </Link>
                        </li>
                        {/* <li class="menu-item menu-item-has-megamenu">
                          <a href="image-style-2.html#"> Categories </a>
                        </li> */}
                        <li class="menu-item">
                          <Link to="/videos">Videos</Link>
                        </li>
                        <li class="menu-item">
                          <Link to="/images">Images</Link>
                          
                        </li>
                        {/* <li class="menu-item">
                          <a href="image-style-2.html#"> Shop </a>  
                        </li> */}
                        <li class="menu-item">
                          <Link to="/profile"> Influencer </Link>
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
                  ><i class="fal fa-user"></i
                ></a>
              </div>
              
              <div class="toggle">
                <a href="image-style-2.html#" id="offCanvasBtn"
                  ><i class="fal fa-bars"></i
                ></a>
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
