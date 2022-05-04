import React from 'react'
import img3 from '../../assets/img/shop/80x80-3.jpg';
import img4 from '../../assets/img/shop/80x80-4.jpg';
import img5 from '../../assets/img/shop/80x80-5.jpg';

export const CartWidget = () => {
  return (
    <>
    <div class="widget popular-feeds mb-40">
              <h5 class="widget-title">Cart</h5>
              <div class="popular-feed-loop">
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={img3} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <div class="cart-flex">
                      <h6><a href="shop-left-style-2.html#">Golden Pendant.</a></h6>
                      <a href="shop-left-style-2.html#" class="remove"><i class="fal fa-times"></i></a>
                    </div>
                    <span class="price">$500 <span>$580</span></span>
                  </div>
                </div>
                <div class="single-popular-feed">
                  <div class="feed-img">
                    <img src={img4} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <div class="cart-flex">
                      <h6><a href="shop-left-style-2.html#">Silver Pendant.</a></h6>
                      <a href="shop-left-style-2.html#" class="remove"><i class="fal fa-times"></i></a>
                    </div>
                    <span class="price">$400 <span>$520</span></span>
                  </div>
                </div>
                <div class="single-popular-feed border-0 mb-0">
                  <div class="feed-img">
                    <img src={img5} alt="Image"/>
                  </div>
                  <div class="feed-desc desc">
                    <div class="cart-flex">
                      <h6><a href="shop-left-style-2.html#">Diamond Ring.</a></h6>
                      <a href="shop-left-style-2.html#" class="remove"><i class="fal fa-times"></i></a>
                    </div>
                    <span class="price">$390 <span>$450</span></span>
                  </div>
                </div>
                <div class="widget-cart-info">
                  <div class="cart-details">
                    <span>Subtotal:</span>
                    <span>$51.00</span>
                  </div>
                  <div class="cart-buttons">
                    <a href="cart.html" class="main-btn btn-filled">View Cart</a>
                    <a href="checkout.html" class="main-btn btn-filled">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
