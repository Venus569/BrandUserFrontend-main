import React from 'react'
import { Component, ReactNode, useEffect } from 'react';
//import IonRangeSlider from 'react-ion-slider'
import Slider from '@mui/material/Slider';



export const PriceRange = () => {

  /*  useEffect(()=>{
        const script = document.createElement('script');
        script.innerHTML="$('js-range-slider').ionRangeSlider({type: 'double',grid: true,min: 0,max: 1000,from: 200,to: 800,prefix: '$'})"
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }

},[]);*/
    


  return (
    <>
    <div class="widget socail-widget mb-40">
    <h5 class="widget-title">Price</h5>
    
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />


  </div>
  </>
  )
}
/*
grid: true,
                min: 20,
                max: 1000,
                from: 200,
                to: 800,*/