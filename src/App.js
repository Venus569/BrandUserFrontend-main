
import Landing from "./Components/Landing/Landing"
import './App.css'


//import './Components/assets/css/animate.min.css';

import './Components/assets/css/bootstrap.min.css';
import './Components/assets/css/font-awesome.min.css';
//import './Components/assets/css/flaticon.css';
//import './Components/assets/css/magnific-popup.css';
//import './Components/assets/css/slick.css';
//import './Components/assets/css/nice-select.css';
//import './Components/assets/css/leaflet.css';
//import './Components/assets/css/mapbox-gl.min.css';
//import './Components/assets/css/bootstrap-datepicker.css';
//import './Components/assets/css/ion.rangeSlider.min.css';
import './Components/assets/css/default.css';
import './Components/assets/css/style.css';


import CreatorProfile from "./Components/CreatorProfile/Profile";
//import Videos from "./Components/VideosPage/Videos";
//import Images from "./Components/ImagesPage/Images"
import BrandLanding from "./Components/LandingForBrand/Landing";
import { Route, Routes } from 'react-router-dom'
import { useEffect,useState } from "react";


import { ProfileBuilder } from "./Components/ProfileBuilder/ProfileBuilder";
import CreatorPersonalProfile from "./Components/CreatorPersonalProfile/Profile";
import BrandLogin from "./Components/BrandLogin/Login";
import BrandSignUp from "./Components/BrandSignup/SignUp";

import CreatorLogin from './Components/CreatorLogin/Login'
import CreatorSignup from "./Components/CreatorSignup/Signup";

import Protected from './Components/Protected'


const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/creator',
  
});







function App() {
  
  const [isLoggedIn,setLoogy]=useState(true);


  return (
    <Routes>
      <Route path='brandlanding'
 element={
 <BrandLanding />
 }
    />
<Route path='creatorlanding'
 element={
 
 <Landing />
 
 }

 
    />

<Route path='creatorpersonalprofile'
 element={
 <Protected>
 <CreatorPersonalProfile/>
 </Protected>
 }

 
    />


      <Route exact path="/" element={<h1>Hello World!!!</h1>}/>
      
      <Route path='creatorlogin' element={<CreatorLogin/>}/>
      <Route path='brandlogin' element={<BrandLogin/>}/>
      <Route path='creatorsignup' element={<CreatorSignup/>}/>
      <Route path='brandsignup' element={<BrandSignUp/>}/>
      {/*<PrivateRoute component={B} path="/dashboard" exact />
     {/* <Route path='brandlanding' element={<BrandLanding/>}/>*/}
     
      <Route path='creatorprofile' element={<CreatorProfile/>}/>
      {/*<Route path='videos' element={<Videos/>}/>*/}
      {/*<Route path='images' element={<Images/>}/>*/}
      <Route path='profilebuilder' element={<ProfileBuilder/>}/>
      
    </Routes>
  );
}

export default App;
