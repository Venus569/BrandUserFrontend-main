import React from 'react'
//import { PopularPost } from './PopularPost'
import { PopularProducts } from './PopularProducts'
import { Search } from './Search'
import { PriceRange } from './PriceRange'
import { ColorWidget } from './ColorWidget'
//import { InstaFeed } from './InstaFeed'
import { PopularTags } from './PopularTags'
//import { BannerBox } from './BannerBox'
import { Pagination } from './Pagination'
//import { CartWidget } from './CartWidget'
import { ProductTop } from './ProductTop'
import { BannerBox } from './BannerBox'

export const BlogSection = () => {
  return (
    <section class="Shop-section pt-120 pb-120 pl-80 pr-80">
      <div class="container-fluid">
        <div class="row justify-content-center">
         
         <div class="col-lg-3 col-md-10 col-sm-10">
            <div class="sidebar">
              <Search/>
              <PopularProducts/>
             
              <PriceRange/>
              <ColorWidget/>
              <PopularTags/>
            </div>
          </div>
          <div class="col-lg-9 col-md-10">
            <div class="influencerbanner-products-wrapper">
              <ProductTop/>
              <BannerBox/>
            </div>
            <Pagination/>
          </div>
        </div>
       </div>
    </section>
  )
}

