import React from 'react'
import img1 from "../../assets/img/instagram-wid/01.jpg"
import img2 from "../../assets/img/instagram-wid/02.jpg"
import img3 from "../../assets/img/instagram-wid/03.jpg"
import img4 from "../../assets/img/instagram-wid/04.jpg"
import img5 from "../../assets/img/instagram-wid/05.jpg"
import img6 from "../../assets/img/instagram-wid/06.jpg"
import img7 from "../../assets/img/instagram-wid/07.jpg"
import img8 from "../../assets/img/instagram-wid/08.jpg"
import img9 from "../../assets/img/instagram-wid/09.jpg"
export const InstaFeed = () => {
  return (
    <>
    <div class="widget instagram-feed-widget mb-40">
                <h5 class="widget-title">Instagram Feeds</h5>
                <ul>
                  <li><img src={img1} alt="Image"/></li>
                  <li><img src={img2} alt="Image"/></li>
                  <li><img src={img3} alt="Image"/></li>
                  <li><img src={img4} alt="Image"/></li>
                  <li><img src={img5} alt="Image"/></li>
                  <li><img src={img6} alt="Image"/></li>
                  <li><img src={img7} alt="Image"/></li>
                  <li><img src={img8} alt="Image"/></li>
                  <li><img src={img9} alt="Image"/></li>
                </ul>
              </div>
    </>
  )
}
