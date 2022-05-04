import React from 'react'
import img1 from '../../assets/img/instagram/01.jpg';
import img2 from '../../assets/img/instagram/02.jpg';
import img3 from '../../assets/img/instagram/03.jpg';
import img4 from '../../assets/img/instagram/04.jpg';
import img5 from '../../assets/img/instagram/05.jpg';
import img6 from '../../assets/img/instagram/06.jpg';

import Slider from "react-slick";


export const InstagramFeedSection = () => {
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
      <>
        <div class="instagram-feed-section">
        <div class="container-fluid p-0">
            <div class="instagram-slider">
            <Slider {...settings}>
                <div class="image">
                    <a href={img1} class="insta-popup">
                        <img src={img1} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img2} class="insta-popup">
                        <img src={img2} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img3} class="insta-popup">
                        <img src={img3} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img4} class="insta-popup">
                        <img src={img4} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img5} class="insta-popup">
                        <img src={img5} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img6} class="insta-popup">
                        <img src={img6} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img1} class="insta-popup">
                        <img src={img1} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img2} class="insta-popup">
                        <img src={img2} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img3} class="insta-popup">
                        <img src={img3} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img4} class="insta-popup">
                        <img src={img4} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img5} class="insta-popup">
                        <img src={img5} alt="instagram-feed"></img>
                    </a>
                </div>
                <div class="image">
                    <a href={img6} class="insta-popup">
                        <img src={img6} alt="instagram-feed"></img>
                    </a>
                    </div>
                </Slider>
                
            </div>
        </div>
    </div>
    </>
  )
}
