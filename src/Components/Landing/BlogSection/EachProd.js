import React from 'react'
import prodimg from '../../assets/img/shop/01.jpg';


export const EachProd = () => {
  return (
    <>
    <div class="row" style={{   boxShadow:
  " 6px 9px 29px rgba(0, 0, 0, 1)",marginBottom:"40px"
}}>
    <div class="col-lg-2 col-md-4">
    <div class="part-box influencerbanner-box style-2">
        <div class="thumb center-block mt-20">
            <img src={prodimg} alt="images"/>
            
            
            <span class="rating">
                <span class="text-yellow"><i class="far fa-star"></i></span>
                <span class="text-yellow"><i class="far fa-star"></i></span>
                <span class="text-yellow"><i class="far fa-star"></i></span>
                <span class="text-yellow"><i class="far fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
            </span>
        </div>
        </div>
        </div>
        <div class="col-lg-10 col-md-8 prod-desc">
        <div class="desc text-left  ">
            <h4 class="mt-40 mb-20">
                <a href="shop-detail.html">Ankle Bracelet Bracelet Bracelet Bracelet</a>
            </h4>
            <h6 class="mt-40 mb-20">
                posted by <span><a href='adadad.html' style={{fontWeight:"bolder"}}>BRAND COMPANY</a></span>
            </h6>
            <p class="mt-20 mb-20">
                Ankle Bracelet Bracelet Bracelet BraceletAnkle Bracelet Bracelet Bracelet BraceletAnkle Bracelet Bracelet Bracelet BraceletAnkle Bracelet Bracelet Bracelet BraceletAnkle Bracelet Bracelet Bracelet Bracelet
            </p>
            <span class="price">$390 </span>
            <a href="shop-left-style-2.html#" class="main-btn btn-unfilled mt-10">Apply</a>
            
            <span class="button-group">
                <span><i class="far fa-heart"></i></span>
                <span><i class="far fa-sync-alt"></i></span>
                <span><i class="far fa-eye"></i></span>
            </span>

        </div>
        </div>
    </div>
</>
  )
}
