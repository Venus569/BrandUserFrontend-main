import React from 'react'


import { Link } from 'react-router-dom'


export const EachProd = ({followers,description,profImg,name}) => {
  return (
    <><div class="col-lg-4 col-md-6 mb-30" style={{height:"66vh"}}  >
    <div class="part-box influencerbanner-box ">
        <div class="thumb" style={{height:"35vh"}}>
        <img src={profImg}  alt="images"/>
                  {/*<a href="https://www.youtube.com/watch?v=KH1pcNUTa6U" class="popup-video absolute-icon"><i class="fas fa-play"></i></a>*/}
                  <div class="button-group">
                    <a href=""><i class="far fa-heart"></i></a>
                    <a href=""><i class="far fa-heart"></i></a>
                  </div>
                  
        </div>
        <div class="desc text-center">
            <h3 style={{fontSize:"20px"}}>
                <Link to="/creatorprofile">{name} </Link>
            </h3>
            <div style={{overflow:"auto",color:"gray",marginTop:"30px",width:"100%",height:"60px"}} >{description}</div>
            <h6 class="mt-10">
              Followers:<span style={{color:"#85AEE1"}}>{followers}</span> 
            </h6>
            
            
            

            <span class="price mt-10">$390 <span>$480</span></span>
            <a href="shop-left-style-2.html#" class="brand-main-btn btn-filled mt-10">Message</a>
        </div>
    </div>
</div></>
  )
}
