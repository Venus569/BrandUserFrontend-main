import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery'

import pro2 from '../../assets/img/influencers/profile/2.jpg';

import p1 from '../../assets/img/influencers/profile/p-1.jpg';
import p2 from '../../assets/img/influencers/profile/p-1.jpg';
import p3 from '../../assets/img/influencers/profile/p-1.jpg';
import p4 from '../../assets/img/influencers/profile/p-1.jpg';
import p5 from '../../assets/img/influencers/profile/p-1.jpg';

import authorSmall from '../../assets/img/author-small.png'

import av1 from '../../assets/img/blog-details/avatar-1.jpg';
import av2 from '../../assets/img/blog-details/avatar-1.jpg';
import av3 from '../../assets/img/blog-details/avatar-1.jpg';

import recent1 from '../../assets/img/recent-post-wid/04.png';
import recent2 from '../../assets/img/recent-post-wid/04.png';
import recent3 from '../../assets/img/recent-post-wid/04.png';

import insta1 from '../../assets/img/instagram-wid/01.jpg';
import insta2 from '../../assets/img/instagram-wid/02.jpg';
import insta3 from '../../assets/img/instagram-wid/01.jpg';
import insta4 from '../../assets/img/instagram-wid/02.jpg';
import insta5 from '../../assets/img/instagram-wid/01.jpg';
import insta6 from '../../assets/img/instagram-wid/02.jpg';
import insta7 from '../../assets/img/instagram-wid/01.jpg';
import insta8 from '../../assets/img/instagram-wid/02.jpg';
import insta9 from '../../assets/img/instagram-wid/01.jpg';

import banner1 from '../../assets/img/banner-widget.jpg';

import author from '../../assets/img/author.png';


      

