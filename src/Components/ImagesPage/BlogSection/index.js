import React from 'react'
import { PopularPost } from './PopularPost'
import { Search } from './Search'
import { PriceRange } from './PriceRange'
import { ColorWidget } from './ColorWidget'
import { InstaFeed } from './InstaFeed'
import { PopularTags } from './PopularTags'
import { BannerBox } from './BannerBox'
import { Pagination } from './Pagination'


export const BlogSection = () => {
  return (
    <section class="blog-section image-sec restaurant-tab-area pt-120 pb-120">
      <div class="container-fluid container-custom-three">
        <div class="row">
         
          <div class="col-xxl-3 col-lg-4 col-md-10 col-sm-10">
            <div class="sidebar">
              <Search/>
              <PopularPost/>
              <PriceRange/>
              <ColorWidget/>
              <InstaFeed/>
              <PopularTags/>
            </div>
          </div>
          <div class="col-xxl-9 col-lg-8">
            <div class="row">
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
              <BannerBox/>
            </div>
            <Pagination/>
          </div>
        </div>
       </div>
    </section>
  )
}
