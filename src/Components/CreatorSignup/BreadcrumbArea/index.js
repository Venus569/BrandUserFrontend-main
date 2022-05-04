import React from 'react'
import backimage from '../../assets/img/bg/04.jpg'

const BreadcrumbArea = () => {
  return (
    <>
     <section class="breadcrumb-area" style={{backgroundImage:`url(${backimage})`}}>
        <div class="container">
            <div class="breadcrumb-text">
                <span>Image Archive</span>
                <h2 class="page-title">Image Style 2</h2>
                <ul class="breadcrumb-nav">
                    <li><a href="image-style-2.html#">Home</a></li>
                    <li class="active">Image Style 2</li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default BreadcrumbArea;