import React from 'react';

export const FooterSubscibeArea = () => {
  return (
   <>
   <footer class="footer-two">
         <div class="footer-subscibe-area style-2 pt-50 pb-50">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-3">
              <div class="subscribe">
                <h3 class="mb-0 text-black">Subscribe</h3>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="subscribe-text">
                <form action="#" class="subscribe-form">
                  <div class="row">
                    <div class="col-lg-4 col-md-4">
                      <input type="text" placeholder="Your name"/>
                    </div>
                    <div class="col-lg-5 col-md-5">
                      <input type="email" placeholder="Your email"/>
                    </div>
                    <div class="col-lg-3 col-md-3">
                      <button type="submit" class="main-btn btn-filled">subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-widget-area pt-100 pb-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 order-1">
              {/*-- Site Info Widget --*/}
              <div class="widget site-info-widget mb-50">
                <div class="site-logo footer-logo site-logo-text mb-50">
                  <a href="index.html">
                   <i class="flaticon-video-camera"></i>
                    <div class="site-logo-text">
                      <h3>Fansbase</h3>
                      <h6>Influencer site</h6>
                    </div>
                  </a>
                </div>
                <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed doing eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi.</p>
                <div class="social-links mt-40"> <a href="influencer-profile.html#"><i class="fab fa-facebook-f"></i></a>
                  <a href="influencer-profile.html#"><i class="fab fa-twitter"></i></a>
                  <a href="influencer-profile.html#"><i class="fab fa-behance"></i></a>
                  <a href="influencer-profile.html#"><i class="fab fa-linkedin"></i></a>
                  <a href="influencer-profile.html#"><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-3 order-lg-2">
             {/*-- Nav Widget --*/}
              <div class="widget nav-widget mb-50">
                <div>
                  <h4 class="widget-title">Helpful Links</h4>
                  <ul>
                    <li><a href="influencer-profile.html#">Trending Now</a>
                    </li>
                    <li><a href="influencer-profile.html#">Courts Near me</a>
                    </li>
                    <li><a href="influencer-profile.html#">Huge Nob   </a>
                    </li>
                    <li><a href="influencer-profile.html#">Hot Girls</a>
                    </li>
                    <li><a href="influencer-profile.html#">Maternity</a>
                    </li>
                    <li><a href="influencer-profile.html#">Annual Earning</a>
                    </li>
                    <li><a href="influencer-profile.html#">view Profiles</a>
                    </li>
                    <li><a href="influencer-profile.html#">Cyber Crypto</a>
                    </li>
                    <li><a href="influencer-profile.html#">Find Influencer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 order-2 order-lg-3">
              {/*-- Contact Widget --*/}
              <div class="widget contact-widget mb-50">
                <h4 class="widget-title">Contact Us.</h4>
                <div class="contact-lists">
                  <div class="contact-box">
                    <div class="icon"> <i class="flaticon-phone"></i>
                    </div>
                    <div class="desc">
                      <h6 class="title">Phone Number</h6>
                      +987 876 765 76 577
                    </div>
                  </div>
                  <div class="contact-box">
                    <div class="icon"> <i class="flaticon-message"></i>
                    </div>
                    <div class="desc">
                      <h6 class="title">Email Address</h6>
                      <a href="influencer-profile.html#">info@webmail.com</a>
                    </div>
                  </div>
                  <div class="contact-box">
                    <div class="icon"> <i class="flaticon-location-pin"></i>
                    </div>
                    <div class="desc">
                      <h6 class="title">Office Address</h6>
                      14/A, Miranda City, NYC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
   </>
  )
}
