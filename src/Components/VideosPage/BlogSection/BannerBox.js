import React from 'react'

import img1 from '../../assets/img/influencerbanner/01.jpg';
import img2 from '../../assets/img/influencers/5.jpg';

export const BannerBox = () => {
  return (
    <>
    <div class="col-xxl-3 col-md-4 col-sm-6">
    <div class="part-box influencerbanner-box influencerbanner-box-4">
                <div class="thumb">
                  <img src={img1} alt="images"/>
                  <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" class="popup-video absolute-icon"><i class="fas fa-play"></i></a>
                  <div class="button-group">
                    <a href=""><i class="flaticon-heart"></i></a>
                    <a href=""><i class="flaticon-video-camera"></i></a>
                  </div>
                  <div class="influencer-image">
                    <img src={img2} alt="img"/>
                    <div class="badges">
                      <span class="price discounted">
                        <i class="flaticon-tick"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="desc">
                  <h4>
                    <a href="">Adam Smith</a>
                  </h4>
                  <div class="sigma_video-desc">
                    <p>5.5k views</p>
                    <p>Streamed 57 minutes ago</p>
                  </div>
                  <div class="sigma_like-box">
                    <span>
                      <i class="fal fa-thumbs-up"></i>
                      1k
                    </span>
                    <span>
                      <i class="fal fa-thumbs-down"></i>
                      Dislike
                    </span>
                  </div>
                </div>
              </div>
            </div>

    </>
  )
}
