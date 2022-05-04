import React from 'react'
import img1 from '../../assets/img/images/270x354-7.jpg'

export const BannerBox = () => {
  return (
    <>
    <div class="col-xxl-3 col-md-4 col-sm-6">
              <div class="part-box influencerbanner-box influencerbanner-box-4">
                <div class="thumb">
                  <img src={img1} alt="images"/>
                  <div class="badges">
                      <span class="price discounted">
                        <i class="flaticon-tick"></i>
                      </span>
                    </div>
                  
                  <div class="button-group">
                    <a href=""><i class="flaticon-heart"></i></a>
                    <a href=""><i class="flaticon-video-camera"></i></a>
                  </div>
                </div>
                <div class="desc">
                  <h4>
                    <a href="video-details.html">Duke Lesnar</a>
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
