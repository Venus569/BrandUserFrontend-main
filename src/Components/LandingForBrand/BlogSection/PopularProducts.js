import React from 'react'
import  img0  from '../../assets/img/shop/80x80-0.jpg';


export const PopularProducts = () => {
  return (
    <>
    <div class="widget popular-feeds mb-40">
              <h5 class="widget-title">Popular influencers</h5>
              <div class="popular-feed-loop">
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={img0} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <h6><a href="shop-detail.html">Golden Pendant.</a></h6>
                    <span class="price">$500 <span>$580</span></span>
                  </div>
                </div>
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={img0} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <h6><a href="shop-detail.html">Silver Pendant.</a></h6>
                    <span class="price">$400 <span>$520</span></span>
                  </div>
                </div>
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={img0} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <h6><a href="shop-detail.html">Diamond Ring.</a></h6>
                    <span class="price">$390 <span>$450</span></span>
                  </div>
                </div>
              </div>
            </div>    
    </>
  )
}
