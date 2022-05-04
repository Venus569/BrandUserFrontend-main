import React from 'react'
import img4 from "../../assets/img/instagram-wid/04.jpg"
import img5 from "../../assets/img/instagram-wid/05.jpg"
import img6 from "../../assets/img/instagram-wid/06.jpg"

export const PopularPost = () => {
  return (
    <div><div class="widget popular-feeds mb-40">
    <h5 class="widget-title">Popular Influencers</h5>
    <div class="popular-feed-loop">
      <div class="single-popular-feed">
        <div class="feed-img">
          <img src={img4} alt="Image"></img>
        </div>
        <div class="feed-desc desc">
          <h6><a href="influencer-profile.html">Andrew Stelan</a></h6>
          <span class="price">$120<span>/hr</span></span>
        </div>
      </div>
      <div class="single-popular-feed">
        <div class="feed-img">
          <img src={img5} alt="Image"></img>
        </div>
        <div class="feed-desc desc">
          <h6><a href="influencer-profile.html">Jacob Stewart</a></h6>
          <span class="price">$100<span>/hr</span></span>
        </div>
      </div>
      <div class="single-popular-feed">
        <div class="feed-img">
          <img src={img6} alt="Image"></img>
        </div>
        <div class="feed-desc desc">
          <h6><a href="influencer-profile.html">Sophia Henry</a></h6>
          <span class="price">$90<span>/hr</span></span>
        </div>
      </div>
    </div>
  </div></div>
  )
}
