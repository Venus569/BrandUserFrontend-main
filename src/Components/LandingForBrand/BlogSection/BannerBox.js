import React, { useState } from 'react'
import { EachProd } from './EachProd';
import { useEffect } from 'react';

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/creator',
  
});
export const BannerBox = () => {

  const[Array,setArray]=useState([]);
  const[num,setNum]=useState(0);
  const[name,setName]=useState();


  useEffect(() => {
  
    instance.get('/')
    .then(function (response) {
      // handle success
      //console.log(response);
      console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      console.log("printing array 1",Array);
      console.log("printing number",name);
      // always executed
    });
    
    
    
  },[]);

  return (
    <>
   
      <div class="product-wrapper restaurant-tab-area">
                            <div class="row">
                            {
    Array.length>0 &&


    Array.map((e)=>{
      return (
      <EachProd name={e.name} description={e.description} profImg={e.profileImg} followers={e.follower}/>
    );})



    }
                                
                                
                            </div>
                        </div>
    </>
  )
};