export const BlogSection = () => {
  const progressbar=()=>{

    $(".sigma_progress").each(function() {
var progressBar = $(this).find(".progress-bar");
var progressCount = $(this).find(".sigma_progress-count");
$(progressBar).on('inview', function(event, isInView) {
if (isInView) {
$(progressBar).animate({
 width:$(progressBar).attr("aria-valuenow") + "%"
});
$(progressCount).animate({
 left:$(progressBar).attr("aria-valuenow") + "%"
});
}
});
});

  }
  useEffect(() => {

    progressbar();


    },[]);
    
  return (
    <><section class="blog-section influencer-profile pt-120 pb-120">
    <div class="container">
      <div class="row justify-content-center column-reverse">
        <div class="col-lg-8 col-md-10">
          <div class="blog-loop">
           
            <div class="post-box with-video mb-40">
              <div class="post-media">
                <img src={pro2} alt="Image"></img>
              </div>
              <div class="post-desc">
                <a href="influencer-profile.html#" class="cat">
                  Business
                </a>
                <h2>
                  <a href="influencer-profile.html#"> Dance Live.</a>
                </h2>
                <ul class="post-meta">
                  <li><a href="influencer-profile.html#"><i class="far fa-tags"></i>Criminal, Influencer</a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="far fa-link"></i>http://www.yourtheme.com</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>
            <div class="post-box mb-40">
              <div class="block-title">
                <h4>Skill</h4>
              </div>
              <div class="post-desc">
                <div class="progress-bars">
                  <div class="sigma_progress">
                    <h6>Genders</h6>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <span></span>
                      </div>
                    </div>
                    <div class="sigma_progress-count">
                      <span>70%</span>
                    </div>
                  </div>
                  <div class="sigma_progress">
                    <h6>Fantasies</h6>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                        <span></span>
                      </div>
                    </div>
                    <div class="sigma_progress-count">
                      <span>85%</span>
                    </div>
                  </div>
                  <div class="sigma_progress">
                    <h6>Erotic Massage</h6>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                        <span></span>
                      </div>
                    </div>
                    <div class="sigma_progress-count">
                      <span>55%</span>
                    </div>
                  </div>
                  <div class="sigma_progress">
                    <h6>Find Hot Profiles</h6>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                        <span></span>
                      </div>
                    </div>
                    <div class="sigma_progress-count">
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="post-box mb-40">
              <div class="block-title">
                <h4>Portfolio</h4>
              </div>
              <div class="post-desc p-0">
                <div class="row g-0">
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p1} alt="img"></img>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p2} alt="img"></img>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p3} alt="img"></img>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p4} alt="img"></img>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p5} alt="img"></img>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="portfolio-gallery">
                    <a href="assets/img/influencers/profile/p-1.jpg" class="portfolio-image popup-image d-block">
                      <img src={p5} alt="img"></img>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="post-box quote-post mb-40">
              <div class="post-desc">
                <h2>
                  <a href="influencer-profile.html#">Non-Diamond Gemstones for Engagement Rings.</a>
                </h2>
                <div class="post-footer">
                  <div class="author">
                    <a href="influencer-profile.html#" class="text-white">
                    <img src={authorSmall} alt="Image"></img>by Hetmayar</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box title-with-thumb mb-40">
              <div class="post-desc">
                <a href="influencer-profile.html#" class="cat">Businese</a>
                <h2>
                  <a href="blog-details.html">Culpa qui officia deserunt mollit animid est laborum. Sed ut perspiciatis</a>
                </h2>
                <ul class="post-meta">
                  <li><a href="influencer-profile.html#"><i class="far fa-eye"></i>232 Views</a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="far fa-comments"></i>35 Comments</a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="far fa-calendar-alt"></i>24th March 2022</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="news-details-box">
              <div class="comment-template">
                          <h3 class="box-title">03 Reviews</h3>
                          <ul class="comments-list mb-100">
                              <li>
                                  <div class="comment-img">
                                      <img src={av1} alt="img"></img>
                                  </div>
                                  <div class="comment-desc">
                                      <div class="desc-top">
                                          <h6>Rosalina Kelian</h6>
                                          <span class="date">19th May 2022</span>
                                          <div class="rating justify-content-center">
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-dark-white"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-dark-white"><i class="flaticon-hot-sale"></i></span>
                </div>
                                      </div>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          consequat.
                                      </p>
                                  </div>
                                  <ul class="children">
                                      <li>
                                          <div class="comment-img">
                                              <img src={av2} alt="img"></img>
                                          </div>
                                          <div class="comment-desc">
                                              <div class="desc-top">
                                                  <h6>Rosalina Kelian</h6>
                                                  <span class="date">19th May 2022</span>
                                                  <div class="rating justify-content-center">
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                </div>
                                              </div>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                  eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                  veniam,
                                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                  commodo
                                                  consequat.
                                              </p>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <div class="comment-img">
                                      <img src={av3} alt="img"></img>
                                  </div>
                                  <div class="comment-desc">
                                      <div class="desc-top">
                                          <h6>Rosalina Kelian</h6>
                                          <span class="date">19th May 2022</span>
                                          <div class="rating justify-content-center">
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                  <span class="text-red"><i class="flaticon-hot-sale"></i></span>
                </div>
                                      </div>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          consequat.
                                      </p>
                                  </div>
                              </li>
                          </ul>
                          <h3 class="box-title">Post Your Review</h3>
                          <div class="comment-form">
                              <form action="#">
                                  <div class="input-group input-group-two textarea mb-20">
                                      <textarea placeholder="Type your Review...."></textarea>
                                      <div class="icon"><i class="fas fa-pen"></i></div>
                                  </div>
                                  <div class="input-group input-group-two mb-20">
                                      <input type="text" placeholder="Type your Name...."/>
                                      <div class="icon"><i class="fas fa-user"></i></div>
                                  </div>
                                  <div class="input-group input-group-two mb-20">
                                      <input type="email" placeholder="Type your email...."/>
                                      <div class="icon"><i class="fas fa-envelope"></i></div>
                                  </div>
                                  <div class="input-group  mt-30">
                                      <button type="submit" class="main-btn btn-filled"><i class="far fa-comments"></i> Post
                                          Review</button>
                                  </div>
                              </form>
                          </div>
                      </div>
            </div>
          </div>
        </div>
        {/*-- Blog Sidebar--*/}
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div class="sidebar">
            {/*-- About Author Widget--*/}
            <div class="widget about-author-widget mb-40">
              <h5 class="widget-title">About Me</h5>
              <div class="author-box">
                <img src={author} alt="author"></img>
                <h6>Rosalina D. Willaimson</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul class="social-icon">
                  <li><a href="influencer-profile.html#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="fab fa-behance"></i></a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li><a href="influencer-profile.html#"><i class="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            {/*-- Search Widget --*/}
            <div class="widget search-widget mb-40">
              <h5 class="widget-title">Search Objects</h5>
              <form action="#">
                <input type="text" placeholder="Search your keyword..."/>
                <button type="submit"><i class="far fa-search"></i>
                </button>
              </form>
            </div>
            {/*-- Popular Post Widget --*/}
            <div class="widget popular-feeds mb-40">
              <h5 class="widget-title">Popular Feeds</h5>
              <div class="popular-feed-loop">
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={recent1} alt="Image"/>
                  </div>
                  <div class="feed-desc">
                    <h6><a href="blog-details.html">How Are Professional Influencers Trained?</a></h6>
                    <span class="time"><i class="far fa-calendar-alt"></i> 24th March 2022</span>
                  </div>
                </div>
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={recent2} alt="Image"></img>
                  </div>
                  <div class="feed-desc">
                    <h6><a href="blog-details.html">How Are Professional Influencers Trained?</a></h6>
                    <span class="time"><i class="far fa-calendar-alt"></i> 24th March 2022</span>
                  </div>
                </div>
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={recent3} alt="Image"></img>
                  </div>
                  <div class="feed-desc">
                    <h6><a href="blog-details.html">How Are Professional Influencers Trained?</a></h6>
                    <span class="time"><i class="far fa-calendar-alt"></i> 24th March 2022</span>
                  </div>
                </div>
              </div>
            </div>
            {/*--- Categories Widget --*/}
            <div class="widget categories-widget mb-40">
                      <h5 class="widget-title">Categories</h5>
                      <ul>
                         <li>
                            <a href="influencer-profile.html#">
                              <i class="flaticon-hot-sale"></i>
                              Realestate<span>26</span>
                            </a>
                         </li>
                         <li>
                            <a href="influencer-profile.html#">
                              <i class="flaticon-female-student"></i>
                              Rings<span>26</span>
                            </a>
                         </li>
                         <li>
                            <a href="influencer-profile.html#">
                              <i class="flaticon-video-camera"></i>
                              Hot Girls<span>32</span>
                            </a>
                         </li>
                         <li>
                            <a href="influencer-profile.html#">
                              <i class="flaticon-star"></i>
                              Necklace<span>40</span>
                            </a>
                         </li>
                         <li>
                            <a href="influencer-profile.html#">
                              <i class="flaticon-man"></i>
                              Medical<span>16</span>
                            </a>
                         </li>
                      </ul>
                   </div>
            {/*-- Social Icon Widget --*/}
            <div class="widget socail-widget mb-40">
              <h5 class="widget-title">Never Miss News</h5>
              <ul>
                <li><a href="influencer-profile.html#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li><a href="influencer-profile.html#"><i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="influencer-profile.html#"><i class="fab fa-behance"></i></a>
                </li>
                <li><a href="influencer-profile.html#"><i class="fab fa-linkedin"></i></a>
                </li>
                <li><a href="influencer-profile.html#"><i class="fab fa-pinterest"></i></a>
                </li>
              </ul>
            </div>
            {/*-- Twitter Feeds Widget --*/}
            <div class="widget twitter-feed-widget mb-40">
              <h5 class="widget-title">Twitter Feeds</h5>
              <div class="twitter-looop">
                <div class="single-twitter"> <a href="influencer-profile.html#">
                  Rescue - #Gutenberg ready @ wordpress Theme for Hot Girls Bloggers available on @
                  Template Monster 
                  </a>
                  <span class="date">September 12, 2022</span>
                </div>
                <div class="single-twitter"> <a href="influencer-profile.html#">
                  Rescue - #Gutenberg ready @ wordpress Theme for Hot Girls Bloggers available on @
                  Template Monster 
                  </a>
                  <span class="date">September 12, 2022</span>
                </div>
                <div class="single-twitter"> <a href="influencer-profile.html#">
                  Rescue - #Gutenberg ready @ wordpress Theme for Hot Girls Bloggers available on @
                  Template Monster 
                  </a>
                  <span class="date">September 12, 2022</span>
                </div>
              </div>
            </div>
            {/*-- Instagram Feeds Widget --*/}
            <div class="widget instagram-feed-widget mb-40">
              <h5 class="widget-title">Instagram Feeds</h5>
              <ul>
                <li>
                  <img src={insta1} alt="Image"></img>
                </li>
                <li>
                  <img src={insta2} alt="Image"></img>
                </li>
                <li>
                  <img src={insta3} alt="Image"></img>
                </li>
                <li>
                  <img src={insta4} alt="Image"></img>
                </li>
                <li>
                  <img src={insta5} alt="Image"></img>
                </li>
                <li>
                  <img src={insta6} alt="Image"></img>
                </li>
                <li>
                  <img src={insta7} alt="Image"></img>
                </li>
                <li>
                  <img src={insta8} alt="Image"></img>
                </li>
                <li>
                  <img src={insta9} alt="Image"></img>
                </li>
              </ul>
            </div>
            {/*-- Popular Tags Widget --*/}
            <div class="widget popular-tag-widget mb-40">
              <h5 class="widget-title">Popular Tags</h5>
              <ul>
                <li><a href="influencer-profile.html#">Rings</a></li>
                <li><a href="influencer-profile.html#">Medical</a></li>
                <li><a href="influencer-profile.html#">necklace</a></li>
                <li><a href="influencer-profile.html#">Realestate</a></li>
                <li><a href="influencer-profile.html#">Erotic Dance</a></li>
                <li><a href="influencer-profile.html#">bangles</a></li>
                <li><a href="influencer-profile.html#">hard ring</a></li>
                <li><a href="influencer-profile.html#">Find Influencer</a></li>
                <li><a href="influencer-profile.html#">silver braclet</a></li>
                <li><a href="influencer-profile.html#">earring</a></li>
                <li><a href="influencer-profile.html#">copper bracelet</a></li>
                <li><a href="influencer-profile.html#">tech</a></li>
              </ul>
            </div>
            {/*-- Banner Ad Widget --*/}
            <div class="widget banner-ad-widget">
              <img src={banner1} alt="Image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}
