import React from 'react'
import { EachProd } from './EachProd';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {changeLoginStatus} from '../../../actions/changeLoginStatus'
import { changeUsersAge } from "../../../actions/changeUsersAge";
import {Link} from 'react-router-dom'


const axios = require('axios');

const instance2 = axios.create({
  baseURL: 'http://localhost:3000/api/collab',
  
});

const handleparser=()=>{/*
  axios.get('https://mojapp.in/@piyanka_mongia', {
    params: {

    }
  })
  .then(function (response) {
   
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  */

 /* fetch("https://mojapp.in/@piyanka_mongia", {
        method: "GET",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
         console.log(response);
        })

        .catch((err) => {
          console.log(err);
        });*/
        function makeHttpObject() {
          if("XMLHttpRequest" in window)return new XMLHttpRequest();
          else if("ActiveXObject" in window)return new ActiveXObject("Msxml2.XMLHTTP");
        }
        
        var request = makeHttpObject();
        request.open("GET", "https://mojapp.in/@piyanka_mongia", true);
        request.send(null);
        request.onreadystatechange = function() {
          if (request.readyState == 4)
            console.log(request.responseText);
        };



}


export const BannerBox = () => {
  const user = useSelector((state) => state.userReducer);
const dispatch = useDispatch();
  const[Array,setArray]=useState([]);
  const [loginStatus, setLogin] = useState(user.loginStatus);
  const [age, setAge] = useState(user.age);
  //const [loginStatus,setloginStatus]=React.useState(true);


console.log(loginStatus);

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

      <button onClick={handleparser}>clicsk here</button>


      {/*{user.loginStatus?<p>LoggedIn</p>:<p>Not LoggedIn</p>}
           <Link to='/brandlanding'>Go to homepage</Link>                 
                          
      <button onClick={ ()=>{dispatch(changeLoginStatus(user.loginStatus))}}>click here</button>
      */}
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
