import React from 'react'
import { EachProd } from './EachProd';
import { useState,useEffect } from 'react';

const axios = require('axios');

const instance2 = axios.create({
  baseURL: 'http://localhost:3000/api/collab',
  
});



export const BannerBox = () => {

  const[Array,setArray]=useState([]);
 


  useEffect(() => {
  
    instance2.get('/')
    .then(function (response) {
      // handle success
      //console.log(response);
      console.log(response.data);
      //setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          //setNum(num+1);
        }
      )
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      console.log("printing array 1",Array);
      //console.log("printing number",name);
      // always executed
    });
    
    
    
  },[]);

  /*brand type description date fees platforms skills*/

  return (
    <>
      <div class=" restaurant-tab-area">
                            
      {
    Array.length>0 &&


    Array.map((e)=>{
      return (
      <EachProd brand={e.brand} description={e.description} type={e.type} date={e.date} fees={e.fees} platforms={e.platforms} skills={e.skills}/>
    );})



    }
                                
                                
                            
                        </div>
    </>
  )
};
