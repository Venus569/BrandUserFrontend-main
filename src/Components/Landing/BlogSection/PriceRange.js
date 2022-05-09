import React from 'react'
import { Component, ReactNode, useEffect } from 'react';
//import IonRangeSlider from 'react-ion-slider'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';



export const PriceRange = () => {
  
  const [value, setValue] = React.useState([20, 37]);
  
  function valuetext(value) {
    return `${(value*10)}°C`;
  }



  const marks = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 100,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    <p>0$</p>
    <Slider
        aria-label="Always visible"
        value={value}
        //valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
      />
     <p>1000$</p>
    </Stack>

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